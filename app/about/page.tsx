import Image from "next/image";
import styles from "/styles/about.module.css";
import mePic from "/public/images/hawaii.jpeg";
import familyPic from "/public/images/georgia-hike-3.jpeg";

export default function AboutPage() {
  return (
    <div className='pageContainer'>
      <div className={styles.aboutSection}>
        <h1>about me</h1>
        <p>Hey, I&apos;m Mike DeAngelis.</p>
        <div className={styles.aboutImageContainer}>
          <Image
            src={mePic}
            alt='Mike DeAngelis'
            placeholder='blur' // Optional blur-up while loading
          />
        </div>
        <p>
          I&apos;m a front-end engineer from Philadelphia who specializes in
          writing Javascript and Typescript web applications. Currently I&apos;m
          focusing on React, but have also spent a few years with Angular.
        </p>
      </div>

      <div className={styles.aboutSection}>
        <h2>professional background</h2>
        <p>
          I currently work for{" "}
          <a href='https://aws.amazon.com/' target='_blank'>
            Amazon (AWS)
          </a>{" "}
          working primarily with React and Node. I&apos;m loving the culture and
          really enjoy working with AWS cloud architecture. Previously, I was a
          front-end lead at{" "}
          <a href='https://upmchealthplan.com/' target='_blank'>
            UPMC Health Plan
          </a>{" "}
          and was a front-end dev at{" "}
          <a href='https://www.transunion.com/' target='_blank'>
            TransUnion
          </a>
          .
        </p>
      </div>

      <div className={styles.aboutSection}>
        <h2>personal</h2>
        <p>
          I live in the{" "}
          <a
            target='_blank'
            href='https://en.wikipedia.org/wiki/Fishtown,_Philadelphia'
          >
            Fishtown
          </a>{" "}
          section of Philadelphia with my wife, Caroline, and dog, Alfie.
        </p>
        <div className={styles.aboutImageContainer}>
          <Image
            src={familyPic}
            alt='Caroline, Mike, and Alfie'
            placeholder='blur' // Optional blur-up while loading
          />
        </div>
      </div>

      <div className={styles.aboutSection}>
        <h2>hobbies</h2>
        <p>
          When I&apos;m not coding, I like to get away from the screen. I enjoy
          eating, whether I'm cooking at home or exploring the Philly the
          restaurant scene. I recently joined a{" "}
          <a href='https://novemfit.com/' target='_blank'>
            crossfit gym
          </a>{" "}
          where I&apos;m renewing my obsession with functional fitness. I&apos;m
          also a very average golfer and avid{" "}
          <a href='https://youtu.be/1RyddpWNhKA' target='_blank'>
            Sixers
          </a>{" "}
          fan.
        </p>
      </div>
    </div>
  );
}
