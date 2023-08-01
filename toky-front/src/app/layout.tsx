import { AuthContextProvider } from "@/components/common/AuthContext";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Noto_Sans_KR } from "next/font/google";

const NotoSansKR = Noto_Sans_KR({
	weight: ["500"],
	subsets: ["latin"],
});

export const metadata = {
	title: "신나는 고연전 승부예측, TOKY",
	description: "고연전 승부예측하고 경품 받자!",
	icons: {
		icon: "../../public/image/favicon.svg",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="kr">
			<head>
				<meta charSet="utf-8" />
				<link rel="icon" href="../../public/image/favicon.svg" />
				<link rel="preconnect" href="https://cdn.jsdelivr.net" />
			</head>
			<body>
				<div
					style={{
						background: "#121212",
						height: "100vh",
					}}
				>
					<AuthContextProvider>
						<StyledComponentsRegistry>
							{children}
							<div id="portal"></div>
						</StyledComponentsRegistry>
					</AuthContextProvider>
				</div>
			</body>
		</html>
	);
}
