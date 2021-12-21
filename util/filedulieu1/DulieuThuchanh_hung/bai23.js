import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import DataTotal1 from "./DulieuInside/A1_total1"
import Foods from "./DulieuInside/A1_foods"
import Drinks from "./DulieuInside/A1_drinks"
let DataTable = []
let coerdataoflession = []





DataTable.push(["For to go.", "For here."])
DataTable.push(["2", "3", "4"])
DataTable.push(getElementsToDataTable(Foods, "img"))
DataTable.push(getElementsToDataTable(Drinks, "img"))





ArrPeple.slice(0, 20).forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    ArrInFN.viewPick = {
        "header": "Guest at the door.",
        "img": "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"
    }
    let SpeakFirst = ["hi", "hello"]

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(DataTotal1.greeting, DataTotal1.awGreeting))
    // ArrInFN.Submit.push(ArrIn1[i1])
    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(DataTotal1.askForNeedGreeting, DataTotal1.awForTogo))
    ArrInFN.Submit.push("For to go.")

    let i3 = getRandomi(Foods)

    Arrin3.push("1")
    Arrin4.push(FnObjHanldingNext(DataTotal1.askForFood, DataTotal1.awForFood(Foods[i3].input)))
    ArrInFN.Submit.push(Foods[i3].img)



    let i4 = getRandomi(Drinks)

    Arrin3.push("1-0")
    Arrin4.push(FnObjHanldingNext(
        DataTotal1.askForDrink, DataTotal1.awForDrink(Drinks[i4].input)
    )
    )
    ArrInFN.Submit.push(Drinks[i4].img)

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"))
})

ArrPeple.slice(0, 20).forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    ArrInFN.viewPick = {
        "header": "Guest at the door.",
        "img": "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"
    }
    let SpeakFirst = ["hi", "hello"]

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(DataTotal1.greeting, DataTotal1.awGreeting))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(DataTotal1.askForNeedGreeting, DataTotal1.awForEathere))
    ArrInFN.Submit.push("For here.")

    let i2 = getRandomi(DataTotal1.many)
    Arrin3.push("0-1")
    Arrin4.push(FnObjHanldingNext(DataTotal1.askForHowmany, DataTotal1.awForHowMany(DataTotal1.many[i2])))
    ArrInFN.Submit.push(DataTotal1.many[i2])
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"))
})




let hoctap = [
]
let listenOnly = [

]
let writeOnly = [
]
let storyBoicanh = ""
let story =
    `Hôm nay, sau khi chào hỏi khách hãy hỏi khách muốn ăn tại chỗ hay mua mang đi. 
Nếu ăn tại chỗ thì hỏi khách có bao nhiêu người để xếp bàn. 
Nếu khách mua mang đi thì order món và nước cho khách.`
const Bai23

    = [
        {
            "nameoflession": "B.1.3",
            "storyBoicanh": storyBoicanh,
            "story": story,
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

export default Bai23


