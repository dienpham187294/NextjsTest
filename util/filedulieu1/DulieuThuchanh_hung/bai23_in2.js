import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']
let ArrIn1 = ["Doing fine", "Good", "I'm good", "I'm great"]
// DataTable.push(ArrName)
let ArrIn2 = ["2", "3", "4"]
// DataTable.push(ArrIn1)
DataTable.push(["For to go.", "For here."])
DataTable.push(ArrIn2)
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

DataTable.push(Arr3Input2)

// DataTable.push(Arr3Input2)
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

DataTable.push(Arr4Input2)



ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi", "hello"]
    // let i1 = GETRANDOMi(ArrIn1)
    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Hi, how are you?", "Good afternoon, how are you?", "Good morning, how are you?"], ArrIn1))
    // ArrInFN.Submit.push(ArrIn1[i1])
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["Do you want to eat here or to go?"], ["Eat here, please.", "I want to eat here."]))
    ArrInFN.Submit.push("For here.")


    let i2 = GETRANDOMi(ArrIn2)
    Arrin3.push("0-1")
    Arrin4.push(FnObjHanldingNext(["How many people do you have?"], ["I have " + ArrIn2[i2] + " people, please."]))
    ArrInFN.Submit.push(ArrIn2[i2])
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "Greeting"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const Bai23In2

    = [
        {
            "nameoflession": "Practice 2.2",
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

export default Bai23In2


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
    let syntax = [];
    Arr.Submit.forEach((e, i) => {
        syntax.push(i)
    })

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
                syntax
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