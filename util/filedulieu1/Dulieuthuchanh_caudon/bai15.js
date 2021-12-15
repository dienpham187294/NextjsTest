import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"

let DataTable = []
let coerdataoflession = []

let ArrIn1 = ["Tokyo, Japan", "Delhi, India", "Shanghai, China", "Sao Paulo, Brazil", "Mexico City, Mexico", "Dhaka, Bangladesh", "Cairo, Egypt", "Beijing, China", "Mumbai, India", "Osaka, Japan", "Karachi, Pakistan", "Chongqing, China", "Istanbul, Turkey", "Buenos Aires, Argentina", "Kolkata, India", "Kinshasa, DR Congo", "Lagos, Nigeria", "Manila, Philippines", "Tianjin, China", "Guangzhou, China", "Rio De Janeiro, Brazil", "Lahore, Pakistan", "Bangalore, India", "Moscow, Russia", "Shenzhen, China", "Chennai, India", "Bogota, Colombia", "Paris, France", "Jakarta, Indonesia", "Lima, Peru", "Bangkok, Thailand", "Hyderabad, India", "Seoul, South Korea", "Nagoya, Japan", "London, United Kingdom", "Chengdu, China", "Tehran, Iran", "Nanjing, China", "Ho Chi Minh City, Vietnam", "Luanda, Angola", "Wuhan, China", "Xi An Shaanxi, China", "Ahmedabad, India", "New York City, United States", "Kuala Lumpur, Malaysia", "Hangzhou, China", "Hong Kong, Hong Kong", "Surat, India", "Dongguan, China", "Suzhou, China", "Foshan, China", "Riyadh, Saudi Arabia", "Shenyang, China", "Baghdad, Iraq", "Dar Es Salaam, Tanzania", "Santiago, Chile", "Pune, India", "Madrid, Spain", "Haerbin, China", "Toronto, Canada", "Belo Horizonte, Brazil", "Singapore, Singapore", "Khartoum, Sudan", "Johannesburg, South Africa", "Dalian, China", "Qingdao, China", "Barcelona, Spain", "Fukuoka, Japan", "Ji Nan Shandong, China", "Zhengzhou, China", "Saint Petersburg, Russia", "Yangon, Myanmar", "Alexandria, Egypt", "Abidjan, Ivory Coast", "Guadalajara, Mexico", "Ankara, Turkey", "Chittagong, Bangladesh", "Melbourne, Australia", "Addis Ababa, Ethiopia", "Sydney, Australia", "Monterrey, Mexico", "Nairobi, Kenya", "Hanoi, Vietnam", "Brasilia, Brazil", "Cape Town, South Africa", "Jiddah, Saudi Arabia", "Changsha, China", "Kunming, China", "Urumqi, China", "Changchun, China", "Xinbei, Taiwan", "Shantou, China", "Hefei, China", "Kabul, Afghanistan", "Rome, Italy", "Ningbo, China", "Tel Aviv, Israel", "Montreal, Canada", "Shijiazhuang, China", "Recife, Brazil", "Yaounde, Cameroon", "Porto Alegre, Brazil", "Fortaleza, Brazil", "Kano, Nigeria", "Medellin, Colombia", "Jaipur, India", "Los Angeles, United States", "Taiyuan Shanxi, China", "Nanning, China", "Ekurhuleni, South Africa"]
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
    ArrBegin.push(FnObjHanldingNext(["Where do you live?"], ["I live in " + t1, t1]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["Where do you live"], ["I live in " + t1, t1]))
    ArrInFN.Submit.push(t1)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "WhereLive"))
})

let hoctap = [
]
let listenOnly = [
    ArrIn1
]
let writeOnly = [
]
const Bai15

    = [
        {
            "nameoflession": "A.5",
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

export default Bai15


