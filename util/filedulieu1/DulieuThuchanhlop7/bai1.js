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
let Arr3 = []
Arr3Input.forEach(e => {
    Arr3.push(
        {
            "input": e,
            "qs": ["what's your hobby?", "Do you have a hobby?"],
            "output": ["I like " + e, "My hobby is " + e]
        }
    )
})
DataTable.push(Arr3Input)

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

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4)))
})

let hoctap = [
    { "EN": "Good afternoon", "VN": "Chào buổi chiêu", "IPA": "gʊd ˈɑːftəˈnuːn" },
    { "EN": "What is your name?", "VN": "Tên của bạn là gì?", "IPA": "wɒt ɪz jɔː neɪm?" },
    { "EN": "what's your hobby?", "VN": "Sở thích của bạn là gì?", "IPA": "wɒts jɔː ˈhɒbi?" },
    { "EN": "Do you have a hobby?", "VN": "Bạn có sở thích chứ?", "IPA": "duː juː hæv ə ˈhɒbi?" },
    { "EN": "I like cycling", "VN": "Tôi thích đi xe đạp", "IPA": "aɪ laɪk ˈsaɪklɪŋ" },
    { "EN": "My hobby is cycling", "VN": "Sở thích của tôi là đi xe đạp", "IPA": "maɪ ˈhɒbi ɪz ˈsaɪklɪŋ" },
    { "EN": "cycling", "VN": "Đi xe đạp", "IPA": "ˈsaɪklɪŋ" },
    { "EN": "taking photos", "VN": "Chụp ảnh", "IPA": "ˈteɪkɪŋ ˈfəʊtəʊz" },
    { "EN": "cooking", "VN": "Nấu nướng", "IPA": "ˈkʊkɪŋ" },
    { "EN": "bird-watching", "VN": "Ngắm chim", "IPA": "bɜːd-ˈwɒʧɪŋ" },
    { "EN": "gardening", "VN": "Làm vườn", "IPA": "ˈgɑːdnɪŋ" },
    { "EN": "arranging flowers", "VN": "Sắp xếp hoa", "IPA": "əˈreɪnʤɪŋ ˈflaʊəz" },
    { "EN": "skating", "VN": "Trượt băng", "IPA": "ˈskeɪtɪŋ" },
    { "EN": "playing the guitar", "VN": "Chơi guitar", "IPA": "ˈpleɪɪŋ ðə gɪˈtɑː" },
    { "EN": "playing board games", "VN": "Chơi trò chơi trên bàn cờ", "IPA": "ˈpleɪɪŋ bɔːd geɪmz" },
]
let listenOnly = [
    ["Hi", "Hello", "How are you"],
    ["Hi 1", "Hello 1", "How are you 1"]
]
let writeOnly = [
    ["Hi 1", "Hello 1", "How are you 1"],
    ["Hi 1", "Hello 1", "How are you 1"]
]
const Bai1

    = [
        {
            "nameoflession": "Thực hành bài 1",
            "srcYoutube": "",
            "hoctap":
            {
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

export default Bai1


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

// function PickRandom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}