
import { useEffect, useState } from "react"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.2ReadPaperTravel"
import Read_ReactSpeech from "../../../helpers/Read_ReactSpeechSlow"
import Check2String from "../../../../util/Check2String"
import DivNotCookieFixed from "../../../../util/DivNotCookieFixed"
import Sound from "../../../../util/Sound/Get_sound_reading"
import musicfile from '../../../../util/filedulieu/musicfile/musicfile';
import Handle_Onselect from "../../../../util/Handle_Onselect/Handle_Onselect"
import Dictionary from "../../../helpers/DictionaryReadPage"
import GetLongest from "../../../../util/GetLongest"
import ImageSearch from "../../../helpers/ImageSearch"
function GamePlay(props) {
    try {
        if (props.Data.length === 0) {
            return <div>Vui lòng chọn bài đọc - Back để quay lại chọn bài</div>
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
        props.Data.slice(Page_To_Read * 2, Page_To_Read * 2 + 2).forEach(e => {
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

        <div >
            <div className="row">
                <div className="col-12 mb-5">
                    <div className="col-12">
                        <button onClick={() => { SET_Sreen(true) }} className="btn btn-outline-info btn-sm">
                            Bắt đầu đọc
                        </button>
                        <button onClick={() => {
                            SET_Sreen(false);
                            props.SET_PageChange(0)
                        }} className="btn btn-outline-danger btn-sm ml-5">
                            Trở về chọn bài đọc
                        </button>
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
                <div className="col-12 mt-5">
                    <i> Sử dụng: Tùy chỉnh <b> độ chính xác và chế độ đọc</b> phù hợp. Đọc một hoặc nhiều câu có ( <span style={{ backgroundColor: "#EEEBEB" }}>phần màu đậm</span>), <b>dừng quãng khoảng một tí</b>  để máy lắng nghe rồi đọc tiếp. </i>
                    <i><b>Bôi đen để nghe máy đọc và tra từ điển hình ảnh.</b></i>
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
                            <button onClick={() => { SET_Sreen(false) }} className="btn btn-outline-info btn-sm">
                                Mở bảng tùy chỉnh
                            </button>
                            <button onClick={() => {
                                SET_Popup("")
                                SET_Sreen(false);
                                props.SET_PageChange(0)
                            }} className="btn btn-outline-danger btn-sm ml-5">
                                Thoát
                            </button>

                            <div style={{ maxWidth: "800px", width: "100%", textAlign: "left", marginLeft: "50%", transform: "translateX(-50%)" }}>
                                {props.Data.map((e, i) =>
                                    <div key={i} >
                                        {i >= Page_To_Read * 2 && i < Page_To_Read * 2 + 2 ?
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

                                <div style={{ width: "100%", textAlign: "center" }}>
                                    <button
                                        onClick={() => { SET_Page_To_Read(P => P - 1) }}
                                        className="btn btn-info">
                                        Back
                                    </button>
                                    <button
                                        onClick={() => { SET_Page_To_Read(P => P + 1) }}
                                        className="btn btn-info  ml-3">
                                        Next
                                    </button>
                                </div>
                                {DivNotCookieFixed()}
                            </div>
                        </div>

                    </div>
                    <hr />

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
                    // props.SET_Data_Commands(arrDataComnandsNew)
                    props.SET_Read_Data(Arr)
                    SET_Alert(A => A + 1)
                }
            }} id="messageResBtn">
            </button>

            {Popup !== "" ?
                <div
                    style={{
                        zIndex: 2,
                        position: "fixed",
                        left: "2%",
                        top: "2%",
                        border: "1px solid green",
                        borderRadius: "10px",
                        padding: "15px",
                        width: "20%",
                        minWidth: "250px",
                        maxHeight: "100%",
                        backgroundColor: "white",
                        overflow: "auto"
                    }}

                >
                    {Popup}
                    <hr />
                    <Dictionary Word={GetLongest(Popup)} />
                    <hr />
                    < ImageSearch Word={Popup} />
                    <hr />
                </div>
                : null}

        </div >
    )
}


export default GamePlay

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
