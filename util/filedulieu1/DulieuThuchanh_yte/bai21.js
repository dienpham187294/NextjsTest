import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"

import RegisterData from "./DulieuInside/A2_Register"
import endSuccessfull from "./DulieuInside/objEndSuccefull"
let DataTable = []
let coerdataoflession = []


ArrPeple.slice(0, 5).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = RegisterData.qs1
    // let i1 = getRandomi(Departments)

    let ArrBegin = []


    ArrBegin.push(FnObjHanldingNext(RegisterData.aw1, ["Thank you."], endSuccessfull))
    // ArrInFN.Submit.push(Departments[i1].name)
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext([""], [""]))

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})





ArrPeple.slice(0, 5).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = RegisterData.qs1
    // let i1 = getRandomi(Departments)

    let ArrBegin = []


    ArrBegin.push(FnObjHanldingNext(RegisterData.aw1, RegisterData.askForHowRegister))
    // ArrInFN.Submit.push(Departments[i1].name)
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(RegisterData.awForHow, ["Thank you."], endSuccessfull))

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})



ArrPeple.slice(0, 10).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = RegisterData.qs1
    // let i1 = getRandomi(Departments)

    let ArrBegin = []


    ArrBegin.push(FnObjHanldingNext(RegisterData.aw1, RegisterData.askForHowRegister))
    // ArrInFN.Submit.push(Departments[i1].name)
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(RegisterData.awForHow, RegisterData.askForCosttRegister))

    Arrin3.push("0-0")
    Arrin4.push(FnObjHanldingNext(RegisterData.awForCost, ["Thank you."], endSuccessfull))

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})




ArrPeple.slice(0, 15).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = RegisterData.registerAlreadyShowCard
    // let i1 = getRandomi(Departments)

    let ArrBegin = []

    let ArrKeys = Object.keys(RegisterData.tableOfProblems)

    let i1 = getRandomi(ArrKeys)

    ArrBegin.push(FnObjHanldingNext(RegisterData.askForProblems, RegisterData.tableOfProblems[ArrKeys[i1]].condition))
    // ArrInFN.Submit.push(Departments[i1].name)
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(RegisterData.tableOfProblems[ArrKeys[i1]].advice, ["Thank you."], endSuccessfull))


    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, RegisterData.registationCard(e[0], "18")))
})


ArrPeple.slice(0, 15).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = RegisterData.registerAlreadyShowCard
    // let i1 = getRandomi(Departments)

    let ArrBegin = []

    let ArrKeys = Object.keys(RegisterData.tableOfProblems)

    let i1 = getRandomi(ArrKeys)

    let dataInput1 = RegisterData.tableOfProblems[ArrKeys[i1]]

    ArrBegin.push(FnObjHanldingNext(RegisterData.askForProblems, dataInput1.condition))
    // ArrInFN.Submit.push(Departments[i1].name)
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(dataInput1.advice, [dataInput1.askForDirection]))

    Arrin3.push("0-0")
    Arrin4.push(FnObjHanldingNext(dataInput1.awForDicrection, ["Thank you."], endSuccessfull))

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, RegisterData.registationCard(e[0], "18")))
})












let hoctap = [

]
let listenOnly = [

]
let writeOnly = [
]
let storyBoicanh = `
Bối cảnh: 
Hình dung, bệnh viên nơi bạn làm việc là một văn phòng tập trung chuyên tư vấn, 
hướng dẫn cho bệnh nhân và người nhà bệnh nhân qua màn hình vi tính.
Trong bệnh viện sẽ có rất nhiều các màn hình để sẵn, bệnh nhân hoặc người nhà có thắc mắc chỉ cần sử dụng là
có thể liên hệ với các bạn.
Nhiệm vụ của bạn là lắng nghe nhu cầu, thắc mắc của bệnh nhân hoặc người nhà bệnh nhân sau đó 
tư vấn, hướng dẫn cho họ.`
let story =
    `
    Một số nhu cầu phổ biến là : Hỏi nơi để đăng ký khám bệnh? Hỏi nên khám bệnh ở khoa nào? Hỏi đường?
    `
const Bai21

    = [
        {
            "nameoflession": "B.1.1",
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

export default Bai21


