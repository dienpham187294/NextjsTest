
import '../styles/globals.css'
import Link from 'next/link'
import 'regenerator-runtime/runtime'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>ESL GAME</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Ericpham Product" />
      <link rel="icon" href="#" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        crossOrigin="anonymous"
      />
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        crossOrigin="anonymous"
      />
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        crossOrigin="anonymous"
      />

    </Head>
    <header>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link href="/">
          <a className="navbar-brand" >ESL_Game</a>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
            <li className="nav-item dropdown">
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown03">
                <Link href="/gamesence">
                  <a className="dropdown-item" >Game by sence</a>
                </Link>
                <Link href="/boardgame">
                  <a className="dropdown-item" >Board Game</a>
                </Link>
                <Link href="/blog">
                  <a className="dropdown-item" >Blog</a>
                </Link>
                <Link href="/forum">
                  <a className="dropdown-item">Forum</a>
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <input className="form-control" type="text" placeholder="Search" />
          </form>
        </div>
      </nav>
    </header>
    <Component {...pageProps} />
  </>)

}

export default MyApp
