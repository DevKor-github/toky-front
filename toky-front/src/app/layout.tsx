import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
	title: '신나는 고연전 승부예측, TOKY',
	description: '고연전 승부예측하고 경품 받자!',
	icons: {
		icon: '../../public/image/favicon.svg',
	},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body>
        <div
          style={{
            background: "#121212",
            height: "100vh",
          }}
        >
          <StyledComponentsRegistry>
            {children}
            <div id="portal"></div>
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
