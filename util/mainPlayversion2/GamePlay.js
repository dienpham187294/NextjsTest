import React, { useEffect, useState } from "react";
import $ from "jquery"
import DataTool from "./S_Data_tool"
import ReadReactSpeech from "../../pages/helpers/Read_ReactSpeechSlow"
import ReadMessage from "../Read/ReadMessage"
import showDataGameOnline from "./showDataGameOnline"
import secondToMinutes from "../filedulieu1/dataHelperFunction/secondToMinutes";
import inter from "./funtionInside/inter";
import checkMessageReturnNumber from "./funtionInside/checkMessageReturnNumber"
import PickRandom from "./funtionInside/PickRandom"
import showReview from "./funtionInside/showReview"
import ShowInfoHint from "./funtionInside/ShowInfoHint"
import showSubmitSyxtax from "./funtionInside/showSubmitSyxtax"
import getOnline from "./funtionInside/getOnline"
import showHintPartWhenOpenTool from "./funtionInside/showHintPartWhenOpenTool"
import showOptionToRead from "./funtionInside/showOptionToRead"
import showTopLeftPart1 from "./funtionInside/showTopLeftPart1"
import showTopCenter1 from "./funtionInside/showTopCenter1"
import showBottomPart1 from "./funtionInside/showBottomPart1"
import showDivReview from "./funtionInside/showDivReview"
import showDivNext from "./funtionInside/showDivNext"
import showToPickPerson from "./funtionInside/showToPickPerson"
import Check_ImageOrNot from "./funtionInside/Check_ImageOrNot"

let VoicePick = 1;
let State_of_Anwer = "none";
let Data_temp_Strickmode;
let AllData_OfOne;


let rateRead = 1.1
let pitchRead = 1.2

let idMember;

let i1 = 0
let timeCount = 0;
let ArrHoldThingToReview = [];


function ArrOfPeopeAppear_ReactJSX(props) {

    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(["hi how are you"])
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState("")
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);
    const [Score, SET_Score] = useState(0)
    const [Sai, SET_Sai] = useState(0)
    const [Boqua, SET_Boqua] = useState(0)
    const [Data_TableTool, SET_Data_TableTool] = useState([])
    const [DataOnline, SET_DataOnline] = useState([])
    const [ShowHint, SET_ShowHint] = useState(false)
    const [ShowReview, SET_ShowReview] = useState("")
    const [StatusShowToPick, SET_StatusShowToPick] = useState(true)
    const [DataShowToPick, SET_DataShowToPick] = useState([0, 1, 2])
    useEffect(() => {
        props.SET_Data_Commands(Info_StrickAnwers_Reactdata)
        if (i1 === 0) {
            if (timeCount === 0) {
                setInterval(() => {
                    timeCount += 1;
                    $("#thoigian").text(secondToMinutes(timeCount))
                }, 1000);
            }
            if (localStorage.getItem("idMember") !== null) {
                idMember = localStorage.getItem("idMember")
            } else {
                idMember = Date.now() + PickRandom(["a", "b", "c", "d", "e", "f"]);
                localStorage.setItem("idMember", idMember)
            }
            i1++
        }

    }, [Info_StrickAnwers_Reactdata])




    useEffect(
        () => {
            inter()
            props.Total.stObj.timebegin = Date.now()
            props.Total.stObj.indexOfPeople = 0
            props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData = AddTo_Show_ArrOfPeopeAppear_ReactData
            props.Total.fnObj.Submit_Show_OnePeopeAppear_ReactData = Submit_Show_OnePeopeAppear_ReactData
            props.Total.fnObj.Xuly = Xuly
            props.Total.fnObj.SET_ShowHint = SET_ShowHint
            props.Total.fnObj.SET_Info_Icon_Reactdata = SET_Info_Icon_Reactdata
            props.Total.fnObj.getOnline = function () {
                try {
                    getOnline(props.NameOflession, idMember, Score, SET_DataOnline)
                } catch (error) { console.log(error) }
            }
        }, []
    );


    useEffect(() => {
        props.Total.fnObj.getOnline()
    }, [Score])

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

                        ArrHoldThingToReview.push({
                            "textToRead": Info_message,
                            "textReadAlready": $("#showInterimID").text()
                        })

                        let data = MessageArr[MessageArr.length - 1];
                        if (data.robotspeak.length > 0) {
                            ReadMessage(PickRandom(data.robotspeak), VoicePick, rateRead, pitchRead);
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
                        if (data.icon !== undefined && data.icon !== "") {
                            SET_Info_Icon_Reactdata(data.icon)
                        }
                        Submit_check_funtion_indata(data.function);
                    }

                }
            }
        } catch (error) {
            console.log(error)
        }
    }

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

                SET_Data_TableTool(props.ArrOfPeopeAppear_ReactData[index].total.Tabletool)

                SET_Info_StrickAnwers_Reactdata(Arr_HoldAllManSpeak)
                await SET_Avatar_Reactdata(n.total.image);
                // if (n.total.icon !== "" && n.total.icon !== undefined) {
                SET_Info_Icon_Reactdata(n.total.icon)
                // }
                await SET_Info_ToSunmit_Reactdata([])
                await SET_Info_ToSunmit_Reactdata(n.total.submitsyntax)
                if (n.total.gender === "female") {
                    VoicePick = (1);
                } else {
                    VoicePick = (2);
                }
                rateRead = PickRandom([0.9, 1.0, 1.1, 1.2])
                pitchRead = PickRandom([0.9, 1.0, 1.1, 1.2])
                ReadMessage(PickRandom(n.total.robotspeakfirst), VoicePick, rateRead, pitchRead)
            } else {
                alert("Kết thúc")
            }

        } catch (error) {

        }
    }

    function Submit_check_funtion_indata_01(command) {
        try {
            if (command.readFirst !== undefined) {
                setTimeout(() => ReadMessage(command.readFirst.PickRandom(), VoicePick, rateRead, pitchRead), 500)
            }
            if (command.icon !== undefined) {
                SET_Info_Icon_Reactdata(command.icon)
            }
        } catch (error) {

        }
    }

    function Submit_check_funtion_indata(command) {
        try {
            if (command.end_successfull) {

                State_of_Anwer = "none";
                SET_Score(S => S + 1)
                SET_StatusShowToPick(true)

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
        console.log(e)
        try {
            let status = false
            let n = e.split("===").slice(-1)[0]
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
                        Check_ImageOrNot(ee) ?
                            $("#ct1" + i + ii).html(
                                `<img src="` + ee + `" height="50px" />`
                            )
                            : $("#ct1" + i + ii).html(ee);
                    }
                })

                if (status_check_submit) {
                    if (data.end !== null && data.end.handling_next !== null) {
                        Data_temp_Strickmode = (data.end.handling_next);
                        let arrTemp = []
                        data.end.handling_next.forEach(e => {
                            Submit_check_funtion_indata_01(e.function)
                            e.manspeak.forEach(ee => {
                                arrTemp.push(ee)
                            })
                        })
                        SET_Info_StrickAnwers_Reactdata(arrTemp);
                        $("#complete").html("<b>Done!</b>")
                    } else {
                        Submit_check_funtion_indata({ end_successfull: true })
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }





    /*END SHOW SEARCH */

    function Show_OnePeopeAppear_ReactData() {
        try {
            if (Info_Avatar_Reactdata !== null) {
                return (
                    <div>
                        <div className="GameSence_Playing_OneShow">
                            <div>
                                <div className="row">
                                    {showTopLeftPart1(Info_Avatar_Reactdata, ShowInfoHint, Info_Icon_Reactdata, SET_ShowHint, ShowHint)}
                                    {showTopCenter1(
                                        props, showOptionToRead, Score, Info_StrickAnwers_Reactdata,
                                        showSubmitSyxtax, Info_ToSunmit_Reactdata,
                                        Boqua, SET_Score, SET_ShowReview, ArrHoldThingToReview, Sai
                                    )}
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                        {showDataGameOnline(DataOnline, props.Total)}
                                    </div>
                                    <div className="col-8" style={{ textAlign: "left" }}>
                                        <DataTool Data={Data_TableTool} Total={props.Total} />
                                    </div>
                                </div>
                                <hr />
                                {showBottomPart1(
                                    props, SET_Boqua, SET_StatusShowToPick
                                )}
                                {showDivNext()}
                                {showDivReview(ShowReview, props, secondToMinutes, timeCount, showReview, SET_ShowReview,
                                    Score, Sai, Boqua)}

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
                {showHintPartWhenOpenTool(ShowHint, Info_Icon_Reactdata)}
                {showToPickPerson(
                    DataShowToPick, SET_DataShowToPick, StatusShowToPick, SET_StatusShowToPick,
                    props.ArrOfPeopeAppear_ReactData, AddTo_Show_ArrOfPeopeAppear_ReactData, props.Total
                )}
            </div>
            <ReadReactSpeech />
        </>
    )
}
export default ArrOfPeopeAppear_ReactJSX





