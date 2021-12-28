import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"



export default function A2_VNTOEN(n) {

    let output = []
    let DataTable = [
        "1", "2", "3"
    ]

    ArrPeple.slice(0, n).forEach(e => {
        let ArrInFN = {}
        ArrInFN.Submit = []
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "hi",
            "content": "",
            "img": "https://i.postimg.cc/76LB7hKz/icon-Nhiem-Vu.png"
        }

        let SpeakFirst = ["What is it mean?"]



        let ArrBegin = [



        ]
        ArrBegin.push(
            FnObjHanldingNext(["Hi"], ["Good"])
        )

        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(["hi"], ["hi"])
        ]




        let End = null
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
