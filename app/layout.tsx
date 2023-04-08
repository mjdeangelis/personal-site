import "/styles/globals.css";
import { Intro } from "./components/intro";
import { Navbar } from "./components/navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
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
