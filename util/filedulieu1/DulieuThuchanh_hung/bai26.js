import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"

import DataTotal2 from "./DulieuInside/A1_total2"
import Drinks from "./DulieuInside/A1_drinks"
import DataTestKnowleged from "./DulieuInside/A1_knowleged01"
// console.log(convertArrToObjSource(
//     [["Which way do I go to the toilet?",
//         "Where's the toilet?",
//     ], ["The toilet is at the end of the hallway.",
//     ], ["Thank you.",
//     ]]
// ))
let DataTable = []

let coerdataoflession = []



let arrListLisen0 = []
let arrListLisen1 = []

checkKnowleged(15)
WantMenu(5, DataTotal2.tar01)
WantOrderDrink(10, DataTotal2.tar02, Drinks)
WantBabyChair(5)
WantATool(15)

DataTable.push(getElementsToDataTable(Drinks, "img"))
DataTable.push(getElementsToDataTable(DataTotal2.img, "img"))
DataTable.push([DataTotal2.tar05["N1Thetoi"]])

let hoctap = [

]
let listenOnly = [
    arrListLisen0,
    arrListLisen1
]
let writeOnly = [
]
let storyBoicanh = ""
let story = "Handle some customer needs."
const Bai26

    = [
        {
            "nameoflession": "B.3.0",
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

export default Bai26



function checkKnowleged(n) {
    ArrPeple.slice(0, n).forEach(e => {
        let ArrInFN = {}
        ArrInFN.Submit = []
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Test",
            "content": "Test",
            "img": "https://i.postimg.cc/76LB7hKz/icon-Nhiem-Vu.png"
        }
        let SpeakFirst = ["Hi"]
        let TestArrPick = pickNRandomElementsOfArray(DataTestKnowleged, 1)
        //Begin
        let ArrBegin = []
        ArrBegin.push(
            FnObjHanldingNext([TestArrPick[0].EN], ["Good"], objEndSuccefull)
        )
        //middle
        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext([], [])
        ]


        let End = null
        coerdataoflession.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                TestArrPick[0].VN
            )
        )
    })


}



function WantATool(n) {
    ArrPeple.slice(0, n).forEach(e => {
        let ArrInFN = {}
        ArrInFN.Submit = []
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]



        let SpeakFirst = DataTotal2.tar03.M0Excuse


        let ArrNeedToUse = DataTotal2.img.slice(1, 3);

        let ToolsArrPick = pickNRandomElementsOfArray(ArrNeedToUse, 1)
        let ToolPick = ToolsArrPick[0].name


        //Begin
        let ArrBegin = []
        ArrBegin.push(
            FnObjHanldingNext(DataTotal2.tar03["N1Howcan"], DataTotal2.tar04.M0Iwanta(ToolPick))
        )
        //middle
        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(DataTotal2.tar03["N1Howcan"], DataTotal2.tar04.M0Iwanta(ToolPick))
        ]


        let End = null
        coerdataoflession.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                DataTotal2.tar02.Img1
            )
        )
    })


}


function WantToToilet(n) {
    ArrPeple.slice(0, n).forEach(e => {
        let ArrInFN = {}
        ArrInFN.Submit = []
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]



        let SpeakFirst = DataTotal2.tar03.M0Excuse


        // let ArrNeedToUse = DataTotal2.img.slice(1, 2);
        // let ToolsArrPick = pickNRandomElementsOfArray(ArrNeedToUse, 1)
        // let ToolPick = ToolsArrPick[0].name


        //Begin
        let ArrBegin = []
        ArrBegin.push(
            FnObjHanldingNext(DataTotal2.tar03["N1Howcan"], DataTotal2.tar05["M0Whichw"])
        )
        //middle
        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(DataTotal2.tar05["N1Thetoi"], ["Thank you."], objEndSuccefull)
        ]


        let End = null
        coerdataoflession.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                DataTotal2.tar02.Img1
            )
        )
    })


}


function WantBabyChair(n) {
    ArrPeple.slice(0, n).forEach(e => {
        let ArrInFN = {}
        ArrInFN.Submit = []
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]



        let SpeakFirst = DataTotal2.tar03.M0Excuse


        // let ArrNeedToUse = DataTotal2.img.slice(1, 2);
        // let ToolsArrPick = pickNRandomElementsOfArray(ArrNeedToUse, 1)
        // let ToolPick = ToolsArrPick[0].name


        //Begin
        let ArrBegin = []
        ArrBegin.push(
            FnObjHanldingNext(DataTotal2.tar03["N1Howcan"], DataTotal2.tar03["M2Doyouh"])
        )
        //middle
        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(DataTotal2.tar03["N3Yesofc"], ["Thank you."], objEndSuccefull)
        ]


        let End = null
        coerdataoflession.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                DataTotal2.tar02.Img1
            )
        )
    })


}





function WantOrderDrink(n, CoreData, Drinks) {
    ArrPeple.slice(0, n).forEach(e => {
        let ArrInFN = {}
        ArrInFN.Submit = []
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        let SpeakFirst = CoreData.M0Excuse

        let DrinksArrPick = pickNRandomElementsOfArray(Drinks, 1)
        let DrinkPick = DrinksArrPick[0].input

        ArrInFN.Submit.push(DrinksArrPick[0].img)
        //Begin
        let ArrBegin = []
        ArrBegin.push(
            FnObjHanldingNext(CoreData["N1Howcan"], CoreData["M2Iwantt"])
        )
        //middle
        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(CoreData["N3Whatwo"], CoreData.M4Iwantt(DrinkPick))
        ]


        let End = null
        coerdataoflession.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                CoreData.Img1
            )
        )
    })


}



function WantMenu(n, CoreData) {
    ArrPeple.slice(0, n).forEach(e => {
        let ArrInFN = {}
        ArrInFN.Submit = []
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        let SpeakFirst = CoreData.M0Excuse
        //Begin

        ArrInFN.Submit.push(DataTotal2.img[0].img)
        let ArrBegin = []
        ArrBegin.push(
            FnObjHanldingNext(CoreData["N1How ca"], CoreData["M2I want"])
        )
        //middle
        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(CoreData["N1How ca"], CoreData["M2I want"])
        ]


        let End = null
        coerdataoflession.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                CoreData.MImg1
            )
        )
    })


}