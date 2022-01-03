import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"
import objreadFirst from "../../dataHelperFunction/objreadFirst"
import PIndex from "../../dataHelperFunction/PIndex"

let ArrInsideOutside = [
    { "in1": "Inside. Smoke free please." },
    { "in1": "Up stair. Outside please" }
]

let ArrOfSubmit;

export default function A3_Anhthu2(n) {

    let output = []
    let DataTable = {
        "m01": getElementsToDataTable(ArrInsideOutside, "in1"),
    }

    ArrPeple.slice(0, n).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Taking Reservations by Telephone",
            "img": "https://i.postimg.cc/nckHpp9G/Anhthu1.png"
        }
        let SpeakFirst = ["Hi", "Good afternoon"]


        let ArrBegin = [
            FnObjHanldingNext(
                [
                    "Hi, ABC restaurant's speaking. How can I help you?",
                    "Hello, ABC restaurant's speaking. How can i help you?",
                ],
                ["Hi, How are you?"]
            )
        ]


        let pArrInsideOutside = pickNRandomElementsOfArray(ArrInsideOutside, 1)
        ArrOfSubmit.push(pArrInsideOutside[0].in1)
        let Body = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "I'm good. Thank you. How are you?",
                        "I'm great. Thank you. How are you?",
                        "Doing great. Thank you. How are you?",
                        "I'm good. Thank you. How about you?",
                        "I'm great. Thank you. How about you?",
                        "Doing great. Thank you. How about you?",
                    ],
                    [
                        "I'm good. Thank you.",
                        "I'm great, Thank you."
                    ]
                ),
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    [
                        "How can i help you?",
                        "What can i help you?"
                    ],
                    [
                        "I'd like to make a reservation",
                        "I need to make a reservation",
                        "I'm coming to your restaurant on next Tuesday"
                    ]
                ),
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    [
                        "When will you need the reservation?",
                        "When would you like to have your lunch?",
                        "When would you like to have your dinner?"
                    ],
                    [
                        "Next Tuesday, Dec 28th.",
                    ]
                ),
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "What time will you come?",
                        "What's the exact time for the reservation?"
                    ],
                    [
                        "7.00 PM",
                    ]
                ),
            },
            {
                "index": "0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "How many people do you have?"
                    ],
                    [
                        "2 people",
                    ]
                ),
            },
            {
                "index": "0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Hold on, please. Let me check the reservations",
                        "A minute, please. Let me check the reservations. "
                    ],
                    [
                        "Ok",
                        "sure"
                    ]
                ),
            },
            {
                "index": "0-0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Sorry for keep you waiting. We have the an available for 2 at 7.00 PM",
                    ],
                    [
                        "Cool",
                        "Great"
                    ]
                ),
            },
            {
                "index": "0-0-0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Do you want to have your table down stair or up stair? Private room or public space? Inside or outside? Smoke or smoke free area?",
                    ],
                    [
                        pArrInsideOutside[0].in1
                    ]
                ),
            },
        ]



        let End = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "Do you want to order first or choose later when you come?",
                    ],
                    [
                        "I will order later",
                        "I will order when I'm there"]
                ),
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    [
                        "I'd like to reconfirm on your reservation. A table for two on 7.00 PM, next Tuesday, Dec 28th, 2021. Public place, smoke free. Would you please let me know your name please?",
                        "I'd like to reconfirm on your reservation. A table for two on 7.00 PM, next Tuesday, Dec 28th, 2021. Public place, smoke free. May I have your name please?"
                    ],
                    [
                        "I'm Jessie",
                        "It's Jessie"
                    ],

                ),
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "May I have your phone number please."
                    ],
                    [
                        "1 2 3 4 5",
                    ],

                ),
            },
            {
                "index": "0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Anything else that I can help?",
                        "Do you have any special request?"
                    ],
                    [
                        "No, thanks", "It's ok", "That's fine"
                    ],

                ),
            },
            {
                "index": "0-0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Thanks sir. Please tell us your name when you come.",
                        "Thanks ma'am. Please tell us your name when you come."
                    ],
                    [
                        "Sure", "It's ok", "That's fine"
                    ],

                ),
            },
            {
                "index": "0-0-0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Thanks for call ABC restaurant. See you at our restaurant next Tuesday. Have a nice day. Good bye.",
                    ],
                    [
                        "Have a nice day. Bye Bye"
                    ],
                    objEndSuccefull
                ),
            },
        ]



        ArrInFN.Submit = ArrOfSubmit
        let input_01_Body = []
        let input_02_Body = []
        let input_01_End = []
        let input_02_End = []
        Body.forEach((e, i) => {
            if (i == 0) {
                input_01_Body.push("0")

            } else {
                input_01_Body.push(PIndex(i))

            }

            input_02_Body.push(e.handle)
        })
        End.forEach((e, i) => {

            if (i == 0) {
                input_01_End.push("0")

            } else {
                input_01_End.push(PIndex(i))

            }

            input_02_End.push(e.handle)
        })


        output.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                FnToArrobj(input_01_End, input_02_End),
                SpeakFirst,
                "Hi"
            )
        )
    })

    return { "core": output, "tool": DataTable }
}

