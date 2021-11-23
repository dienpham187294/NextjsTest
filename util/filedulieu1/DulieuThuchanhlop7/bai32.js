import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)

let arr_In1 = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "Indianapolis",
    "Charlotte",
    "San Francisco",
    "Seattle",
    "Denver",
    "Washington",
    "Nashville",
    "Oklahoma City",
    "El Paso",
    "Boston",
    "Portland",
    "Las Vegas",
    "Detroit",
    "Memphis",
    "Louisville",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Kansas City",
    "Mesa",
    "Atlanta",
    "Omaha",
    "Colorado Springs",
    "Raleigh",
    "Long Beach",
    "Virginia Beach",
    "Miami",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Bakersfield",
    "Wichita",
    "Arlington",
    "Aurora",
    "Tampa",
    "New Orleans",
    "Cleveland",
    "Honolulu",
    "Anaheim",
    "Lexington",
    "Stockton",
    "Corpus Christi",
    "Henderson",
    "Riverside",
    "Newark",
    "Saint Paul",
    "Santa Ana",
    "Cincinnati",
    "Irvine",
    "Orlando",
    "Pittsburgh",
    "St. Louis",
    "Greensboro",
    "Jersey City",
    "Anchorage",
    "Lincoln",
    "Plano",
    "Durham",
    "Buffalo",
    "Chandler",
    "Chula Vista",
    "Toledo",
    "Madison",
    "Gilbert",
    "Reno",
    "Fort Wayne",
    "North Las Vegas",
    "St. Petersburg",
    "Lubbock",
    "Irving",
    "Laredo",
    "Winston–Salem",
    "Chesapeake",
    "Glendale",
    "Garland",
    "Scottsdale",
    "Norfolk",
    "Boise",
    "Fremont",
    "Spokane",
    "Santa Clarita",
    "Baton Rouge",
    "Richmond",
]

DataTable.push(arr_In1)

// DataTable.push(["Have a sunburn.", "Have flu.", "Have a temperature.", "Have a stomachache.", "Have a sore throat."])
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["Hi", "Hello"]

    let i1 = GETRANDOMi(arr_In1)

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Hi, Where do you live?"], ["I live in " + arr_In1[i1]]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["Where do you live?"], [arr_In1[i1]]))
    // let i2 = GETRANDOMi(arr_In2)
    // Arrin3.push("0-0")
    // Arrin4.push(FnObjHanldingNext([arr_In1[i1].qs], [arr_In2[i2].input]))

    // Arrin3.push("0-0-0")
    // Arrin4.push(FnObjHanldingNext([arr_In2[i2].qs], ["Thank you."], { end_successfull: true }))

    // let i4 = GETRANDOMi(Arr3Input)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "live"))
})

let hoctap = [
]
let listenOnly = [

]
let writeOnly = [

]
const Bai32

    = [
        {
            "nameoflession": "Thực hành bài 3.2",
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

export default Bai32


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