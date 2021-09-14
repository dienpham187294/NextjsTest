import { useEffect, useState } from "react"
import Read_ReactSpeech from "../../../pages/helpers/Read_ReactSpeechSlow"
// import Dictionary_with_image from "../../../pages/helpers/IMAGE/Dictionary_with_image"
import Linkapi from "../../api/Linkapi"
import FullScreen from "../../fullscreen/fullscreen"
import Show_QuangCao from "../../Show/Show_QuangCao"
import Show_tienganhphothong_phanbaihoc from "../../Show/Show_tienganhphothong_phanbaihoc"
import Show_tienganhphothong_hocphatam from "../../Show/Show_tienganhphothong_hocphatam"
import Dictaphone from "../../../pages/helpers/RegcognitionV1-0-1AI0.2LearnBasic"
import MD_Image from "../../models/md_image"
import ReadMessage from "../../Read/ReadMessage"
const queryString = require('query-string');
// let linkReset = ""
let statusCount = 0;
let Int_nextDatalearn = 0;
export default function Show_Tieng_anh_lop_1(Dulieu_tieng_anh_lop_1, tokenCheck, href) {
    const [Data_Learn, SET_Data_Learn] = useState("")

    const [Name, SET_Name] = useState("")

    const [Status, SET_Status] = useState("")

    const [Num_page, SET_Num_page] = useState(0)


    const [Data_Commands, SET_Data_Commands] = useState("====")

    const [Docthu, SET_Docthu] = useState("")

    const [Game_Nhinhinhdoanchu, SET_Game_Nhinhinhdoanchu] = useState(false)

    const [Game_Nghevachoncau, SET_Game_Nghevachoncau] = useState(false)

    const [Score, SET_Score] = useState(0)



    const md_img = new MD_Image()

    useEffect(() => {
        const parsed = queryString.parse(window.location.search);
        if (parsed["token"] !== undefined) {
            if (!(parsed["token"].includes(tokenCheck))) {
                alert("Tài khoản không hợp lệ (token không tồn tại). Vui lòng nhắn tin englishtool.co để nhận được trợ giúp.")
            } else {
                CHECK_Token(parsed["token"], SET_Name);
                if (localStorage.getItem("score_ep")) {
                    SET_Score(localStorage.getItem("score_ep"))
                }
            }
        } else {
            alert("Cần token để sử dụng. Vui lòng nhắn tin englishtool.co để nhận được trợ giúp. Xin cảm ơn")
        }
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

                    {Name === ""
                        ? null
                        :
                        <div className="container">

                            <h3>Xin chào {Name}</h3>
                            <p>Điểm: {Score}</p>
                            <Dictaphone
                                Data={Data_Commands}
                            />
                            <hr />
                            <div className="row">
                                <div className="col-9">
                                    <select
                                        id="SelectID"
                                        style={{ padding: "5px", color: "red", fontSize: "20px" }}
                                        defaultValue="-1"
                                        onChange={(e) => {
                                            // md.updateOne_page(h_data[0].token, e.currentTarget.value)
                                            SET_Num_page(e.currentTarget.value)
                                            SET_Data_Learn("");
                                            try {
                                                $("#ID_ShowTiengAnh").scrollTop(150)
                                                $("#hrefID").attr("href", linkReset + "&p=" + $("#SelectID").val())
                                            } catch (error) {
                                                console.log("e")
                                            }
                                        }}>
                                        <option value="0">Chọn trang</option>
                                        {Dulieu_tieng_anh_lop_1.map((e, i) =>
                                            <option key={i} value={i}> {i + 1}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-3">
                                    <span>Trang.{parseInt(Num_page) + 1}</span>
                                </div>
                            </div>
                            <hr />
                            {Data_Learn === ""
                                ?
                                <div>
                                    <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Bấm chọn câu muốn học</h3>
                                    <a href="#id_trochoi">Chuyển nhanh đến trò chơi</a>
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
                                                Int_nextDatalearn = i
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
                                            <div className="row">
                                                <div className="col-9">
                                                    <h3>{e.VN}</h3>
                                                    <i style={{ color: "red" }}>{e.EN}</i>
                                                </div>
                                                <div className="col-3">
                                                    <i>Bấm chọn</i>
                                                </div>
                                            </div>
                                            {/* 
                                            <hr />
                                            <div>{md_img.Show_img(e.ArrImg)}</div> */}
                                        </div>
                                    )}
                                    <hr />
                                    <div id="id_trochoi">
                                        <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Trò chơi:</h3>



                                        {/* <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "inline-block", cursor: "pointer" }} onClick={() => { SET_Game_Nhinhinhdoanchu(true) }}>

                                            <h3 style={{ color: "red" }}> Nhìn hình đoán chữ</h3>
                                            <i>Bấm để chơi</i>
                                        </div> */}

                                        <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", display: "inline-block", cursor: "pointer" }} onClick={() => { SET_Game_Nghevachoncau(true) }}>
                                            <h3 style={{ color: "red" }}> Nghe và chọn câu</h3>
                                            <i>Bấm để chơi</i>

                                        </div>
                                        <br />
                                        {/* {Game_Nhinhinhdoanchu ? md_img.game_withImg(Dulieu_tieng_anh_lop_1.slice(0, parseInt(Num_page) + 1), SET_Game_Nhinhinhdoanchu) : null} */}
                                        {Game_Nghevachoncau ? md_img.game_withlisten(Dulieu_tieng_anh_lop_1.slice(0, parseInt(Num_page) + 1), SET_Game_Nghevachoncau) : null}

                                    </div>
                                    <hr />
                                    <div className="text-left">
                                        <i >Bản dịch tiếng việt vài nơi còn chưa chuẩn ngữ nghĩa, quý vị phụ huynh và học sinh thông cảm. Chúng tôi sẽ cố gắng cải thiện trong thời gian tới.</i>
                                    </div>
                                    <img src={Dulieu_tieng_anh_lop_1[Num_page].img} alt={Dulieu_tieng_anh_lop_1[Num_page].img} width="100%" />
                                    <hr />
                                    <div>
                                        <b>Liên hệ:</b> Phạm Văn Điện - 0918284482
                                        <br />
                                        <b>Facebook</b> <a href="https://www.facebook.com/profile.php?id=100010004440653" target="_blank">Bấm vào để liên hệ.</a>
                                    </div>
                                    <hr />
                                    <Show_tienganhphothong_hocphatam />
                                    <hr />
                                    {Show_QuangCao()}

                                </div>
                                :
                                <Show_tienganhphothong_phanbaihoc
                                    Data_Learn={Data_Learn} SET_Data_Learn={SET_Data_Learn}
                                    Data_Commands={Data_Commands} SET_Data_Commands={SET_Data_Commands}
                                    Docthu={Docthu} SET_Docthu={SET_Docthu}
                                    md_img={md_img}
                                />
                            }
                        </div>
                    }
                    <hr />
                </div>

                <Read_ReactSpeech />
                <p id="id_location"></p>
                <p id="DataAcross"></p>
                <button style={{ display: "none" }} onClick={() => {
                    if ($("#messageRes").val() !== "" && Docthu === "Docthu") {
                        // md.increase_score(h_data[0].token)


                        if (!localStorage.getItem("score_ep")) {
                            localStorage.setItem("score_ep", 1)
                            SET_Score(1)
                        } else {
                            localStorage.setItem("score_ep", parseInt(localStorage.getItem("score_ep")) + 1)
                            SET_Score(parseInt(localStorage.getItem("score_ep")) + 1)
                        }


                        SET_Score(S => S + 1)
                        SET_Docthu("A");
                        ReadMessage("Great", [1, 2].PickRandom());
                        SET_Data_Commands("====")
                    }
                }} id="messageResBtn"></button>
                <button onClick={() => {
                    try {
                        (Dulieu_tieng_anh_lop_1[Num_page].data[Int_nextDatalearn + 1].EN) ?
                            (SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[Int_nextDatalearn + 1]), Int_nextDatalearn++)
                            : null
                    } catch (error) {
                        SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[0]); Int_nextDatalearn = 0
                    }
                }} id="Btn_nextDatalearn"></button>
            </div >
        )
    } catch (error) {
        return null
    }




    // try {
    //     return (
    //         <div className="container">
    //             <div
    //                 id="ID_ShowTiengAnh"
    //                 style={{
    //                     position: "fixed",
    //                     top: "0px",
    //                     bottom: "0px",
    //                     left: "0px",
    //                     right: "0px",
    //                     border: "5px solid green",
    //                     borderRadius: "10px",
    //                     backgroundColor: "white",
    //                     textAlign: 'justify',
    //                     overflowX: "hidden",
    //                     overflowY: "auto"
    //                 }}>
    //                 <hr />
    //                 {Name === "" ? <h2>Xin chờ 5s...</h2> :
    //                     <div className="container">

    //                         <h3> {Name}</h3>
    //                         <p>Điểm {Score}</p>
    //                         <Dictaphone
    //                             Data={Data_Commands}
    //                         />
    //                         <hr />
    //                         <div className="row">
    //                             <div className="col-9">
    //                                 <select
    //                                     id="SelectID"
    //                                     style={{ padding: "5px", color: "red", fontSize: "20px" }}
    //                                     defaultValue="0"
    //                                     onChange={(e) => {
    //                                         SET_Num_page(e.currentTarget.value)
    //                                         SET_Data_Learn("");
    //                                         try {
    //                                             $("#ID_ShowTiengAnh").scrollTop(150)
    //                                         } catch (error) {
    //                                             console.log("e")
    //                                         }
    //                                     }}>
    //                                     <option value="-1">Chọn trang</option>
    //                                     {Dulieu_tieng_anh_lop_1.map((e, i) =>
    //                                         <option key={i} value={i}> {i + 1}</option>
    //                                     )}
    //                                 </select>
    //                             </div>
    //                             <div className="col-3">
    //                                 <span>Trang.{parseInt(Num_page) + 1}</span>
    //                             </div>
    //                         </div>
    //                         <hr />
    //                         {Data_Learn === ""
    //                             ?
    //                             <div>
    //                                 <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Bấm chọn câu muốn học</h3>
    //                                 {Dulieu_tieng_anh_lop_1[Num_page].data.map((e, i) =>
    //                                     <div
    //                                         key={i}
    //                                         style={{
    //                                             borderRadius: "10px",
    //                                             border: "1px solid green",
    //                                             backgroundColor: "#EEEBEB",
    //                                             marginTop: "15px",
    //                                             padding: "10px",
    //                                             cursor: "pointer"
    //                                         }}
    //                                         onClick={() => {
    //                                             SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[i]);
    //                                             Int_nextDatalearn = i
    //                                             try {
    //                                                 if (!window.fullscreen && statusCount === 0) {
    //                                                     FullScreen("ID_ShowTiengAnh")
    //                                                     statusCount = 1
    //                                                 }
    //                                             } catch (error) {
    //                                                 console.log("es")
    //                                             }
    //                                         }}
    //                                     >

    //                                         <h3>{e.VN}</h3>
    //                                         <i>{e.EN}</i>
    //                                     </div>
    //                                 )}
    //                                 <hr />

    //                                 <div className="text-left">
    //                                     <i >Bản dịch tiếng việt vài nơi còn chưa chuẩn ngữ nghĩa, quý vị phụ huynh và học sinh thông cảm. Chúng tôi sẽ cố gắng cải thiện trong thời gian tới.</i>
    //                                 </div>
    //                                 <img src={Dulieu_tieng_anh_lop_1[Num_page].img} alt={Dulieu_tieng_anh_lop_1[Num_page].img} width="100%" />
    //                                 <hr />
    //                                 <Show_tienganhphothong_hocphatam />
    //                                 <hr />
    //                                 {Show_QuangCao()}
    //                             </div>
    //                             :
    //                             <Show_tienganhphothong_phanbaihoc Data_Learn={Data_Learn} SET_Data_Learn={SET_Data_Learn} SET_Popup={SET_Popup} Data_Commands={Data_Commands} SET_Data_Commands={SET_Data_Commands} SET_Score={SET_Score} />
    //                         }
    //                     </div>
    //                 }
    //                 <hr />
    //             </div>

    //             <Read_ReactSpeech />
    //             {/* <Dictionary_with_image Popup={Popup} /> */}
    //             <p id="DataAcross"></p>
    //             <button onClick={() => {
    //                 try {
    //                     (Dulieu_tieng_anh_lop_1[Num_page].data[Int_nextDatalearn + 1].EN) ?
    //                         (SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[Int_nextDatalearn + 1]), Int_nextDatalearn++)
    //                         : null
    //                 } catch (error) {
    //                     SET_Data_Learn(Dulieu_tieng_anh_lop_1[Num_page].data[0]); Int_nextDatalearn = 0
    //                 }
    //             }} id="Btn_nextDatalearn"></button>
    //         </div >
    //     )
    // } catch (error) {
    //     return null
    // }
}






Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}



async function CHECK_Token(token, SET_Name) {
    try {
        const res = await fetch(Linkapi + "api/Token_app/check_token?token=" + token + "&browserinfo=" + navigator.userAgent, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        if (data.data["status"] === "token-found") {
            SET_Name("Xin chào " + data.data["username"])
        }
        if (data.data["status"] === "token-not-found") {
            alert("Tài khoản không tồn tại. Vui lòng nhắn tin vào page để được trợ giúp. Xin cảm ơn!")
        }
    } catch (error) {
        console.log(error)
    }
}
