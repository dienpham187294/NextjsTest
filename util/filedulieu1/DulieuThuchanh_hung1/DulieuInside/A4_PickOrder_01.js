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

import A4_begin1 from "./A4_Begin1"
let ArrOfSubmit;

export default function A4_PickOrder_01(n) {




    let DataTable = {
        "m00": dataPickuptable_02
    }

    let output = [].concat(
        getOutputT(DataTable, 0),
        getOutputT(DataTable, 1),
        getOutputT(DataTable, 2)
    )

    return { "core": output.concat(output, output), "tool": DataTable }
}

function getOutputT(DataTable, n) {
    let outputT = []
    dataPickuptable_01.slice(0, 10).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e.img
        ArrInFN.gender = e.Gender
        ArrInFN.viewPick = {
            "header": "Guest at the door.",
            "img": "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"
        }
        let SpeakFirst = ["Hi", "Hello"]

        let input_01_Begin = []
        let input_02_Begin = []


        A4_begin1(e).forEach(ee => {
            input_01_Begin.push(ee.index)
            input_02_Begin.push(ee.handle)
        })
        let Mid = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    ["Can I have your name?", "What is your name?"],
                    [
                        "My name is " + e.Name,
                        e.Name,
                        "It's " + e.Name
                    ]
                )
            },
            {
                "index": "1",
                "handle": R_phonenumber(e, n)
            },
            {
                "index": "2",
                "handle": R_receiptnumber(e, n)
            },
            {
                "index": "3",
                "handle": FnObjHanldingNext(
                    [
                        "Your order is " + e["Ordered food"] + ". Is it right?",
                        "You order " + e["Ordered food"] + ". Right?"
                    ],
                    ["Yes it is."]
                )
            },
            {
                "index": "3-0",
                "handle": FnObjHanldingNext(
                    ["Your order is ready!"],
                    [""],
                    {
                        "action": {
                            "name": "Giao ????? ??n cho kh??ch!",
                            "list":
                                [
                                    {
                                        "title": e["Ordered food"],
                                        "data": "https://i.postimg.cc/ryZmZ7Bz/online-food-delivery-courier-delivers-paper-package-with-foodstuff-fast-delivery-service-human-carto.jpg",
                                        "stt": true,
                                        "submit": false
                                    }
                                ]
                        }
                    }
                )
            },
            {
                "index": "3-0-0",
                "handle": FnObjHanldingNext(
                    ["Here you are!"],
                    ["Thank you"],
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
                "Hi"
            )
        )
    })

    return outputT
}

function R_phonenumber(e, n) {
    let Arr_01 = [
        FnObjHanldingNext(
            ["What is your phone number?", "How about your phone number?"],
            [
                "It's " + e["Phone number"],
                e["Phone number"]
            ]
        ),
        FnObjHanldingNext(
            ["What is your phone number?", "How about your phone number?"],
            [
                "It's " + e["Phone number"],
                e["Phone number"]
            ]
        ),
        FnObjHanldingNext(
            ["What is your phone number?", "How about your phone number?"],
            [
                "Actually, I came to pick up my friend's order, I don't remember the phone number",
                "Sorry, I don't remember. Actually, I came to pick up my friend's order."
            ]
        )
    ]

    return Arr_01[n]
}


function R_receiptnumber(e, n) {

    let Arr_02 = [
        FnObjHanldingNext(
            ["What is your Receipt number?", "How about the Receipt number?"],
            [
                "It's " + e["Receipt number"],
                e["Receipt number"]
            ],
        ),
        FnObjHanldingNext(
            ["What is your Receipt number?", "How about the Receipt number?"],
            [
                "I don't remember.",
                "Sorry, I don't remember it."
            ],
        ),
        FnObjHanldingNext(
            ["What is your Receipt number?", "How about the Receipt number?"],
            [
                "It's " + e["Receipt number"],
                e["Receipt number"]
            ],
        )
    ]

    return Arr_02[n]
}


