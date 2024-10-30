import React from "react";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Mike van Peeren</title>
      </head>
      <body className="bg-black">
        <div className="mx-auto max-w-screen-lg px-6 py-12">
          <div className="col-start-2">
            {/* Here you can place your Navigation */}
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
