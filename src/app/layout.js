// src/app/layout.js
"use client"; // Mark this component as a Client Component

import { useEffect } from 'react';
import "./globals.css";
import { Poppins } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { reportWebVitals } from './../../src/reportWebVitals'; // if it's in the src directory


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Adjust weights as needed
});

export default function RootLayout({ children }) {

  const sendToAnalytics = (metric) => {
    fetch('/api/analytics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(metric),
    });
};

  return (
    <html lang="en">
      <head>
        {/* Add any additional head elements here */}
      </head>
      <body className={poppins.className}>
        <main>
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
