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
const Bai22In2

    = [
        {
            "nameoflession": "B.2",
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

export default Bai22In2


