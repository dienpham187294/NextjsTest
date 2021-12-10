import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"



let DataTable = []
let coerdataoflession = []



// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']
let ArrIn1 = ["Doing fine", "Good", "I'm good", "I'm great"]
// DataTable.push(ArrName)

// DataTable.push(ArrIn1)
DataTable.push(["For to go.", "For here."])
DataTable.push(["2", "3", "4"])

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
    Arrin4.push(FnObjHanldingNext(["Do you want to eat here or to go?"], ["To go, please.", "I want to take it to go."]))
    ArrInFN.Submit.push("For to go.")

    let i3 = getRandomi(Arr3Input)

    Arrin3.push("1")
    Arrin4.push(FnObjHanldingNext(["What would you like today?", "What do you want to order?"], [Arr3Input[i3] + ", please.", "I want to take " + Arr3Input[i3]]))
    ArrInFN.Submit.push(Arr3Input2[i3])



    let i4 = getRandomi(Arr4Input)
    Arrin3.push("1-0")
    Arrin4.push(FnObjHanldingNext(["Do you want to take some drinks?"], [Arr4Input[i4] + ", please."]))
    ArrInFN.Submit.push(Arr4Input2[i4])

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const Bai23In1

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

export default Bai23In1


