import Image from "next/image";
import Link from "next/link";
import Footerimg from "@/../public/Footer.png";
import "./components.css";
export default function Footer() {
  return (
    <div className="footerDiv">
      <Link href={`/`}>
        <h1 className="homeLink">Home</h1>
      </Link>
      <Link href={`/posts`}>
        <h1 className="townMapLink">Town Map</h1>
      </Link>
    </div>
  );
}
//i know the image is not the most ... optimised .. shall we say, but if I have time I am going to come back and update it to 1) one that isn't pixelated and 2) something that can be changed based on "time of day" setting (dark or light mode)
