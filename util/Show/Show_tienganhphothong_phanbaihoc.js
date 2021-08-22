import { useState } from "react"

import ReadMessage from "../Read/ReadMessage"
export default function Show_tienganhphothong_phanbaihoc({ Data_Learn, SET_Data_Learn, Data_Commands, SET_Data_Commands, Docthu, SET_Docthu, md_img }) {

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
                    style={{ fontSize: "larger", padding: "20px" }}
                    onClick={() => {
                        ReadMessage(Data_Learn.EN, [1, 2].PickRandom(), 0.9)
                    }}
                >Nghe nguyên câu</button>
                <br />
                <b>Bấm vào từ để nghe:</b>
                <br />
                {Data_Learn.EN.split(" ").map((e, i) =>
                    <div
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
                    </div>
                )}

                <h1>{Data_Learn.IPA}</h1>
                <i>Học đọc phiên âm quốc tế (ví dụ /stænd ʌp/)  </i>
                <a href="https://www.youtube.com/embed/DyYFwoITfXY" target="_self">
                    <button
                        className="btn btn-sm btn-outline-primary"

                    >  Tại đây</button>
                </a> <span id="id_test_rate"></span>
            </div>


            <hr />
            <div style={{ width: "100%", backgroundColor: "#ffe6e6", padding: "5px" }}>
                <b>Luyện nói: Chọn từng từ hoặc nguyên câu</b>
                <br />
                <p>
                    {Data_Learn.EN.split(" ").map((e, i) =>
                        <span
                            style={{
                                border: "5px solid red",
                                borderRadius: "5px",
                                padding: "5px",
                                cursor: "pointer",
                                display: "inline-block",
                                marginLeft: "10px"
                            }}
                            onClick={() => { SET_Data_Commands(e); SET_Docthu("Docthu"); document.getElementById("BUTTON_CLICK_TO_TALK").click(); }}
                            key={i}>
                            {e + " "}
                        </span>
                    )}
                </p>
                <button
                    className="btn btn-danger"
                    style={{ fontSize: "larger", padding: "20px" }}
                    onClick={() => {
                        document.getElementById("BUTTON_CLICK_TO_TALK").click();
                        SET_Data_Commands(Data_Learn.EN);
                        SET_Docthu("Docthu")
                    }}
                >Nói nguyên câu</button>
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
                <i id="interrimID"></i>
                <br />
                <i>Bấm </i>
                <button className="btn btn-sm btn-outline-primary" onClick={() => {
                    window.location.reload()
                }}>Khởi động lại</button>
                <i> nếu máy ngưng nhận giọng nói.</i>
            </div>
            <hr />
            <button
                className="btn btn-warning"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    SET_Data_Learn("");
                    SET_Docthu("");
                    $("#ID_ShowTiengAnh").scrollTop(150)
                }}
            >Chọn câu khác.</button>
            <button
                className="btn btn-warning ml-2"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    try {
                        $("#Btn_nextDatalearn").click()
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >Câu tiếp.</button>
            <hr />
            {md_img.Show_img_larger(Data_Learn.ArrImg)}
        </div>
    )
}


