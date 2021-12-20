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
    getElementsToDataTable(MA1.ENVN, "EN", "-")
)

ArrPeple.forEach((e, ie) => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]


    let i1 = ie % MA1.ENVN.length

    let SpeakFirst = ["Hi"]

    let ArrBegin = []



    ArrBegin.push(
        FnObjHanldingNext([MA1.ENVN[i1].EN], ["Good."], objEndSuccefull)
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
            SpeakFirst,
            MA1.ENVN[i1].VN
        )
    )
})

let hoctap = []
let listenOnly = []
let writeOnly = []

let storyBoicanh = `Tìm hiểu về mua bán và sáp nhập.`
let story = `Tổng quan`
const BaiA1a

    = [
        {
            "nameoflession": "B.1.a",
            "srcYoutube": "",
            "storyBoicanh": storyBoicanh,
            "story": story,
            "hoctap": {
                "listenRead": hoctap,
                "listenOnly": listenOnly,
                "writeOnly": writeOnly
            },
            "status": "noSort",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default BaiA1a

