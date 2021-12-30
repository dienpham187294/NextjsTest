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
        "name": "menu",
        "img": "https://i.postimg.cc/50DMZtQC/menu.jpg",
    },
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

export default function A2_Menu(n) {

    let output = []
    let DataTable = {
        "m01": getElementsToDataTable(Arri, "img")
    }

    ArrPeple.slice(0, n).forEach(e => {

        ArrOfSubmit = ["https://i.postimg.cc/50DMZtQC/menu.jpg"]

        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Guest at the table.",
            "img": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"
        }
        let SpeakFirst = ["Excuse me."]
        let ArrBegin = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["I want to see the menu.", "Menu, please!", "Can I have the menu?"]
            )
        ]

        let input_01_Body = [
            "0",
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["I want to see the menu.", "Menu, please!", "Can I have the menu?"]
            )
        ]

        let End = [
            FnObjHanldingNext(
                ["Here you are!", "Your menu!"],
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

