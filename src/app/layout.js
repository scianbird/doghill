import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";

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
}); //cabin sketch used to be for the hero test (for the creepy feeling) but I couldn't get past the feeling that it may not be readable

import { Caprasimo } from "next/font/google";

const caprasimo = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caps",
});

//add metadata for my app here - description should be a summary of the content
export const metadata = {
  title: "DOGHILL",
  description: "A small-town gothic RP app",
};
//originally I had the sidebar component here rather than having user-helpful links in the header, but eventually I took it out .. left the component though as I may go back
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${roboto.variable} ${caprasimo.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
