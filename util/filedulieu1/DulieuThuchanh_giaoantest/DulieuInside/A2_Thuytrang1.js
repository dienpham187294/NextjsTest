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
        "in1": "It's Mark and the number is 1 2 3 4 5 7.",
        "in2": "Mark",
    },
    {
        "in1": "It's Maria and the number is 1 2 3 4 5 7.",
        "in2": "Maria",
    }
]

let ArrOfSubmit;

export default function A2_Thuytrang1(n) {

    let output = []
    let DataTable = {
        "m01": ["This Friday", "Next Saturday"],
        "m02": getElementsToDataTable(Arri, "in2"),
        "m03": getElementsToDataTable(Arr2, "in2")
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

        let input_01_Body = [
            "0", "0-0", "0-0-0", "0-0-0-0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["What day do you want to come in?", "For what date, please?"],
                ["This Friday at 7:00pm"]
            ),
            FnObjHanldingNext(
                ["How many people will you need the reservation for?", "For how many, please?"],
                [in1[0].in1]
            ),
            FnObjHanldingNext(
                ["Just a minute, I will see if we have a table. We have a table at 7:15. Will that be acceptable?"],
                ["Okay"]
            ),
            FnObjHanldingNext(
                ["May I have your name and phone number?", "May I have your personal information?"],
                [in2[0].in1]
            ),
        ]
        let End1 = ["0", "0-1"]
        let End2 = [
            FnObjHanldingNext(
                [
                    "I have reserved a table on Friday at 7:15. Is there anything else I can do for you?",
                ],
                ["That will be all"],
            ),
            FnObjHanldingNext(
                [
                    "My pleasure. We'll see you soon. Have a nice day!",
                ],
                [],
                objEndSuccefull
            )
        ]

        ArrInFN.Submit = ArrOfSubmit



        output.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                FnToArrobj(End1, End2),
                SpeakFirst,
                "Hi"
            )
        )
    })

    return { "core": output, "tool": DataTable }
}

