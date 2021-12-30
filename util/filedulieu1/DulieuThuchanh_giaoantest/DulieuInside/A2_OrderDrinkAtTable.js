import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"

import A1_drinks from "./A1_drinks"


let ArrOfSubmit;

export default function A2_OrderAtTable(n) {

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
        let ArrBegin = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["I want to order a drink."]
            )
        ]

        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["What would you like?", "What do you want to order?"],
                AwDrink(A1_drinks)
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



function AwDrink(Drink) {
    let input = pickNRandomElementsOfArray(Drink, 2)

    ArrOfSubmit.push(input[0].img)


    return (
        [
            "I want to take " + input[0].input,
            input[0].input + ", please!"
        ]
    )
}