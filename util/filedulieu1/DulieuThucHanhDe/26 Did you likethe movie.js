



import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)));

let DataTable = []
let coerdataoflession = []
// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)


let Arr1 = [
    {
        "input": "Yes",
        "qs": ["Did you like the movie?"],
        "output": ["It’s one of the best I’ve ever seen."]
    },
    {
        "input": "No",
        "qs": ["Did you like the movie?"],
        "output": ["That movie is so bad"]
    }
]
DataTable.push(["Yes"])
DataTable.push(["No"])



ARRp.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]


    // let Arrin2 = [FnObjHanldingNext(["Good evening, sir."], ["Good evening."])]
    let ArrBegin = []

    // if (ArrInFN.gender === "male") {
    ArrBegin.push(FnObjHanldingNext(["Hi, what did you do last night?"], ["I went to the movies last night!"]))
    // } else {
    //     ArrBegin.push(FnObjHanldingNext(Arr2[1].qs, Arr2[1].output))
    // }

    let i1 = GETRANDOMi(Arr1)
    // if (Arr1[i1].input === "Book Table") {
    //     ArrInFN.Submit.push(e[0])
    // }
    ArrInFN.Submit.push(Arr1[i1].input)
    let Arrin3 = ["0"]
    let Arrin4 = [FnObjHanldingNext(Arr1[i1].qs, Arr1[i1].output)]
    // Arrin3.push("1")
    // Arrin4.push(FnObjHanldingNext(["What is your name?"], ["My name is " + e[0]]))

    // FnToArrobj(Arrin1, Arrin2)

    // console.log(Fnperson(ArrInFN, DataTable, Arrin2, FnToArrobj(Arrin3, Arrin4)))

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4)))



})


let Arrin1 = ["0"]
let Arrin2 = [
    FnObjHanldingNext(["Hi, What do you want?", "Hi, May I help you?"], ["I want to book a table for tonight"]),
]

FnToArrobj(Arrin1, Arrin2)


// coerdataoflession.push(nam)
const Didyoulikethemovie

    = [
        {
            "nameoflession": "Lesson 26: Did you like the movie?",
            "srcYoutube": "",
            "hoctap": [
            ],
            "status": "done",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default Didyoulikethemovie


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

function FnObjHanldingNext(ArrIn1, ArrIn2, objIn) {
    let objOut = {};
    if (objIn !== undefined) {
        objOut = objIn
    }
    let objRes =
    {
        "manspeak": ArrIn1,
        "robotspeak": ArrIn2,
        "icon": "",
        "function": objOut,
        "handling_next": []
    }
    return objRes
}


function Fnperson(Arr, DataTable, Begin, Middle) {
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
                    "Yêu cầu 1: ",
                    "Yêu cầu 2: ",
                    "Yêu cầu 3: ",
                    "Yêu cầu 4: ",

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
        "end": null
    }
    return person
}

function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}