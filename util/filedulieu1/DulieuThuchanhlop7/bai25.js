import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)

let arr_In1 = [
    { "input": "I want to know how many calories I use per hour when sleeping", "qs": "It's 60" },
    { "input": "I want to know how many calories I use per hour when watching TV", "qs": "It's 75" },
    { "input": "I want to know how many calories I use per hour when walking", "qs": "It's 230" },
    { "input": "I want to know how many calories I use per hour when gardening", "qs": "It's 275" },
    { "input": "I want to know how many calories I use per hour when doing aerobics", "qs": "It's 330" },
    { "input": "I want to know how many calories I use per hour when swimming", "qs": "It's 460" },
    { "input": "I want to know how many calories I use per hour when cycling", "qs": "It's 590" },
    { "input": "I want to know how many calories I use per hour when running", "qs": "It's 880" },
]

let arr_In1_sub = ["sleeping",
    "watching TV",
    "walking",
    "gardening",
    "doing aerobics",
    "swimming",
    "cycling",
    "running"
]

let tArr = []
arr_In1.forEach((e, i) => {
    tArr.push(arr_In1_sub[i]);
    tArr.push(e.qs);
    tArr.push("---")
})
DataTable.push(tArr)

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
    Arrin4.push(FnObjHanldingNext([arr_In1[i1].input], ["Thanks.", "Thank you."], { end_successfull: true }))
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
    let End = []
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "calories"))
})

let hoctap = [
]
let listenOnly = [

]
let writeOnly = [

]
const Bai25

    = [
        {
            "nameoflession": "Thực hành bài 2.5",
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

export default Bai25



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