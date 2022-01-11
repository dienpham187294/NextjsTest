import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"
import hoctap from "./Dulieuinside/Lesson1"

import MA2 from "./Dulieuinside/MA2"

let DataTable = []
let coerdataoflession = []

DataTable.push(
    getElementsToDataTable(MA2["QSAW"], "AW", "-")
)

ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let i1 = getRandomi(MA2.QSAW)

    let SpeakFirst = [MA2.QSAW[i1].QS]

    let ArrBegin = []



    ArrBegin.push(
        FnObjHanldingNext([MA2.QSAW[i1].AW], ["Good."], objEndSuccefull)
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

let storyBoicanh = `M&A`
let story = `Mergers and Acquisitions Explained_ A Crash Course on M&A`
const BaiA4


    = [
        {
            "nameoflession": "B.4",
            "srcYoutube": "",
            "storyBoicanh": storyBoicanh,
            "story": story,
            "hoctap": hoctap,
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default BaiA4



