import './global.css';
import Navbar from  '../components/Navbar';
import {orbitron} from '@/app/fonts';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen ">
        <header>
       <Navbar />
        </header>
        <main className= "py-3">{children}</main>
        <footer className= " border-t py-3 text-center text-xs">
          Game data and images courtesy of{" "}
          <a href="https://rawg.io/" target="_blank">RAWG</a>.
        </footer>
      </body>
    </html>
  );
}

// Prefix = false , will not prefetch the page , it will load the page only when the user clicks on the link
// Different behaviour in dev server and production server