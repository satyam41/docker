import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Docker - Secure Document Management",
  description:
    "A secure web-based platform to store, manage, and access government-related documents safely and efficiently.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="layout-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}