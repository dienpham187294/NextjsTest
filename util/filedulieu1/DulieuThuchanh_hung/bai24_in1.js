import ArrPeple from "./ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
// import getRandomi from "../dataHelperFunction/getRandomi"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']
// let ArrIn1 = ["Doing fine", "Good", "I'm good", "I'm great"]
// DataTable.push(ArrName)
let ArrIn1 =
    [
        { "input": "Grilled fish of the day", "img": "https://i.postimg.cc/h41MN6zV/Grilled-fish-of-the-day.jpg" },
        { "input": "Steak with chips or salad", "img": "https://i.postimg.cc/QdwqprwZ/Steak-with-chips-or-salad.jpg" },
        { "input": "Sausage and roast tomato pasta", "img": "https://i.postimg.cc/J4h3vnWW/Sausage-and-roast-tomato-pasta.png" },
        { "input": "Chicken salad with garlic yoghurt dressing", "img": "https://i.postimg.cc/bJQLyF6c/Chicken-salad-with-garlic-yoghurt-dressing.jpg" },
        { "input": "Cheese and tomato pizza", "img": "https://i.postimg.cc/FKSVpBXd/Cheese-and-tomato-pizza.jpg" },
        { "input": "Mushroom omelette", "img": "https://i.postimg.cc/RVPdZtTF/Mushroom-omelette.jpg" },
        { "input": "Vegetable chili", "img": "https://i.postimg.cc/xCSy439s/Vegetable-chili.jpg" },
        { "input": "Soup of the day with brown or white bread", "img": "https://i.postimg.cc/jSLXwj8h/Soup-of-the-day-with-brown-or-white-bread.jpg" },
        { "input": "Homemade carrot cake", "img": "https://i.postimg.cc/MH97XkV4/Homemade-carrot-cake.jpg" },
        { "input": "Homemade banana cake", "img": "https://i.postimg.cc/RVCGmdKy/Homemade-banana-cake.jpg" },
        { "input": "Chocolate ice cream with chocolate sauce", "img": "https://i.postimg.cc/D0n68dDW/Chocolate-ice-cream-with-chocolate-sauce.jpg" },
        { "input": "Fresh fruit salad with grapes, mango, melon and apple, served with cream or ice cream", "img": "https://i.postimg.cc/BbS5qZLH/Fresh-fruit-salad-with-grapes-mango-melon-and-apple-served-with-cream-or-ice-cream.jpg" },
    ]

let ArrIn2 =
    [
        { "input": "Mineral water", "img": "https://i.postimg.cc/Hk3yHMkd/Mineral-water.jpg" },
        { "input": "Fresh orange juice", "img": "https://i.postimg.cc/NGrmTLpk/Fresh-orange-juice.jpg" },
        { "input": "Soft drink", "img": "https://i.postimg.cc/TPwWPPKm/Soft-drink.jpg" },
        { "input": "English tea", "img": "https://i.postimg.cc/YqKgxkPK/English-tea.jpg" },
        { "input": "Irish Cream Coffee", "img": "https://i.postimg.cc/nc4mRg8s/Irish-Cream-Coffee.jpg" },
    ]

DataTable.push(getElementsToDataTable(ArrIn1, "img"))

ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["Excuse me"]

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Yes, may I help you?"], ["I want to order."]))

    //middle

    let Arrin3 = []
    let Arrin4 = []
    let Arri1 = pickNRandomElementsOfArray(ArrIn1, 2)
    // console.log(Arri1)
    let Anwer1 = "I want to order " + Arri1[0].input + "and, " + Arri1[1].input
    ArrInFN.Submit.push(Arri1[0].img)
    ArrInFN.Submit.push(Arri1[1].img)

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["What would you like?"], [Anwer1]))

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"))
})

let hoctap = [

]
let listenOnly = [

]
let writeOnly = [
]
const Bai24

    = [
        {
            "nameoflession": "B.4",
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

export default Bai24


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
    let syntax = ["1", "2", "3"];

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

