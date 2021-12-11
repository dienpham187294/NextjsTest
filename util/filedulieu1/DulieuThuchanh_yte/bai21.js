import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"

import Departments from "./DulieuInside/A1_departments"

let DataTable = []
let coerdataoflession = []


DataTable.push(getElementsToDataTable(Departments, "name"))
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["Excuse me", "Hi, can you help me?"]
    let i1 = getRandomi(Departments)

    let ArrBegin = []


    ArrBegin.push(FnObjHanldingNext(["Hi, how can I help you?", "Hi, may I help you?"], ["I'm looking for " + Departments[i1].name], {}, Departments[i1].nameVN))
    ArrInFN.Submit.push(Departments[i1].name)
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["Can you repeat again?"], ["I'm looking for " + Departments[i1].name]))

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})

let hoctap = [

]
let listenOnly = [
    getElementsToDataTable(Departments, "name")
]
let writeOnly = [
]
let storyBoicanh = `
Bối cảnh: 
Hãy tưởng tượng, bạn là một nhân viên y tế tại một cơ sở của nước ngoài.
Mõi ngày có rất nhiều người đến nơi bạn làm việc, có thể là bệnh nhân, người nhà hoặc một ai khác không đoán trước.
Họ hoàn toàn là người nói tiếng anh. 

Nếu bạn cảm thấy lo lắng không biết bắt đầu từ đâu? 
Đừng lo, một người đi trước là Mr.K sẽ hướng dẫn cho bạn từng chút một, đảm bảo bạn sẽ thành thạo trong thời gian ngắn. 
Cùng bắt đầu nhé.`
let story =
    `Ngày đầu tiên, Mr.K bảo bạn: "Hãy đứng ở bàn hướng dẫn. Việc đầu tiên cần nghe được nhu cầu của bệnh nhân.".`
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


