import './global.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col px-4 py-2 min-h-screen ">
        <header>
          <nav>
            <ul className= "flex gap-2">
              <li>
                <a href="/">Home</a>{" "}
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/about" prefetch ="false" >About</a> 
              </li>
            </ul>
          </nav>
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