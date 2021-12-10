import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"

import Foods from "./DulieuInside/A1_foods"



let DataTable = []
let coerdataoflession = []


DataTable.push(getElementsToDataTable(Foods, "img"))
let arrListLisen1 = []
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["Excuse me"]

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Yes, may I help you?"], ["I want to order."]))

    //middle

    let Arrin3 = []
    let Arrin4 = []
    let Arri1 = pickNRandomElementsOfArray(Foods, 2)
    // console.log(Arri1)
    let Anwer1 = "I want to order " + Arri1[0].input + ", and " + Arri1[1].input;

    arrListLisen1.push(Arri1[0].input + ", and " + Arri1[1].input)
    ArrInFN.Submit.push(Arri1[0].img)
    ArrInFN.Submit.push(Arri1[1].img)

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["What would you like?"], [Anwer1]))

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"))
})

let hoctap = [

]
let listenOnly = [
    arrListLisen1
]
let writeOnly = [
]
let storyBoicanh = ""
let story = `Hôm nay, nếu khách đang ngồi sẵn gọi thì lại hỏi xem khách cần gì. Nếu khách cần order thì làm cho khách.`
const Bai24

    = [
        {
            "nameoflession": "B.2.1",
            "storyBoicanh": storyBoicanh,
            "story": story,
            "srcYoutube": "",
            "hoctap": {
                "listenRead": hoctap,
                "listenOnly": listenOnly,
                "writeOnly": writeOnly
            },
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default Bai24


