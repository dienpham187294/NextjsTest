import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"
import shuffleArr from "../dataHelperFunction/shuffleArr"

import MA2 from "./Dulieuinside/MA3"

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

    let SpeakFirst = []

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
let story = `DD P.1`
const BaiA3a

    = [
        {
            "nameoflession": "B.3.a",
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
            "coerdataoflession": shuffleArr(shuffleArr(coerdataoflession))
        }
    ]

export default BaiA3a

