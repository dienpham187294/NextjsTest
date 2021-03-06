
import '../styles/globals.css'
import 'regenerator-runtime/runtime'
import { useEffect, useState } from 'react';
import List_IDs from "../util/List_IDs/List_IDs"
import Head from "next/head";
const { detect } = require('detect-browser');
const ip = require('ip');

function MyApp({ Component, pageProps }) {
  const [Status, SET_Status] = useState(0)
  const browser = detect();
  useEffect(() => {
    if (browser) {
      document.getElementById("ID_TEXT_BROWSERNAME").innerText = browser.name + browser.version + browser.os + ip.address()
    }
    // try {
    //   document.getElementById("Text_Cookies").innerText = getCookie("ericpham")
    //   GET_Buycode_FROM_DATABASE(getCookie("ericpham"))
    // } catch (error) {
    //   console.log(error)
    // }
    // setTimeout(() => {
    //   try {
    //     const chatbox = document.getElementById('fb-customer-chat');
    //     chatbox.setAttribute("page_id", "106237278271751");
    //     chatbox.setAttribute("attribution", "setup_tool");
    //     window.fbAsyncInit = function () {
    //       FB.init({
    //         appId: '138299294995923',
    //         xfbml: true,
    //         version: 'v11.0'
    //       });
    //     };
    //     (function (d, s, id) {
    //       var js, fjs = d.getElementsByTagName(s)[0];
    //       if (d.getElementById(id)) return;
    //       js = d.createElement(s); js.id = id;
    //       js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    //       fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));
    //   } catch (error) {
    //     console.log(error, "facebook message")
    //   }
    // }, 3000)

  }, [Status])
  return (<>

    <Head>
      <title>Thực hành tiếng anh</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Thực hành tiếng anh" />
      {/* <meta name="facebook-domain-verification" content="4v65nvfymyec6nthr2m2l2rbcvo7kp" /> */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
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



    <Component {...pageProps} />




    <footer className="mt-5 text-center">
      {/* <div>
        <hr />
        Created by Ká Điện.
        <br />
        <i>Objective: Create games that have the effect of replacing the actual language practice environment in order to make it easy and fast for everyone to access the practice and use of this tool for fluency.</i>
      </div> */}
      <div style={{ display: "none" }}>
        <span id="ID_TEXT_BROWSERNAME"></span><span id="Detect_device"></span>
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
    </footer>
  </>)




}

export default MyApp


// async function GET_Buycode_FROM_DATABASE(mail) {
//   try {
//     const res = await fetch(Linkapi + "api/GET_Buycode?mail=" + mail, {
//       method: 'GET',
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       }
//     })
//     let data = await res.json();
//     document.getElementById("Text_Cookies_Buycode").innerText = data.data["buycode"]
//     $("#Detect_device").text(data.data["detect_device"])
//   } catch (error) {
//     console.log(error)
//   }
// }

