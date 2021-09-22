

export default function Bocuc() {


    return (
        <div className="container">
            <div style={{ width: "100%", textAlign: "center" }}>
                <h1>Bố cục</h1>
            </div>

            <div>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td><h5 style={{ color: "blue" }}> Máy nói</h5></td>
                            <td>Hi/Hello</td>
                            <td>Xin chào</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "violet" }}>Người chơi nói</h5></td>
                            <td>Hi how are you?</td>
                            <td>Chào, bạn thế nào?</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "blue" }}> Máy nói</h5></td>
                            <td>I'm good./Not too bad</td>
                            <td>Tôi khỏe / Không tệ lắm</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "violet" }}>Người chơi nói</h5></td>
                            <td>Where do you live</td>
                            <td>Bạn sống ở đâu</td>
                        </tr>
                        {/* <tr>
                            <td><h5 style={{ color: "blue" }}> Máy nói</h5></td>
                            <td>Where are you from?</td>
                            <td>Bạn đến từ đâu?</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "violet" }}>Người chơi nói</h5></td>
                            <td>I am from Vietnam.</td>
                            <td>Tôi đến từ Việt Nam</td>
                        </tr> */}
                        <tr style={{ color: "red" }}>
                            <td><h5 style={{ color: "red" }}> Máy nói - Đáp án</h5></td>
                            <td> <h1>I live in --- Paris/Lodon/Seattle</h1> </td>
                            <td>Tôi sống ở --- Paris/Lodon/Seattle</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "violet" }}>Người chơi nói</h5></td>
                            <td>Nice to meet you.</td>
                            <td>Thật vui được gặp bạn.</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "blue" }}> Máy nói</h5></td>
                            <td>Nice to meet you too.</td>
                            <td>Tôi cũng vậy.</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1>Kết</h1>
                </div>
            </div>



            <div className="row" style={{ backgroundColor: "gray", padding: "20px", fontSize: "36px", color: "white" }}>
                <div style={{ backgroundColor: "yellow", color: "black" }} className="col-3">Demo</div>
                <div className="col-3">Bố cục</div>
                <div className="col-3">Học tập</div>
                <div className="col-3">Thực hành</div>
            </div>
            <hr />
            <div className="row" style={{ backgroundColor: "gray", padding: "20px", fontSize: "36px", color: "white" }}>
                <div className="col-3">Demo</div>
                <div style={{ backgroundColor: "yellow", color: "black" }} className="col-3">Bố cục</div>
                <div className="col-3">Học tập</div>
                <div className="col-3">Thực hành</div>
            </div>
            <hr />
            <div className="row" style={{ backgroundColor: "gray", padding: "20px", fontSize: "36px", color: "white" }}>
                <div className="col-3">Demo</div>
                <div className="col-3">Bố cục</div>
                <div style={{ backgroundColor: "yellow", color: "black" }} className="col-3">Học tập</div>
                <div className="col-3">Thực hành</div>
            </div>
            <hr />
            <div className="row" style={{ backgroundColor: "gray", padding: "20px", fontSize: "36px", color: "white" }}>
                <div className="col-3">Demo</div>
                <div className="col-3">Bố cục</div>
                <div className="col-3">Học tập</div>
                <div style={{ backgroundColor: "yellow", color: "black" }} className="col-3">Thực hành</div>
            </div>
            <hr />
            <div className="row" style={{ backgroundColor: "gray", padding: "20px", fontSize: "36px", color: "white" }}>
                <div style={{ backgroundColor: "yellow", color: "black" }} className="col-12">Thực hành tại Englishtool.co</div>
            </div>
        </div>
    )
}