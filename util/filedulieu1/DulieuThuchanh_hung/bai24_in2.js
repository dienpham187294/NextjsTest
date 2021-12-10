import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"


import Foods from "./DulieuInside/A1_foods"
import Drinks from "./DulieuInside/A1_drinks"

let DataTable = []

let coerdataoflession = []


DataTable.push(getElementsToDataTable(Foods, "img"))
DataTable.push(getElementsToDataTable(Drinks, "img"))

let arrListLisen0 = []
let arrListLisen1 = []
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["Excuse me"]
    //Begin
    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Yes, may I help you?"], ["I want to order."]))

    //middle

    let input_01_Body = []
    let input_02_Body = []
    // 0
    let Ai_0 = pickNRandomElementsOfArray(Foods, 2)

    let Aw_0 = "I want to order " + Ai_0[0].input + ", and " + Ai_0[1].input;

    arrListLisen0.push(Ai_0[0].input + ", and " + Ai_0[1].input)
    ArrInFN.Submit.push(Ai_0[0].img)
    ArrInFN.Submit.push(Ai_0[1].img)

    input_01_Body.push("0")
    input_02_Body.push(FnObjHanldingNext(["What would you like?"], [Aw_0]))

    //1
    let Ai_1 = pickNRandomElementsOfArray(Drinks, 2)

    let Aw_1 = Ai_1[0].input + ", and " + Ai_1[1].input + ", please!";


    arrListLisen1.push(Ai_1[0].input + ", and " + Ai_1[1].input)


    ArrInFN.Submit.push(Ai_1[0].img)
    ArrInFN.Submit.push(Ai_1[1].img)


    input_01_Body.push("1")
    input_02_Body.push(FnObjHanldingNext(["Something to drinks?"], [Aw_1]))



    //End
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(input_01_Body, input_02_Body), End, SpeakFirst, "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"))
})

let hoctap = [

]
let listenOnly = [
    arrListLisen0,
    arrListLisen1
]
let writeOnly = [
]
let storyBoicanh = ""
let story = "Hôm nay, nếu khách đang ngồi sẵn gọi thì lại hỏi xem khách cần gì. Nếu khách cần order thì làm cho khách. Nhớ order nước uống nữa nhé."
const Bai24_in2
    = [
        {
            "nameoflession": "B.2.2",
            "srcYoutube": "",
            "storyBoicanh": storyBoicanh,
            "story": story,
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

export default Bai24_in2





