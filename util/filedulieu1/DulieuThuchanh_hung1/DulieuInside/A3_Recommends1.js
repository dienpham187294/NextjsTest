import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"
import Food from "./A1_foods"


let ArrOfSubmit;

export default function A3_Recommends1(n) {

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


        let objInput = {
            "ci": pickNRandomElementsOfArray(Food, 2)
        }


        let ArrBegin = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["Can you give me a suggestion for today's dish?"],
                {},
                objInput.ci[0].img
            )
        ]


        let Mid = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    ["I recommend the " + objInput.ci[0].input],
                    ["I don't really like it, do you have another dish?"],
                    {},
                    objInput.ci[1].img
                )
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    ["How about the " + objInput.ci[1].input],
                    ["Ok get me this dish."],
                )
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    ["Do you need anything else?"],
                    ["No thanks"],
                    objEndSuccefull
                )
            }
        ]
        let input_01_Body = []
        let input_02_Body = []

        Mid.forEach(e => {
            input_01_Body.push(e.index)
            input_02_Body.push(e.handle)
        })




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

