import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = process.env.APP_NAME ?? `AnimeFlix`;

export const metadata: Metadata = {
  title: { template: `%s | ${APP_NAME}`, default: APP_NAME },
  description: `Watch anime online with ${APP_NAME}. Enjoy subtitled and dubbed episodes, latest releases, and classic titles.`,

  creator: `Chetan Seervi`,

  applicationName: APP_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={`en`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
