
import '../styles/globals.css'
import Link from 'next/link'
import 'regenerator-runtime/runtime'
import Head from "next/head";
import { getCookie } from "../util/Cookies/functionCookies"
import { useEffect, useState } from 'react';
import Linkapi from "../util/api/Linkapi"
import List_IDs from "../util/List_IDs/List_IDs"
import { async } from 'regenerator-runtime';
// import $ from "jquery"
const { detect } = require('detect-browser');
let StrNum = 0;
function MyApp({ Component, pageProps }) {
  const [Cookie, SET_Cookie] = useState("");
  const [Status, SET_Status] = useState(0)
  const browser = detect();
  useEffect(() => {
    if (browser) {
      console.log(browser.name);
      console.log(browser.version);
      console.log(browser.os);
      document.getElementById("browsername").innerText = browser.name
    }
    try {
      document.getElementById("Text_Cookies").innerText = getCookie("ericpham")
      SET_Cookie(getCookie("ericpham"));
      GET_Buycode_FROM_DATABASE(getCookie("ericpham"))
    } catch (error) {
      console.log(error)
    }
    setTimeout(() => {
      try {
        console.log(1)
        const chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "106237278271751");
        chatbox.setAttribute("attribution", "setup_tool");
        window.fbAsyncInit = function () {
          FB.init({
            appId: '138299294995923',
            xfbml: true,
            version: 'v11.0'
          });
        };
        (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      } catch (error) {
        console.log(error)
      }
    }, 3000)

  }, [Status])
  return (<>
    <Head>
      <title>ENGLISH TOOL</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Ericpham Product" />
      <meta name="facebook-domain-verification" content="4v65nvfymyec6nthr2m2l2rbcvo7kp" />
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

      {/* <script src="//cdnjs.cloudflare.com/ajax/libs/materialize/0.95.1/js/materialize.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/materialize/0.95.1/css/materialize.min.css" /> */}

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
      <p id="browsername"></p>
      <div className="container">
        <hr />
        <p id="Strnum"></p>

        <input type="number" id="number" />
        <button

          onClick={() => {
            StrNum = parseInt(document.getElementById("number").value); document.getElementById("Strnum").innerText = StrNum + typeof (StrNum);
          }}> Số</button>
        <button
          onClick={() => {
            StrNum = (document.getElementById("number").value).toString(); document.getElementById("Strnum").innerText = StrNum + typeof (StrNum);
          }}

        >Chữ</button>
        <p id="test"></p>
        <div className="row">
          {/* <nav>
            <div className="nav-wrapper">
              <div className="col s12">
                <a href="#" className="brand-logo">Text to speech example</a>
              </div>
            </div>
          </nav> */}
        </div>

        <div className="row">
          {/* <label>Choose voice</label>
            <select id="voices"></select> */}
        </div>
        <div className="row">
          <div className="col s6">
            <label>Rate</label>
            <p className="range-field">
              <input type="range" id="rate" min="1" max="100" value="10" />
            </p>
          </div>
          <div className="col s6">
            <label>Pitch</label>
            <p className="range-field">
              <input type="range" id="pitch" min="0" max="2" value="1" />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea id="message" ></textarea>
            <label>Write message</label>
          </div>
        </div>
        <button id="speak"
          onClick={() => {
            // if ('speechSynthesis' in window) {
            var text = $('#message').val();
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[StrNum];
            msg.rate = $('#rate').val() / 10;
            msg.pitch = $('#pitch').val();
            msg.text = text;

            // msg.onend = function (e) {
            //   // document.getElementById("test").innerText = ('Finished in ' + event.elapsedTime + ' seconds.' + StrNum + typeof (StrNum) + voices[$('#voices').val()].name);
            // };
            speechSynthesis.speak(msg);
            // }
          }}


        >Speak</button>

      </div>
      <div style={{ display: "none" }}>
        <p id={List_IDs["GET_Cookies"]}> ===</p>
        <p id={List_IDs["Text_Cookies_Buycode"]}>=== </p>
        <button
          id="SET_STATUS"
          onClick={() => {
            SET_Status(S => S + 1)
          }}
        ></button>
      </div>
      <div id={List_IDs["Sound"]}></div>
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
              <input className="btn btn-primary" type="button" value={"Tài khoản của bạn"} />
            </a>
          </Link>

        </>
      )
    } else {
      return (
        <Link href="/main/dangnhap">
          <a >
            <input id={List_IDs["Button_DangNhap"]} className="btn btn-primary" type="button" value="Đăng nhập" />
          </a>
        </Link>
      )
    }
  }
}

export default MyApp


async function GET_Buycode_FROM_DATABASE(mail) {
  try {
    const res = await fetch(Linkapi + "api/GET_Buycode?mail=" + mail, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    let data = await res.json();
    console.log(data)
    document.getElementById("Text_Cookies_Buycode").innerText = data.data
  } catch (error) {
    console.log(error)
  }
}

