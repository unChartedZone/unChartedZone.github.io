import type { Metadata } from "next";
import Script from "next/script";
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
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FNKY85FE8C"
      ></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FNKY85FE8C');
        `}
      </Script>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
