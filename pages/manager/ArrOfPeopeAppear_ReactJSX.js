import React, { useEffect, useState } from "react";
import Read_ReactJSX from "../helpers/Read_ReactJSX"
const e = React.createElement;
let VoicePick = 1;

let flag_Data_normal_mode = true;
let Data_normal_mode = [];


let State_of_Anwer = ["none"];
let Data_temp_Strickmode = [];

let AllData_OfOne = [];
let ALLTableTool;
let flag_ALLTableTool = true
// let ArrSearch = ["", ""];
function ArrOfPeopeAppear_ReactJSX(props) {

    const [MessagetoRead, SET_MessagetoRead] = useState(null)
    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState()
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState(null)
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);

    const [Info_Tool_AfterSearch, SET_Info_Tool_AfterSearch] = useState(null);
    const [Score, SET_Score] = useState(0)

    useEffect(() => {
        if (flag_ALLTableTool) {
            ALLTableTool = props.ALLTable_ReactData;
            SET_Info_Tool_AfterSearch(ALLTableTool)
            flag_ALLTableTool = false
        }
    })

    useEffect(
        () => {
            try {


                if (State_of_Anwer[State_of_Anwer.length] !== "none" && props.Info_message !== null) {
                    //Case ------------------------------------------------------------------------------------

                    if (State_of_Anwer[State_of_Anwer.length - 1] === "begin") {
                        let Data_use_StrickMode = Data_temp_Strickmode[Data_temp_Strickmode.length - 1]
                        let Data_use_AllData_OfOne = AllData_OfOne[AllData_OfOne.length - 1]


                        let Begin_Status = false;
                        Data_use_StrickMode.forEach(e => {
                            if (checkMessage(props.Info_message, e)) {
                                console.log(props.Info_message, e)
                                console.log(checkMessage(props.Info_message, e))
                                Begin_Status = true
                            }
                        })


                        if (Begin_Status) {
                            let data = Data_use_AllData_OfOne.questionandanwers.begin.iamsaying.handling;

                            if (data.theysay !== null) {
                                let d = new Date();
                                let numVoice = d.getSeconds() % data.theysay.length;
                                Read_message(data.theysay[numVoice], VoicePick);
                            }
                            SET_Info_Icon_Reactdata(data.icon)
                            Submit_check_funtion_indata(data.function)


                            if (data.handling_next !== null) {
                                State_of_Anwer.push("strictmode")
                                Data_temp_Strickmode.push(data.handling_next)
                                let arrTemp = [];
                                data.handling_next.forEach(e => {

                                    e.texttosay.forEach(ee => {
                                        arrTemp.push(ee)
                                    })
                                })

                                SET_Info_StrickAnwers_Reactdata(arrTemp)
                            } else {
                                State_of_Anwer.push("normalmode")
                                SET_Info_StrickAnwers_Reactdata(Data_normal_mode);
                            }

                        }


                    }

                    else if (State_of_Anwer[State_of_Anwer.length - 1] === "strictmode") {

                        // Buoc 1 lay du lieu cuc bo 
                        let Data_Strict = Data_temp_Strickmode[Data_temp_Strickmode.length - 1]


                        //Buoc 2 xu ly data

                        let ARR_TEMP_CHECKMESSAGE_Rate = 6
                        let ARR_TEMP_CHECKMESSAGE_Length = 0
                        let ARR_TEMP_CHECKMESSAGE_ARR = ["none"]


                        Data_Strict.forEach(e => {
                            e.texttosay.forEach(ee => {
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


                        //Buoc 3 tra la data
                        //if begin

                        if (ARR_TEMP_CHECKMESSAGE_ARR[ARR_TEMP_CHECKMESSAGE_ARR.length - 1] !== "none") {

                            let data = ARR_TEMP_CHECKMESSAGE_ARR[ARR_TEMP_CHECKMESSAGE_ARR.length - 1];


                            if (data.theysay !== null) {
                                let d = new Date();
                                let numVoice = d.getSeconds() % data.theysay.length;
                                Read_message(data.theysay[numVoice], VoicePick);
                            }
                            SET_Info_Icon_Reactdata(data.icon)
                            Submit_check_funtion_indata(data.function)




                            if (data.handling_next !== null) {
                                State_of_Anwer.push("strictmode")
                                Data_temp_Strickmode.push(data.handling_next)
                                let arrTemp = [];
                                data.handling_next.forEach(e => {
                                    e.texttosay.forEach(ee => {
                                        arrTemp.push(ee)
                                    })
                                })
                                SET_Info_StrickAnwers_Reactdata(arrTemp)
                            } else {
                                State_of_Anwer.push("normalmode")
                                SET_Info_StrickAnwers_Reactdata(Data_normal_mode);
                            }

                        }
                        //if end
                    }

                    else if (State_of_Anwer[State_of_Anwer.length - 1] === "normalmode") {
                        //Buoc 1 lay data cuc bo

                        let data = AllData_OfOne[AllData_OfOne.length - 1].questionandanwers.middle;
                        //Buoc xu ly thong tin
                        //Buoc 2 xu ly data

                        let ARR_TEMP_CHECKMESSAGE_Rate = 6
                        let ARR_TEMP_CHECKMESSAGE_Length = 0
                        let ARR_TEMP_CHECKMESSAGE_ARR = ["none"]


                        data.forEach(e => {
                            e.iamsaying.texttosay.forEach(ee => {
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

                        //if begin
                        if (ARR_TEMP_CHECKMESSAGE_ARR[ARR_TEMP_CHECKMESSAGE_ARR.length - 1] !== "none") {

                            let data = ARR_TEMP_CHECKMESSAGE_ARR[ARR_TEMP_CHECKMESSAGE_ARR.length - 1];



                            if (data.iamsaying.handling.theysay !== null) {
                                let d = new Date();
                                let numVoice = d.getSeconds() % data.iamsaying.handling.theysay.length;
                                Read_message(data.iamsaying.handling.theysay[numVoice], VoicePick);
                            }
                            SET_Info_Icon_Reactdata(data.iamsaying.handling.icon)
                            Submit_check_funtion_indata(data.iamsaying.handling.function)



                            if (data.iamsaying.handling.handling_next !== null) {
                                State_of_Anwer.push("strictmode")
                                Data_temp_Strickmode.push(data.iamsaying.handling.handling_next)
                                let arrTemp = [];
                                data.iamsaying.handling.handling_next.forEach(e => {
                                    e.texttosay.forEach(ee => {
                                        arrTemp.push(ee)
                                    })
                                })
                                SET_Info_StrickAnwers_Reactdata(arrTemp)
                            } else {
                                State_of_Anwer.push("normalmode")
                                SET_Info_StrickAnwers_Reactdata(Data_normal_mode);
                            }

                        }
                        //if end
                    }

                    else if (State_of_Anwer[State_of_Anwer.length - 1] === "end") {



                        let data = Data_temp_Strickmode[Data_temp_Strickmode.length - 1]

                        let End_status = false;
                        data.texttosay.forEach(e => {
                            if (checkMessage(props.Info_message, e)) {
                                End_status = true
                            }
                        })
                        if (End_status) {
                            if (data.handling.theysay !== null) {
                                let d = new Date();
                                let numVoice = d.getSeconds() % data.handling.theysay.length;
                                Read_message(data.handling.theysay[numVoice], VoicePick);
                            }
                            SET_Info_Icon_Reactdata(data.handling.icon)
                            Submit_check_funtion_indata(data.handling.function)
                            if (data.handling.handling_next !== null) {
                                State_of_Anwer.push("strictmode")
                                Data_temp_Strickmode.push(data.handling.handling_next)
                                let arrTemp = [];
                                data.handling.handling_next.forEach(e => {
                                    e.texttosay.forEach(ee => {
                                        arrTemp.push(ee)
                                    })
                                })
                                SET_Info_StrickAnwers_Reactdata(arrTemp)
                            }
                        }
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


    /*BEGIN ARR TO SHOW */
    async function AddTo_Show_ArrOfPeopeAppear_ReactData(e, index) {
        try {


            if (Info_Avatar_Reactdata === null) {
                // e.status = false;
                props.ArrOfPeopeAppear_ReactData[index] = false
                State_of_Anwer.push("begin")
                AllData_OfOne.push(e);
                Data_temp_Strickmode.push(e.questionandanwers.begin.iamsaying.texttosay);
                await SET_Info_ToSunmit_Reactdata(e.submit);
                await SET_Info_StrickAnwers_Reactdata(e.questionandanwers.begin.iamsaying.texttosay);
                await SET_Avatar_Reactdata(e.image);
                if (e.gender === "female") {
                    let d = new Date();
                    let numVoiceArr = [1, 2, 7];
                    VoicePick = numVoiceArr[d.getSeconds() % 3];

                } else {
                    let d = new Date();
                    let numVoiceArr = [3, 19];
                    VoicePick = numVoiceArr[d.getSeconds() % 2];

                }
                if (flag_Data_normal_mode) {
                    e.questionandanwers.middle.forEach(e => {
                        e.iamsaying.texttosay.forEach(ee => {
                            Data_normal_mode.push(ee)
                        })
                    })
                    flag_Data_normal_mode = false
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    function Show_ArrOfPeopeAppear_ReactData(arr) {
        try {


            if (arr !== undefined) {
                return arr.map((e, index) => e.status ?
                    <div onClick={() => AddTo_Show_ArrOfPeopeAppear_ReactData(e, index)} className="GameSence_Playing_Arrpeople" key={index}>
                        <img alt={e.image} src={e.image} />
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


            if (command === null) {
                return
            }
            if (command === "end_successfull") {

                State_of_Anwer.push("none");
                SET_Score(S => S + 1);
                props.SET_ScoreSumit(S => S + 1)
                SET_Avatar_Reactdata(null)
                return
            }
            if (command === "end_unsuccessfull") {
                State_of_Anwer.push("none");
                SET_Avatar_Reactdata(null)
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
    function Submit_Show_OnePeopeAppear_ReactData(e) {
        try {


            AllData_OfOne[AllData_OfOne.length - 1].submit.info.forEach(ee => {
                let status_check_submit = true
                let text = ee;
                if (typeof (ee) === "string") {
                    text = ee.toLowerCase()
                }
                if (e.toLowerCase().indexOf(text) === -1) {
                    status_check_submit = false
                }
                if (status_check_submit) {
                    State_of_Anwer.push("end");
                    Data_temp_Strickmode.push(AllData_OfOne[AllData_OfOne.length - 1].questionandanwers.end.iamsaying);
                    SET_Info_StrickAnwers_Reactdata(AllData_OfOne[AllData_OfOne.length - 1].questionandanwers.end.iamsaying.texttosay)
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

    /*BEGIN SHOW SEARCH*/
    // function AddTo_SHOW_Search() {
    //     console.log(ArrSearch);
    //     // let Arr = [];


    // }


    function SHOW_Search() {

        try {
            let ArrLevelTale = []
            Info_Tool_AfterSearch.forEach((Element, index) => {
                let ArrInside = [<h4 key={Math.random()}>{Element.name}</h4>];
                let TableTr = [];
                Element.content.forEach((eeee, indexeeee) => {
                    let ArrObjectkey = Object.keys(eeee);
                    let ArrTD = [];
                    ArrObjectkey.forEach((eArrObjectkey, i) => {

                        if (eArrObjectkey === "img" || eArrObjectkey === "image") {


                            ArrTD.push(e("td", { key: Math.random() },
                                e("img", { src: eeee[eArrObjectkey], className: "img_inSearch" })
                            ))
                        } else {


                            ArrTD.push(e("td", { key: Math.random() }, eeee[eArrObjectkey]))
                        }

                    })

                    TableTr.push(e("tr", { key: Math.random() }, ArrTD))
                })
                let Table = e("table", { key: Math.random(), className: "table table-sm" },
                    e("tbody", { key: Math.random() }, TableTr)
                )



                ArrInside.push(Table)

                let temp = e("div", { key: Math.random() }, ArrInside);
                ArrLevelTale.push(temp)
            })


            let RES = e("div", { key: Math.random() }, ArrLevelTale)
            return (
                <div className="toolSearch">
                    {RES}
                </div >
            )
        } catch (error) {
            console.log(error)
            return "Lỗi"
        }
    }
    /*END SHOW SEARCH */

    function Show_OnePeopeAppear_ReactData() {
        try {


            if (Info_Avatar_Reactdata !== null) {
                return (
                    <div className="row GameSence_Playing_OneShow">
                        <div className="col-5">
                            {SHOW_Search()}
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
                            <p>Submit Syntax: {Info_ToSunmit_Reactdata.submitsyntax}</p>
                            <input onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    Submit_Show_OnePeopeAppear_ReactData(e.currentTarget.value)
                                }
                            }} className="form-control" type="text" placeholder={Info_ToSunmit_Reactdata.submitsyntax} />
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
