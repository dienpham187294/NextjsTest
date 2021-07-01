
import { useEffect, useState } from "react"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.2ReadPaperTravel"
import Read_ReactSpeech from "../../../helpers/Read_ReactSpeechSlow"
import Check2String from "../../../../util/Check2String"
import DivNotCookieFixed from "../../../../util/DivNotCookieFixed"
import Sound from "../../../../util/sound"
import musicfile from '../../../../util/filedulieu/musicfile/musicfile';
import Handle_Onselect from "../../../../util/Handle_Onselect/Handle_Onselect"
function GamePlay(props) {
    try {
        if (props.Data.length === 0) {
            return <div>Đang chờ dữ liệu</div>
        }
    } catch (error) {
        return <div>Lỗi dữ liệu nhập vào. Kiểm tra lại file dữ liệu</div>
    }
    const [Alert, SET_Alert] = useState(0)
    const [FullScreen, SET_FullScreen] = useState(false)
    const [Page_To_Read, SET_Page_To_Read] = useState(0)
    useEffect(() => {
        let ArrComands = []
        props.Data.slice(Page_To_Read * 2, Page_To_Read * 2 + 2).forEach(e => {
            e.forEach(ee => {
                ArrComands.push(ee.text)
            })
        })
        props.SET_Data_Commands(ArrComands)
    }, [Page_To_Read])

    return (
        <div >


            <div className="row">
                <div className="col-6">
                    <Dictaphone
                        Data={props.Data_Commands}
                    />
                    <i><b>Bôi đen từng chữ hoặc nguyên câu để nghe máy đọc.</b></i>
                </div>
                <div className="col-6 text-justify">
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <button onClick={() => { SET_FullScreen(true) }} className="btn btn-outline-info">
                            Start
                        </button>
                    </div>
                </div>
            </div>
            {FullScreen ?

                <div
                    style={{
                        position: "fixed",
                        right: "0px",
                        left: "20%",
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
                        Handle_Onselect()
                    }}>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <button
                            style={{
                                position: "fixed",
                                bottom: "1px",
                                left: "55%"
                            }}
                            onClick={() => { SET_Page_To_Read(P => P - 1) }}
                            className="btn btn-info">
                            Back
                        </button>
                        <button
                            style={{
                                position: "fixed",
                                bottom: "1px",
                                right: "35%"
                            }}
                            onClick={() => { SET_Page_To_Read(P => P + 1) }}
                            className="btn btn-info  ml-3">
                            Next
                        </button>
                        <button onClick={() => { SET_FullScreen(false) }} className="btn btn-outline-danger">
                            Stop
                        </button>
                        <select onChange={(e) => {
                            let Arr = document.getElementsByClassName("soundClass");
                            if (Arr.length > 0) {
                                Arr[Arr.length - 1].pause()
                            }
                            Sound(e.currentTarget.value)
                        }} className="form-control" defaultValue="music">
                            <option value="music">Music</option>
                            {musicfile.map((e, i) =>
                                <option key={i} value={e.link}>{e.name}</option>
                            )}
                            <option value="off">Off Music</option>
                        </select>
                    </div>
                    <hr />
                    <div style={{ margin: "30px" }}>
                        {props.Data.map((e, i) =>
                            <div key={i} >
                                {i >= Page_To_Read * 2 && i < Page_To_Read * 2 + 2 ?
                                    <div>
                                        {
                                            props.ImageData[i] !== ""
                                                ?
                                                <div style={{ position: "absolute", width: "100%", textAlign: "center", zIndex: -1, top: "50px" }}>
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
                        {DivNotCookieFixed()}
                    </div>
                </div>
                : ""
            }




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
