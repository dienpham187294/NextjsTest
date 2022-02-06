import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"



let Arri = [
    {
        "name": "spoon",
        "img": "https://i.postimg.cc/s26z4mVK/spoon.jpg",
    },
    {
        "name": "fork",
        "img": "https://i.postimg.cc/cHvS93CW/fork.jpg",
    }
]

let ArrOfSubmit;

export default function A2_Tool(n) {

    let output = []
    let DataTable = {

    }

    ArrPeple.slice(0, n).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Guest at the table.",
            "img": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"
        }
        let SpeakFirst = ["Excuse me."]

        let i = pickNRandomElementsOfArray(Arri, 1)
        ArrOfSubmit.push(i[0].img)
        let ArrBegin = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["Can you give me a " + i[0].name + "?"]
            )
        ]

        let input_01_Body = [
            "0",
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["Can you give me a " + i[0].name + "?"]
            )
        ]

        let End = [
            FnObjHanldingNext(
                ["Here you are!", "Your " + i[0].name],
                ["Thank you!"],
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
                End,
                SpeakFirst,
                "Hi"
            )
        )
    })

    return { "core": output, "tool": DataTable }
}

