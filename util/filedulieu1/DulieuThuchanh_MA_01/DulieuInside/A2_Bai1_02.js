import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray_01"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"

import A1_Bai1 from "./A1_bai1"

let ArrOfSubmit;
let A1_data = []
A1_Bai1.forEach(e => {
    A1_data.push(
        { "Answer": e.Answer }
    )
})
let ArrUse = [
    A1_Bai1
]
export default function A2_Bai1(n) {

    let output = []
    let DataTable = {
        "m01": A1_data
    }

    ArrPeple.slice(0, n).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Pick a question",
            "img": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"
        }


        let in_pickRandom01 = pickNRandomElementsOfArray(ArrUse[ArrUse.length - 1], 4)
        let objGet = in_pickRandom01[0]
        let objGet1 = in_pickRandom01[1]

        if (objGet1.length > 8) {
            ArrUse.push(
                objGet1.slice(4 - objGet1.length)
            )
        } else {
            ArrUse.push(A1_Bai1)
        }
        let SpeakFirst = [objGet[0].Question]
        let ArrBegin = [
            FnObjHanldingNext(
                [objGet[0].Answer],
                [objGet[1].Question]
            )
        ]

        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                [objGet[1].Answer],
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



function fnAction_01(data, n) {
    let arrT = []
    data.forEach((e) => {
        if (e.IPA === n) {
            arrT.push(
                {
                    "data": e.Word,
                    "stt": true,
                    "submit": false
                }
            )
        } else {
            arrT.push({ "data": e.Word, "stt": true, "submit": true })
        }
    })

    return {
        "action": {
            "name": "T???/c???m t??? n??o c?? phi??n ??m: " + n,
            "list": shuffleArr(arrT),
        }
    }
}