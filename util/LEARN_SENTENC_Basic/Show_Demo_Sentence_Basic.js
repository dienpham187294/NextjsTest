import { useState } from "react"
import Read_ReactSpeech from "../../pages/helpers/Read_ReactSpeech"
import ReadMessage from "../Read/ReadMessage"
import Dictaphone from "../../pages/helpers/RegcognitionV1-0-1AI0.2ReadPaperTravel"
import Check2String from "../String_tool/Check2String"
import List_IDs from "../List_IDs/List_IDs"
export default function Show_Demo_Sentence_Basic(OBJ_INPUT) {
    const [Data_Learn, SET_Data_Learn] = useState("")
    const [Data_Commands, SET_Data_Commands] = useState("====")
    const [Docthu, SET_Docthu] = useState("")
    const [Read_ready, SET_Read_ready] = useState("none")
    try {
        return (
            <div>
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
                        textAlign: 'justify'
                    }}>
                    {Data_Learn === ""
                        ?
                        <div>
                            <h1>{OBJ_INPUT["title"]}</h1>
                            <hr />
                            <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Bấm chọn câu muốn học</h3>
                            {OBJ_INPUT["data"].map((e, i) =>
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
                                        SET_Data_Learn(OBJ_INPUT["data"][i]);
                                    }}
                                >
                                    <h3>{e.VN}</h3>
                                </div>
                            )}
                        </div>
                        :
                        <div className="text-justify">
                            <hr />
                            <h1>{Data_Learn.VN}</h1>
                            <h1>{Data_Learn.EN}</h1>
                            Phiên âm: <br />
                            <h3>{Data_Learn.IPA}</h3>
                            <hr />
                            <button
                                style={{ display: Read_ready }}
                                className="btn btn-info"
                                onClick={() => {
                                    ReadMessage(Data_Learn.EN, 1)
                                }}
                            >Nghe máy đọc</button>
                            <hr />
                            <button
                                className="btn btn-info"
                                onClick={() => {
                                    SET_Data_Commands(Data_Learn.EN);
                                    SET_Docthu("Docthu")
                                    try {
                                        document.getElementById(List_IDs["BUTTON_CLICK_TO_TALK"]).click()
                                    } catch (error) {
                                        console.log("es")
                                    }
                                }}
                            >Đọc thử</button>
                            <hr />
                            <button
                                className="btn btn-info"
                                onClick={() => {
                                    SET_Data_Learn("");
                                    SET_Docthu("")
                                }}
                            >Học câu khác</button>
                            <hr />
                            <div>
                                {Docthu === "" ? null
                                    : Docthu === "Docthu" ? <img src="https://i.postimg.cc/YSxSrKQW/Voice-Recording-Animation.gif" width="100%" />
                                        : <h1>Chính Xác - Chúc mừng</h1>
                                }

                            </div>
                        </div>
                    }
                </div>
                <Dictaphone
                    Data={Data_Commands}
                />
                <button id={List_IDs["BUTTON_APPEAR_AFTER_READ_READY"]} onClick={() => { SET_Read_ready("initial") }} ></button>
                <Read_ReactSpeech />
                <button style={{ display: "none" }} onClick={() => {
                    console.log("onclick")
                    if ($("#messageRes").val() !== "") {
                        if (Check2String($("#messageRes").val(), Data_Commands)) {
                            SET_Docthu("A");
                            ReadMessage("Great", 2);
                            SET_Data_Commands("====")
                        }

                    }
                }} id="messageResBtn"></button>

            </div>
        )
    } catch (error) {
        return null
    }
}