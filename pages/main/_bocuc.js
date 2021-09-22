

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
                            <td>I'm good. How are you?/Not too bad. How are you?</td>
                            <td>Tôi khỏe bạn khỏe không? / Không tệ lắm, bạn khỏe không?</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "violet" }}>Người chơi nói</h5></td>
                            <td>I am fine. Thank you.</td>
                            <td>Tôi khỏe, cảm ơn</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "blue" }}> Máy nói</h5></td>
                            <td>Where are you from?</td>
                            <td>Bạn đến từ đâu?</td>
                        </tr>
                        <tr>
                            <td><h5 style={{ color: "violet" }}>Người chơi nói</h5></td>
                            <td>I am from Vietnam.</td>
                            <td>Tôi đến từ Việt Nam</td>
                        </tr>
                        <tr style={{ color: "red" }}>
                            <td><h5 style={{ color: "red" }}> Máy nói - Đáp án</h5></td>
                            <td>I am from --- California/Texas/Seattle</td>
                            <td>Tôi đến từ California/Texas/Seattle</td>
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
        </div>
    )
}