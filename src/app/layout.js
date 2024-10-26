// src/app/layout.js
"use client"; // Mark this component as a Client Component

import { Nunito } from "next/font/google"; // Import the Nunito font
import { SpeedInsights } from "@vercel/speed-insights/next"; // Import Vercel Speed Insights
import { PopupProvider } from "./context/PopupContext"; // Import your PopupProvider
import "./globals.css"; // Import global styles

// Configure the Nunito font
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add any additional head elements here */}
        <title>Your Page Title</title> {/* Example title, adjust as needed */}
      </head>
      <body className={nunito.className}>
        <PopupProvider>
          <main>
            {children}
            <SpeedInsights /> {/* This can be placed at the bottom of the main content */}
          </main>
        </PopupProvider>
      </body>
    </html>
  );
}
