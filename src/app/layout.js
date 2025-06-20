import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

import { Cabin_Sketch } from "next/font/google";
import "./globals.css";

const cabin = Cabin_Sketch({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-cabin",
});

//add metadata for my app here - description should be a summary of the content
export const metadata = {
  title: "DOGHILL",
  description: "A small-town gothic RP app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cabin.variable} ${roboto.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
