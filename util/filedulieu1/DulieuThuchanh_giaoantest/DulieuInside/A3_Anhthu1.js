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



let ArrOfSubmit;

export default function A3_Anhthu1(n) {

    let output = []
    let DataTable = {
        "m01": ["No"],
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




        let Body = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "I’m good. Thank you. How are you?",
                        "I’m great. Thank you. How are you?",
                        "Doing great. Thank you. How are you?",
                        "I’m good. Thank you. How about you?",
                        "I’m great. Thank you. How about you?",
                        "Doing great. Thank you. How about you?",
                    ],
                    [
                        "I’m good. Thank you.",
                        "I’m great, Thank you."
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
                        "I’m just checking whether your restaurant has been opened again?",
                        "Has your restaurant opened again?",
                        "Is your restaurant at 123 Ho Tung Mau street opened again?"
                    ]
                ),
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Yes, sir",
                        "Yes, madam",
                        "Yes, we’ve been back to normal for a while"
                    ],
                    [
                        "Cool. Do you serve at your restaurant or just order to go?",
                        "Great. Do you serve at your restaurant or just order to go?",
                        "Cool. What type of service do you have?",
                        "Great. What type of service do you have?"
                    ]
                ),
            },
            {
                "index": "0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "We serve at our restaurant and order to go too",
                        "We serve both"
                    ],
                    [
                        "Great",
                        "Awesome"
                    ]
                ),
            },
            {
                "index": "0-0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Do you want to make a reservation or order to go now?"
                    ],
                    [
                        "No, Thanks, I’m just checking.",
                        "Not now. Thanks."
                    ]
                ),
            },
            {
                "index": "0-0-0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "I’m well – noted, sir. Anything else i can help you?",
                        "I’m well – noted, ma’am. Anything else i can help you?"
                    ],
                    [
                        "No. I will come next time. Thanks a lot. ",
                    ]
                ),
            },
            {
                "index": "0-0-0-0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Thanks for calling ABC restaurant. Have a great day. Goodbye.",
                    ],
                    [
                        "Have a great day. Bye",
                    ],
                    objEndSuccefull
                ),
            },
        ]



        let End = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "I have reserved a table for next Sunday at 7pm. Is there anything else I can do for you?",
                    ],
                    ["That will be all"]
                ),
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    [
                        "My pleasure. We'll see you soon. Have a nice day!",
                    ],
                    [],
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

