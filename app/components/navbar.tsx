import * as React from "react";
import Link from "next/link";
import styles from "/styles/navbar.module.css";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  function handleThemeToggle(e: any) {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  return (
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
          <div className='themeToggle' onClick={handleThemeToggle}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#fff'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#fff'
              className='w-6 h-6'
              id='sun'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='#020c1b'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#020c1b'
              className='w-6 h-6'
              id='moon'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};
