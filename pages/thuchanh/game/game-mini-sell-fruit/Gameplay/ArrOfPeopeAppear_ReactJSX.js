import React, { useEffect, useState } from "react";
import DataTool from "../S_Data_tool"
import Read_ReactSpeech from "../../../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../../../util/Read/ReadMessage"
const stringSimilarity = require("string-similarity");
let VoicePick = [1];

let State_of_Anwer = ["none"];
let Data_temp_Strickmode = [];
let AllData_OfOne = [];



function ArrOfPeopeAppear_ReactJSX(props) {


    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(["hi how are you"])
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState("")
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);



    const [WrongChoose, SET_WrongChoose] = useState(0)
    const [Score, SET_Score] = useState(0)
    const [TimeCount, SET_TimeCount] = useState(600);
    const [VoiceAPIMessage, SET_VoiceAPIMessage] = useState("");

    const [ShowHint, SET_ShowHint] = useState(true);


    useEffect(() => {
        props.SET_Data_Commands(Info_StrickAnwers_Reactdata)

    }, [Info_StrickAnwers_Reactdata])

    useEffect(
        () => {
            let timer1 = setTimeout(() => SET_TimeCount(C => C - 1), 1000);
            return () => {
                clearTimeout(timer1);
            };
        }, [TimeCount]
    );
    // useEffect(
    //     () => {
    //         if (Score > 15) {
    //             SET_ShowHint(true)
    //             let timer2 = setTimeout(() => SET_ShowHint(false), 3000);
    //             return () => {
    //                 clearTimeout(timer2);
    //             };
    //         } else if (Score > 6) {
    //             SET_ShowHint(true)
    //             let timer3 = setTimeout(() => SET_ShowHint(false), 6000);
    //             return () => {
    //                 clearTimeout(timer3);
    //             };
    //         }
    //     }, [Info_StrickAnwers_Reactdata]
    // );



    useEffect(
        () => {

            try {
                if (State_of_Anwer[State_of_Anwer.length] !== "none" && props.Info_message !== null) {
                    SET_VoiceAPIMessage(props.Info_message)
                    if (State_of_Anwer[State_of_Anwer.length - 1] === "strictmode") {
                        // Buoc 1 lay du lieu cuc bo 
                        let Data_Strict = Data_temp_Strickmode[Data_temp_Strickmode.length - 1]
                        //Buoc 2 xu ly data

                        let ARR_TEMP_CHECKMESSAGE_Rate = 6
                        let ARR_TEMP_CHECKMESSAGE_Length = 0
                        let ARR_TEMP_CHECKMESSAGE_ARR = ["none"]
                        //----------------------
                        Data_Strict.forEach(e => {
                            e.manspeak.forEach(ee => {
                                let TEMP_CHECK = checkMessageReturnNumber(props.Info_message, ee)
                                if (TEMP_CHECK[0] >= ARR_TEMP_CHECKMESSAGE_Rate) {
                                    if (TEMP_CHECK[0] === ARR_TEMP_CHECKMESSAGE_Length && TEMP_CHECK[1] > ARR_TEMP_CHECKMESSAGE_Length) {
                                        ARR_TEMP_CHECKMESSAGE_Rate = TEMP_CHECK[0];
                                        ARR_TEMP_CHECKMESSAGE_Length = TEMP_CHECK[1];
                                        ARR_TEMP_CHECKMESSAGE_ARR.push(e);
                                    } else {
                                        ARR_TEMP_CHECKMESSAGE_Rate = TEMP_CHECK[0];
                                        ARR_TEMP_CHECKMESSAGE_Length = TEMP_CHECK[1];
                                        ARR_TEMP_CHECKMESSAGE_ARR.push(e)
                                    }
                                }
                            })
                        })
                        //----------------------

                        if (ARR_TEMP_CHECKMESSAGE_ARR[ARR_TEMP_CHECKMESSAGE_ARR.length - 1] !== "none") {
                            let data = ARR_TEMP_CHECKMESSAGE_ARR[ARR_TEMP_CHECKMESSAGE_ARR.length - 1];
                            if (data.robotspeak.length > 0) {
                                let textRobotSpeak = data.robotspeak.PickRandom()
                                ReadMessage(textRobotSpeak, VoicePick[VoicePick.length - 1]);
                                $("#textRobotSayId").text(textRobotSpeak)
                            }
                            if (data.handling_next.length > 0) {

                                Data_temp_Strickmode.push(data.handling_next)
                                let arrTemp = [];
                                data.handling_next.forEach(e => {
                                    e.manspeak.forEach(ee => {
                                        arrTemp.push(ee)
                                    })
                                })
                                SET_Info_StrickAnwers_Reactdata(arrTemp)
                            } else {
                                Data_temp_Strickmode.push(AllData_OfOne[AllData_OfOne.length - 1].middle.handling_next)
                                let arrTemp = [];
                                AllData_OfOne[AllData_OfOne.length - 1].middle.handling_next.forEach(e => {
                                    e.manspeak.forEach(ee => {
                                        arrTemp.push(ee)
                                    })
                                })
                                SET_Info_StrickAnwers_Reactdata(arrTemp)

                            }
                            SET_Info_Icon_Reactdata(data.icon)
                            Submit_check_funtion_indata(data.function);
                        }
                        //...............
                    }
                }
            } catch (error) {
                console.log(error)
            }
            props.SET_Info_message(null)
        }, [props.Info_message]
    )

    /*BEGIN ARR TO SHOW */
    async function AddTo_Show_ArrOfPeopeAppear_ReactData(e, index) {
        try {
            if (Info_Avatar_Reactdata === null) {

                props.ArrOfPeopeAppear_ReactData[index].total.status = false;
                AllData_OfOne.push(e);
                State_of_Anwer.push("strictmode")
                Data_temp_Strickmode.push(e.begin.handling_next)
                let Arr_HoldAllManSpeak = [];
                e.begin.handling_next.forEach(e => {
                    e.manspeak.forEach(ee => {
                        Arr_HoldAllManSpeak.push(ee)
                    })
                })
                SET_Info_StrickAnwers_Reactdata(Arr_HoldAllManSpeak)
                await SET_Avatar_Reactdata(e.total.image);
                await SET_Info_ToSunmit_Reactdata(e.total.submitsyntax)
                if (e.total.gender === "female") {
                    VoicePick.push(1);
                } else {
                    VoicePick.push(2);
                }
                let textRobotSpeak = e.total.robotspeakfirst.PickRandom()
                ReadMessage(textRobotSpeak, VoicePick[VoicePick.length - 1])
                $("#textRobotSayId").text(textRobotSpeak)

            }
        } catch (error) {
            console.log(error)
        }
    }

    function Show_ArrOfPeopeAppear_ReactData(arr) {
        try {
            if (arr !== undefined) {
                return arr.map((e, index) => e.total.status ?
                    <div onClick={() => { AddTo_Show_ArrOfPeopeAppear_ReactData(e, index); $("#idClickMiniGame").click() }} className="GameSence_Playing_Arrpeople" key={index}>
                        <img alt={e.total.image} src={e.total.image} />
                    </div> : null
                )
            }
        } catch (error) {
            console.log(error)
        }
        return null
    }
    /*END ARR TO SHOW */

    /*BEGIN JUST ONE TO SHOW */
    function Outof_Show_OnePeopeAppear_ReactData() {
        State_of_Anwer.push("none")
        SET_Avatar_Reactdata(null)

    }

    function Submit_check_funtion_indata(command) {
        try {

            if (command.end_successfull) {
                State_of_Anwer.push("none");
                SET_Score(S => S + 1)
                SET_Avatar_Reactdata(null)
            }
            if (command.end_unsuccessfull) {
                State_of_Anwer.push("none");
                SET_Avatar_Reactdata(null)
            }

        } catch (error) {
            console.log(error)
        }
    }
    function Submit_Show_OnePeopeAppear_ReactData(e) {
        try {
            let data = AllData_OfOne[AllData_OfOne.length - 1]

            data.total.submit.forEach(eee => {
                let status_check_submit = true

                eee.forEach(ee => {

                    let text = ee;
                    if (typeof (ee) === "string") {
                        text = ee.toLowerCase()
                    }

                    if (e.toLowerCase().indexOf(text) === -1) {
                        status_check_submit = false
                    }

                })

                if (status_check_submit) {
                    $("#submitRightMessageId").text("Chọn chính xác")
                    Data_temp_Strickmode.push(data.end.handling_next);
                    let arrTemp = []
                    data.end.handling_next.forEach(e => {
                        e.manspeak.forEach(ee => {
                            arrTemp.push(ee)
                        })
                    })
                    SET_Info_StrickAnwers_Reactdata(arrTemp)
                } else {
                    SET_WrongChoose(W => W + 1)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    function Show_Info_StrickAnwers_Reactdata() {
        try {
            return Info_StrickAnwers_Reactdata.map((e, index) =>
                <span className="Span_Show_Info_StrickAnwers_Reactdata" key={index}>{e}</span>
            )
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
                    <div className="row GameSence_Playing_OneShow">
                        {/* Main */}
                        <div className="col-12">
                            Điểm: {Score}
                            <button className="btn btn-sm btn-outline-danger ml-1" onClick={() => Outof_Show_OnePeopeAppear_ReactData()}>Thoát!</button>
                            <div className="text-left">
                                <img alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="90px" />
                                {Info_Icon_Reactdata !== "" ?
                                    <img alt={Info_Icon_Reactdata} src={Info_Icon_Reactdata} width="60px" />
                                    : null}
                                {Score < 6 ?
                                    <span>Khách nói:  <span id="textRobotSayId" style={{ opacity: (10 - Score) / 10 }}>Hello</span></span>
                                    : null}
                            </div>
                            <div className="text-left">
                                Trả lời:  {Info_StrickAnwers_Reactdata !== null && ShowHint ? Show_Info_StrickAnwers_Reactdata() : ""}
                            </div>
                            <h3 id="submitRightMessageId"></h3>
                            <div style={{ display: "none" }} id="input_submit"></div>
                            <div id="input_submitHTML"></div>
                            <input
                                id="input_submitButton"
                                style={{ display: "none" }}
                                onClick={() => {
                                    Submit_Show_OnePeopeAppear_ReactData($("#input_submit").text())
                                }}
                                className="btn btn-outline-primary" type="button" value="Enter" />
                            <hr />

                            {/* <br />
                            {VoiceAPIMessage} */}
                        </div>
                        {/* End Main */}
                        <div className="col-12">
                            <DataTool Data={props.Data_TableTool} />
                        </div>
                        {/* End Tool */}
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

            <div
                className="GameSence_Playing"
            >
                <p>Số lần chọn sai: <span>{WrongChoose}</span>  Điểm:  {Score} Thời gian: {TimeCount} s</p>
                {Show_OnePeopeAppear_ReactData()}
                {Show_ArrOfPeopeAppear_ReactData(props.ArrOfPeopeAppear_ReactData)}
                {TimeCount < 0 ? <div className="GameSence_Playing_Timeout">
                    <h1>Hết giờ</h1>
                    <h3>Điểm: {Score}</h3>
                    <h3>Số lần chọn sai: {WrongChoose}</h3>
                </div> : ""}
            </div>

            <Read_ReactSpeech />
        </>
    )
}
export default ArrOfPeopeAppear_ReactJSX























function SortMessageToArray(message) {


    let a = message.toLowerCase().split(/[\?#!-().]+/).join("")
    let b = a.toString();
    let c = b.split(" ");

    let Res = [];
    c.forEach(e => {
        e !== "";
        Res.push(e)
    })
    return Res

}

function checkMessageReturnNumber(message_API, message_INPUT) {
    try {
        let Allnumtocheck = SortMessageToArray(message_INPUT).length
        let checkRate = stringSimilarity.compareTwoStrings(message_API, message_INPUT) * 10
        if (checkRate > 6) {
            return [checkRate, Allnumtocheck]
        }
    } catch (error) {
        return [0, 0]
    }
}

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}

