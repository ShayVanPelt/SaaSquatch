import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shay - SaaSquatch",
  description: "Personal website for SaaSquatch made with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-black text-white antialiased font-sans "
        )}
      >
        {/* Background container */}
        <div className="relative min-h-screen w-full">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          {/* Radial gradient */}
          <div className="absolute left-1/2 top-[-15%] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_500px_at_50%_300px,#ffffff1a,#00000000)]"></div>
          {/* Content */}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
