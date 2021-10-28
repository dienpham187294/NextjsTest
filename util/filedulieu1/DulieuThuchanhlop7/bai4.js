import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []
let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

DataTable.push(ArrName)

let Arr3Input =
    [
        "cycling",
        "taking photos",
        "cooking",
        "bird-watching",
        "gardening",
        "arranging flowers",
        "skating",
        "playing the guitar",
        "playing board games"
    ]
let Arr3Input1 =
    [
        "an expensive hobby.",
        "an expensive hobby.",
        "an expensive hobby.",
        "a cheap hobby.",
        "a cheap hobby.",
        "an expensive hobby.",
        "an expensive hobby.",
        "an expensive hobby.",
        "a cheap hobby."
    ]
let Arr3Input10 =
    [
        "an easy hobby.",
        "an easy hobby.",
        "a difficult hobby.",
        "an easy hobby.",
        "an easy hobby.",
        "a difficult hobby.",
        "a difficult hobby.",
        "a difficult hobby.",
        "an easy hobby."
    ]
let Arr3Input2 =
    [
        "https://i.postimg.cc/NGbhRkpR/cycling.jpg",
        "https://i.postimg.cc/8Pnq0P85/taking-photos.jpg",
        "https://i.postimg.cc/brmK8qsm/cooking.jpg",
        "https://i.postimg.cc/YqS5RLsZ/bird-watching.jpg",
        "https://i.postimg.cc/Qd9RGGsq/gardening.jpg",
        "https://i.postimg.cc/L5G3jW7H/arranging-flowers.jpg",
        "https://i.postimg.cc/bryKKZNG/skating.jpg",
        "https://i.postimg.cc/1tckCGPh/playing-the-guitar.jpg",
        "https://i.postimg.cc/CKDTDyQK/playing-board-games.jpg",
    ]
let Arr3 = []
let Arr4 = []
let Arr5 = []
Arr3Input.forEach((e, i) => {

    Arr3.push(
        {
            "input": Arr3Input2[i],
            "qs": ["what's your hobby?", "Do you have a hobby?"],
            "output": ["I like " + e, "My hobby is " + e]
        }
    )

    Arr4.push(
        {
            "input": Arr3Input1[i],
            "qs": ["is it expensive?"],
            "output": ["It is " + Arr3Input1[i]]
        }
    )

    Arr5.push(
        {
            "input": Arr3Input10[i],
            "qs": ["is it difficult?"],
            "output": ["It is " + Arr3Input10[i]]
        }
    )
})
DataTable.push(["a cheap hobby.", "an expensive hobby.", "a difficult hobby.", "an easy hobby."])
DataTable.push(Arr3Input2)

ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Good afternoon", "hi", "hello"], []))


    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["What is your name?"], ["My name is " + e[0]]))
    ArrInFN.Submit.push(e[0])

    let i3 = GETRANDOMi(Arr3)
    Arrin3.push("1")
    Arrin4.push(FnObjHanldingNext(Arr3[i3].qs, Arr3[i3].output))
    ArrInFN.Submit.push(Arr3[i3].input)
    Arrin3.push("1-0")
    Arrin4.push(FnObjHanldingNext(Arr4[i3].qs, Arr4[i3].output))
    ArrInFN.Submit.push(Arr4[i3].input)
    Arrin3.push("1-0-0")
    Arrin4.push(FnObjHanldingNext(Arr5[i3].qs, Arr5[i3].output))
    ArrInFN.Submit.push(Arr5[i3].input)


    let i4 = GETRANDOMi(Arr3Input)
    let End = []
    End.push(FnObjHanldingNext(["My hobby is " + Arr3Input[i4]], ["That's good."], { readFirst: ["What is your hobby?"], icon: Arr3Input2[i4], end_successfull: true }))

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End))
})

let hoctap = [
]
const Bai4

    = [
        {
            "nameoflession": "Thực hành bài 4",
            "srcYoutube": "",
            "hoctap": hoctap,
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default Bai4


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

function GetDataArrToClick(Arr) {
    let ArrRes = [];
    Arr.forEach(e => {
        ArrRes.push(e.input)
    })
    return ArrRes
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


function Fnperson(Arr, DataTable, Begin, Middle, End) {
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
                    "7",
                    "8",
                ]
            ],
            "Tabletool": [
                {
                    "indexToSubmit": 0,
                    "dataoftable": DataTable
                }
            ],
            "robotspeakfirst": [
                "Hi",
                "Hello"
            ]
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