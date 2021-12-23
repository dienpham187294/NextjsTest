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
    Data.tool1bai5,
    getElementsToDataTable(Data.bai5b.M07, "in2")
]
let coerdataoflession = []


let useData = Data.bai5a

///5a
ArrPeple.slice(0, 10).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = useData.M01
    //PickArr//
    // let ims = pickNRandomElementsOfArray(useData.M03, 1)
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            useData.M02,
            useData.M03
        )
    )
    let Arrin3 = [
        "0"
    ]
    let Arrin4 = [
        FnObjHanldingNext(
            useData.M04,
            useData.M05
        )
    ]
    ArrInFN.Submit.push(useData.submit05)
    let End = null
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})


let useData5b = Data.bai5b
//5b
ArrPeple.forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = useData5b.M01
    //PickArr//
    // let ims = pickNRandomElementsOfArray(useData5b.M03, 1)
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            useData5b.M02,
            useData5b.M03
        )
    )
    let Arrin3 = [
        "0", "1"
    ]
    let Arrin4 = [
        FnObjHanldingNext(
            useData5b.M04,
            useData5b.M05
        ),
        FnObjHanldingNext(
            useData5b.M06,
            PushInputAndsubmit(pickNRandomElementsOfArray(useData5b.M07, 1)[0], "in1", ArrInFN.Submit, "in2")
        )
    ]
    ArrInFN.Submit.push(useData5b.submit05)
    let End = null
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})

function PushInputAndsubmit(main, input, arrsub, submit) {
    arrsub.push(main[submit])
    return main[input]
}


let listenOnly = []
let writeOnly = []

let storyBoicanh = `Soạn giáo án`
let story = `Bài 5`
const Bai5

    = [
        {
            "nameoflession": "Bài 5",
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

export default Bai5

