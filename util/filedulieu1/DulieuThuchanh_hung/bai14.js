import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)
let ArrIn1 = [
    "China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "Egypt", "Vietnam", "DR Congo", "Turkey", "Iran", "Germany", "Thailand", "United Kingdom", "France", "Tanzania", "Italy", "South Africa", "Kenya", "Myanmar", "South Korea", "Colombia", "Uganda", "Spain", "Argentina", "Sudan", "Algeria", "Ukraine", "Iraq", "Afghanistan", "Canada", "Poland", "Morocco", "Saudi Arabia", "Uzbekistan", "Angola", "Peru", "Malaysia", "Mozambique", "Ghana", "Yemen", "Nepal", "Venezuela", "Madagascar", "Cameroon", "Ivory Coast", "North Korea", "Australia", "Niger", "Taiwan", "Sri Lanka", "Burkina Faso", "Mali", "Malawi", "Chile", "Romania", "Kazakhstan", "Zambia", "Syria", "Guatemala", "Ecuador", "Senegal", "Netherlands", "Cambodia", "Chad", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "Tunisia", "Bolivia", "Belgium", "Haiti", "South Sudan", "Cuba", "Dominican Republic", "Czech Republic", "Greece", "Jordan", "Azerbaijan", "Portugal", "Sweden", "Honduras", "United Arab Emirates", "Tajikistan", "Hungary", "Belarus", "Papua New Guinea", "Austria", "Israel", "Switzerland", "Serbia", "Togo", "Sierra Leone", "Hong Kong", "Laos", "Paraguay", "Libya", "Bulgaria", "Lebanon", "Nicaragua", "Kyrgyzstan", "El Salvador", "Turkmenistan", "Singapore", "Denmark", "Republic of the Congo", "Finland", "Norway", "Slovakia", "Oman", "Palestine", "Liberia", "Costa Rica", "Ireland", "Central African Republic", "New Zealand", "Mauritania", "Panama", "Kuwait", "Croatia", "Moldova", "Georgia", "Eritrea", "Uruguay", "Mongolia", "Bosnia And Herzegovina", "Jamaica", "Armenia", "Qatar", "Albania", "Puerto Rico", "Lithuania", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "North Macedonia", "Slovenia", "Guinea Bissau", "Latvia", "Bahrain", "Equatorial Guinea", "Trinidad And Tobago", "Timor Leste", "Estonia", "Mauritius", "Cyprus", "Eswatini", "Djibouti", "Fiji", "Reunion", "Comoros", "Guyana", "Bhutan", "Solomon Islands", "Luxembourg", "Montenegro", "Western Sahara", "Suriname", "Cape Verde", "Maldives", "Malta", "Brunei", "Belize", "Guadeloupe", "Bahamas", "Martinique", "Iceland", "Vanuatu", "French Guiana", "Barbados", "Mayotte", "Sao Tome And Principe", "Samoa", "Saint Lucia", "Kiribati", "Micronesia", "Grenada", "Saint Vincent And the Grenadines", "Tonga", "Seychelles", "Antigua And Barbuda", "Andorra", "Dominica", "Marshall Islands", "Greenland", "Saint Kitts And Nevis", "Monaco", "Liechtenstein", "San Marino", "Palau", "Tuvalu", "Nauru", "Vatican City"
]
DataTable.push(ArrIn1)
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi", "hello"]
    let i1 = GETRANDOMi(ArrIn1)
    let ArrBegin = []
    let t1 = ArrIn1[i1]
    ArrBegin.push(FnObjHanldingNext(["Where are you from?"], ["I'm from " + t1, t1, "I am from " + t1, "I come from " + t1]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["Where are you from?"], ["I'm from " + t1, t1, "I am from " + t1, "I come from " + t1]))
    ArrInFN.Submit.push(t1)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "WhereFrom"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const Bai14

    = [
        {
            "nameoflession": "A.4",
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

export default Bai14


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