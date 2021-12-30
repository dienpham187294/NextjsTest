import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"
import objreadFirst from "../../dataHelperFunction/objreadFirst"


let Arri = [
    {
        "in1": "There will be 2 adults of us.",
        "in2": "2 adults",
    },
    {
        "in1": "For 2 adults and 2 children",
        "in2": "2 adults and 2 children",
    }
]

let Arr2 = [
    {
        "in1": "That's Mark.",
        "in2": "Mark",
    },
    {
        "in1": "My last name is Maria.",
        "in2": "Maria",
    }
]

let Arr3 = [
    {
        "in1": "Outdoor seating, please ",
        "in2": "https://i.postimg.cc/fWGW9ydB/outdoor.png",
    },
    {
        "in1": "A table in the air conditioned room, please!",
        "in2": "https://i.postimg.cc/v8gHTf44/indoor.png",
    }
]


let ArrOfSubmit;

export default function A2_Thuytrang3(n) {

    let output = []
    let DataTable = {
        "m01": ["This Friday"],
        "m02": getElementsToDataTable(Arri, "in2"),
        "m03": getElementsToDataTable(Arr2, "in2"),
        "m04": getElementsToDataTable(Arr3, "in2")
    }

    ArrPeple.slice(0, n).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Taking Reservations by Telephone",
            "img": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"
        }
        let SpeakFirst = ["Hi", "Good afternoon"]


        let ArrBegin = [
            FnObjHanldingNext(
                [
                    "Hello, EPC Restaurant, Lisa speaking. How can I help you?",
                    "Hello, EPC Restaurant, John speaking. May I help you?",
                ],
                ["I would like to make a reservation.", "I would like to book a table."]
            )
        ]
        ArrOfSubmit.push("This Friday")

        let in1 = pickNRandomElementsOfArray(Arri, 1)
        ArrOfSubmit.push(in1[0].in2)

        let in2 = pickNRandomElementsOfArray(Arr2, 1)
        ArrOfSubmit.push(in2[0].in2)


        let in3 = pickNRandomElementsOfArray(Arr3, 1)
        ArrOfSubmit.push(in3[0].in2)

        let Body = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    ["What day do you want to come in?", "For what date, please?"],
                    ["This Friday at 7:00pm"]
                ),
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    ["How many people will you need the reservation for?", "For how many, please?"],
                    [in1[0].in1]
                ),
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    ["What kind of seating would you like? We have outdoor seating and air-conditioned rooms."],
                    [in3[0].in1]
                ),
            },
            {
                "index": "0-0-0-0",
                "handle": FnObjHanldingNext(
                    ["May I have your name?"],
                    [in2[0].in1]
                ),
            }
        ]



        let End = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "I have reserved a table on this Friday at 7pm. Is there anything else I can do for you?",
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
        Body.forEach(e => {
            input_01_Body.push(e.index)
            input_02_Body.push(e.handle)
        })
        End.forEach(e => {
            input_01_End.push(e.index)
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

