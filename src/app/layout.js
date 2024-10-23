import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // You can adjust the weights as per your needs
});

export const metadata = {
  title: "AD Learnbay V4",
  description: "New Version Website", // Fixed the typo here
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
