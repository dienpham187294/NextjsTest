import { useEffect, useState } from "react"
import Read_ReactSpeech from "../../../pages/helpers/Read_ReactSpeechSlow"
import Dictionary_with_image from "../../../pages/helpers/IMAGE/Dictionary_with_image"
import Linkapi from "../../api/Linkapi"
import FullScreen from "../../fullscreen/fullscreen"
import Show_QuangCao from "../../Show/Show_QuangCao"
import Show_tienganhphothong_phanbaihoc from "../../Show/Show_tienganhphothong_phanbaihoc"

const queryString = require('query-string');
let linkReset = ""
let statusCount = 0;
export default function Show_Tieng_anh_lop_1(Dulieu_tieng_anh_lop_1, tokenCheck, href) {
    const [Data_Learn, SET_Data_Learn] = useState("")

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
                    CHECK_Token(parsed["token"], SET_Name);
                    setTimeout(() => {
                        linkReset = Linkapi + href + parsed["token"]
                        $("#hrefID").attr("href", linkReset)
                        try {
                            const parsed1 = queryString.parse(window.location.search);
                            if (parsed1["p"] !== undefined) {
                                $("#SelectID").val(parsed1["p"]);
                                SET_Num_page(parsed1["p"])
                            }

                        } catch (error) {
                            console.log("e")
                        }
                    }, 1000);
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
                    id="ID_ShowTiengAnh"
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
                            <div className="row">
                                <div className="col-6">
                                    <span>Chọn trang: </span>
                                    <select
                                        id="SelectID"
                                        style={{ padding: "5px", color: "red", fontSize: "20px" }}
                                        defaultValue="0"
                                        onChange={(e) => {
                                            SET_Num_page(e.currentTarget.value)
                                            try {
                                                $("#hrefID").attr("href", linkReset + "&p=" + $("#SelectID").val())
                                            } catch (error) {
                                                console.log("e")
                                            }
                                        }}>
                                        {Dulieu_tieng_anh_lop_1.map((e, i) =>
                                            <option key={i} value={i}> {i + 1}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-6">
                                    <a
                                        id="hrefID"
                                        href=""
                                        style={{ float: "right", cursor: "pointer", border: "1px solid black", padding: "5px" }}
                                    >Khởi động lại</a>
                                </div>
                            </div>
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
                                                    if (!window.fullscreen && statusCount === 0) {
                                                        FullScreen("ID_ShowTiengAnh")
                                                        statusCount = 1
                                                    }
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

                                    <div className="text-left">
                                        <i >Bản dịch tiếng việt vài nơi còn chưa chuẩn ngữ nghĩa, quý vị phụ huynh và học sinh thông cảm. Chúng tôi sẽ cố gắng cải thiện trong thời gian tới.</i>
                                    </div>
                                    <img src={Dulieu_tieng_anh_lop_1[Num_page].img} alt={Dulieu_tieng_anh_lop_1[Num_page].img} width="100%" />
                                    <hr />
                                    {Show_QuangCao()}
                                </div>
                                :
                                <Show_tienganhphothong_phanbaihoc Data_Learn={Data_Learn} SET_Data_Learn={SET_Data_Learn} SET_Popup={SET_Popup} />
                            }
                        </div>
                    }
                    <hr />
                </div>
                <Read_ReactSpeech />
                <Dictionary_with_image Popup={Popup} />
                <p id="DataAcross"></p>
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
