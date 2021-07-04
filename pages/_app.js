
import '../styles/globals.css'
import Link from 'next/link'
import 'regenerator-runtime/runtime'
import Head from "next/head";
import { useRouter } from 'next/router'
import { checkCookie, delettCookie, getCookie, setCookie } from "../util/functionCookies"
import { useEffect, useState } from 'react';
import $ from "jquery"
function MyApp({ Component, pageProps }) {
  const [Cookie, SET_Cookie] = useState("");
  const [Status, SET_Status] = useState(0)
  const router = useRouter()
  useEffect(() => {
    console.log(Status)
    try {
      document.getElementById("Text_Cookies").value = getCookie("ericpham")
      SET_Cookie(getCookie("ericpham"));
    } catch (error) {
      console.log(error)
    }
  }, [Status])
  return (<>
    <Head>
      <title>ENGLISH TOOL</title>
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </Head>
    <header>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link href="/">
          <a className="navbar-brand" >
            <i>ENGLISH  <span style={{ color: "yellow" }}>TOOL</span></i>
          </a>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/#VocabularyPage">
                <a className="nav-link">Vocabulary 4.0</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/#ReadingPage">
                <a className="nav-link">Reading 4.0</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/#ReadingPage">
                <a className="nav-link">Conversation 4.0</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/#Trochoi">
                <a className="nav-link">Trò chơi</a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/#CustomPage">
                <a className="nav-link">CustomFile</a>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">

            {Show_Dangnhap()}

          </form>
        </div>
      </nav>
    </header >




    <Component {...pageProps} />



    <footer className="mt-5 text-center">
      <div style={{ display: "none" }}>
        <p id="Text_Cookies"> </p>
        <button
          id="SET_STATUS"
          onClick={() => {
            SET_Status(S => S + 1)
          }}
        ></button>
      </div>
      <div id="sound"></div>
      <br />
      <span>Powered by Ericpham</span>
    </footer>
  </>)



  function Show_Dangnhap() {
    if (Cookie !== "") {
      return (
        <>
          <Link href="/main/detail">
            <a>
              <input className="btn btn-primary" type="button" value={getCookie("ericpham").split("@")[0]} />
            </a>
          </Link>

        </>
      )
    } else {
      return (
        <Link href="/main/dangnhap">
          <a >
            <input id="dangnhapbtn" className="btn btn-primary" type="button" value="Đăng nhập" />
          </a>
        </Link>
      )
    }
  }
}

export default MyApp


