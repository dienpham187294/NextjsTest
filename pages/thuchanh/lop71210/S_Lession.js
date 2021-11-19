import $ from "jquery"
// import { pick } from "query-string";
import { useState } from "react"
import ReadMessage from "../../../util/Read/ReadMessage"
import ReadReactSpeech from "../../helpers/Read_ReactSpeechSlow"
import Dictaphone from "../../helpers/RegcognitionV1-0-1AI0.5 _02"

let pickToRead = "";
let listenScore = 0
export default function Lesson(props) {
    const [Data_Learn, SET_Data_Learn] = useState("")
    const [Data_LearnListen, SET_Data_LearnListen] = useState("")
    const [Data_LearnWrite, SET_Data_LearnWrite] = useState("")
    const [Docthu, SET_Docthu] = useState("")
    const [Data_Commands, SET_Data_Commands] = useState("====")
    const [Page, SET_Page] = useState("nghenoi")

    try {
        return (
            <div >
                <hr />
                <div className="row" style={{ textAlign: "center", backgroundColor: "gray", padding: "15px" }}>
                    <div
                        className="col-4"
                        style={{ backgroundColor: Page === "nghenoi" ? "yellow" : "white", cursor: "pointer" }}
                        onClick={() => { SET_Page("nghenoi") }}
                    >
                        Nghe - nói
                    </div>
                    <div
                        className="col-4"
                        style={{ backgroundColor: Page === "nghe" ? "yellow" : "white", cursor: "pointer" }}
                        onClick={() => { SET_Page("nghe") }}
                    >Nghe</div>
                    <div
                        className="col-4"
                        style={{ backgroundColor: Page === "docviet" ? "yellow" : "white", cursor: "pointer" }}
                        onClick={() => { SET_Page("docviet") }}
                    >Đọc - Viết</div>
                </div>

                {Page === "nghenoi" ?
                    <div>
                        {/* <b> Chọn câu:</b> */}
                        <div style={{ backgroundColor: "gray" }}>
                            <select
                                onChange={(e) => {
                                    SET_Data_Learn(props.Data.listenRead[e.currentTarget.value]);
                                    // console.log(props.Data)
                                    document.getElementById("idStartLisening").click();
                                }}
                                className="form-control mt-3">
                                <option>Chọn bài học</option>
                                {props.Data.listenRead.map((e, i) =>
                                    <option
                                        key={i}
                                        value={i}
                                    >
                                        {e.EN}
                                    </option>
                                )}
                            </select>
                            <hr />
                        </div>

                        <hr />
                        {Data_Learn !== "" ? Show_tienganhphothong_phanbaihoc(Data_Learn, Docthu, SET_Docthu, SET_Data_Commands, Data_Commands) : null}
                    </div>
                    : null}
                {Page === "nghe" ?
                    <div>
                        {/* <b> Chọn câu:</b> */}
                        <div style={{ backgroundColor: "gray" }}>
                            <select
                                onChange={(e) => {
                                    SET_Data_LearnListen(props.Data.listenOnly[e.currentTarget.value]);
                                    // console.log(props.Data)
                                    document.getElementById("idStartLisening").click();
                                }}
                                className="form-control mt-3">
                                <option>Chọn bài học</option>
                                {props.Data.listenOnly.map((e, i) =>
                                    <option
                                        key={i}
                                        value={i}
                                    >
                                        {i}
                                    </option>
                                )}
                            </select>
                            <hr />
                        </div>

                        <hr />
                        {Data_LearnListen !== "" ? Show_tienganhphothong_listen(Data_LearnListen) : null}
                    </div>
                    : null}
                {Page === "docviet" ?
                    <div>
                        {/* <b> Chọn câu:</b> */}
                        <div style={{ backgroundColor: "gray" }}>
                            <select
                                onChange={(e) => {
                                    SET_Data_LearnWrite(props.Data.writeOnly[e.currentTarget.value]);
                                    // console.log(props.Data)
                                    document.getElementById("idStartLisening").click();
                                }}
                                className="form-control mt-3">
                                <option>Chọn bài học</option>
                                {props.Data.writeOnly.map((e, i) =>
                                    <option
                                        key={i}
                                        value={i}
                                    >
                                        {i}
                                    </option>
                                )}
                            </select>
                            <hr />
                        </div>

                        <hr />
                        {Data_LearnWrite !== "" ? Show_tienganhphothong_Write(Data_LearnWrite) : null}
                    </div>
                    : null}


                <div
                    style={{
                        position: "fixed",
                        bottom: "10%",
                        right: "10%",
                        width: "10%",
                        minWidth: "200px",
                        backgroundColor: "white"
                    }}
                >
                    <button
                        className="btn btn-outline-danger form-control mt-1"
                        onClick={() => {
                            props.Total.fnObj.SET_PageChange(0);
                            try {
                                $("#idStopLisening")[0].click()
                            } catch (error) {

                            }
                        }}>Trở lại phần chọn bài</button>
                </div>

                <ReadReactSpeech />
                <Dictaphone Data={Data_Commands} Xuly={Xuly} />
            </div>
        )
    } catch (error) {
        return null
    }




    function Xuly() {
        if (Docthu === "Docthu") {
            SET_Docthu("A");
            ReadMessage("Great", PickRandom([1, 2]), 0.9);
            SET_Data_Commands("====")
        }
    }
    function PickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}


function Show_tienganhphothong_phanbaihoc(Data_Learn, Docthu, SET_Docthu, SET_Data_Commands, Data_Commands) {
    try {
        return (
            <div className="text-justify">
                <div style={{ width: "100%", backgroundColor: "#ecf5d5", padding: "5px" }}>
                    <h3> {Data_Learn.EN}</h3>
                    <h3> {Data_Learn.VN}</h3>
                </div>
                <hr />

                <div style={{ width: "100%", backgroundColor: "#e6e8f7", padding: "5px" }}>
                    <b>Luyện nghe:</b>
                    <br />
                    <button
                        className="btn btn-primary"
                        style={{ fontSize: "larger", padding: "15px", backgroundColor: "blue", color: "white" }}
                        onClick={() => {
                            ReadMessage(Data_Learn.EN, [1, 2].PickRandom(), 0.9)
                        }}
                    >Nghe nguyên câu</button>
                    <br />
                    <b>Bấm vào từ để nghe:</b>
                    <br />
                    {Data_Learn.EN.split(" ").map((e, i) =>
                        <span
                            style={{
                                border: "5px solid blue",
                                borderRadius: "5px",
                                padding: "5px",
                                cursor: "pointer",
                                display: "inline-block",
                                marginLeft: "10px"
                            }}
                            onClick={() => { ReadMessage(e, [1, 2].PickRandom(), 0.3) }}
                            key={i}>
                            {e}
                        </span>
                    )}
                    <h1>{Data_Learn.IPA}</h1>
                    <p>{Data_Learn.IPAVN !== "" ? Data_Learn.IPAVN : null}</p>
                    <i>Học đọc phiên âm quốc tế (ví dụ /stænd ʌp/)  </i>
                    <a href="https://www.youtube.com/embed/DyYFwoITfXY" target="_self">
                        <button
                            className="btn btn-sm btn-outline-primary"

                        >  Tại đây</button>
                    </a> <span id="id_test_rate"></span>
                </div>
                <hr />
                <div style={{ width: "100%", backgroundColor: "#ffe6e6", padding: "5px" }}>
                    <button
                        className="btn btn-danger"
                        style={{ fontSize: "larger", padding: "15px", backgroundColor: "red", color: "white" }}
                        onClick={() => {
                            // document.getElementById("BUTTON_CLICK_TO_TALK").click();
                            SET_Data_Commands(Data_Learn.EN);
                            SET_Docthu("Docthu")
                        }}
                    >Luyện nói</button>
                    {Docthu === "" ? null
                        : Docthu === "Docthu" ?
                            <>
                                <br /><br />
                                <img src="https://i.postimg.cc/1z95rjPs/Listening.gif" alt="https://i.postimg.cc/1z95rjPs/Listening.gif" width="30px" />
                                <span><i>Đang lắng nghe...   </i></span><button className="btn btn-sm btn-outline-danger" onClick={() => { SET_Docthu("") }}>Tắt</button>
                                <p style={{ color: "blue" }}><span style={{ color: "black" }}>Bạn cần đọc:</span> {Data_Commands}</p>
                                <br />
                            </>
                            : <h5 style={{ color: "red" }}> Chính Xác - Chúc mừng</h5>
                    }
                    <br />
                    <b>Máy lắng nghe bạn nói... : </b>
                    <i style={{ color: "red" }} id="interrimID"></i>
                </div>
            </div>
        )
    } catch (error) {
        return null
    }

}

function Show_tienganhphothong_listen(Data_LearnListen) {

    try {
        return (
            <div>
                <button
                    className="btn btn-info mr-5"
                    onClick={() => {
                        pickToRead = Data_LearnListen.PickRandom();
                        let voice = [1, 2].PickRandom()
                        let rate = [0.8, 0.9, 1.0, 1.1, 1.2].PickRandom()
                        let pitch = [0.8, 0.9, 1.0, 1.1, 1.2].PickRandom()
                        ReadMessage(pickToRead, voice, rate, pitch)
                    }}
                >Click to listen</button>  <b >Điểm: <span id="listenScore">0</span></b>
                <hr />
                {Data_LearnListen.map((e, i) =>
                    <button
                        className="btn btn-info ml-2" key={i}
                        onClick={() => {
                            if (e === pickToRead) {
                                pickToRead = "";
                                listenScore += 1;
                                document.getElementById("listenScore").textContent = listenScore
                            }
                        }}
                    >{e}</button>
                )}
                <hr />

            </div>
        )
    } catch (error) {
        return null
    }

}

function Show_tienganhphothong_Write(Data_LearnWrite) {

    try {
        return (
            <div>
                {Data_LearnWrite.map((e, i) =>
                    <div
                        key={i}
                        style={{ margin: "10px" }}
                    >

                        {showThread(e, i)}
                        <br />
                        <b id={"row" + i}></b>
                        <hr />
                    </div>
                )}

            </div>
        )
    } catch (error) {
        return null
    }
}

function showThread(text, n) {
    let arrIn1 = text.split(" ").sort(() => Math.random() - 0.5);
    return (
        arrIn1.map((e, i) =>
            <button
                className="btn btn-info ml-2" key={i}
                onClick={() => {
                    let t = $("#row" + n).text() + e + " ";

                    if (t.includes(text)) {
                        t += " |Correct!"
                    }

                    $("#row" + n).text(t);
                }}
            >{e}</button>
        )
    )
}