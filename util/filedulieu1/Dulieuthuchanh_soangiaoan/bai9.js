import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"
import shuffleArr from "../dataHelperFunction/shuffleArr"
import Data from "./Dulieuinside/data1"
import Food from "./Dulieuinside/A1_foods"
import Drink from "./Dulieuinside/A1_drinks"
let hoctap = []

let view1 = {
    "header": "At the door.",
    "img": "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"
}
let view2 = {
    "header": "At the table.",
    "img": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"
}




let DataTable = [
    Data.tool1bai6.concat(getElementsToDataTable(Data.bai7b.M07, "in2")),
    getElementsToDataTable(Food, "img").concat(getElementsToDataTable(Drink, "img")),
    getElementsToDataTable(Data.bai10.tool, "in2")
]
let coerdataoflession = []




let useData = Data.bai7a

///5a
ArrPeple.slice(0, 10).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    ArrInFN.viewPick = view1
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
ArrPeple.slice(0, 10).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    ArrInFN.viewPick = view1
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

    let in11 = pickNRandomElementsOfArray(useData7b.M07, 1)
    ArrInFN.Submit.push(in11[0]["in2"])

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
            in11[0]["in1"]
        )
    ]
    ArrInFN.Submit.push(useData7b.submit05)
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


//Ask for order at table

ArrPeple.slice(0, 10).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    ArrInFN.viewPick = view2
    let SpeakFirst = Data.bai8.M01
    //PickArr//
    // let ims = pickNRandomElementsOfArray(useData7b.M03, 1)
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            Data.bai8.M02,
            Data.bai8.M03
        )
    )

    let input1 = pickNRandomElementsOfArray(Food, 1)
    ArrInFN.Submit.push(input1[0]["img"])
    let input2 = pickNRandomElementsOfArray(Drink, 1)
    ArrInFN.Submit.push(input2[0]["img"])
    let Arrin3 = [
        "0", "1"
    ]
    let Arrin4 = [
        FnObjHanldingNext(
            Data.bai8.M04,
            Data.bai8.M05(input1[0].in1)
        ),
        FnObjHanldingNext(
            Data.bai8.M06,
            Data.bai8.M07(input2[0]["in1"])

        )
    ]

    let End = FnToArrobj(
        [
            "0"
        ],
        [
            FnObjHanldingNext(
                Data.bai8.M08,
                Data.bai8.M09,
                objEndSuccefull
            )
        ]
    )
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})
//ask for toilet

ArrPeple.slice(0, 10).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    ArrInFN.viewPick = view2
    let SpeakFirst = Data.bai9.M01
    //PickArr//
    // let ims = pickNRandomElementsOfArray(useData7b.M03, 1)
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            Data.bai9.M02,
            Data.bai9.M03
        )
    )


    let Arrin3 = [
        "0"
    ]
    let Arrin4 = [
        FnObjHanldingNext(
            Data.bai9.M04,
            Data.bai9.M05
        )
    ]

    let End = null
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})

//ask for spoon or fork

ArrPeple.slice(0, 10).forEach(e => {
    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    ArrInFN.viewPick = view2
    let SpeakFirst = Data.bai10.M01
    //PickArr//
    let input = pickNRandomElementsOfArray(Data.bai10.tool, 1)
    ArrInFN.Submit.push(input[0].in2)
    let ArrBegin = []
    ArrBegin.push(
        FnObjHanldingNext(
            Data.bai10.M02,
            Data.bai10.M03(input[0].in1)
        )
    )


    let Arrin3 = [
        "0"
    ]
    let Arrin4 = [
        FnObjHanldingNext(
            Data.bai10.M02,
            Data.bai10.M03(input[0].in1)
        )
    ]

    let End = FnToArrobj(
        [
            "0"
        ],
        [
            FnObjHanldingNext(
                Data.bai10.M04,
                Data.bai10.M05,
                objEndSuccefull
            )
        ]
    )
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst))
})



let listenOnly = []
let writeOnly = []

let storyBoicanh = `Soạn giáo án`
let story = `Bài 9`
const Bai9

    = [
        {
            "nameoflession": "Bài 9",
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
            "coerdataoflession": shuffleArr(coerdataoflession)
        }
    ]

export default Bai9

