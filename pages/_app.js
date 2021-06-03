
import '../styles/globals.css'
import Link from 'next/link'
import 'regenerator-runtime/runtime'
import Head from "next/head";
function MyApp({ Component, pageProps }) {


  return (<>
    <Head>
      <title>ESL PRACTICE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Ericpham Product" />
      <link rel="icon" href="/favicon.ico" />
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
          <a className="navbar-brand" >ESL PRACTICE</a>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Link dự phòng</a>
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown03">
                <Link href="https://app-ericpham.herokuapp.com/">
                  <a className="dropdown-item" >Link dự phòng 1</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bài học</a>
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown03">
                <Link href="/100-bai-giao-tiep-can-ban">
                  <a className="dropdown-item" >100 bài giao tiếp căn bản</a>
                </Link>
              </div>
            </li>
            <li className="nav-item active">
              <Link href="/thuchanh">
                <a className="nav-link">Thực hành</a>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <a href="https://forms.gle/iQCgk1w3aSHVgkVc6" target="_blank">
              <input className="btn btn-primary" type="button" value="Đăng ký học thử" />
            </a>
          </form>
        </div>
      </nav>
    </header>

    <Component {...pageProps} />



    <footer className="mt-5 text-center">
      Powered by Ericpham
    </footer>
  </>)

}

export default MyApp
