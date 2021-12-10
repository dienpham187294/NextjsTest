import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"


let DataTable = []
let coerdataoflession = []

let ArrIn1 = [
    "a Waiter", "a Paramedic", "a Dentist", "a Train conductor", "a Nurse", "a Electrician", "a Doctor", "a Businessman", "a American football player", "a Student", "a Surgeon", "a Doorman", "a Secretary", "a Soldier", "a Repairman", "a Scientist", "a Reporter", "a Construction worker", "a Professor", "a Police officer", "a Postman", "a Photographer", "a Pilot", "a Catholic nun", "a Painter", "a Mechanic", "a Magician", "a Lifeguard", "a Lunchroom supervisor", "a Clown", "a Housekeeper", "a Gardener", "a Geisha", "a Footballer", "a Forest ranger", "a Builder", "a Foreman", "a Farmer", "a Flight attendant", "a Fireman", "an Engineer", "a Carpenter", "an Architect", "a Boxer", "a Cameraman", "a Detective", "a Journalist", "a Housewife", "a Diver", "a Pope", "a Priest", "a Salesman", "a Librarian", "a Pirate", "a Singer",
]
DataTable.push(ArrIn1)
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi", "hello"]

    let ArrBegin = []


    let i1 = getRandomi(ArrIn1)
    let t1 = ArrIn1[i1]
    ArrBegin.push(FnObjHanldingNext(["What do you do?", "What’s your job?"], ["I’m a " + t1, t1, "I work as " + t1]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["What do you do?", "What’s your job?s"], ["I’m a " + t1, t1, , "I work as " + t1]))
    ArrInFN.Submit.push(t1)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "Job"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const BaiA8

    = [
        {
            "nameoflession": "A.8",
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

export default BaiA8


