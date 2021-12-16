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

    let SpeakFirst = ["Hi", "Hello"]
    // let i1 = GETRANDOMi(ArrIn1)
    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Hi, How are you?", "Good afternoon, How are you?", "Good morning, How are you?"], ArrIn1))
    // ArrInFN.Submit.push(ArrIn1[i1])
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["Do you want to eat here or to go?", "How can I help you?", "May I help you?"], ["Eat here, please.", "I want to eat here."]))
    ArrInFN.Submit.push("For here.")


    let i2 = getRandomi(ArrIn2)
    Arrin3.push("0-1")
    Arrin4.push(FnObjHanldingNext(["How many people do you have?", "For how many?"], ["I have " + ArrIn2[i2] + " people, please.", "A table for " + ArrIn2[i2]]))
    ArrInFN.Submit.push(ArrIn2[i2])
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


