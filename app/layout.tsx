import { Navbar } from "./components/navbar";
import { inconsolata, montserrat } from "./fonts";
import "/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inconsolata.variable} ${montserrat.variable}`}
    >
      <head />
      <body>
        <div className='appContainer'>
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
