import styles from "./page.module.css";
import { Intro } from "./components/intro";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Intro />
      </main>
    </>
  );
}
