
import { useEffect, useState } from "react"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.5ReadPaper"
import ReadMessage from "../../../../util/ReadMessage"
import Read_ReactSpeech from "../../../helpers/Read_ReactSpeech"
import Check2String from "../../../../util/Check2String"

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
            let Arr = props.Data;
            Arr.forEach(e => {
                e.forEach(ee => {
                    if (!ee.status) {
                        if (Check2String(Info_message, ee.text)) {
                            ee.status = true;
                        }
                    }
                })
            });
            props.SET_Read_Data(Arr)
            SET_Alert(A => A + 1)
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
                <div className="col-6" style={{ maxHeight: "300px", overflow: "auto" }}>
                    <Dictaphone
                        Data={props.Data_Commands}
                    />
                </div>
                <div className="col-6 text-justify" onMouseUp={() => {
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
                    {props.Data.map((e, i) =>
                        <div key={i}>

                            {props.ImageData[i] !== ""
                                ?
                                <div style={{ width: "100%", textAlign: "center" }}>
                                    <img style={{ maxWidth: "800px", width: "100%" }} alt={props.ImageData[i]} src={props.ImageData[i]} />
                                </div>
                                : ""}
                            {e.map((ee, ii) =>
                                <p key={ii}>{<span style={{ backgroundColor: ee.status ? "yellow" : "transparent" }}> {ee.text} </span>}</p>
                            )}
                        </div>
                    )}

                </div>

            </div>
            {FullScreen ?

                <div
                    style={{
                        position: "fixed",
                        right: "5px",
                        left: "5px",
                        top: "5px",
                        bottom: "5px",
                        border: "5px solid green",
                        borderRadius: "15px",
                        backgroundColor: "white",
                        padding: "30px",
                        fontSize: "large",
                        overflow: "auto"
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
                    {props.Data.map((e, i) =>
                        <div key={i}>

                            {props.ImageData[i] !== ""
                                ?
                                <div style={{ width: "100%", textAlign: "center" }}>
                                    <img style={{ maxWidth: "800px", width: "100%" }} alt={props.ImageData[i]} src={props.ImageData[i]} />
                                </div>
                                : ""}
                            {e.map((ee, ii) =>
                                <p key={ii}>{<span style={{ backgroundColor: ee.status ? "yellow" : "transparent" }}> {ee.text} </span>}</p>
                            )}
                        </div>
                    )}

                </div>
                : ""}
            <Read_ReactSpeech />
            <button style={{ display: "none" }} onClick={() => {
                SET_Info_message($("#messageRes").val())
            }} id="messageResBtn">
            </button>
        </div >
    )
}


export default GamePlay

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
