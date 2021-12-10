import ArrPeple from "./ArrOfpeple"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)


let ArrIn1 = [
    { "input": "Modern technology allows people to communicate directly.", "qs": "What does modern technology allow people to do?" },
    { "input": "Voice and video calls, emails, pictures, and instant messages travel directly from A to B.", "qs": "What can travel directly from a to b?" },
    { "input": "Maintaining trust between individuals no matter how far apart they are.", "qs": "How far can technology maintain trust between people?" },
    { "input": "When it comes to money people have to trust a third party to be able to complete a transaction.", "qs": "When it comes to money, what does it take to complete a transaction?" },
    { "input": "Blockchain technology is challenging the status quo in a radical way.", "qs": "How does blockchain affect the status quo?" },
    { "input": "By using math and cryptography, Blockchain provides an open decentralized database of any transaction involving value money goods property work, or even votes.", "qs": "What does blockchain provide?" },
    { "input": "Creating a record whose authenticity can be verified by the entire community.", "qs": "What does blockchain create?" },
    { "input": "The future global economy will move towards one of distributed property and trust where anyone with access to the internet can get involved in blockchain based transactions and third-party trust organizations may no longer be necessary.", "qs": "How will the future global economy evolve?" },
    { "input": "The uses of blockchain technology are endless.", "qs": "What is the potential of blockchain in the future?" },
    { "input": "Some expect that in less than 10 years it will be used to collect taxes.", "qs": "What do experts think will happen in the next 10 years?" },
    { "input": "It will make it easier for immigrants to send money back to countries where access to financial institutions is limited.", "qs": "How will immigrants to send money back to the countries?" },
    { "input": "Financial fraud will be significantly reduced as every transaction will be recorded on a public and distributed ledger which will be accessible by anyone who has an internet connection.", "qs": "What will financial fraud look like in the future?" },
    { "input": "Think of it as wills and contracts that execute themselves or  dated proof of existence for ideas much like a patent.", "qs": "What wills and contracts look like in the future?" },
    { "input": "Blockchain will become a global decentralized source of trust but not everyone is ready to embrace it.", "qs": "Is everyone ready to embrace blockchain?" },
    { "input": "A huge proportion of trust services from banking to notaries will face challenges on price volume and in some cases the farrance survival.", "qs": "Which industries will face great challenges?" },
    { "input": "Public authorities could find it more and more difficult to enforce traditional financial regulations due to the new possibilities offered by the Bitcoin network to bypass traditional financial intermediaries.", "qs": "What will public authorities face in the future?" },
    { "input": "Unimaginable new networks will evolve to meet society's needs more cheaply and potentially more securely.", "qs": "How will new networks evolve to meet society's needs?" },
]


DataTable.push(getElementsToDataTable(ArrIn1, "input", "-----"))

ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let i1 = GETRANDOMi(ArrIn1)

    let SpeakFirst = [ArrIn1[i1].qs]

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
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, ""))
})

let hoctap = []
let listenOnly = [
    getElementsToDataTable(ArrIn1, "qs")
]
let writeOnly = [
]

let storyBoicanh = ``
let story = `Nghe hiểu.`
const BaiA1b

    = [
        {
            "nameoflession": "B.1.2: Blockchain là gì?",
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

export default BaiA1b


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