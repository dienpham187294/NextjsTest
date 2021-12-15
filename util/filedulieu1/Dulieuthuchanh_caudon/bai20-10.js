import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"

let DataTable = []
let coerdataoflession = []

let ArrIn1 = ["Mobile App Development", "Shopify Development", "WordPress Development", "Data Visualization", "Machine Learning", "Cybersecurity & Data Protection", "Logo Design", "Photoshop Editing", "Web & Mobile Design", "Presentation Design", "Architecture & Interior Design", "Video Editing", "Social Media Management", "Lead Generation", "SEO", "Facebook Advertising", "Marketing Strategy", "Video Marketing", "Articles & Blogs", "Proofreading & Editing", "Translation & Localization", "Website Content", "Resume Writing", "Books & eBooks", "Project Management", "Customer Support", "Virtual Assistance", "eCommerce Management", "Data Entry", "Transcription", "Financial Analysis", "Accounting & Bookkeeping", "Financial Forecasting & Modeling", "Tax Consulting", "Financial Wealth Management", "Building Information Modeling", "Architectural Floor Plans", "Architectural 3D Models & Renderings", "Landscape Design", "Trade Show Booth Design", "Industrial & Product Design", "Recruiting", "Employee Learning & Development", "Performance Management", "Organizational Development", "HR Information Systems", "Compensation & Benefits", "Legal Consulting", "Trademark Registration", "Legal Writing", "Documentation & Contract Review", "Legal Translation"]
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
    ArrBegin.push(FnObjHanldingNext(["What line of work are you in?"], ["I work in " + t1]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["What line of work are you in?"], [, "I work as " + t1]))
    ArrInFN.Submit.push(t1)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "lineofJob"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const BaiA10

    = [
        {
            "nameoflession": "A.10",
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

export default BaiA10


