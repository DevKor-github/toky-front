import AuthContext from "@/components/common/AuthContext";
import axios, { InternalAxiosRequestConfig } from "axios";

export const refresh = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
      {},
      { headers: { Authorization: `Bearer ${refreshToken}` } }
    );
    if (res.data.accessToken && res.data.refreshToken) {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      return true;
    }
  } catch (err) {
    console.log(err);
  }
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");

  return false;
};

export const setTokenFromCookie = () => {
  let accessToken = null,
    refreshToken = null;

  document.cookie.split(";").forEach((c) => {
    if (c.trim().startsWith("access-token=")) accessToken = c.split("=")[1];
    if (c.trim().startsWith("refresh-token=")) refreshToken = c.split("=")[1];
  });
  if (!accessToken || !refreshToken) {
    localStorage.removeItem("refreshToken");
    return false;
  }

  document.cookie =
    "access-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "refresh-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("error", error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      const refreshSuccess = await refresh();
      if (refreshSuccess) {
        const originalRequest = error.config;
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
          "accessToken"
        )}`;
        return client.request(originalRequest);
      }
      window.location.href = "/login";
    } else return error.response;
  }
);

export default client;
