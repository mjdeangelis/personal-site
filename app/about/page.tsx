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
          working primarily with React and Node. I&apos;m embracing the culture
          and am even honing my skills using the AWS cloud architecture.
          Previously, I did web stuff at{" "}
          <a href='https://www.transunion.com/' target='_blank'>
            TransUnion
          </a>{" "}
          and{" "}
          <a href='https://upmchealthplan.com/' target='_blank'>
            UPMC Health Plan
          </a>
          .
        </p>
      </div>

      <div className={styles.aboutSection}>
        <h2>personal</h2>
        <p>
          I live in the{" "}
          <a href='https://en.wikipedia.org/wiki/Fishtown,_Philadelphia'>
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
          eating, whether cooking meals or trying out the resturatent scene. I
          recently joined a{" "}
          <a href='https://novemfit.com/' target='_blank'>
            crossfit gym
          </a>{" "}
          where I&apos;m renewing my obsession with functional fitness. I&apos;m
          also one of those suckers who spends way too much money on golf and
          still kind of stinks.
        </p>
      </div>
    </div>
  );
}
