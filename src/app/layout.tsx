import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leo",
  description: "My Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={jetbrains.className}>{children}</body>
    </html>
  );
}
