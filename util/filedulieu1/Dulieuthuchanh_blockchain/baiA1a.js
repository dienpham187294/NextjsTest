import ArrPeple from "./ArrOfpeple"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import ArrIn1 from "./Dulieuinside/bai1"
import hoctap from "./Dulieuinside/baihoc1"
let DataTable = []
let coerdataoflession = []


DataTable.push(getElementsToDataTable(ArrIn1, "input", "-----"))

ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let i1 = getRandomi(ArrIn1)

    let SpeakFirst = ["Hi"]

    let ArrBegin = []



    ArrBegin.push(FnObjHanldingNext([ArrIn1[i1].input], ["Good."], { "end_successfull": true }))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext([], []))
    ArrInFN.Submit.push(e[0])
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, ArrIn1[i1].VN))
})


let listenOnly = [
    getElementsToDataTable(ArrIn1, "qs")
]
let writeOnly = [
]

let storyBoicanh = `Blockchain được coi là một trong những phát kiến vĩ đại nhất lịch sử, sánh ngang với việc phát minh ra internets vậy.
Bitcoin hay tiền số chỉ là một trong những ứng dụng của Blockchain.
Vậy Blockchain là gì? Sức ảnh hưởng của nó đến các ngành kinh tế ra sao?
Chúng ta sẽ cùng tìm hiểu, chia sẻ về Blockchain và các tác động lên nền kinh tế, cũng như các xu hướng tương lai của blockchain.`
let story = `Hiểu ngữ nghĩa.`
const BaiA1a

    = [
        {
            "nameoflession": "B.1.1: Blockchain là gì?",
            "srcYoutube": "https://www.youtube.com/embed/6WG7D47tGb0",
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

export default BaiA1a


function FnToArrobj(ArrIn1, ArrIn2) {
    let ObjRes = []
    ArrIn1.forEach((e, i) => {
        if (e.length === 1) {
            ObjRes.push(ArrIn2[i])
        }
        else {
            let ArrTem1 = e.split("-")
            try {
                let StrTem1 = "ObjRes"
                for (let i = 0; i < ArrTem1.length - 1; i++) {
                    if (i > 0) {
                        StrTem1 += "['handling_next']"
                    }
                    StrTem1 += "[" + ArrTem1[i] + "]"
                }
                StrTem1 += "['handling_next']"
                eval(StrTem1).push(ArrIn2[i])

            } catch (error) {
                console.log(error)
            }

        }
    })
    // console.log(JSON.stringify(ObjRes))
    return ObjRes
}


function FnObjHanldingNext(ArrIn1, ArrIn2, objIn, icon) {
    let objOut = {};
    if (objIn !== undefined) {
        objOut = objIn
    }
    let iconOut = ""
    if (icon !== undefined) {
        iconOut = icon
    }
    let objRes =
    {
        "manspeak": ArrIn1,
        "robotspeak": ArrIn2,
        "icon": iconOut,
        "function": objOut,
        "handling_next": []
    }
    return objRes
}


function Fnperson(Arr, DataTable, Begin, Middle, End, robotspeakfirst, icon) {
    // console.log(End)
    let endIn;
    if (End !== undefined) {
        endIn = {
            "handling_next": End
        }
    } else {
        endIn = null
    }
    let person = {
        "total": {
            "image": Arr.img,
            "status": true,
            "gender": Arr.gender,
            "icon": icon,
            "submit": [
                Arr.Submit
            ],
            "submitsyntax": [
                [
                    "1",
                    "2",
                    "3",
                ]
            ],
            "Tabletool": [
                {
                    "indexToSubmit": 0,
                    "dataoftable": DataTable
                }
            ],
            "robotspeakfirst": robotspeakfirst
        },
        "begin": {
            "handling_next": Begin
        },
        "middle": {
            "handling_next": Middle
        },
        "end": endIn
    }

    return person
}

// function PickRandom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}