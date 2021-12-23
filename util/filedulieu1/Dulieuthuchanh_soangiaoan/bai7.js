import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"

import Data from "./Dulieuinside/data1"
import Food from "./Dulieuinside/A1_foods"
import Drink from "./Dulieuinside/A1_drinks"
let hoctap = []






let DataTable = [
    Data.tool1bai6,
    getElementsToDataTable(Data.bai7b.M07, "in2"),
    getElementsToDataTable(Food, "img"),
    getElementsToDataTable(Drink, "img")

]
let coerdataoflession = []


let useData = Data.bai7a

///5a
ArrPeple.slice(0, 30).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = useData.M01
    //PickArr//
    let imsfood = pickNRandomElementsOfArray(Food, 1)
    let imsdrink = pickNRandomElementsOfArray(Drink, 1)
    ArrInFN.Submit.push(useData.submit05)
    ArrInFN.Submit.push(imsfood[0].img)
    ArrInFN.Submit.push(imsdrink[0].img)
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            useData.M02,
            useData.M03
        )
    )
    let Arrin3 = [
        "0", "1", "2"
    ]
    let Arrin4 = [
        FnObjHanldingNext(
            useData.M04,
            useData.M05
        ),
        FnObjHanldingNext(
            useData.M06,
            useData.M07(imsfood[0].in1)
        ),
        FnObjHanldingNext(
            useData.M08,
            useData.M09(imsdrink[0].in1)
        )
    ]

    let End = null
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})


let useData7b = Data.bai7b
//5b
ArrPeple.slice(0, 30).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let SpeakFirst = useData7b.M01
    //PickArr//
    // let ims = pickNRandomElementsOfArray(useData7b.M03, 1)
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            useData7b.M02,
            useData7b.M03
        )
    )

    let imsInpu1 = pickNRandomElementsOfArray(useData7b.M07, 1)
    ArrInFN.Submit.push(imsInpu1[0]["in2"])
    ArrInFN.Submit.push(useData7b.submit05)
    let Arrin3 = [
        "0", "1"
    ]
    let Arrin4 = [
        FnObjHanldingNext(
            useData7b.M04,
            useData7b.M05
        ),
        FnObjHanldingNext(
            useData7b.M06,
            imsInpu1[0]["in1"]
        )
    ]

    let End = FnToArrobj(
        [
            "0"
        ],
        [
            FnObjHanldingNext(
                useData7b.M08,
                useData7b.M09,
                objEndSuccefull
            )
        ]
    )
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})



let listenOnly = []
let writeOnly = []

let storyBoicanh = `Soạn giáo án`
let story = `Bài 7`
const Bai7

    = [
        {
            "nameoflession": "Bài 7",
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

export default Bai7

