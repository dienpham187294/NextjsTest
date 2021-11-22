import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)

let arr_In1 = [
    { "input": "I want to know how many calories I use?", "input2": "sleeping", "hour": "2 hours", "submit": "120" },
    { "input": "I want to know how many calories I use?", "input2": "watching TV", "hour": "2 hours", "submit": "150" },
    { "input": "I want to know how many calories I use?", "input2": "walking", "hour": "2 hours", "submit": "460" },
    { "input": "I want to know how many calories I use?", "input2": "gardening", "hour": "2 hours", "submit": "550" },
    { "input": "I want to know how many calories I use?", "input2": "doing aerobics", "hour": "2 hours", "submit": "660" },
    { "input": "I want to know how many calories I use?", "input2": "swimming", "hour": "2 hours", "submit": "920" },
    { "input": "I want to know how many calories I use?", "input2": "cycling", "hour": "2 hours", "submit": "1180" },
    { "input": "I want to know how many calories I use?", "input2": "running", "hour": "2 hours", "submit": "1760" },

    { "input": "I want to know how many calories I use?", "input2": "sleeping", "hour": "3 hours", "submit": "180" },
    { "input": "I want to know how many calories I use?", "input2": "watching TV", "hour": "3 hours", "submit": "225" },
    { "input": "I want to know how many calories I use?", "input2": "walking", "hour": "3 hours", "submit": "690" },
    { "input": "I want to know how many calories I use?", "input2": "gardening", "hour": "3 hours", "submit": "825" },
    { "input": "I want to know how many calories I use?", "input2": "doing aerobics", "hour": "3 hours", "submit": "990" },
    { "input": "I want to know how many calories I use?", "input2": "swimming", "hour": "3 hours", "submit": "1380" },
    { "input": "I want to know how many calories I use?", "input2": "cycling", "hour": "3 hours", "submit": "1770" },
    { "input": "I want to know how many calories I use?", "input2": "running", "hour": "3 hours", "submit": "2640" },

    { "input": "I want to know how many calories I use?", "input2": "sleeping", "hour": "4 hours", "submit": "240" },
    { "input": "I want to know how many calories I use?", "input2": "watching TV", "hour": "4 hours", "submit": "300" },
    { "input": "I want to know how many calories I use?", "input2": "walking", "hour": "4 hours", "submit": "920" },
    { "input": "I want to know how many calories I use?", "input2": "gardening", "hour": "4 hours", "submit": "1100" },
    { "input": "I want to know how many calories I use?", "input2": "doing aerobics", "hour": "4 hours", "submit": "1320" },
    { "input": "I want to know how many calories I use?", "input2": "swimming", "hour": "4 hours", "submit": "1840" },
    { "input": "I want to know how many calories I use?", "input2": "cycling", "hour": "4 hours", "submit": "2360" },
    { "input": "I want to know how many calories I use?", "input2": "running", "hour": "4 hours", "submit": "3520" },



]

let arr_In1_sub = ["sleeping", "60", "---",
    "watching TV", "75", "---",
    "walking", "230", "---",
    "gardening", "275", "---",
    "doing aerobics", "330", "---",
    "swimming", "460", "---",
    "cycling", "590", "---",
    "running", "880", "---",
]

DataTable.push(arr_In1_sub)
let arr_In1_submit = ["120",
    "150",
    "180",
    "225",
    "240",
    "300",
    "460",
    "550",
    "660",
    "690",
    "825",
    "920",
    "920",
    "990",
    "1100",
    "1180",
    "1320",
    "1380",
    "1760",
    "1770",
    "1840",
    "2360",
    "2640",
    "3520",
]


DataTable.push(arr_In1_submit)

// DataTable.push(["Have a sunburn.", "Have flu.", "Have a temperature.", "Have a stomachache.", "Have a sore throat."])
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi. I'm " + e[0], "hello. I'm " + e[0]]

    let i1 = GETRANDOMi(arr_In1)

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["hi " + e[0] + ", how can I help you?"], [arr_In1[i1].input]))

    //middle

    let Arrin3 = []
    let Arrin4 = []
    // let i1 = GETRANDOMi(arr_In1)
    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["What activities do you do?"], [arr_In1[i1].input2]))
    Arrin3.push("0-1")
    Arrin4.push(FnObjHanldingNext(["How many hours you do it?"], [arr_In1[i1].hour]))

    ArrInFN.Submit.push(arr_In1[i1].submit)
    // let i2 = GETRANDOMi(arr_In2)
    // Arrin3.push("0-0")
    // Arrin4.push(FnObjHanldingNext([arr_In1[i1].qs], [arr_In2[i2].input]))

    // Arrin3.push("0-0-0")
    // Arrin4.push(FnObjHanldingNext([arr_In2[i2].qs], ["Thank you."], { end_successfull: true }))
    // // Arrin3.push("0-1")
    // Arrin4.push(FnObjHanldingNext(["What did you do yesterday?"], ["I play football with my friends and swimming after that."]))
    // ArrInFN.Submit.push(arr_In1[i1].submit)

    // let i3 = GETRANDOMi(Arr3)
    // Arrin3.push("1")
    // Arrin4.push(FnObjHanldingNext(Arr3[i3].qs, Arr3[i3].output))
    // ArrInFN.Submit.push(Arr3[i3].input)
    // Arrin3.push("1-0")
    // Arrin4.push(FnObjHanldingNext(Arr4[i3].qs, Arr4[i3].output))
    // ArrInFN.Submit.push(Arr4[i3].input)
    // Arrin3.push("1-0-0")
    // Arrin4.push(FnObjHanldingNext(Arr5[i3].qs, Arr5[i3].output))
    // ArrInFN.Submit.push(Arr5[i3].input)


    // let i4 = GETRANDOMi(Arr3Input)
    let End = null
    // End.push(FnObjHanldingNext(["hi"], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "calories"))
})

let hoctap = [
]
let listenOnly = [

]
let writeOnly = [

]
const Bai26

    = [
        {
            "nameoflession": "Thực hành bài 2.6",
            "srcYoutube": "",
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

// function GetDataArrToClick(Arr) {
//     let ArrRes = [];
//     Arr.forEach(e => {
//         ArrRes.push(e.input)
//     })
//     return ArrRes
// }

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
                    "4",
                    "5",
                    "6",
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