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
    "China", "India", "United States", "Indonesia", "Pakistan", "Brazil", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "Egypt", "Vietnam", "DR Congo", "Turkey", "Iran", "Germany", "Thailand", "United Kingdom", "France", "Tanzania", "Italy", "South Africa", "Kenya", "Myanmar", "South Korea", "Colombia", "Uganda", "Spain", "Argentina", "Sudan", "Algeria", "Ukraine", "Iraq", "Afghanistan", "Canada", "Poland", "Morocco", "Saudi Arabia", "Uzbekistan", "Angola", "Peru", "Malaysia", "Mozambique", "Ghana", "Yemen", "Nepal", "Venezuela", "Madagascar", "Cameroon", "Ivory Coast", "North Korea", "Australia", "Niger", "Taiwan", "Sri Lanka", "Burkina Faso", "Mali", "Malawi", "Chile", "Romania", "Kazakhstan", "Zambia", "Syria", "Guatemala", "Ecuador", "Senegal", "Netherlands", "Cambodia", "Chad", "Somalia", "Zimbabwe", "Guinea", "Rwanda", "Benin", "Burundi", "Tunisia", "Bolivia", "Belgium", "Haiti", "South Sudan", "Cuba", "Dominican Republic", "Czech Republic", "Greece", "Jordan", "Azerbaijan", "Portugal", "Sweden", "Honduras", "United Arab Emirates", "Tajikistan", "Hungary", "Belarus", "Papua New Guinea", "Austria", "Israel", "Switzerland", "Serbia", "Togo", "Sierra Leone", "Hong Kong", "Laos", "Paraguay", "Libya", "Bulgaria", "Lebanon", "Nicaragua", "Kyrgyzstan", "El Salvador", "Turkmenistan", "Singapore", "Denmark", "Republic of the Congo", "Finland", "Norway", "Slovakia", "Oman", "Palestine", "Liberia", "Costa Rica", "Ireland", "Central African Republic", "New Zealand", "Mauritania", "Panama", "Kuwait", "Croatia", "Moldova", "Georgia", "Eritrea", "Uruguay", "Mongolia", "Bosnia And Herzegovina", "Jamaica", "Armenia", "Qatar", "Albania", "Puerto Rico", "Lithuania", "Namibia", "Gambia", "Botswana", "Gabon", "Lesotho", "North Macedonia", "Slovenia", "Guinea Bissau", "Latvia", "Bahrain", "Equatorial Guinea", "Trinidad And Tobago", "Timor Leste", "Estonia", "Mauritius", "Cyprus", "Eswatini", "Djibouti", "Fiji", "Reunion", "Comoros", "Guyana", "Bhutan", "Solomon Islands", "Luxembourg", "Montenegro", "Western Sahara", "Suriname", "Cape Verde", "Maldives", "Malta", "Brunei", "Belize", "Guadeloupe", "Bahamas", "Martinique", "Iceland", "Vanuatu", "French Guiana", "Barbados", "Mayotte", "Sao Tome And Principe", "Samoa", "Saint Lucia", "Kiribati", "Micronesia", "Grenada", "Saint Vincent And the Grenadines", "Tonga", "Seychelles", "Antigua And Barbuda", "Andorra", "Dominica", "Marshall Islands", "Greenland", "Saint Kitts And Nevis", "Monaco", "Liechtenstein", "San Marino", "Palau", "Tuvalu", "Nauru", "Vatican City"
]

DataTable.push(ArrIn1)
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi", "hello"]
    let i1 = getRandomi(ArrIn1)
    let ArrBegin = []
    let t1 = ArrIn1[i1]
    ArrBegin.push(FnObjHanldingNext(["Where are you from?"], ["I'm from " + t1, t1, "I am from " + t1, "I come from " + t1]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["Where are you from?"], ["I'm from " + t1, t1, "I am from " + t1, "I come from " + t1]))
    ArrInFN.Submit.push(t1)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "WhereFrom"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const Bai14

    = [
        {
            "nameoflession": "A.4",
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

export default Bai14

