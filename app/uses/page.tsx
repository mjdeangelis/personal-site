import styles from "/styles/uses.module.css";

export default function UsesPage() {
  return (
    <div className='pageContainer'>
      <h1>uses</h1>
      <div className={styles.usesSection}>
        <h2>desk setup</h2>
        <ul>
          <li>
            My desk is a{" "}
            <a
              href='https://ukstore.hermanmiller.com/products/jarvis-contour-bamboo-desk-1200?variant=42330380370073'
              target='_blank'
            >
              Fully Jarvis Standing Desk
            </a>
            . I use an{" "}
            <a
              href='https://www.amazon.com/VIVO-Anti-Fatigue-Standing-Ergonomic-MAT-F-V28D/dp/B08DFJHMKF/ref=sr_1_18?crid=LSBG5RUWAT6P&keywords=standing%2Bdesk%2Bmat&qid=1682683700&sprefix=standing%2Bdesk%2Bmat%2Caps%2C87&sr=8-18&th=1'
              target='_blank'
            >
              anti-fatigue mat
            </a>{" "}
            when standing although I admittedly typically sit.
          </li>
          <li>
            I sit on a{" "}
            <a
              href='https://www.upliftdesk.com/j3-ergonomic-chair/'
              target='_blank'
            >
              J3 Ergonomic Chair
            </a>
            .
          </li>
          <li>
            <a
              href='https://www.logitech.com/en-us/products/keyboards/mx-keys-wireless-keyboard.920-009294.html'
              target='_blank'
            >
              Logitech MX Keys
            </a>{" "}
            is what I use to type and code.
          </li>
          <li>
            My mouse is a{" "}
            <a
              href='https://www.logitech.com/en-us/products/mice/mx-master-3s.910-006556.html'
              target='_blank'
            >
              Logitech MX Master 3S
            </a>
            . For years I used the typical Apple magic mouse but I haven't
            looked back after switching.
          </li>
          <li>
            I followed this{" "}
            <a
              href='https://www.youtube.com/watch?v=Tpk0GIpq5JM'
              target='_blank'
            >
              YouTube video
            </a>{" "}
            for my cable management setup.
          </li>
          <li>
            My father in-law gave me these awesome{" "}
            <a
              href='https://www.ebay.com/itm/385572305560?hash=item59c5e67a98:g:vvIAAOSwNU5kSI0I'
              target='_blank'
            >
              Roland MA-12 Speakers
            </a>
            . But before I add them to my desk setup, I want to spruce them up a
            bit so they look as good as they sound.
          </li>
        </ul>
      </div>
      <div className={styles.usesSection}>
        <h2>software</h2>
        <ul>
          <li>
            <a href='https://code.visualstudio.com/' target='_blank'>
              VS Code
            </a>
          </li>
          <li>
            <a href='https://hyper.is/' target='_blank'>
              Hyper
            </a>
          </li>
          <li>
            <a href='https://github.com/mjdeangelis' target='_blank'>
              GitHub
            </a>
          </li>
          <li>
            <a href='https://www.google.com/chrome/' target='_blank'>
              Google Chrome
            </a>
          </li>
          <li>
            <a href='https://culturedcode.com/things/' target='_blank'>
              Things
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
