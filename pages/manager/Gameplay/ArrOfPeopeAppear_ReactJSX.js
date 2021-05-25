import React, { useEffect, useState } from "react";
import Read_ReactJSX from "../../../pages/helpers/Read_ReactJSX"
import DataTool from "../S_Data_tool"
import parse from 'html-react-parser';
let VoicePick = 1;

// // let flag_Data_normal_mode = true;
// let Data_handling_middle = [];


let State_of_Anwer = ["none"];
let Data_temp_Strickmode = [];
let AllData_OfOne = [];
// let ArrSearch = ["", ""];
function ArrOfPeopeAppear_ReactJSX(props) {

    const [MessagetoRead, SET_MessagetoRead] = useState(null)
    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState()
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState(null)
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);


    // const [Info_Tool_AfterSearch, SET_Info_Tool_AfterSearch] = useState(null);
    const [Score, SET_Score] = useState(0)


    useEffect(
        () => {
            try {
                if (State_of_Anwer[State_of_Anwer.length] !== "none" && props.Info_message !== null) {
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
                                Read_message(data.robotspeak.PickRandom(), VoicePick);
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


    async function Read_message(message, i) {
        await SET_MessagetoRead(null);
        await SET_MessagetoRead([message, i]);
    }

    function ShowArrSubmit() {

        if (ArrToSubmit.length === 0) {
            return ""
        }
        return ArrToSubmit.map((e, index) =>
            <span key={index} className="mr-1">{
                parse(e)
            }</span>
        )
    }
    /*BEGIN ARR TO SHOW */
    async function AddTo_Show_ArrOfPeopeAppear_ReactData(e, index) {
        try {
            if (Info_Avatar_Reactdata === null) {
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
                    VoicePick = [1, 2, 7].PickRandom();
                } else {
                    VoicePick = [3, 19].PickRandom();
                }
                // let Arr_HoldRobotSpeakFirst = [];
                // e.begin.handling_next.forEach(e => {
                //     if (e.robotspeakfirst.length > 0) {
                //         e.robotspeakfirst.forEach(ee => {
                //             Arr_HoldRobotSpeakFirst.push(ee)
                //         })
                //     }
                // })
                // if (Arr_HoldRobotSpeakFirst.length > 0) {
                //     Read_message(Arr_HoldRobotSpeakFirst.PickRandom(), VoicePick)
                // }

            }
        } catch (error) {
            console.log(error)
        }
    }

    function Show_ArrOfPeopeAppear_ReactData(arr) {
        try {
            if (arr !== undefined) {
                return arr.map((e, index) => e.total.status ?
                    <div onClick={() => AddTo_Show_ArrOfPeopeAppear_ReactData(e, index)} className="GameSence_Playing_Arrpeople" key={index}>
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
            command.forEach(e => {
                console.log(e);
                if (e.end_successfull) {
                    State_of_Anwer.push("none");
                    SET_Info_Icon_Reactdata(null);
                    SET_Score(S => S + 1)
                }
                if (e.end_unsuccessfull) {
                    State_of_Anwer.push("none");
                    SET_Info_Icon_Reactdata(null);
                }
                if (e.showsometext !== "") {

                }
                if (e.pushtoastrict !== "") {

                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    function Submit_Show_OnePeopeAppear_ReactData(e) {
        try {
            let data = AllData_OfOne[AllData_OfOne.length - 1]

            data.total.submit.forEach(eee => {

                eee.forEach(ee => {
                    let status_check_submit = true
                    let text = ee;
                    if (typeof (ee) === "string") {
                        text = ee.toLowerCase()
                    }
                    if (e.toLowerCase().indexOf(text) === -1) {
                        status_check_submit = false
                    }
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
                        <div className="col-5">
                            <DataTool Data={props.Data_TableTool} />
                        </div>
                        <div className="col-7">

                            <img alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="90px" />
                            {Info_Icon_Reactdata !== null ?
                                <img alt={Info_Icon_Reactdata} src={Info_Icon_Reactdata} width="60px" />
                                : null}

                            <hr />

                            {Info_StrickAnwers_Reactdata !== null ? Show_Info_StrickAnwers_Reactdata() : ""}
                            <hr />
                            <input type="text" className="form-control" placeholder="Put your text" onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    props.SET_Info_message(e.currentTarget.value);
                                    e.currentTarget.value = ""
                                }
                            }} />
                            <hr />
                            <p>Submit Syntax: {Info_ToSunmit_Reactdata}</p>

                            <input onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    Submit_Show_OnePeopeAppear_ReactData(e.currentTarget.value)
                                }
                            }} className="form-control" type="text" placeholder={Info_ToSunmit_Reactdata} />
                            <hr />
                        Score: {Score}
                            <hr />
                            <button className="btn btn-sm btn-outline-danger" onClick={() => Outof_Show_OnePeopeAppear_ReactData()}>Get out!</button>
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
                <p>  Score:  {Score}</p>
                {Show_OnePeopeAppear_ReactData()}
                {Show_ArrOfPeopeAppear_ReactData(props.ArrOfPeopeAppear_ReactData)}

            </div>
            <Read_ReactJSX MessagetoRead={MessagetoRead} SET_MessagetoRead={SET_MessagetoRead} />
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

function checkMessage(message_API, message_INPUT) {

    if (message_API === null || message_INPUT === null || message_API === "" || message_INPUT === "") {
        return false
    }
    let numCheckRight = 0;
    let Allnumtocheck = SortMessageToArray(message_INPUT).length

    SortMessageToArray(message_INPUT).forEach(e => {
        if (message_API.indexOf(e) !== -1) {
            numCheckRight += 1;

        }
    })

    if (numCheckRight / Allnumtocheck > 2 / 3) {
        return true
    }
    return false
}

function checkMessageReturnNumber(message_API, message_INPUT) {

    if (message_API === null || message_INPUT === null || message_API === "" || message_INPUT === "") {
        return [0, 0]
    }
    let numCheckRight = 0;
    let Allnumtocheck = SortMessageToArray(message_INPUT).length
    let New_message_API = SortMessageToArray(message_API).toString()


    SortMessageToArray(message_INPUT).forEach(e => {

        if (New_message_API.indexOf(e) > -1) {
            numCheckRight += 1;

        }
    })

    if (numCheckRight / Allnumtocheck > 2 / 3) {

        return [numCheckRight / Allnumtocheck * 10, Allnumtocheck]
    }
    return [0, 0]
}
function TestArray(string_toparce) {
    try {
        if (typeof (JSON.parse(string_toparce).length) === "number") {
            return true
        } else { return false }
    } catch (error) {

        return false
    }
}
Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}

