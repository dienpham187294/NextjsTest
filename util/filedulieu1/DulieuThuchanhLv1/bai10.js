import ArrPeple from "./ArrOfpeple"

// let ARRp = (JSON.parse(JSON.stringify(ArrPeple)).concat(JSON.parse(JSON.stringify(ArrPeple))));

// Gia định những người tới để làm một cuộc khảo sát về sở thích cá nhân

// Một hàm return về hanhdlingNext object một hàm return về Một dãy đan xen các handlingnextObj một hàm thêm Submit)  

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []
let ArrName = [
    'Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly',
    'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna',
    'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda',
    'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas',
    'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily',
    'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua'
]

DataTable.push(ArrName)


let Arr1 = [
    {
        "input": "Book Table",
        "qs": ["How can I help you?"],
        "output": ["I want to book a table for tonight."]
    },
    {
        "input": "Take Table",
        "qs": ["How can I help you?"],
        "output": ["I want to take a table."]
    }
]
DataTable.push(GetDataArrToClick(Arr1))

let Arr2 = [
    {
        "DK": "male",
        "qs": ["Good evening, sir."],
        "output": ["Good evening"]
    },
    {
        "DK": "female",
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
let Arr3Input2 = [
    "https://i.postimg.cc/h41MN6zV/Grilled-fish-of-the-day.jpg",
    "https://i.postimg.cc/QdwqprwZ/Steak-with-chips-or-salad.jpg",
    "https://i.postimg.cc/J4h3vnWW/Sausage-and-roast-tomato-pasta.png",
    "https://i.postimg.cc/bJQLyF6c/Chicken-salad-with-garlic-yoghurt-dressing.jpg",
    "https://i.postimg.cc/FKSVpBXd/Cheese-and-tomato-pizza.jpg",
    "https://i.postimg.cc/RVPdZtTF/Mushroom-omelette.jpg",
    "https://i.postimg.cc/xCSy439s/Vegetable-chili.jpg",
    "https://i.postimg.cc/jSLXwj8h/Soup-of-the-day-with-brown-or-white-bread.jpg",
    "https://i.postimg.cc/MH97XkV4/Homemade-carrot-cake.jpg",
    "https://i.postimg.cc/RVCGmdKy/Homemade-banana-cake.jpg",
    "https://i.postimg.cc/D0n68dDW/Chocolate-ice-cream-with-chocolate-sauce.jpg",
    "https://i.postimg.cc/BbS5qZLH/Fresh-fruit-salad-with-grapes-mango-melon-and-apple-served-with-cream-or-ice-cream.jpg"
]
let Arr3 = []
Arr3Input.forEach((e, i) => {
    Arr3.push(
        {
            "input": Arr3Input2[i],
            // "input": "Book Table",
            "qs": ["Would you like to order something in advance?"],
            "output": ["I want to order " + e]
        }
    )
})

let Arr4Input =
    [
        "Mineral water",
        "Fresh orange juice",
        "Soft drink",
        "English tea",
        "Irish Cream Coffee"
    ]
let Arr4Input2 = [
    "https://i.postimg.cc/Hk3yHMkd/Mineral-water.jpg",
    "https://i.postimg.cc/NGrmTLpk/Fresh-orange-juice.jpg",
    "https://i.postimg.cc/TPwWPPKm/Soft-drink.jpg",
    "https://i.postimg.cc/YqKgxkPK/English-tea.jpg",
    "https://i.postimg.cc/nc4mRg8s/Irish-Cream-Coffee.jpg",
]
let Arr4 = []
Arr4Input.forEach((e, i) => {
    Arr4.push(
        {
            "input": Arr4Input2[i],
            // "input": "Book Table",
            "qs": ["Anything else?", "Would you like to order some drinks?"],
            "output": [e + " please."]
        }
    )
})


DataTable.push(Arr3Input2.concat(Arr4Input2))

let Arr5Input =
    [
        "2",
        "3",
        "4",
        "5",
        "6"
    ]

let Arr5 = []
Arr5Input.forEach((e, i) => {
    Arr5.push(
        {
            "input": e,
            // "input": "Book Table",
            "qs": ["How many people do you have?"],
            "output": ["we have " + e + " please."]
        }
    )
})

DataTable.push(Arr5Input)

let Arr2_01 = [
    {
        "readfisrt": ["What time does the restaurant close?"],
        "qs": ["It is 10 pm."],
        "output": ["Thanks"]
    },
    {
        "readfisrt": ["Do you have any baby highchairs?"],
        "qs": ["Yes of course, I'll bring it to you right away."],
        "output": ["Thanks"]
    },
    {
        "readfisrt": ["Can I ask where the restroom is?"],
        "qs": ["Yes of course. Go straight at the end of the road, turn right."],
        "output": ["Thanks"]
    },
    {
        "readfisrt": ["Can I ask what is the wifi password?"],
        "qs": ["The password is I love you."],
        "output": ["Thanks"]
    },
]
let Arr2_01_Datatable = []
Arr2_01.forEach(
    (e) => {
        Arr2_01_Datatable.push(e.qs)
    }
)
DataTable.push(Arr2_01_Datatable)


ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]


    // // let Arrin2 = [FnObjHanldingNext(["Good evening, sir."], ["Good evening."])]
    let ArrBegin = []

    if (ArrInFN.gender === "male") {
        ArrBegin.push(FnObjHanldingNext(Arr2[0].qs, Arr2[0].output))
    } else {
        ArrBegin.push(FnObjHanldingNext(Arr2[1].qs, Arr2[1].output))
    }


    let i1 = GETRANDOMi(Arr1)
    let Arrin3 = ["0"]
    let Arrin4 = [FnObjHanldingNext(Arr1[i1].qs, Arr1[i1].output)]

    ArrInFN.Submit.push(Arr1[i1].input)
    if (Arr1[i1].input === "Book Table") {
        ArrInFN.Submit.push(e[0])


        Arrin3.push("1")
        Arrin4.push(FnObjHanldingNext(["Can I have your name?"], ["My name is " + e[0]]))

        let i3 = GETRANDOMi(Arr3)
        Arrin3.push("1-0")
        Arrin4.push(FnObjHanldingNext(Arr3[i3].qs, Arr3[i3].output))

        let i4 = GETRANDOMi(Arr4)
        Arrin3.push("1-0-1")
        Arrin4.push(FnObjHanldingNext(Arr4[i4].qs, Arr4[i4].output))


        ArrInFN.Submit.push(Arr3[i3].input)
        ArrInFN.Submit.push(Arr4[i4].input)
    }

    if (Arr1[i1].input !== "Book Table") {
        let i5 = GETRANDOMi(Arr5)
        Arrin3.push("0-0")
        Arrin4.push(FnObjHanldingNext(Arr5[i5].qs, Arr5[i5].output))
        ArrInFN.Submit.push(Arr5[i5].input)
    }





    let End = []

    let i5 = GETRANDOMi(Arr2_01)
    End.push(
        FnObjHanldingNext(
            Arr2_01[i5].qs,
            Arr2_01[i5].output,
            {
                "end_successfull": true,
                "readFirst": Arr2_01[i5].readfisrt
            }
        ))




    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End))
})


// let Arrin1 = ["0"]
// let Arrin2 = [
//     FnObjHanldingNext(["Hi, What do you want?", "Hi, May I help you?"], ["I want to book a table for tonight"]),
// ]

// FnToArrobj(Arrin1, Arrin2)


// coerdataoflession.push(nam)
const Bai10

    = [
        {
            "nameoflession": "Thực hành bài 10",
            "srcYoutube": "",
            "hoctap": [
            ],
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default Bai10

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