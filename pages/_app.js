
import '../styles/globals.css'
import Link from 'next/link'
import 'regenerator-runtime/runtime'
import Head from "next/head";


let ArrHoldLinkBaiHoc = [
  { "link": "100-bai-giao-tiep-can-ban", "name": "100 bài giao tiếp căn bản" },
  { "link": "800-cau-giao-tiep-thong-dung-nhat", "name": "800 câu giao tiếp thông dụng" },
  { "link": "20-chu-de-hoc-tieng-anh-qua-hinh-anh", "name": "20 chủ đề học tiếng anh qua hình ảnh" }
]
let ArrHoldLinkThucHanh = [
  { "link": "thuchanh/giao-tiep-cap-do-1", "name": "Thực hành giao tiếp căn bản với người máy AI" },
  { "link": "thuchanh/thuc-hanh-doc-sach-thanh-tieng", "name": "Thực hành đọc truyện, sách thành tiếng" },
  { "link": "thuchanh/thuc-hanh-nghe-va-lap-lai", "name": "Thực hành nghe và lặp lại các câu" },
  { "link": "thuchanh/thuc-hanh-ngu-phap", "name": "Thực hành thi các bài ngữ pháp bằng giọng nói." },
  { "link": "thuchanh/thuc-hanh-toiec", "name": "Thực hành đề thi TOEIC" },
]
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
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bài học</a>
              </Link>
              <div className="dropdown-menu" aria-labelledby="dropdown03">

                {ArrHoldLinkBaiHoc.map((e, i) =>
                  <Link key={i} href={"/" + e.link}>
                    < a className="dropdown-item" >{e.name}</a>
                  </Link>
                )}

              </div>
            </li>

            <li className="nav-item dropdown active">
              <Link href="/">
                <a className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Thực hành</a>
              </Link>
              <div className="dropdown-menu text-justify" aria-labelledby="dropdown03">
                {ArrHoldLinkThucHanh.map((e, i) =>
                  <Link key={i} href={"/" + e.link}>
                    < a className="dropdown-item" >{e.name}</a>
                  </Link>
                )}
                <hr />
                <Link key="Timhieu" href="/thuchanh">
                  < a className="dropdown-item" >Tìm hiểu về trí thông minh nhân tạo, <br /> công nghệ nhận diện giọng nói <br /> và ứng dụng trong thực hành tiếng anh.</a>
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-md-0">
            <a href="https://forms.gle/iQCgk1w3aSHVgkVc6" target="_blank">
              <input className="btn btn-primary" type="button" value="Đăng ký học thử" />
            </a>
          </form>
        </div>
      </nav>
    </header >

    <Component {...pageProps} />



    <footer className="mt-5 text-center">
      <hr />
      <span><i>Học nhiều thực hành ít không bằng học ít thực hành nhiều.</i> </span>
      <br />
      <span>Powered by Ericpham</span>
      <hr />
      <a href="https://app-ericpham.herokuapp.com/">Link dự phòng</a>
    </footer>
  </>)

}

export default MyApp
