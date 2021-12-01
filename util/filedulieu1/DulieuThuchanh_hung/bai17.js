import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)
let ArrIn1 = ["March 8", "March 17", "January 21", "January 29", "March 17", "May 14", "May 30", "September 5", "March 3", "October 29", "December 6", "June 14", "November 20", "January 6", "January 24", "March 10", "May 25", "September 13", "September 22", "December 15", "June 24", "November 3", "June 5", "July 17", "August 26", "January 28", "April 2", "September 1", "October 28", "November 25", "July 9", "September 22", "October 29", "December 10", "July 29", "September 24", "October 11", "December 10", "February 27", "July 30", "January 27", "February 10", "March 28", "April 21", "June 12", "October 7", "December 16", "April 23", "June 2", "August 17", "January 2", "January 28", "February 1", "April 30", "October 20", "November 17", "March 2", "March 4", "May 10", "July 15", "September 21", "October 28", "December 26", "August 10", "December 10", "June 13", "July 3", "May 6", "August 13", "August 24", "February 26", "July 26", "January 12", "August 11", "August 14", "June 17", "July 26", "August 17", "March 4", "July 23", "September 24", "October 10", "May 12", "September 8", "January 10", "January 21", "September 13", "November 2", "March 7", "June 14", "July 16", "October 30", "December 9", "December 15", "September 6", "November 17", "December 13", "June 27", "November 17", "December 28"]

DataTable.push(ArrIn1)
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi", "hello"]

    let ArrBegin = []


    let i1 = GETRANDOMi(ArrIn1)
    let t1 = ArrIn1[i1]
    ArrBegin.push(FnObjHanldingNext(["When is your birthday?"], ["My birthday is on " + t1, t1]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["When is your birthday?"], ["My birthday is on " + t1, t1]))
    ArrInFN.Submit.push(t1)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "WhenBirthday"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const Bai17

    = [
        {
            "nameoflession": "Practice 1.7",
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

export default Bai17


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