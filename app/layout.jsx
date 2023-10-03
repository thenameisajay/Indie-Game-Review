export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>{" "}
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/about" prefetch ={false} >About</a> 
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}

// Prefix = false , will not prefetch the page , it will load the page only when the user clicks on the link
// Different behaviour in dev server and production server