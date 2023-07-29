import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { refresh, setTokenFromCookie } from "./httpClient";

type status = "checking" | "refreshing" | "done";

export default function withAuth<P extends object>(
	WrappedComponent: React.ComponentType<P>
): React.FC<P> {
	return function ReactComponent(props: P) {
		const [isAuthed, setIsAuthed] = useState<boolean>(false);
		const [authStatus, setAuthStatus] = useState<status>("checking");

		const checkAuth = async () => {
			const refreshToken = localStorage.getItem("refreshToken");
			if (refreshToken) {
				setAuthStatus("refreshing");

				const refreshResult = await refresh();
				setIsAuthed(refreshResult);
				setAuthStatus("done");
			} else {
				const hasCookie = setTokenFromCookie();
				setIsAuthed(hasCookie);
				setAuthStatus("done");
			}
		};
		useEffect(() => {
			const accessToken = localStorage.getItem("accessToken");
			if (accessToken) {
				setIsAuthed(true);
				setAuthStatus("done");
			} else checkAuth();
		}, []);

		// TODO: add loading spinner
		switch (authStatus) {
			case "checking":
			case "refreshing":
				return <div>refreshing..</div>;
			case "done":
				return isAuthed ? <WrappedComponent {...props} /> : <RedirectionComponent />;
		}
	};
}

const RedirectionComponent = () => {
	const router = useRouter();
	useEffect(() => {
		router.replace("/login");
	}, []);
	return null;
};
