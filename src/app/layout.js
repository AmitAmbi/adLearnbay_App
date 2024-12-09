// src/app/layout.js
import "./globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Add any additional head elements here */}</head>
      <body className={nunito.className}>
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
