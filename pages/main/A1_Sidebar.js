import Link from 'next/link'
export default function A1_sidebar() {
    return (
        <div className="A1_01_sidebar">
            <ul>
                <div>
                    <Link href="/?update-v4">
                        <a>
                            <li>
                                <span className="A1_01_a_span_sidebar">Đăng ký Khóa 8 buổi MIỄN PHÍ</span>
                            </li>
                        </a>
                    </Link>
                </div>
              
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Hồ sơ
                    </button>
                    <div className="dropdown-menu" >
                        <a className="dropdown-item" href="/?update-v4">Tổng quan</a>
                        <a className="dropdown-item" href="#">Thống kê chi tiết</a>
                        <a className="dropdown-item" href="#">Lịch sử thanh toán</a>
                    </div>
                </div>
                <br />
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tự thực hành Online MIỄN PHÍ
                    </button>
                    <div className="dropdown-menu" >
                        <a className="dropdown-item" href="/?update-v4">Action 1</a>
                        <a className="dropdown-item" href="#">Another action 2</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                    </div>
                </div>
                <br />
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Khóa thực hành Nâng cao
                    </button>
                    <div className="dropdown-menu" >
                        <a className="dropdown-item" href="#">Action 1</a>
                        <a className="dropdown-item" href="#">Another action 2</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                    </div>
                </div>
                <br />
                <div className="btn-group dropright">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bài học lý thuyết
                    </button>
                    <div className="dropdown-menu" >
                        <a className="dropdown-item" href="#">Action 1</a>
                        <a className="dropdown-item" href="#">Another action 2</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Action</a>
                    </div>
                </div>
                <div>
                    <i></i>
                    <button type="button" className="btn btn-secondary">
                        Mua khóa học
                    </button>
                </div>
                <div>

                    <button type="button" className="btn btn-secondary">
                        <i className="fa fa-solid fa-power-off"></i>
                        <span>  Đăng xuất</span>
                    </button>
                </div>
            </ul >
        </div >
    )
}