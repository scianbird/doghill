"use client";
//done mostly with referencing the documentation of motion & looking at the notes for next week - i know i haven't done anything groundbreaking with it but well.. it's there!
import "./components.css";
import { motion } from "motion/react";

export default function HeroText() {
  return (
    <div className="welcomepageCSS">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="welcomeDiv"
      >
        <h1 className="welcomeText">WELCOME TO</h1>{" "}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="welcomeDiv"
      >
        <h1 className="welcomeText2">DOGHILL</h1>
      </motion.div>

      <div className="theLORE">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p>
            {" "}
            Welcome to DOGHILL, a small town nestled beside a healthy
            perch-river and hidden in the shadows of a dark and unforgiving
            forest.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p>
            There&apos;s not much to do here: you could spend your time hunting
            for bones to carve, shopping for local fruit preseves or bakes, or
            swing by and listen to the band as they play in the town hall!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p>
            Just make sure you&apos;re inside before the sun sets. Every night
            wolves circle the town: wade through the river, slink out from the
            shadows and hunt.{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p>
            Their legs are long, their teeth are sharp, and it&apos;s said that
            once one looks at you, it will come back night after night until it
            finally catches you.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p>
            It&apos;s also said that the wolves are not always wolves: that they
            can become people, and walk about the town in the day.
          </p>{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }} //I originally had a spring animation in here, but I couldn't get it working exactly right and it was showing up before the rest of the text .. but wow am I excited to work more with motion (and GSAP?) :)
        >
          <p className="lastLine">But that can&apos;t be true... right?</p>
        </motion.div>
      </div>
    </div>
  );
}
