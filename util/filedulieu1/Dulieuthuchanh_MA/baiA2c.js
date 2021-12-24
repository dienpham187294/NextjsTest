import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"


import MA2 from "./Dulieuinside/MA2"

let DataTable = []
let coerdataoflession = []

DataTable.push(
    getElementsToDataTable(MA2.ENVN, "EN")
)

ArrPeple.forEach((e, ie) => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]


    let i1 = ie % MA2.ENVN.length

    let SpeakFirst = ["Hi"]

    let ArrBegin = []



    ArrBegin.push(
        FnObjHanldingNext([MA2.ENVN[i1].EN], ["Good."], objEndSuccefull)
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
            MA2.ENVN[i1].VN
        )
    )
})

let storyBoicanh = `Tìm hiểu về mua bán và sáp nhập.`
let story = `Mergers & DD`
const BaiA2c

    = [
        {
            "nameoflession": "B.2.c",
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

export default BaiA2c

