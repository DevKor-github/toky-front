import { AuthContextProvider } from "@/components/common/AuthContext";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Noto_Sans_KR } from "next/font/google";
import { Metadata } from "next";

const NotoSansKR = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "신나는 정기전 승부예측, TOKY",
  description: "정기전 승부예측하고 경품 받자!",
  icons: {
    icon: "/image/favicon.svg",
  },
  openGraph: {
    images: [{ url: "/image/opengraph.jpg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/image/favicon.svg" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body>
        <AuthContextProvider>
          <StyledComponentsRegistry>
            <div id="portal"></div>

            <div
              style={{
                background: "#121212",
                minHeight: "100vh",
              }}
            >
              {children}
            </div>
          </StyledComponentsRegistry>
        </AuthContextProvider>
      </body>
    </html>
  );
}
