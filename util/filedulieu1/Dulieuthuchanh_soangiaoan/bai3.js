import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"
import Data from "./Dulieuinside/data1"
let hoctap = []






let DataTable = [
    // Data.bai2.M03
]
let coerdataoflession = []




ArrPeple.forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = Data.bai2.M01

    let ims = pickNRandomElementsOfArray(Data.bai2.M03, 1)
    // ArrInFN.Submit.push(ims[0])
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            Data.bai2.N02,
            ims,
            objEndSuccefull
        )
    )
    let Arrin3 = [
        "0"
    ]
    let Arrin4 = [
        FnObjHanldingNext(
            Data.bai2.N02,
            ims
        )
    ]
    let End = null
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})


let listenOnly = []
let writeOnly = []

let storyBoicanh = `Soạn giáo án`
let story = `Bài 3`
const Bai3

    = [
        {
            "nameoflession": "Bài 3",
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

export default Bai3

