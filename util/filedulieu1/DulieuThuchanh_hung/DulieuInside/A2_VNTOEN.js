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

    ArrPeple.slice(0, n).forEach(e => {
        let ArrInFN = {}
        ArrInFN.Submit = []
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "What is it mean?",
            "content": "",
            "img": "https://i.postimg.cc/76LB7hKz/icon-Nhiem-Vu.png"
        }

        let SpeakFirst = ["What is it mean?"]

        let TestArrPick = pickNRandomElementsOfArray(DataTestKnowleged, 1)

        let ArrBegin = [



        ]
        ArrBegin.push(
            FnObjHanldingNext([TestArrPick[0].EN], ["Good"], objEndSuccefull)
        )

        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext([], [])
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
                TestArrPick[0].VN
            )
        )
    })

    return output
}
