import ArrPeple from "./ArrOfpeple"

// let ARRp = (JSON.parse(JSON.stringify(ArrPeple)).concat(JSON.parse(JSON.stringify(ArrPeple))));

// Gia định những người tới để làm một cuộc khảo sát về sở thích cá nhân

// Một hàm return về hanhdlingNext object một hàm return về Một dãy đan xen các handlingnextObj một hàm thêm Submit)  

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []
let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

DataTable.push(ArrName)


let Arr1 = [
    {
        "input": "Book Table",
        "qs": ["What do you want?", "May I help you?"],
        "output": ["I want to book a table for tonight."]
    },
    {
        "input": "Take Table",
        "qs": ["What do you want?", "May I help you?"],
        "output": ["I want to take a table."]
    }
]
DataTable.push(GetDataArrToClick(Arr1))

let Arr2 = [
    {
        "DK": "male",
        // "input": "Book Table",
        "qs": ["Good evening, sir."],
        "output": ["Good evening"]
    },
    {
        "DK": "female",
        // "input": "Take Table",
        "qs": ["Good evening, ma'am."],
        "output": ["Good evening"]
    }
]

let Arr3Input =
    [
        "Grilled fish of the day",
        "Steak with chips or salad",
        "Sausage and roast tomato pasta",
        "Chicken salad with garlic yoghurt dressing",
        "Cheese and tomato pizza",
        "Mushroom omelette",
        "Vegetable chili",
        "Soup of the day with brown or white bread",
        "Homemade carrot cake",
        "Homemade banana cake",
        "Chocolate ice cream with chocolate sauce",
        "Fresh fruit salad with grapes, mango, melon and apple, served with cream or ice cream",
    ]
let Arr3 = []
Arr3Input.forEach(e => {
    Arr3.push(
        {
            "input": e,
            // "input": "Book Table",
            "qs": ["Would you like to order something in advance?"],
            "output": ["I want to order " + e]
        }
    )
})
DataTable.push(GetDataArrToClick(Arr3))

ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]


    // let Arrin2 = [FnObjHanldingNext(["Good evening, sir."], ["Good evening."])]
    let ArrBegin = []

    if (ArrInFN.gender === "male") {
        ArrBegin.push(FnObjHanldingNext(Arr2[0].qs, Arr2[0].output))
    } else {
        ArrBegin.push(FnObjHanldingNext(Arr2[1].qs, Arr2[1].output))
    }

    let i1 = GETRANDOMi(Arr1)
    if (Arr1[i1].input === "Book Table") {
        ArrInFN.Submit.push(e[0])
    }
    let Arrin3 = ["0"]
    let Arrin4 = [FnObjHanldingNext(Arr1[i1].qs, Arr1[i1].output)]
    Arrin3.push("1")
    Arrin4.push(FnObjHanldingNext(["What is your name?"], ["My name is " + e[0]]))


    let i3 = GETRANDOMi(Arr3)
    Arrin3.push("1-0")
    Arrin4.push(FnObjHanldingNext(Arr3[i3].qs, Arr3[i3].output))
    ArrInFN.Submit.push(Arr3[i3].input)
    // FnToArrobj(Arrin1, Arrin2)

    // console.log(Fnperson(ArrInFN, DataTable, Arrin2, FnToArrobj(Arrin3, Arrin4)))

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4)))



})


// let Arrin1 = ["0"]
// let Arrin2 = [
//     FnObjHanldingNext(["Hi, What do you want?", "Hi, May I help you?"], ["I want to book a table for tonight"]),
// ]

// FnToArrobj(Arrin1, Arrin2)


// coerdataoflession.push(nam)
const Bai6

    = [
        {
            "nameoflession": "Thực hành bài 6",
            "srcYoutube": "",
            "hoctap": [
            ],
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default Bai6


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