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






let DataTable = []
let coerdataoflession = []




ArrPeple.forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = Data.bai1.M01
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            Data.bai1.N02,
            Data.bai1.M03,
            objEndSuccefull
        ))
    let Arrin3 = [
        "0"
    ]
    let Arrin4 = [
        FnObjHanldingNext([], [])
    ]
    let End = null
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})


let listenOnly = []
let writeOnly = []

let storyBoicanh = `Soạn giáo án`
let story = `Bài 1`
const Bai1

    = [
        {
            "nameoflession": "Bài 1",
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

export default Bai1

