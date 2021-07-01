
import { useEffect, useState } from "react"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.2ReadPaper"
import ReadMessage from "../../../../util/ReadMessage"
import Read_ReactSpeech from "../../../helpers/Read_ReactSpeechSlow"
import Check2String from "../../../../util/Check2String"
import DivNotCookieFixed from "../../../../util/DivNotCookieFixed"
import DivNotCookieNormal from "../../../../util/DivNotCookieNormal"
import { delettCookie, getCookie } from "../../../../util/functionCookies"
function GamePlay(props) {

    try {
        if (props.Data.length === 0) {
            return <div>Đang chờ dữ liệu</div>
        }
    } catch (error) {
        return <div>Lỗi dữ liệu nhập vào. Kiểm tra lại file dữ liệu</div>
    }

    const [Info_message, SET_Info_message] = useState("")
    const [Alert, SET_Alert] = useState(0)
    const [FullScreen, SET_FullScreen] = useState(false)
    useEffect(() => {
        if (Info_message !== "") {

        }
    }, [Info_message])


    return (
        <div >
            <div style={{ width: "100%", textAlign: "center" }}>
                <button onClick={() => { SET_FullScreen(true) }} className="btn btn-outline-info">
                    FullScreen
                </button>
            </div>

            <div className="row">
                <div className="col-6">
                    <Dictaphone
                        Data={props.Data_Commands}
                    />
                    <i><b>Bôi đen từng chữ hoặc nguyên câu để nghe máy đọc.</b></i>
                </div>
                <div className="col-6 text-justify" onMouseUp={() => {
                    try {
                        let txt;
                        if (window.getSelection) {
                            txt = window.getSelection();
                        }
                        else if (document.getSelection) {
                            txt = document.getSelection();
                        } else if (document.selection) {
                            txt = document.selection.createRange().text;
                        }
                        if (txt.toString() !== "") {
                            ReadMessage(txt, [1, 2].PickRandom())
                        }


                    } catch (error) {
                        console.log(error)
                    }
                }}>
                    {props.Data.map((e, i) =>
                        <div key={i}>

                            {props.ImageData[i] !== ""
                                ?
                                <div style={{ width: "100%", textAlign: "center" }}>
                                    <img style={{ maxWidth: "800px", width: "100%" }} alt={props.ImageData[i]} src={props.ImageData[i]} />
                                </div>
                                : ""}
                            {e.map((ee, ii) =>
                                <p key={ii}>{<span style={{ backgroundColor: ee.status ? "yellow" : "#EEEBEB" }}> {ee.text}</span>}.</p>
                            )}
                        </div>
                    )}
                    {DivNotCookieNormal()}
                </div>

            </div>
            {FullScreen ?

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
                        try {
                            var txt = "";

                            if (window.getSelection) {
                                txt = window.getSelection();
                            }
                            else if (document.getSelection) {
                                txt = document.getSelection();
                            } else if (document.selection) {
                                txt = document.selection.createRange().text;
                            }
                            ReadMessage(txt, [1, 2].PickRandom())

                        } catch (error) {
                            console.log(error)
                        }
                    }}>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <button onClick={() => { SET_FullScreen(false) }} className="btn btn-outline-info">
                            FullScreen-Exit
                        </button>
                    </div>
                    <hr />
                    <div style={{ margin: "30px" }}>
                        {props.Data.map((e, i) =>
                            <div key={i}>

                                {props.ImageData[i] !== ""
                                    ?
                                    <div style={{ width: "100%", textAlign: "center" }}>
                                        <img style={{ maxWidth: "800px", width: "100%" }} alt={props.ImageData[i]} src={props.ImageData[i]} />
                                    </div>
                                    : ""}
                                {e.map((ee, ii) =>
                                    <p key={ii}>{<span style={{ backgroundColor: ee.status ? "yellow" : "#EEEBEB" }}> {ee.text}</span>}.</p>
                                )}
                            </div>
                        )}
                        {DivNotCookieFixed()}
                    </div>
                </div>
                : ""}




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
                    props.SET_Data_Commands(arrDataComnandsNew)
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
