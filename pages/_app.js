
import '../styles/globals.css'
import Link from 'next/link'
import 'regenerator-runtime/runtime'
import Head from "next/head";
import { useRouter } from 'next/router'
import { checkCookie, delettCookie, getCookie, setCookie } from "../util/functionCookies"
import { useEffect, useState } from 'react';
import $ from "jquery"
import Getfinal from "../util/GetFinal"
import { GetServerSideProps } from 'next'
import { data } from 'browserslist';
import { route } from 'next/dist/next-server/server/router';
let ArrHoldLinkBaiHoc = [
  { "link": "baihoc/100-bai-giao-tiep-can-ban", "name": "100 bài giao tiếp căn bản" },
  { "link": "baihoc/800-cau-giao-tiep-thong-dung-nhat", "name": "800 câu giao tiếp thông dụng" },
  { "link": "baihoc/20-chu-de-hoc-tieng-anh-qua-hinh-anh", "name": "20 chủ đề học tiếng anh qua hình ảnh" }
]
let ArrMobieFile = [
  { "link": "thuchanh/version01/doc-bao-international-vnexpress-cap-nhat-tin-tuc-moi-nhat", "name": "Đọc báo International Vnexpress - Cập nhật tin tức mới nhất" },
  { "link": "thuchanh/version01/doc-tap-chi-forbes-cap-nhat-tin-tuc-moi-nhat", "name": "Đọc tạp chí Forbes - Cập nhật tin tức mới nhất" },
  { "link": "thuchanh/version01/doc-truyen-tranh-giai-tri-thu-gian", "name": "Đọc truyện tranh - Giải trí thư giãn" },
  { "link": "thuchanh/version01/doc-bao-vietnamnews-travel", "name": "Đọc chuyên mục du lịch Vietnamnews - Khám phá Việt Nam" },
  { "link": "thuchanh/thuc-hanh-800-cau-giao-tiep-thong-dung", "name": "Thực hành 800+ câu giao tiếp thông dụng nhất" },


]
let ArrMobieCustomfile = [

  { "link": "thuchanh/version01/thuc-hanh-doc-sach-thanh-tieng", "name": "Đọc thành tiếng với CustomFile" },
  { "link": "thuchanh/thuc-hanh-800-cau-giao-tiep-thong-dung-customfile", "name": "Thực hành các câu giao tiếp không giới hạn với CustomFile" },

]
let ArrLaptopFile = [
  { "link": "thuchanh/thuc-hanh-3000-tu-vung-thong-dung-nhat", "name": "Thực hành 3000+ từ vựng thông dụng nhất" },
  { "link": "thuchanh/thuc-hanh-23-chu-de-800-tu-vung-voi-hinh-anh", "name": "Thực hành 23+ chủ đề với 800+ từ vựng với hình ảnh minh họa" },

  { "link": "thuchanh/thuc-hanh-100-bai-giao-tiep-thong-dung-nhat", "name": "Thực hành 100+ bài hội thoại giao tiếp thông dụng nhất" },
  { "link": "thuchanh/20-bai-thuc-hanh-giao-tiep-voi-nguoi-may-ai", "name": "Thực hành 20+ trò chơi giao tiếp với người máy AI" }
]
let ArrLaptopCustomFile = [
  { "link": "thuchanh/version01/lam-quen-tu-vung", "name": "Làm quen từ vựng với CustomFile" },
  { "link": "thuchanh/version01/thuc-hanh-nghe-va-lap-lai", "name": "Nghe và lặp lại với CustomFile" },
  { "link": "thuchanh/version01/thuc-hanh-ngu-phap", "name": "Làm bài tập với CustomFile" },
  { "link": "thuchanh/thuc-hanh-3000-tu-vung-thong-dung-nhat-khong-gioi-han-voi-customfile", "name": "Thực hành từ vựng không giới hạn với CustomFile" },
  { "link": "thuchanh/thuc-hanh-23-chu-de-800-tu-vung-voi-hinh-anh-customfile", "name": "Thực hành từ vựng với hình ảnh minh họa không giới hạn với CustomFile" },


  { "link": "thuchanh/thuc-hanh-100-bai-giao-tiep-thong-dung-nhat-customfile", "name": "Thực hành hội thoại giao tiếp không giới hạn với CustomFile" },

  { "link": "thuchanh/thuc-hanh-giao-tiep-nguoi-may-ai-customfile", "name": "Thực hành trò chơi giao tiếp với người máy AI không giới hạn với CustomFile" }
]

let arrVideothuchanh = [
  { "link": "thuchanh/#", "name": "Thực hành đọc sách, truyện thành tiếng" },
  { "link": "thuchanh/#", "name": "Thực hành chơi game giao tiếp với người máy AI" }
]
// let flag = true;
// let inter
function MyApp({ Component, pageProps }) {
  const [Cookie, SET_Cookie] = useState("")
  const [Status, SET_Status] = useState(0)
  const router = useRouter()
  useEffect(() => {
    if (Status <= 5) {
      if (checkCookie("ericpham")) {
        SET_Cookie(getCookie("ericpham"));
      }
      SET_Status(S => S + 1)
      console.log(Status)
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
            <li className="nav-item dropdown">
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dữ liệu</a>
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown03">
                {ArrHoldLinkBaiHoc.map((e, i) =>
                  <Link key={i} href={"/" + e.link}>
                    < a className="dropdown-item" >{e.name}</a>
                  </Link>
                )}
              </div>
            </li>
            <li className="nav-item dropdown active setMaxWidthli"  >
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Thực hành</a>
              </Link>
              <div className="dropdown-menu text-justify" aria-labelledby="dropdown03">
                <i style={{
                  backgroundColor: "black",
                  color: "white",
                  letterSpacing: "4px",
                  padding: "5px",
                  marginLeft: "5%"
                }}>Phần có thể sử dụng trên điện thoại</i>
                <hr />
                <i style={{
                  backgroundColor: "black",
                  color: "yellow",
                  padding: "5px",
                  letterSpacing: "3px"
                }}>Đọc sách, báo 10p mỗi ngày với công nghệ AI</i>
                <br />
                <i>Rèn luyện phát âm - Nâng cao kiến thức</i>
                <hr />
                <div style={{
                  backgroundColor: "#E6E6E6"
                }}>
                  {ArrMobieFile.map((e, i) =>
                    <Link key={i} href={"/" + e.link}>
                      <a className="dropdown-item" >{e.name}</a>
                    </Link>
                  )}
                </div>
                <hr />
                <i>Thực hành với CustomFile</i>
                {ArrMobieCustomfile.map((e, i) =>
                  <Link key={i} href={"/" + e.link}>
                    < a className="dropdown-item" >{e.name}</a>
                  </Link>
                )}
                <hr />
                <i
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    letterSpacing: "4px",
                    padding: "5px",
                    marginLeft: "5%"
                  }}
                >Phần chỉ sử dụng trên máy tính</i>
                <hr />
                <i>Thực hành với file sẵn có</i>
                {ArrLaptopFile.map((e, i) =>
                  <Link key={i} href={"/" + e.link}>
                    < a className="dropdown-item" >{e.name}</a>
                  </Link>
                )}
                <hr />
                <i>Thực hành với CustomFile</i>
                {ArrLaptopCustomFile.map((e, i) =>
                  <Link key={i} href={"/" + e.link}>
                    < a className="dropdown-item" >{e.name}</a>
                  </Link>
                )}
                <hr />
                <Link href={"/thuchanh/tao-file-thuc-hanh"}>
                  < a className="dropdown-item" >Tạo CustomFile - Thực hành không giới hạn theo ý muốn</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown active">
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Game offline</a>
              </Link>
              <div className="dropdown-menu text-justify" aria-labelledby="dropdown03">
                <i
                  style={{ margin: "5px", padding: "5px" }}
                >Chỉ sử dụng trên máy tính</i>
                <hr />
                <Link href={"/game"}>
                  < a className="dropdown-item" >Ká Town</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown disable">
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Game online</a>
              </Link>
              <div className="dropdown-menu text-justify" aria-labelledby="dropdown03">
                <hr />
              </div>
            </li>
            <li className="nav-item dropdown active">
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Video Thực hành</a>
              </Link>
              <div className="dropdown-menu text-justify" aria-labelledby="dropdown03">
                <i>Các video thực hành</i>
                <hr />
                {arrVideothuchanh.map((e, i) =>
                  <Link key={i} href={"/" + e.link}>
                    < a className="dropdown-item" >{e.name}</a>
                  </Link>
                )}
              </div>
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
      <div id="sound"></div>
      {/* <hr />
      <span><i>Học nhiều thực hành ít không bằng học ít thực hành nhiều.</i> </span> */}
      <br />
      <span>Powered by Ericpham</span>
      {/* <hr />
      <a href="https://app-ericpham.herokuapp.com/">Link dự phòng</a> */}
      <div style={{ display: "none" }}>
        <p id="TEXT"></p>
        <input onClick={() => {
          try {
            setCookie("ericpham", $("#TEXT").text(), 5);
            SET_Cookie($("#TEXT").text());
            setTimeout(() => {
              if (!checkCookie("eripham")) {
                setCookie("ericpham", $("#TEXT").text(), 5);
              }

              router.push("/")
            }, 200)
          } catch (error) {
            console.log(1)
          }
        }} type="button" id="ADD" defaultValue="Add" />
        <div>
          <input onClick={() => {
            delettCookie("ericpham");
            SET_Cookie("");
            setTimeout(() => {
              if (checkCookie("ericpham")) {
                delettCookie("ericpham");
              }
              router.push("/")
            }, 1000)
          }} type="button" id="DElETE" defaultValue="Đăng xuất" />
        </div>
        <div>
          <button onClick={() => {
            delettCookie("ericpham");
          }}>
            delete
          </button>
          <button onClick={() => {
            alert(getCookie("ericpham"));
          }}>
            get
          </button>
        </div>
      </div>


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


