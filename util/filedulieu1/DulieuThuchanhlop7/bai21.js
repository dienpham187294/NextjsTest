import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)

let arr_In1 = [
    { "submit": "Have a sunburn.", "input": "I was outside all day yesterday. Now, my face was red and burning.", "qs": "You should wear a hat when you are outside." },
    { "submit": "Have flu.", "input": "I keep sneezing and coughing.", "qs": "You should exercise regularly." },
    { "submit": "Have a temperature.", "input": "I am so tired. I can’t keep my eyes open! I’m very hot too.", "qs": "You should see a doctor" },
    { "submit": "Have a stomachache.", "input": "I ate some seafood yesterday. Now I feel sick.", "qs": "You should be careful with what you eat and drink." },
    { "submit": "Have a sore throat.", "input": "My throat is very sore.", "qs": "You should drink warm liquids such as hot tea with honey." },
]
let tArr = []
arr_In1.forEach(e => {
    tArr.push(e.qs)
    tArr.push("---")
    // console.log(JSON.stringify(tArr))
})
DataTable.push(["Have a sunburn.", "Have flu.", "Have a temperature.", "Have a stomachache.", "Have a sore throat."])
DataTable.push(tArr)
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi, long time no see you.", "hello my friend."]

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["hi, how are you?"], ["Not too good. I'm not feeling well."]))

    //middle

    let Arrin3 = []
    let Arrin4 = []
    let i1 = GETRANDOMi(arr_In1)
    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["How do you feel, now?"], [arr_In1[i1].input]))
    ArrInFN.Submit.push(arr_In1[i1].submit)
    let End = []
    End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "https://i.postimg.cc/WbcbkJYN/meetfriend.jpg"))
})

let hoctap = [

]
let listenOnly = [
    ["Have a sunburn.", "Have flu.", "Have a temperature.", "Have a stomachache.", "Have a sore throat."],
    ["I was outside all day yesterday. Now, my face was red and burning.", "I keep sneezing and coughing.", "I am so tired. I can’t keep my eyes open! I’m very hot too.", "I ate some seafood yesterday. Now I feel sick.", "My throat is very sore."],
    ["You should wear a hat when you are outside.", "You should exercise regularly.", "You should see a doctor", "You should be careful with what you eat and drink.", "You should drink warm liquids such as hot tea with honey."]
]
let writeOnly = [
    ["Have a sunburn.", "Have flu.", "Have a temperature.", "Have a stomachache.", "Have a sore throat."],
    ["I was outside all day yesterday. Now, my face was red and burning.", "I keep sneezing and coughing.", "I am so tired. I can’t keep my eyes open! I’m very hot too.", "I ate some seafood yesterday. Now I feel sick.", "My throat is very sore."],
    ["You should wear a hat when you are outside.", "You should exercise regularly.", "You should see a doctor", "You should be careful with what you eat and drink.", "You should drink warm liquids such as hot tea with honey."]
]
const Bai21

    = [
        {
            "nameoflession": "Thực hành bài 2.1",
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

export default Bai21


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