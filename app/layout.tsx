"use client"
import "./styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Banner from "./components/nav/Banner";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/footer";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import {Open_Sans as FontSans} from "next/font/google";

export const opensans = Open_Sans({ subsets: ["latin"] });

// export const fontsans = Open_Sans({ subsets: ["latin"],
// variable: "--font-sans",})

// export const metadata: Metadata = {
//   title: "Tina Senanayake Jewels",
//   description:
//     "Discover beautiful, hand-made sterling silver jewellery at Tina Senanayake Jewels. The collection features rings, bracelets, earrings and necklaces, with precious and semi-precious gemstones, handmade in Sri Lanka and Denmark",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={`${opensans.className} bg-[var(--cream)]`}>
          <div className="flex flex-col min-h-screen items-center overflow-x-hidden">
            <Banner />
            <NavBar />
            <main className="">{children}</main>
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
