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
let ArrOfSubmit;

export default function A4_PickOrder_01(n) {

    let output = []
    let DataTable = {
        "m00": dataPickuptable_02
    }

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




        let Begin = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    ["Do you want to eat here or to go."],
                    [
                        "Actually, I placed a pickup order. The name is " + e.Name + ".",
                        "Actually, I placed a pickup order. My name is " + e.Name + ".",
                        "Actually, I'm here to get my order. It is under the name " + e.Name + ".",
                        "Actually, I placed a pickup order.",
                        "Actually, I'm here to get my order."
                    ]
                )
            },
            {
                "index": "1",
                "handle": FnObjHanldingNext(
                    ["How can I help you", "May I help you"],
                    [
                        "Can I get the order for " + e.Name + "?",
                        "Is the order for " + e.Name + " ready?",
                        "I'm here to get my order."
                    ]
                )
            },
            {
                "index": "2",
                "handle": FnObjHanldingNext(
                    ["What do you want"],
                    ["I'm here to pick up an order."]
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
                "handle": FnObjHanldingNext(
                    ["What is your phone number?", "How about your phone number?"],
                    [
                        "It's " + e["Phone number"],
                        e["Phone number"]
                    ]
                )
            },
            {
                "index": "2",
                "handle": FnObjHanldingNext(
                    ["What is your Receipt number"],
                    [
                        "It's " + e["Receipt number"],
                        e["Receipt number"]
                    ],
                )
            },
            {
                "index": "3",
                "handle": FnObjHanldingNext(
                    ["Your order is " + e["Ordered food"] + ". Is it right?"],
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
                            "name": "Giao đồ ăn cho khách!",
                            "list":
                                [
                                    {
                                        "data": e["Ordered food"],
                                        "stt": true
                                    }
                                ],
                            "submit": [false]
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



        output.push(
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

    return { "core": output.concat(output, output), "tool": DataTable }
}

