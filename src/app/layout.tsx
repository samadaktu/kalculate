import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalculate.me",
  description: "SEO-first calculator platform scaffold"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
