import React, { useEffect, useState } from "react";
// import Read_ReactJSX from "../../../pages/helpers/Read_ReactJSX"
import $ from "jquery"
import DataTool from "./S_Data_tool"
import ReadReactSpeech from "../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../util/Read/ReadMessage"
const stringSimilarity = require("string-similarity");
// import Cookies_ReadingPage from "../../../../../util/Cookies/Cookies_ReadingPage"
let VoicePick = 1;
let State_of_Anwer = "none";
let Data_temp_Strickmode;
let AllData_OfOne;

let interNguoitieptheo, iNguoitieptheo;

function ArrOfPeopeAppear_ReactJSX(props) {

    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(["hi how are you"])
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState("")
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);
    const [Score, SET_Score] = useState(0)
    const [Sai, SET_Sai] = useState(0)

    useEffect(() => {
        props.SET_Data_Commands(Info_StrickAnwers_Reactdata)
    }, [Info_StrickAnwers_Reactdata])

    useEffect(
        () => {
            inter()
            props.Total.stObj.timebegin = Date.now()
            props.Total.stObj.indexOfPeople = 0
            props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData = AddTo_Show_ArrOfPeopeAppear_ReactData
            props.Total.fnObj.Submit_Show_OnePeopeAppear_ReactData = Submit_Show_OnePeopeAppear_ReactData
            props.Total.fnObj.Xuly = Xuly

            AddTo_Show_ArrOfPeopeAppear_ReactData(props.Total.stObj.indexOfPeople)

        }, []
    );

    function inter() {
        setTimeout(() => {
            try {
                $("#idClickMiniGame")[0].click()
            } catch (error) {
                inter()
            }
        }, 1000)
    }
    function Xuly(Info_message) {
        try {
            if (State_of_Anwer !== "none") {
                if (State_of_Anwer === "strictmode") {
                    // Buoc 1 lay du lieu cuc bo 
                    let Data_Strict = Data_temp_Strickmode
                    //Buoc 2 xu ly data
                    let Rate = 6
                    let Length_C = 0
                    let MessageArr = ["none"]
                    //----------------------
                    Data_Strict.forEach(e => {
                        e.manspeak.forEach(ee => {
                            let TEMP_CHECK = checkMessageReturnNumber(Info_message, ee)
                            if (TEMP_CHECK[0] >= Rate) {
                                if (TEMP_CHECK[0] === Length_C && TEMP_CHECK[1] > Length_C) {
                                    Rate = TEMP_CHECK[0];
                                    Length_C = TEMP_CHECK[1];
                                    MessageArr.push(e);
                                } else {
                                    Rate = TEMP_CHECK[0];
                                    Length_C = TEMP_CHECK[1];
                                    MessageArr.push(e)

                                }
                            }
                        })
                    })
                    //----------------------

                    if (MessageArr[MessageArr.length - 1] !== "none") {
                        let data = MessageArr[MessageArr.length - 1];
                        if (data.robotspeak.length > 0) {
                            ReadMessage(data.robotspeak.PickRandom(), VoicePick);
                        }
                        if (data.handling_next.length > 0) {
                            Data_temp_Strickmode = (data.handling_next)
                            let arrTemp = [];
                            data.handling_next.forEach(e => {
                                e.manspeak.forEach(ee => {
                                    arrTemp.push(ee)
                                })
                            })
                            SET_Info_StrickAnwers_Reactdata(arrTemp)
                        } else {
                            Data_temp_Strickmode = (AllData_OfOne.middle.handling_next)
                            let arrTemp = [];
                            AllData_OfOne.middle.handling_next.forEach(e => {
                                e.manspeak.forEach(ee => {
                                    arrTemp.push(ee)
                                })
                            })
                            SET_Info_StrickAnwers_Reactdata(arrTemp)

                        }
                        SET_Info_Icon_Reactdata(data.icon)
                        Submit_check_funtion_indata(data.function);
                    }

                }
            }
        } catch (error) {
            console.log(error)
        }
    }


    /*BEGIN ARR TO SHOW */
    async function AddTo_Show_ArrOfPeopeAppear_ReactData(index) {
        try {
            // console.log(index, props.ArrOfPeopeAppear_ReactData[index]);
            if (props.ArrOfPeopeAppear_ReactData[index] !== undefined) {
                props.ArrOfPeopeAppear_ReactData[index].total.status = false;
                let n = props.ArrOfPeopeAppear_ReactData[index]
                AllData_OfOne = (n);
                State_of_Anwer = "strictmode"
                Data_temp_Strickmode = (n.begin.handling_next)
                let Arr_HoldAllManSpeak = [];
                n.begin.handling_next.forEach(e => {
                    e.manspeak.forEach(ee => {
                        Arr_HoldAllManSpeak.push(ee)
                    })
                })
                SET_Info_StrickAnwers_Reactdata(Arr_HoldAllManSpeak)
                await SET_Avatar_Reactdata(n.total.image);
                await SET_Info_ToSunmit_Reactdata([])
                await SET_Info_ToSunmit_Reactdata(n.total.submitsyntax)
                if (n.total.gender === "female") {
                    VoicePick = (1);
                } else {
                    VoicePick = (2);
                }
                ReadMessage(n.total.robotspeakfirst.PickRandom(), VoicePick)
            } else {
                $("#showEnd").show()
                $("#time").text(Math.floor((Date.now() - props.Total.stObj.timebegin) / 1000 / 60) + " phút " + Math.floor(((Date.now() - props.Total.stObj.timebegin)) / 1000) % 60 + " giây.")
            }

        } catch (error) {

        }
    }

    function Submit_check_funtion_indata(command) {
        try {

            if (command.end_successfull) {
                State_of_Anwer = "none";
                SET_Score(S => S + 1)
                $("#divCountdown").show();
                iNguoitieptheo = 3
                interNguoitieptheo = setInterval(() => {
                    iNguoitieptheo -= 1;
                    $("#countDown").text(iNguoitieptheo)
                    if (iNguoitieptheo === 0) {
                        $("#divCountdown").hide();
                        $("#countDown").text(3)
                        $("#btnNguoitieptheo")[0].click();
                        clearInterval(interNguoitieptheo)
                    }
                }, (1000));
            }
            if (command.end_unsuccessfull) {
                State_of_Anwer = "none";
            }
        } catch (error) {
            console.log(error)
        }
    }
    function Submit_Show_OnePeopeAppear_ReactData(e) {
        let data = AllData_OfOne

        try {
            let status = false
            let n = e.split("//").slice(-1)[0]
            // console.log([0].indexOf("Elizabeth"))
            data.total.submit.forEach(e => {
                if (e.includes(n)) {
                    status = true
                }
            })
            if (!status) {
                SET_Sai(S => S + 1)
            }
        } catch (error) {
        }


        try {
            data.total.submit.forEach((eee, i) => {
                let status_check_submit = true
                eee.forEach((ee, ii) => {
                    let text = ee;
                    if (typeof (ee) === "string") {
                        text = ee.toLowerCase()
                    }
                    if (e.toLowerCase().indexOf(text) === -1) {
                        status_check_submit = false
                    } else {
                        // $("")
                        $("#ct" + i + ii).css("background-color", "yellow");
                        $("#ct1" + i + ii).text(text);
                        // console.log()
                    }
                })

                if (status_check_submit) {
                    if (data.end !== null) {
                        Data_temp_Strickmode = (data.end.handling_next);
                        let arrTemp = []
                        data.end.handling_next.forEach(e => {
                            e.manspeak.forEach(ee => {
                                arrTemp.push(ee)
                            })
                        })
                        SET_Info_StrickAnwers_Reactdata(arrTemp);
                        $("#complete").html("<h4>Hoàn thành chọn đáp án!</h4>")
                    } else {
                        Submit_check_funtion_indata({ end_successfull: true })
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    function SortLetter(Input) {
        let Res = [];
        let Data = Input.split(" ")
        Data.forEach(e => {
            Res.push(e.charAt(0) + "...")
        })

        return Res.join(" ")
    }

    function Show_Info_StrickAnwers_Reactdata() {
        try {
            if (Score < 10) {
                return Info_StrickAnwers_Reactdata.map((e, index) =>
                    <span className="Span_Show_Info_StrickAnwers_Reactdata" key={index}>{e} <b style={{ backgroundColor: "black" }}>||</b> </span>
                )
            }
            else {
                return Info_StrickAnwers_Reactdata.map((e, index) =>
                    <span className="Span_Show_Info_StrickAnwers_Reactdata" key={index}>{SortLetter(e)} <b style={{ backgroundColor: "black" }}>||</b> </span>
                )
            }
        } catch (error) {
            console.log(error)
        }
        return null
    }




    /*END SHOW SEARCH */

    function Show_OnePeopeAppear_ReactData() {
        try {
            if (Info_Avatar_Reactdata !== null) {
                return (
                    <div>
                        <div className="GameSence_Playing_OneShow">
                            <div>
                                <img alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="60px" />
                                {Info_Icon_Reactdata !== "" ?
                                    <>
                                        <img alt={Info_Icon_Reactdata} src={Info_Icon_Reactdata} width="60px" />
                                    </>
                                    : null}
                                <hr />
                                <b>Cần nói: </b> {Show_Info_StrickAnwers_Reactdata()}
                                <hr />
                                <b>Đáp án: </b>
                                <DataTool Data={props.Data_TableTool} Total={props.Total} />
                                <hr />
                                <div id="complete" style={{ color: "red" }}></div>
                                <b>Cần hoàn thành: <span style={{ color: "blue" }}>{props.huongdan}</span>   </b> <br /> {showSubmitSyxtax(Info_ToSunmit_Reactdata)}

                                <hr />
                                <h3> Điểm: {Score} <span style={{ color: "red" }}>Chọn sai: {Sai} </span>  </h3>
                                <span id="showInterimID" style={{ color: "red" }}></span>
                                <br />
                                <div
                                    style={{
                                        position: "fixed",
                                        bottom: "10%",
                                        right: "10%",
                                        width: "10%",
                                        minWidth: "200px",
                                        backgroundColor: "white"
                                    }}
                                >
                                    <button
                                        className="btn btn-outline-primary form-control mt-1"
                                        id="btnNguoitieptheo"
                                        onClick={() => {
                                            $("#complete").html("")
                                            $("#showbtnNext").hide()
                                            props.Total.stObj.inputSumit = ""
                                            props.Total.stObj.indexOfPeople += 1
                                            props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData(props.Total.stObj.indexOfPeople)
                                        }}
                                    >Người tiếp theo</button>
                                    <br />
                                    <button
                                        // className="btn btn-sm btn-outline-primary"
                                        className="btn btn-outline-danger form-control mt-1"
                                        onClick={() => {
                                            // console.log(props.Total)
                                            props.Total.fnObj.SET_PageChange(2)
                                        }}
                                    >Học câu</button>
                                    <br />
                                    <button
                                        // className="btn btn-sm btn-outline-primary"
                                        className="btn btn-outline-primary form-control mt-1"
                                        onClick={() => {
                                            // console.log(props.Total)
                                            props.Total.fnObj.SET_PageChange(0)
                                            try {
                                                $("#idStopLisening")[0].click()
                                            } catch (error) {

                                            }
                                        }}
                                    >Trở lại chọn bài</button>
                                </div>
                                <div style={{
                                    position: "fixed",
                                    top: "10%",
                                    bottom: "10%",
                                    right: "10%",
                                    left: "10%",
                                    backgroundColor: "white",
                                    opacity: "0.9",
                                    textAlign: "center",
                                    display: "none"
                                }}
                                    id="divCountdown"
                                >
                                    <h1 style={{ color: "red" }}>Người tiếp theo...   <span id="countDown">3</span></h1>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } catch (error) {
            console.log(error)
        }
        return null
    }
    /*END JUST ONE TO SHOW */


    return (
        <>
            <div className="GameSence_Playing">
                {Show_OnePeopeAppear_ReactData()}
                <div
                    id="showEnd"
                    style={{
                        position: "fixed",
                        display: "none",
                        top: "15%",
                        bottom: "15%",
                        left: "15%",
                        right: "15%",
                        backgroundColor: "white",
                        border: "1px solid green",
                        borderRadius: "8px",
                        textAlign: "center",
                        zIndex: 2
                    }}
                >
                    <h1>Kết thúc!</h1>
                    <h3>Điểm: {Score}</h3>
                    <span style={{ color: "red" }}>Chọn sai: {Sai} </span>
                    <p>Thời gian: <span id="time"></span></p>
                    <button
                        className="btn btn-danger"
                        style={{ padding: "10px" }}
                        onClick={() => {

                            props.Total.fnObj.SET_PageChange(0)
                        }}
                    >Trở lại chọn bài</button>


                </div>
            </div>
            <ReadReactSpeech />
        </>
    )
}
export default ArrOfPeopeAppear_ReactJSX

function checkMessageReturnNumber(message_API, message_INPUT) {
    try {
        let n = stringSimilarity.compareTwoStrings(message_API, message_INPUT) * 10
        if (n > 2 / 3) {
            return [n, message_INPUT.split(" ").length]
        }
        return [0, 0]
    } catch (error) {
        return [0, 0]
    }
}

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}

function showSubmitSyxtax(Info_ToSunmit_Reactdata) {

    try {
        return (
            Info_ToSunmit_Reactdata.map((e, i) =>
                <div key={i} style={{ display: "inline-block", border: "1px solid black", padding: "5px", borderRadius: "5px", margin: "5px" }}>
                    {/* <b>Lựa chọn {i + 1}</b> */}
                    <table >
                        <tbody>
                            {e.map((ee, ii) =>
                                <tr key={ii}>
                                    <td id={"ct" + i + ii}>
                                        {ee}
                                    </td>
                                    <td id={"ct1" + i + ii}>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        )
    } catch (error) {

    }

    return JSON.stringify(Info_ToSunmit_Reactdata)
}