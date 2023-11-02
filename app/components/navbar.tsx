import Link from "next/link";
import styles from "/styles/navbar.module.css";

export const Navbar = () => (
  <>
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <a href='/' className={styles.logo}>
          m<span>ike</span>/d<span>eangelis</span>
        </a>
      </div>
      <div className={styles.navRight}>
        <Link href='/about'>about</Link>
        <Link href='/blog'>blog</Link>
        <Link href='/projects'>projects</Link>
        <Link href='/uses'>uses</Link>
        <Link href='/contact'>contact</Link>
      </div>
    </nav>
  </>
);
