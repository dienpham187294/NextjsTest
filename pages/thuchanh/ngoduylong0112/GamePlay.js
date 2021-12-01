import React, { useEffect, useState } from "react";
// import Read_ReactJSX from "../../../pages/helpers/Read_ReactJSX"
import $ from "jquery"
import Linkapi from "../../../util/api/Linkapi"
import DataTool from "./S_Data_tool"
import ReadReactSpeech from "../../helpers/Read_ReactSpeechSlow"
import ReadMessage from "../../../util/Read/ReadMessage"
// import { prop } from "cheerio/lib/api/attributes";
const stringSimilarity = require("string-similarity");
// import Cookies_ReadingPage from "../../../../../util/Cookies/Cookies_ReadingPage"
let VoicePick = 1;
let State_of_Anwer = "none";
let Data_temp_Strickmode;
let AllData_OfOne;
let iThoigian = 0;
let interNguoitieptheo, iNguoitieptheo;
let rateRead = 1.1
let pitchRead = 1.2
let idRoomOnline;
let idMember;
let interOnline;
let i1 = 0
let timeCount;
function ArrOfPeopeAppear_ReactJSX(props) {

    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(["hi how are you"])
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState("")
    const [Info_Avatar_Reactdata, SET_Avatar_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null);
    const [Score, SET_Score] = useState(0)
    const [Sai, SET_Sai] = useState(0)
    const [Boqua, SET_Boqua] = useState(0)
    const [Data_TableTool, SET_Data_TableTool] = useState([])
    const [RoomOnline, SET_RoomOnline] = useState("")
    const [DataOnline, SET_DataOnline] = useState([])

    useEffect(() => {
        props.SET_Data_Commands(Info_StrickAnwers_Reactdata)
        timeCount = Date.now()
        if (i1 === 0) {
            idRoomOnline = Date.now() + ["a", "b", "c", "d", "e", "f"].PickRandom()
            if (localStorage.getItem("idMember") !== null) {
                idMember = localStorage.getItem("idMember")
            } else {
                idMember = Date.now() + ["a", "b", "c", "d", "e", "f"].PickRandom();
                localStorage.setItem("idMember", idMember)
            }
            i1++
        }

    }, [Info_StrickAnwers_Reactdata])

    useEffect(() => {
        if (RoomOnline !== "") {
            getOnline(RoomOnline, idMember, Score)
        }

    }, [Score])


    useEffect(
        () => {
            inter()
            // if (iThoigian === 0) {
            //     iThoigian = 1
            //     setInterval(() => {
            //         iThoigian += 1
            //         $("#thoigian").text(iThoigian)
            //     }, 1000);
            // } else {
            //     iThoigian = 1
            // }
            props.Total.stObj.timebegin = Date.now()
            props.Total.stObj.indexOfPeople = 0
            props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData = AddTo_Show_ArrOfPeopeAppear_ReactData
            props.Total.fnObj.Submit_Show_OnePeopeAppear_ReactData = Submit_Show_OnePeopeAppear_ReactData
            props.Total.fnObj.Xuly = Xuly
            AddTo_Show_ArrOfPeopeAppear_ReactData(0)
        }, []
    );

    async function getOnline(idRoom, idMember, score) {
        try {
            const res = await fetch(
                Linkapi + "api/apiOnline?idRoom=" + idRoom + "&idMember=" + idMember + "&score=" + score
                ,
                {
                    method: 'GET',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
            let data = await res.json();
            console.log(data)
            if (data.success) {
                SET_DataOnline(data.data)
            }


        } catch (error) {
            console.log(error)
        }
    }


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

                        // Submit_check_funtion_indata_01(data.function)

                        // console.log(data.function)
                        if (data.robotspeak.length > 0) {
                            ReadMessage(data.robotspeak.PickRandom(), VoicePick, rateRead, pitchRead);
                        }
                        if (data.handling_next.length > 0) {
                            Data_temp_Strickmode = (data.handling_next)
                            let arrTemp = [];
                            data.handling_next.forEach(e => {
                                e.manspeak.forEach(ee => {
                                    arrTemp.push(ee)
                                })
                                // Submit_check_funtion_indata_01(e.function)
                            })
                            SET_Info_StrickAnwers_Reactdata(arrTemp)
                        } else {
                            Data_temp_Strickmode = (AllData_OfOne.middle.handling_next)
                            let arrTemp = [];
                            AllData_OfOne.middle.handling_next.forEach(e => {
                                e.manspeak.forEach(ee => {
                                    arrTemp.push(ee)
                                })
                                // Submit_check_funtion_indata_01(e.function)
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

                SET_Data_TableTool(props.ArrOfPeopeAppear_ReactData[index].total.Tabletool)
                // try {
                //     let i2 = 
                //     props.SET_Data_TableTool(i2)
                // } catch (error) {
                //     console.log(error)
                // }

                // .SET_Data_TableTool()
                SET_Info_StrickAnwers_Reactdata(Arr_HoldAllManSpeak)
                await SET_Avatar_Reactdata(n.total.image);
                if (n.total.icon !== "" && n.total.icon !== undefined) {
                    SET_Info_Icon_Reactdata(n.total.icon)
                }
                await SET_Info_ToSunmit_Reactdata([])
                await SET_Info_ToSunmit_Reactdata(n.total.submitsyntax)
                if (n.total.gender === "female") {
                    VoicePick = (1);
                } else {
                    VoicePick = (2);
                }
                rateRead = [0.9, 1.0, 1.1, 1.2].PickRandom()
                pitchRead = [0.9, 1.0, 1.1, 1.2].PickRandom()
                ReadMessage(n.total.robotspeakfirst.PickRandom(), VoicePick, rateRead, pitchRead)
            } else {
                $("#showEnd").show()
                $("#time").text(Math.floor((Date.now() - props.Total.stObj.timebegin) / 1000 / 60) + " phút " + Math.floor(((Date.now() - props.Total.stObj.timebegin)) / 1000) % 60 + " giây.")
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
            let n = e.split("===").slice(-1)[0]


            // console.log([0].indexOf("Elizabeth"))
            data.total.submit.forEach(e => {
                if (e.includes(n)) {
                    // console.log(e, n)
                    status = true
                }
            })
            if (!status) {
                SET_Sai(S => S + 1)
            }
        } catch (error) {
        }


        try {

            // console.log(data.total.submit, e)
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
                        $("#ct1" + i + ii).text("X");
                        // console.log()
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
            if (Score < 3) {
                return Info_StrickAnwers_Reactdata.map((e, index) =>
                    <span className="Span_Show_Info_StrickAnwers_Reactdata" key={index}>{e} <b style={{ backgroundColor: "black" }}>||</b> </span>
                )
            }
            else if (Score < 10) {
                return Info_StrickAnwers_Reactdata.map((e, index) =>
                    <span className="Span_Show_Info_StrickAnwers_Reactdata" key={index}>{SortLetter(e)} <b style={{ backgroundColor: "black" }}>||</b> </span>
                )
            } else {
                return null
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
                                <div className="row">
                                    <div className="col-4">
                                        <img alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="160px" />
                                        {Check_ImageOrNot(Info_Icon_Reactdata) ?
                                            <>
                                                <img alt={Info_Icon_Reactdata} src={Info_Icon_Reactdata} width="140px" />
                                            </>
                                            : <b><i>{Info_Icon_Reactdata}</i></b>}
                                    </div>
                                    <div className="col-6">
                                        <br />
                                        {Show_Info_StrickAnwers_Reactdata()}
                                        <hr />
                                        <div className="row">
                                            <div className="col-6">
                                                {showSubmitSyxtax(Info_ToSunmit_Reactdata)}
                                                <span id="complete" style={{ color: "red" }}></span>
                                                <br />
                                                <span style={{ color: "blue" }}>{props.huongdan}</span>


                                            </div>
                                            <div className="col-6">
                                                <b> Điểm: {Score} <span style={{ color: "red" }}>Chọn sai: {Sai} </span> | <span style={{ color: "red" }}>{Boqua}</span> </b>
                                                <button
                                                    onClick={() => {
                                                        let t = (Date.now() - timeCount) / 1000 / 60;

                                                        $("#thoigian").text(Math.floor(t) + " phút.")

                                                    }}
                                                >Time</button>
                                                
                                                <span id="thoigian"></span>
                                                <br />
                                                <span id="showInterimID" style={{ color: "violet" }}></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />

                                {/* <hr /> */}
                                <div className="row">
                                    <div className="col-12">
                                        <b>Công cụ: </b>
                                        <DataTool Data={Data_TableTool} Total={props.Total} />
                                    </div>

                                </div>

                                <hr />

                                {showDataOnline(DataOnline)}



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
                                            SET_Boqua(B => B + 1)
                                            $("#complete").html("")
                                            $("#showbtnNext").hide()
                                            props.Total.stObj.inputSumit = ""
                                            props.Total.stObj.indexOfPeople += 1
                                            props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData(props.Total.stObj.indexOfPeople)
                                        }}
                                    >Next</button>
                                    <br />
                                    <button
                                        className="btn btn-outline-danger form-control mt-1"
                                        onClick={() => {
                                            // console.log(props.Total)
                                            props.Total.fnObj.SET_PageChange(0)
                                            try {
                                                $("#idStopLisening")[0].click()
                                                clearInterval(interOnline)
                                            } catch (error) {

                                            }
                                        }}
                                    >Exit</button>
                                    <br />

                                    {RoomOnline === "" ?
                                        <div>
                                            <input id="getIdRoom" defaultValue={idRoomOnline} type="text" />
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => {
                                                    SET_RoomOnline($("#getIdRoom").val())
                                                    getOnline($("#getIdRoom").val(), idMember, Score)
                                                }}
                                            >Online</button>
                                        </div>
                                        :
                                        <div>
                                            {RoomOnline}
                                            <br />
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => {
                                                    // clearInterval(interOnline)
                                                    SET_RoomOnline("")
                                                }}
                                            >Thoát</button>

                                            <button
                                                className="btn btn-sm btn-warning"
                                                onClick={() => {
                                                    getOnline(RoomOnline, idMember, Score)
                                                }}
                                            >Cập nhật</button>
                                            {/* <input id="idName" type="text" placeholder="Tên" /> */}
                                        </div>
                                    }

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
                                    <h1 style={{ color: "red" }}>Next...   <span id="countDown">3</span></h1>

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
                    {/* <table >
                        <tbody> */}
                    {e.map((ee, ii) =>
                        <div style={{ display: "inline-block", borderLeft: "5px solid green", padding: "3px" }} key={ii}>
                            <div id={"ct" + i + ii}>
                                {ee} <span id={"ct1" + i + ii}></span>
                            </div>
                        </div>
                    )}
                    {/* </tbody>
                    </table> */}
                </div>
            )
        )
    } catch (error) {

    }

    return JSON.stringify(Info_ToSunmit_Reactdata)
}



function showDataOnline(DataOnline) {
    // console.log(DataOnline)
    try {
        return (
            DataOnline.map((e, i) =>
                <span style={{ border: "1px solid green", borderRadius: "3px", padding: "5px", margin: "4px" }} key={i}>
                    {e.score}
                </span>
            )
        )
    } catch (error) {
        return null
    }
}

function Check_ImageOrNot(Stringtocheck) {
    if (
        typeof (Stringtocheck) === "string"
        && (Stringtocheck.includes(".png")
            || Stringtocheck.includes(".jpg")
            || Stringtocheck.includes(".jpeg")
            || Stringtocheck.includes(".gif"))) {
        return true
    }
    return false
}