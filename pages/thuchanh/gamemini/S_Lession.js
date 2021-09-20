// import $ from "jquery"
import { useState } from "react"
import ReadMessage from "../../../util/Read/ReadMessage"
import ReadReactSpeech from "../../helpers/Read_ReactSpeechSlow"
import Dictaphone from "../../helpers/RegcognitionV1-0-1AI0.5 _02"
export default function Lesson(props) {
    const [Data_Learn, SET_Data_Learn] = useState("")
    const [Docthu, SET_Docthu] = useState("")
    const [Data_Commands, SET_Data_Commands] = useState("====")
    return (
        <div >
            {Data_Learn !== "" ? Show_tienganhphothong_phanbaihoc(Data_Learn, Docthu, SET_Docthu, SET_Data_Commands, Data_Commands) : null}
            {props.Data.map((e, i) =>
                <div
                    onClick={() => {
                        SET_Data_Learn(e);
                        document.getElementById("idStartLisening").click();
                    }}
                    key={i}
                    style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", margin: "5px", cursor: "pointer" }}
                >
                    <span style={{ color: "blue" }}> {e.EN}</span>
                    <br />
                    <i>{e.VN}</i>
                    <br />
                    <button style={{ backgroundColor: "yellow" }}>Bấm chọn để học</button>

                </div>
            )}

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
                            $("#idStopLisening").click()
                        } catch (error) {

                        }
                    }}>Trở lại phần chọn bài</button>
            </div>

            <ReadReactSpeech />
            <Dictaphone Data={Data_Commands} Xuly={Xuly} />
        </div>
    )

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

