import React, { useEffect, useState } from "react";
// import Read_ReactJSX from "../../../pages/helpers/Read_ReactJSX"
import DataTool from "../S_Data_tool"
import Read_ReactSpeech from "../../../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../../../util/Read/ReadMessage"
const stringSimilarity = require("string-similarity");
// import Cookies_ReadingPage from "../../../../../util/Cookies/Cookies_ReadingPage"
let VoicePick = [1];

let State_of_Anwer = ["none"];
let Data_temp_Strickmode = [];
let AllData_OfOne = [];



function ArrOfPeopeAppear_ReactJSX(props) {

    // const [MessagetoRead, SET_MessagetoRead] = useState(null)
    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(["hi how are you"])
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState("")
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);

    const [Score, SET_Score] = useState(0)
    const [TimeCount, SET_TimeCount] = useState(600);
    const [VoiceAPIMessage, SET_VoiceAPIMessage] = useState("");

    const [ShowHint, SET_ShowHint] = useState(true);

    const [Page, SET_Page] = useState("chinh");

    useEffect(() => {
        props.SET_Data_Commands(Info_StrickAnwers_Reactdata)
    }, [Info_StrickAnwers_Reactdata])

    useEffect(
        () => {

            setTimeout(() => {
                try {
                    $("#idClickMiniGame")[0].click()
                } catch (error) {
                    console.log(error)
                }
            }, 1000)

            console.log(props.ArrOfPeopeAppear_ReactData)
            props.Total.stObj.indexOfPeople = 0
            props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData = AddTo_Show_ArrOfPeopeAppear_ReactData
            props.Total.fnObj.Submit_Show_OnePeopeAppear_ReactData = Submit_Show_OnePeopeAppear_ReactData
            props.Total.fnObj.SET_Page = SET_Page
            AddTo_Show_ArrOfPeopeAppear_ReactData(props.Total.stObj.indexOfPeople)

        }, []
    );




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
                                ReadMessage(data.robotspeak.PickRandom(), VoicePick[VoicePick.length - 1]);
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

                    }
                }
            } catch (error) {
                console.log(error)
            }
            props.SET_Info_message(null)
        }, [props.Info_message]
    )

    /*BEGIN ARR TO SHOW */
    async function AddTo_Show_ArrOfPeopeAppear_ReactData(index) {
        try {
            if (Info_Avatar_Reactdata === null) {
                props.ArrOfPeopeAppear_ReactData[index].total.status = false;
                let n = props.ArrOfPeopeAppear_ReactData[index]
                AllData_OfOne.push(n);
                State_of_Anwer.push("strictmode")
                Data_temp_Strickmode.push(n.begin.handling_next)
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
                    VoicePick.push(1);
                } else {
                    VoicePick.push(2);
                }

                ReadMessage(n.total.robotspeakfirst.PickRandom(), VoicePick[VoicePick.length - 1])
            }
        } catch (error) {
            SET_TimeCount(-1)
        }
    }

    function Submit_check_funtion_indata(command) {
        try {

            if (command.end_successfull) {
                State_of_Anwer.push("none");
                SET_Score(S => S + 1)
            }
            if (command.end_unsuccessfull) {
                State_of_Anwer.push("none");
            }

        } catch (error) {
            console.log(error)
        }
    }
    function Submit_Show_OnePeopeAppear_ReactData(e) {
        console.log(e)
        try {
            let data = AllData_OfOne[AllData_OfOne.length - 1]

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
                    Data_temp_Strickmode.push(data.end.handling_next);
                    let arrTemp = []
                    data.end.handling_next.forEach(e => {
                        e.manspeak.forEach(ee => {
                            arrTemp.push(ee)
                        })
                    })
                    SET_Info_StrickAnwers_Reactdata(arrTemp)
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
                    <div>
                        <div className="GameSence_Playing_OneShow">
                            <button onClick={() => { props.Total.fnObj.SET_Page("chinh") }}>Sảnh chính</button>
                            <button onClick={() => { props.Total.fnObj.SET_Page("congcu") }}>Công cụ</button>
                            <div>
                                <img alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="90px" />
                                <button
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => {
                                        props.Total.stObj.inputSumit = ""
                                        props.Total.stObj.indexOfPeople += 1
                                        props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData(props.Total.stObj.indexOfPeople)
                                    }}
                                >Người tiếp theo</button>

                                {Info_Icon_Reactdata !== "" ?
                                    <>
                                        <img alt={Info_Icon_Reactdata} src={Info_Icon_Reactdata} width="60px" />
                                    </>
                                    : null}
                                <hr />
                                {Page === "chinh" ?
                                    Info_StrickAnwers_Reactdata !== null && ShowHint ? Show_Info_StrickAnwers_Reactdata() : ""
                                    : <DataTool Data={props.Data_TableTool} Total={props.Total} />}

                                <hr />
                                {showSubmitSyxtax(Info_ToSunmit_Reactdata)}
                                <hr />
                                Điểm: {Score} ||
                                {VoiceAPIMessage}
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
                {TimeCount < 0 ? <div className="GameSence_Playing_Timeout">
                    <h1>End!</h1>
                    <h3>{Score}</h3>
                    <a href="/">
                        <button className="btn btn-primary">Home</button>
                    </a>
                </div> : ""}
            </div>
            <Read_ReactSpeech />
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