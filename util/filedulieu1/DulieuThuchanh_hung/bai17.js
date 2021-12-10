import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"


let DataTable = []
let coerdataoflession = []

let ArrIn1 = ["March 8", "March 17", "January 21", "January 29", "March 17", "May 14", "May 30", "September 5", "March 3", "October 29", "December 6", "June 14", "November 20", "January 6", "January 24", "March 10", "May 25", "September 13", "September 22", "December 15", "June 24", "November 3", "June 5", "July 17", "August 26", "January 28", "April 2", "September 1", "October 28", "November 25", "July 9", "September 22", "October 29", "December 10", "July 29", "September 24", "October 11", "December 10", "February 27", "July 30", "January 27", "February 10", "March 28", "April 21", "June 12", "October 7", "December 16", "April 23", "June 2", "August 17", "January 2", "January 28", "February 1", "April 30", "October 20", "November 17", "March 2", "March 4", "May 10", "July 15", "September 21", "October 28", "December 26", "August 10", "December 10", "June 13", "July 3", "May 6", "August 13", "August 24", "February 26", "July 26", "January 12", "August 11", "August 14", "June 17", "July 26", "August 17", "March 4", "July 23", "September 24", "October 10", "May 12", "September 8", "January 10", "January 21", "September 13", "November 2", "March 7", "June 14", "July 16", "October 30", "December 9", "December 15", "September 6", "November 17", "December 13", "June 27", "November 17", "December 28"]

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
    ArrBegin.push(FnObjHanldingNext(["When is your birthday?"], ["My birthday is on " + t1, t1]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["When is your birthday?"], ["My birthday is on " + t1, t1]))
    ArrInFN.Submit.push(t1)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "WhenBirthday"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const Bai17

    = [
        {
            "nameoflession": "A.7",
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

export default Bai17


