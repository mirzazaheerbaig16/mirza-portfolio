import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirza Zaheer Baig | Developer Portfolio",
  description:
    "Portfolio of Mirza Zaheer Baig, a Computer Science student building AI-powered applications and exploring web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
