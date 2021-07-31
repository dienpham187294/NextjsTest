import { useState } from "react"

import ReadMessage from "../Read/ReadMessage"
import Show_tienganhphothong_hocphatam from "./Show_tienganhphothong_hocphatam"
export default function Show_tienganhphothong_phanbaihoc({ Data_Learn, SET_Data_Learn, SET_Popup, Data_Commands, SET_Data_Commands }) {
    const [Docthu, SET_Docthu] = useState("")
    return (
        <div className="text-justify">
            <hr />
            <h1>
                {Data_Learn.EN.split(" ").map((e, i) =>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => { SET_Data_Commands(e); SET_Docthu("Docthu"); document.getElementById("BUTTON_CLICK_TO_TALK").click(); }}
                        key={i}>
                        {e + " "}
                    </span>
                )}
            </h1>
            <hr />
            <h1>{Data_Learn.VN}</h1>

            <hr />
            <button
                className="btn btn-warning"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    ReadMessage(Data_Learn.EN, [1, 2].PickRandom())
                }}
            >Nghe máy đọc nguyên câu</button>
            <br />
            <b>Đọc từng chữ:</b>
            <br />
            {Data_Learn.EN.split(" ").map((e, i) =>
                <div
                    style={{
                        border: "5px solid green",
                        padding: "5px",
                        cursor: "pointer",
                        display: "inline-block",
                        marginLeft: "10px"
                    }}
                    onClick={() => { ReadMessage(e, [1, 2].PickRandom()) }}
                    key={i}>
                    {e}
                </div>
            )}

            <h1>{Data_Learn.IPA}</h1>
            <hr />
            {Data_Commands}
            <br />
            <button
                className="btn btn-warning"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    document.getElementById("BUTTON_CLICK_TO_TALK").click();
                    SET_Data_Commands(Data_Learn.EN);
                    SET_Docthu("Docthu")
                }}
            >Đọc thử</button>
            {Docthu === "" ? null
                : Docthu === "Docthu" ? <img src="https://i.postimg.cc/1z95rjPs/Listening.gif" alt="https://i.postimg.cc/1z95rjPs/Listening.gif" width="100px" />
                    : <span style={{ fontSize: "larger", color: "red" }}> <b>Chính Xác - Chúc mừng</b></span>
            }
            <br />
            <b>Máy lắng nghe: </b>
            <i id="interrimID"></i>
            <hr />
            <button
                className="btn btn-warning"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    SET_Data_Learn("");
                    SET_Docthu("");
                    $("#ID_ShowTiengAnh").scrollTop(150)
                }}
            >Học câu khác</button>
            <hr />
            <div>
                <div>
                    <b>Từ điển hình ảnh:</b>
                    <br />
                    {Data_Learn.EN.split(" ").map((e, i) =>
                        <div
                            style={{
                                border: "5px solid green",
                                padding: "5px",
                                cursor: "pointer",
                                display: "inline-block",
                                marginLeft: "10px"
                            }}
                            onClick={() => { SET_Popup(e) }}
                            key={i}>
                            {e}
                        </div>
                    )}
                </div>
            </div>
            <hr />


            <hr />
            <Show_tienganhphothong_hocphatam />
            <button style={{ display: "none" }} onClick={() => {
                if ($("#messageRes").val() !== "" && Docthu === "Docthu") {
                    SET_Docthu("A");
                    ReadMessage("Great", [1, 2].PickRandom());
                    SET_Data_Commands("====")
                }
            }} id="messageResBtn"></button>

        </div>
    )
}


