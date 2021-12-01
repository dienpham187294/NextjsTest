import Bai23In1 from "./bai23_in1"
import Bai23In2 from "./bai23_in2"
// import Bai12 from "./bai12"
let coerdataoflession = Bai23In1[1].coerdataoflession.slice(0, 20).concat(Bai23In2[1].coerdataoflession.slice(0, 20))
let hoctap = [
    { "EN": "What would you like today?", "VN": "Hôm nay bạn muốn gì?", "IPA": "wɒt wʊd juː laɪk təˈdeɪ?" },
    { "EN": "What do you want to order?", "VN": "Bạn muốn gọi món gì?", "IPA": "wɒt duː juː wɒnt tuː ˈɔːdə?" },
    { "EN": "Do you want to take a drink?", "VN": "Bạn có muốn uống một ly không?", "IPA": "duː juː wɒnt tuː teɪk ə drɪŋk?" },
]
let listenOnly = [
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
    ],
    [
        "Mineral water",
        "Fresh orange juice",
        "Soft drink",
        "English tea",
        "Irish Cream Coffee"
    ]
]
let writeOnly = [

]
const Bai23

    = [
        {
            "nameoflession": "Practice 2.3",
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
