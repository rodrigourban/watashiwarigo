import type { Metadata } from "next";
import { Fira_Sans, PT_Sans } from "next/font/google";
import "./globals.css";

const firasans = Fira_Sans({
  variable: "--primary-font",
  subsets: ["latin"],
  weight: ["100", "200", "500", "600", "900"],
});

const ptsans = PT_Sans({
  variable: "--secondary-font",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Hi Im Rigo 👋🏻",
  description: "Portfolio website of Rigo Urban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firasans.variable} ${ptsans.variable} !scroll-smooth`}
    >
      <body>
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: "url(./bg.png)" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
