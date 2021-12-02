import Bai22In1 from "./bai22_in1"
import Bai22In2 from "./bai22_in2"
// import Bai12 from "./bai12"
let coerdataoflession = Bai22In1[1].coerdataoflession.slice(0, 20).concat(Bai22In2[1].coerdataoflession.slice(0, 20))
let hoctap = [
    { "EN": "Do you want to eat here or to go?", "VN": "Bạn muốn ăn ở đây hay đi đâu?", "IPA": "duː juː wɒnt tuː iːt hɪər ɔː tuː gəʊ?" },
    { "EN": "How many people do you have?", "VN": "Bạn có bao nhiêu người?", "IPA": "haʊ ˈmɛni ˈpiːpl duː juː hæv?" },
   

]
let listenOnly = [
    [
        "To go, please.", "I want to take it to go.", "Eat here, please.", "I want to eat here."

    ]
]
let writeOnly = [

]
const Bai22

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

export default Bai22
