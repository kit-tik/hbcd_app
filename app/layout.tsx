import { Footer, MyThemeProvider, NavBar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Kanit, Sarabun } from "next/font/google";
import Breadcrumb from "@/components/Breadcrumb";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
export const sarabun = Sarabun({
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-sarabun",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "HBCD Recording System",
//   description: "Created by Next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/apple-icon.png"
        />
      </head>
      <body className={`${kanit.className}`}>
        <MyThemeProvider>
          <NavBar />
          <Breadcrumb />
          <div className="max-w-7xl">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
          <Footer />
        </MyThemeProvider>
      </body>
    </html>
  );
}
