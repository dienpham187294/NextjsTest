import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"


import MA1 from "./Dulieuinside/MA1"

let DataTable = []
let coerdataoflession = []

DataTable.push(
    getElementsToDataTable(MA1["QSAW"], "AW", "-")
)

ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let i1 = getRandomi(MA1.QSAW)

    let SpeakFirst = [MA1.QSAW[i1].QS]

    let ArrBegin = []



    ArrBegin.push(
        FnObjHanldingNext([MA1.QSAW[i1].AW], ["Good."], objEndSuccefull)
    )

    //middle

    let Arrin3 = [
        "0"
    ]
    let Arrin4 = [
        FnObjHanldingNext([], [])
    ]


    let End = null

    coerdataoflession.push(
        Fnperson(
            ArrInFN,
            DataTable,
            ArrBegin,
            FnToArrobj(Arrin3, Arrin4),
            End,
            SpeakFirst
        )
    )
})


let storyBoicanh = `Tìm hiểu về mua bán và sáp nhập.`
let story = `Tổng quan`
const BaiA1b

    = [
        {
            "nameoflession": "B.1.b",
            "srcYoutube": "",
            "storyBoicanh": storyBoicanh,
            "story": story,
            "hoctap": {
                "listenRead": [],
                "listenOnly": [],
                "writeOnly": []
            },
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default BaiA1b


