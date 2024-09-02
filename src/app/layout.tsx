import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./_components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Valdez - Full Stack Developer",
  description:
    "Christian Valdez - A full stack developer from sunny California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
