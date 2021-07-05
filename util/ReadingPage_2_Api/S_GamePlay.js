
import { useEffect, useState } from "react"
import Dictaphone from "../../pages/helpers/RegcognitionV1-0-1AI0.2ReadPaperTravel"
import Read_ReactSpeech from "../../pages/helpers/Read_ReactSpeechSlow"
import Check2String from "../Check2String"
import Sound from "../Sound/Get_sound_reading"
import musicfile from '../filedulieu/musicfile/musicfile';
import Handle_Onselect from "../Handle_Onselect/Handle_Onselect"
import Dictionary_with_image from "../../pages/helpers/Dictionary_with_image"
import Click_full_Screen from "../fullscreen/fullscreen"
import Cookies_ReadingPage from "../Cookies/Cookies_ReadingPage"
function GamePlay(props) {
    try {
        if (props.Data.length === 0) {
            return <div>Đang tải dữ liệu ....</div>
        }
    } catch (error) {
        return <div>Lỗi dữ liệu nhập vào. Kiểm tra lại file dữ liệu</div>
    }
    const [Alert, SET_Alert] = useState(0)

    const [Page_To_Read, SET_Page_To_Read] = useState(0)

    const [Sreen, SET_Sreen] = useState(false)

    const [Popup, SET_Popup] = useState("")
    useEffect(() => {
        let ArrComands = []
        props.Data.slice(Page_To_Read * props.OBJ_Data_Input["Number_of_Div_To_Read"], Page_To_Read * props.OBJ_Data_Input["Number_of_Div_To_Read"] + props.OBJ_Data_Input["Number_of_Div_To_Read"]).forEach(e => {
            e.forEach(ee => {
                ArrComands.push(ee.text)
            })
        })
        props.SET_Data_Commands(ArrComands)
    }, [Page_To_Read])

    useEffect(() => {
        console.log(Popup)
    }, [Popup])
    return (

        <div id="ReadingPage" style={{ backgroundColor: "white", overflow: "auto" }} >
            <div className="row">
                <div className="col-12 mb-5">
                    <div className="col-12">
                        <button onClick={() => { SET_Sreen(true) }} className="btn btn-info">
                            Bắt đầu đọc
                        </button>
                        <button onClick={() => {
                            SET_Sreen(false);
                            props.SET_PageChange(0)
                        }} className="btn btn-outline-danger btn-sm ml-5">
                            Trở về chọn bài đọc
                        </button>
                        <hr />
                        <b>Tips: </b>
                        <i>Bật lắng nghe giọng nói
                            <span
                                style={{ backgroundColor: "yellow", padding: "0 15px" }}
                            >Click to talk.
                            </span>
                            Chọn các thông số
                            <span
                                style={{ backgroundColor: "yellow", padding: "0 15px" }}
                            >Độ chính xác
                            </span>
                            và
                            <span
                                style={{ backgroundColor: "yellow", padding: "0 15px" }}
                            >Chế độ đọc.
                            </span>
                            Bạn có thể chọn một đoạn nhạc nhẹ để nghe trong lúc đọc.
                            <br />
                            Bấm  <span
                                style={{ backgroundColor: "yellow", padding: "0 15px" }}
                            >Bắt đầu đọc
                            </span> để bắt đầu. Chúc bạn có một đoạn thời gian vui vẻ.
                            <br />

                        </i>
                    </div>
                </div>


                <div className="col-12">
                    <Dictaphone
                        Data={props.Data_Commands}
                    />
                </div>
                <div className="col-12">
                    <i>Chọn nhạc để nghe trong lúc đọc</i>
                    <select onChange={(e) => {
                        let Arr = document.getElementsByClassName("soundClass");
                        if (Arr.length > 0) {
                            Arr[Arr.length - 1].pause()
                        }
                        Sound(e.currentTarget.value)
                    }} className="form-control" defaultValue="music">
                        <option value="music">Chọn nhạc</option>
                        {musicfile.map((e, i) =>
                            <option key={i} value={e.link}>{e.name}</option>
                        )}
                        <option value="off">Off Music</option>
                    </select>
                </div>
                <div className="col-12 mt-5 mb-5">
                    <i><b>Tips:</b>  Tùy chỉnh <b> độ chính xác và chế độ đọc</b> phù hợp. Đọc một hoặc nhiều câu có ( <span style={{ backgroundColor: "#EEEBEB" }}>phần màu đậm</span>), <b>dừng quãng khoảng một tí</b>  để máy lắng nghe rồi đọc tiếp. </i>
                    <i><b>Bôi đen để nghe máy đọc và tra từ điển hình ảnh.</b></i>
                </div>
                <div className="text-justify p-3">
                    <p>
                        <b>
                            <i>
                                Luyện đọc văn bản thành tiếng có thể rèn luyện khả năng phát âm, nâng cao khả năng
                                cảm nhận được câu nói, văn bản, biết nhấn nhá theo ngữ điệu, văn cảnh
                                lâu dần sẽ tránh được đọc, nói một cách rời rạc, ngắc ngứ, thiếu liên mạch
                                gây khó chịu và khó hiểu cho người nghe.
                            </i>
                        </b>
                    </p>
                </div>
            </div>






            {Sreen ?
                <div
                    style={{
                        position: "fixed",
                        right: "0px",
                        left: "0px",
                        top: "0px",
                        bottom: "0px",
                        border: "5px solid green",
                        borderRadius: "15px",
                        backgroundColor: "white",
                        fontSize: "large",
                        overflow: "auto",
                        textJustify: "auto"
                    }}
                    onMouseUp={() => {
                        Handle_Onselect(SET_Popup)
                    }}
                    onTouchEnd={
                        () => { Handle_Onselect(SET_Popup) }
                    }
                >

                    <div style={{ width: "100%", textAlign: "center" }}>

                        <div >
                            <button onClick={() => { Click_full_Screen("ReadingPage") }} className="btn btn-outline-info btn-sm">
                                FullScreen
                            </button>
                            <button onClick={() => { SET_Sreen(false) }} className="btn btn-outline-info btn-sm ml-1">
                                Mở bảng tùy chỉnh
                            </button>
                            <button onClick={() => {
                                SET_Popup("")
                                SET_Sreen(false);
                                props.SET_PageChange(0)
                            }} className="btn btn-outline-danger btn-sm ml-1">
                                Thoát
                            </button>

                            <div style={{ maxWidth: "800px", width: "100%", textAlign: "left", marginLeft: "50%", transform: "translateX(-50%)", padding: "5px" }}>
                                {Cookies_ReadingPage(props.OBJ_Data_Input["Buycode"])}
                                {props.Data.map((e, i) =>
                                    <div key={i} >
                                        {i >= Page_To_Read * props.OBJ_Data_Input["Number_of_Div_To_Read"]
                                            && i < Page_To_Read * props.OBJ_Data_Input["Number_of_Div_To_Read"] + props.OBJ_Data_Input["Number_of_Div_To_Read"] ?
                                            <div>
                                                {
                                                    props.ImageData[i] !== ""
                                                        ?
                                                        <div style={{ width: "100%" }}>
                                                            <img style={{ maxWidth: "800px", width: "100%" }} alt={props.ImageData[i]} src={props.ImageData[i]} />
                                                        </div>
                                                        : ""
                                                }
                                                {

                                                    e.map((ee, ii) =>
                                                        <p key={ii}>{<span style={{ padding: "5px", backgroundColor: ee.status ? "yellow" : "#EEEBEB" }}> {ee.text}</span>}.</p>
                                                    )

                                                }
                                            </div>
                                            : ""}
                                    </div>
                                )}



                            </div>
                            <div style={{ width: "100%", textAlign: "center" }}>
                                <button
                                    style={{ position: "absolute", bottom: "5%", left: "10px" }}
                                    onClick={() => {
                                        if (Page_To_Read !== 0) {
                                            SET_Page_To_Read(P => P - 1)
                                        }
                                    }}
                                    className="btn btn-outline-info">
                                    Back
                                </button>
                                <button
                                    style={{ position: "absolute", bottom: "5%", right: "10px" }}
                                    onClick={() => { SET_Page_To_Read(P => P + 1) }}
                                    className="btn btn-outline-info  ml-3">
                                    Next
                                </button>
                            </div>
                        </div>

                    </div>
                    <hr />

                </div>

                : ""
            }
            <Dictionary_with_image Popup={Popup} />
            <Read_ReactSpeech />
            <button style={{ display: "none" }} onClick={() => {
                console.log("onclick")
                if ($("#messageRes").val() !== "") {
                    let Arr = props.Data;
                    let arrDataComnandsNew = []
                    Arr.forEach(e => {
                        e.forEach(ee => {
                            if (!ee.status) {
                                if (Check2String($("#messageRes").val(), ee.text)) {
                                    ee.status = true;
                                } else {
                                    arrDataComnandsNew.push(ee.text);
                                }

                            }
                        })
                    });
                    // props.SET_Data_Commands(arrDataComnandsNew)
                    props.SET_Read_Data(Arr)
                    SET_Alert(A => A + 1)
                }
            }} id="messageResBtn">
            </button>
        </div >
    )
}


export default GamePlay

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
