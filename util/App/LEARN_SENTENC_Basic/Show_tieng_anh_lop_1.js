import { useEffect, useState } from "react"
import Read_ReactSpeech from "../../../pages/helpers/Read_ReactSpeechSlow"
import ReadMessage from "../../Read/ReadMessage"
import Dictaphone from "../../../pages/helpers/RegcognitionV1-0-1AI0.2LearnBasic"
import Check2String from "../../String_tool/Check2String"
import List_IDs from "../../List_IDs/List_IDs"
import Linkapi from "../../api/Linkapi"
import Dictionary_with_image from "../../../pages/helpers/IMAGE/Dictionary_with_image"
const queryString = require('query-string');
export default function Show_Tieng_anh_lop_1(Dulieu_tieng_anh_lop_1, tokenCheck) {

    const [Data_Learn, SET_Data_Learn] = useState("")

    const [Data_Commands, SET_Data_Commands] = useState("====")

    const [Docthu, SET_Docthu] = useState("")

    const [Data_use, SET_Data_use] = useState(Dulieu_tieng_anh_lop_1[0].data)

    const [Name, SET_Name] = useState("")

    const [Status, SET_Status] = useState(0)

    const [Num_page, SET_Num_page] = useState(0)

    const [Popup, SET_Popup] = useState("")
    useEffect(() => {
        setTimeout(() => {
            const parsed = queryString.parse(window.location.search);
            if (parsed["token"] !== undefined) {
                if (!(parsed["token"].includes(tokenCheck))) {
                    alert("Tài khoản không hợp lệ (token không tồn tại). Vui lòng nhắn tin englishtool.co để nhận được trợ giúp.")
                } else {
                    CHECK_Token(parsed["token"], SET_Name)
                }
            } else {
                alert("Cần token để sử dụng. Vui lòng nhắn tin englishtool.co để nhận được trợ giúp. Xin cảm ơn")
            }
        }, 5000)
    }, [Status])
    try {
        return (
            <div className="container">
                <div
                    style={{
                        position: "fixed",
                        top: "0px",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        border: "5px solid green",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        textAlign: 'justify',
                        overflowX: "hidden",
                        overflowY: "auto"
                    }}>
                    <hr />

                    {Name === "" ? <h2>Xin chờ 5s...</h2> :
                        <div className="container">
                            <h3> {Name}</h3>
                            <hr />
                            <select id="SelectID" onChange={(e) => {
                                SET_Num_page(e.currentTarget.value)
                            }}>
                                <option>Chọn trang</option>
                                {Dulieu_tieng_anh_lop_1.map((e, i) =>
                                    <option key={i} value={i}>{i + 1}</option>
                                )}
                            </select>
                            <hr />
                            {Data_Learn === ""
                                ?
                                <div>
                                    <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Bấm chọn câu muốn học</h3>
                                    {Dulieu_tieng_anh_lop_1[Num_page].data.map((e, i) =>
                                        <div
                                            key={i}
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid green",
                                                backgroundColor: "#EEEBEB",
                                                marginTop: "15px",
                                                padding: "10px",
                                                cursor: "pointer"
                                            }}
                                            onClick={() => {
                                                SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[i]);
                                                try {
                                                    document.getElementById(List_IDs["BUTTON_CLICK_TO_TALK"]).click()
                                                } catch (error) {
                                                    console.log("es")
                                                }
                                            }}
                                        >

                                            <h3>{e.VN}</h3>
                                            <i>{e.EN}</i>
                                        </div>
                                    )}
                                    <hr />
                                    <img src={Dulieu_tieng_anh_lop_1[Num_page].img} alt={Dulieu_tieng_anh_lop_1[Num_page].img} width="100%" />
                                </div>
                                :
                                <div className="text-justify">
                                    <hr />
                                    <h1>{Data_Learn.EN}</h1>
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
                                    <button
                                        className="btn btn-warning"
                                        style={{ fontSize: "larger", padding: "20px" }}
                                        onClick={() => {
                                            SET_Data_Commands(Data_Learn.EN);
                                            SET_Docthu("Docthu")
                                        }}
                                    >Đọc thử</button>
                                    {Docthu === "" ? null
                                        : Docthu === "Docthu" ? <img src="https://i.postimg.cc/1z95rjPs/Listening.gif" alt="https://i.postimg.cc/1z95rjPs/Listening.gif" width="100px" />
                                            : <span style={{ fontSize: "larger", color: "red" }}> <b>Chính Xác - Chúc mừng</b></span>
                                    }
                                    <hr />
                                    <button
                                        className="btn btn-warning"
                                        style={{ fontSize: "larger", padding: "20px" }}
                                        onClick={() => {
                                            SET_Data_Learn("");
                                            SET_Docthu("")
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
                                </div>
                            }
                        </div>
                    }
                    <hr />
                </div>
                <Dictaphone
                    Data={Data_Commands}
                />
                <Dictionary_with_image Popup={Popup} />
                <Read_ReactSpeech />
                <button style={{ display: "none" }} onClick={() => {
                    if ($("#messageRes").val() !== "" && Docthu === "Docthu") {
                        if (Check2String($("#messageRes").val(), Data_Commands)) {
                            SET_Docthu("A");
                            ReadMessage("Great", [1, 2].PickRandom());
                            SET_Data_Commands("====")
                        }
                    }
                }} id="messageResBtn"></button>

            </div >
        )
    } catch (error) {
        return null
    }
}

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}



async function CHECK_Token(token, SET_Name) {
    try {
        let browserinfo = $("#ID_TEXT_BROWSERNAME").text() + $("#Detect_device").text()
        const res = await fetch(Linkapi + "api/Token_app/check_token?token=" + token + "&browserinfo=" + browserinfo, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        if (data.data["status"] === "token-found") {
            SET_Name("Xin chào " + data.data["username"] + ". Chúc " + data.data["username"] + " học tiếng anh vui vẻ.")
        }
        if (data.data["status"] === "token-not-found") {
            alert("Tài khoản không tồn tại. Vui lòng nhắn tin vào page để được trợ giúp. Xin cảm ơn!")
        }
    } catch (error) {
        console.log(error)
    }
}