import ArrPeple from "../../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../dataHelperFunction/objEndSuccefull"


let ArrOfSubmit;

export default function A2_EatHere(n) {

    let output = []
    let DataTable = {
        "m01": ["2", "3", "4"]
    }

    ArrPeple.slice(0, n).forEach(e => {

        ArrOfSubmit = ["For here"]

        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Guest at the door.",
            "img": "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"
        }
        let SpeakFirst = ["Hi", "Hello"]
        let ArrBegin = [
            FnObjHanldingNext(
                ["Hi, how are you?", "Good afternoon, how are you?", "Good morning, how are you?", "Good evening, how are you?"],
                ["Doing fine", "Good", "I'm good", "I'm great"]
            )
        ]

        let input_01_Body = [
            "0",
            "1",

        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["How can I help you?", "Do you want to eat here or to go?", "May I help you?"],
                ["I want to eat here?", "Eat here, please."]
            )
            ,
            FnObjHanldingNext(
                ["How many people do you have?", "For how many?"],
                AwHowmany()
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

function AwHowmany() {

    let input = pickNRandomElementsOfArray(["2", "3", "4"], 1)

    ArrOfSubmit.push(input[0])

    return (
        [
            "A table for " + input[0] + ", please."
        ]
    )
}

