import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"



let ArrOfSubmit;

export default function A2_Toilet(n) {

    let output = []
    let DataTable = {
        "m01": ["The toilet is at the end of the hallway."]
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

        let ArrBegin = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["Which way do I go to the toilet?", "Where is the toilet?"]
            )
        ]

        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["The toilet is at the end of the hallway."],
                ["Thank you!"],
                objEndSuccefull
            )
        ]

        let End = null

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

