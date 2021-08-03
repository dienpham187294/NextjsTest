import { useState } from "react"

import ReadMessage from "../Read/ReadMessage"
export default function Show_tienganhphothong_phanbaihoc({ Data_Learn, SET_Data_Learn, SET_Popup, Data_Commands, SET_Data_Commands }) {
    const [Docthu, SET_Docthu] = useState("")
    return (
        <div className="text-justify">
            <hr />

            <h3>
                {Data_Learn.EN.split(" ").map((e, i) =>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => { SET_Data_Commands(e); SET_Docthu("Docthu"); document.getElementById("BUTTON_CLICK_TO_TALK").click(); }}
                        key={i}>
                        {e + " "}
                    </span>
                )}
            </h3>
            <hr />
            <h3>{Data_Learn.VN}</h3>

            <hr />
            <button
                className="btn btn-primary"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    ReadMessage(Data_Learn.EN, [1, 2].PickRandom())
                }}
            >Nghe máy đọc nguyên câu</button>
            <br />
            <b>Bấm vào từ để nghe máy đọc:</b>
            <br />
            {Data_Learn.EN.split(" ").map((e, i) =>
                <div
                    style={{
                        border: "5px solid green",
                        borderRadius: "5px",
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
            <b>Chọn từng từ để luyện nói</b>
            <br />
            <p>
                {Data_Learn.EN.split(" ").map((e, i) =>
                    <span
                        style={{
                            border: "2px solid blue",
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
            <br />
            <button
                className="btn btn-danger"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    document.getElementById("BUTTON_CLICK_TO_TALK").click();
                    SET_Data_Commands(Data_Learn.EN);
                    SET_Docthu("Docthu")
                }}
            >Luyện nói nguyên câu</button>
            {Docthu === "" ? null
                : Docthu === "Docthu" ?
                    <>
                        <img src="https://i.postimg.cc/1z95rjPs/Listening.gif" alt="https://i.postimg.cc/1z95rjPs/Listening.gif" width="70px" />
                        <h5 style={{ color: "blue" }}>{Data_Commands}</h5>
                    </>
                    : <h5 style={{ color: "red" }}> Chính Xác - Chúc mừng</h5>
            }
            <br />
            <b>Máy lắng nghe bạn nói... : </b>
            <i id="interrimID"></i>
            <hr />
            <button
                className="btn btn-info"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    SET_Data_Learn("");
                    SET_Docthu("");
                    $("#ID_ShowTiengAnh").scrollTop(150)
                }}
            >Chọn câu khác.</button>
            <button
                className="btn btn-primary ml-2"
                style={{ fontSize: "larger", padding: "20px" }}
                onClick={() => {
                    try {
                        $("#Btn_nextDatalearn").click()
                    } catch (error) {
                        console.log(error)
                    }
                    // SET_Num_page(A => A + 1)
                    // SET_Data_Learn("");
                    // SET_Docthu("");
                    // $("#ID_ShowTiengAnh").scrollTop(150)
                }}
            >Câu tiếp.</button>
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


