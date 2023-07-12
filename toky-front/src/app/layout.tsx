import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { Noto_Sans_KR } from "next/font/google";

const NotoSansKR = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "신나는 고연전 승부예측 - toky",
  description: "고연전 승부예측하고 경품 받자!",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={NotoSansKR.className}>
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
