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
        "in1": "It's Mark and the number is 1 2 3 4 5 7. Thanks, good bye!",
        "in2": "Mark",
    },
    {
        "in1": "It's Maria and the number is 1 2 3 4 5 7. Thanks, good bye!",
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

export default function A2_Thuytrang4(n) {

    let output = []
    let DataTable = {
        "m01": ["No", "Yes"],
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
        ArrOfSubmit.push("Next Saturday")
        ArrOfSubmit.push("No")


        let in2 = pickNRandomElementsOfArray(Arr2, 1)
        ArrOfSubmit.push(in2[0].in2)



        let Body = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    ["What day do you want to come in?", "For what date, please?"],
                    ["Next Saturday at 7:00pm"]
                ),
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    ["Could you hold the line, please? I'll check our reservation list… Thank you for waiting but I'm afraid the seating is fully booked for that day. Is it possible for you to change your reservation date? We have seating available on next Sunday."],
                    ["No, thanks. But I and my friends will busy on that day"]
                ),
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    ["We might have cancellations. But if we have any cancellations, could we call you again closer to the date as soon as possible?"],
                    ["Certainly.", "That's OK"]
                ),
            },
            {
                "index": "0-0-0-0",
                "handle": FnObjHanldingNext(
                    ["May I have your name and phone number?"],
                    [in2[0].in1]
                ),
            }
        ]



        let End = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "You are welcome. Good bye.",
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

