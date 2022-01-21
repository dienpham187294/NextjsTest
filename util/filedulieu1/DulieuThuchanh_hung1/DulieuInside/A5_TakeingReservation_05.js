import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"
import Food from "./A1_foods"
import dataPickuptable_01 from "./A1_tableOfPickup_01"
import dataPickuptable_02 from "./A1_tableOfPickup_02"

import dataTableBooked from "./A1_tableOfBooking"
import dataPhoneNumber from "./A1_phonenumber"


let ArrOfSubmit;
let dataTableBooked_use = dataTableBooked.slice(3, 7)

// console.log(dataTableBooked_use)

let dataHowmanypeople = ["2", "3", "4", "5", "6"]
let dataTable = ["indoor table", "outdoor table"]

export default function A5_TakeingReservation_05(n) {

    let DataTable = {
        "m00": dataTableBooked,
    }

    let output = [].concat(
        getOutputT(DataTable, 30),
    )

    return { "core": output, "tool": DataTable }
}

function getOutputT(DataTable, n) {
    let outputT = []
    ArrPeple.slice(0, n).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Someone is calling!",
            "img": "https://i.postimg.cc/nhSBcRmz/man-In-Call.jpg"
        }
        let SpeakFirst = ["Hi", "Hello"]
        let nameBE = ", sir"
        if (e[2] === "female") {
            nameBE = ", ma'am"
        }
        let objUse = {
            "date": pickNRandomElementsOfArray(dataTableBooked_use, 3),
            "phonenumber": pickNRandomElementsOfArray(dataPhoneNumber, 3),
            "manypeople": pickNRandomElementsOfArray(dataHowmanypeople, 3),
            "table": pickNRandomElementsOfArray(dataTable, 2)
        }


        let Begin = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "Welcome to ABC restaurant. How can I help you" + nameBE + "?",
                    ],
                    [
                        "I want to book a table.",
                        "I want to book a table in advance."
                    ],
                )
            },
            {
                "index": "1",
                "handle": FnObjHanldingNext(
                    ["How can I help you" + nameBE + "?", "May I help you" + nameBE + "?"],
                    [
                        "Is this ABC restaurant?",
                    ]
                )
            },
            {
                "index": "1-0",
                "handle": FnObjHanldingNext(
                    ["Yes, it is."],
                    [
                        "I want to book a table.",
                    ],
                )
            },
        ]

        let input_01_Begin = []
        let input_02_Begin = []

        Begin.forEach(e => {
            input_01_Begin.push(e.index)
            input_02_Begin.push(e.handle)
        })
        let Mid = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "For what day, please?",
                    ],
                    [
                        "The " + objUse.date[0].Date
                    ]
                )
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    [
                        "We had space available that day. Do you have a seat request?",
                    ],
                    [
                        "I want an outdoor table."
                    ]
                )
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Sorry, all outdoor tables are booked. How about an indoor tables" + nameBE + "?",
                        "Unfortunately, all outdoor tables are booked. How about an indoor tables" + nameBE + "?",
                    ],
                    [
                        "That's ok"
                    ]
                )
            },
            {
                "index": "0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "So, you take an indoor table. Right?",
                    ],
                    [
                        "That's right"
                    ]
                )
            },
            {
                "index": "1",
                "handle": FnObjHanldingNext(
                    [
                        "What is your name" + nameBE + "?", "Can I have your name" + nameBE + "?", "Under what name, please?",
                    ],
                    [
                        e[0],
                        "My name is " + e[0]
                    ]
                )
            },
            {
                "index": "2",
                "handle": FnObjHanldingNext(
                    [
                        "What is your phone number" + nameBE + "?",
                        "Can I have your phone number" + nameBE + "?",
                        "How about your phone number" + nameBE + "?"
                    ],
                    [
                        "My phone number is " + objUse.phonenumber[0]
                    ]
                )
            },
            {
                "index": "3",
                "handle": FnObjHanldingNext(
                    [
                        "How many people do you have" + nameBE + "?",
                        "For How many" + nameBE + "?"
                    ],
                    [
                        "A table for " + objUse.manypeople[0] + ", please!",
                        objUse.manypeople[0] + " people, please!",
                        "We have " + objUse.manypeople[0]
                    ]
                )
            },
            {
                "index": "4",
                "handle": FnObjHanldingNext(
                    [
                        "Please wait a moment. I have taken the reservation.",
                    ],
                    [
                        ""
                    ],
                    objaction_01(
                        [
                            {
                                "input": [e[0]],
                                "index": 0
                            },
                            {
                                "input": objUse.phonenumber,
                                "index": 0
                            },
                            {
                                "input": getArrDate(objUse.date),
                                "index": 0
                            },
                            {
                                "input": objUse.manypeople,
                                "index": 0
                            },
                            {
                                "input": dataTable,
                                "index": 0
                            }
                        ]
                    )
                )
            },
            {
                "index": "4-0",
                "handle": FnObjHanldingNext(
                    [
                        "Your reservation is for the "
                        + objUse.date[0].Date + ". For "
                        + objUse.manypeople[0] + " people. Under name "
                        + e[0] + ", and "
                        + objUse.table[0] + ". Is it right?",
                    ],
                    [
                        "That's right."
                    ]
                )
            },
            {
                "index": "4-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Do you want to order something in advance!",
                    ],
                    [
                        "No thanks."
                    ]
                )
            },
            ,
            {
                "index": "4-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "So thank you. See you soon.",
                    ],
                    [
                        "Thank you."
                    ],
                    objEndSuccefull
                )
            },

        ]
        let input_01_Body = []
        let input_02_Body = []

        Mid.forEach(e => {
            input_01_Body.push(e.index)
            input_02_Body.push(e.handle)
        })




        let End = null


        ArrInFN.Submit = ArrOfSubmit



        outputT.push(
            Fnperson(
                ArrInFN,
                DataTable,
                FnToArrobj(input_01_Begin, input_02_Begin),
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                ["hi", "hellow"]
            )
        )
    })

    return outputT
}

function objaction_01(
    Arr
) {

    let obj = {
        "action": {
            "name": "Ghi nhận đơn đặt hàng của khách!",
            "list": [],
            "submit": []
        }
    }

    Arr.forEach((e) => {
        e.input.forEach((ee, ii) => {
            if (e.index === ii) {
                obj.action.list.push(
                    {
                        "data": ee,
                        "stt": true
                    }
                )
                obj.action.submit.push(false)
            } else {
                obj.action.list.push({ "data": ee, "stt": true })
                obj.action.submit.push(true)
            }
        })
    })
    return obj
}

function getArrDate(arrobj) {
    let arrFn = []
    arrobj.forEach(e => {
        arrFn.push(e.Date)
    })
    return arrFn
}