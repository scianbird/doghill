//this is the HOMEPAGE // it should have a div that takes up the screen that you can scroll and then load in the other information (conditionally render?)
//After speaking with Manny, I will forego the conditional rendering and wait until next week when we have user authentication - I watched https://www.youtube.com/watch?v=hcw38fUPNbw < this but didn't have time to work in authetication

//I will try to make this page include an "under the rug" footer - in order to make the scrolling work I will make each div be at least 100vph
//https://www.youtube.com/watch?v=2IbRtjez6ag intersection observer
import Image from "next/image";
import "./homepage.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div className="titleDiv">
        <h1>DOGHILL</h1>
      </div>
      <div className="loreDiv">
        <p>
          {" "}
          Welcome to Dog Hill, a small town nestled beside a healthy perch-river
          and hidden in the shadows of a dark and unforgiving forest.
        </p>

        <p>
          There&aposs not much to do here: you could spend your time hunting for
          bones to carve, shopping for local fruit preseves or bakes, or swing
          by and listen to the band as they play in the town hall!
        </p>

        <p>
          Just make sure you are inside before the sun sets, because that&aposs
          when the wolves come out. Every night they circle the town: wade
          through the river, slink out from the shadows and methodically hunt
          anyone foolish enough to be caught outside.{" "}
        </p>

        <p>
          Their legs are long, their teeth are sharp, and it is said that once
          you have looked in their eyes you will slowly go mad.
        </p>

        <p>
          It&aposs also said that the wolves were once people who lived and
          worked in Dog Hill, just like you.
        </p>

        <p className="lastLine">But that can&apost be true... right?</p>
      </div>
      <div className="linkDiv">
        <p>
          links to: town hall, button that wont work yet for group message
          board, FAQ
        </p>
        <Link href={`/posts`}>
          <h1>Town Map</h1>
        </Link>
      </div>
    </div>
  );
}
