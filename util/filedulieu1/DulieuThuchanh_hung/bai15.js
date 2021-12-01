import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)
let ArrIn1 = ["Tokyo, Japan", "Delhi, India", "Shanghai, China", "Sao Paulo, Brazil", "Mexico City, Mexico", "Dhaka, Bangladesh", "Cairo, Egypt", "Beijing, China", "Mumbai, India", "Osaka, Japan", "Karachi, Pakistan", "Chongqing, China", "Istanbul, Turkey", "Buenos Aires, Argentina", "Kolkata, India", "Kinshasa, DR Congo", "Lagos, Nigeria", "Manila, Philippines", "Tianjin, China", "Guangzhou, China", "Rio De Janeiro, Brazil", "Lahore, Pakistan", "Bangalore, India", "Moscow, Russia", "Shenzhen, China", "Chennai, India", "Bogota, Colombia", "Paris, France", "Jakarta, Indonesia", "Lima, Peru", "Bangkok, Thailand", "Hyderabad, India", "Seoul, South Korea", "Nagoya, Japan", "London, United Kingdom", "Chengdu, China", "Tehran, Iran", "Nanjing, China", "Ho Chi Minh City, Vietnam", "Luanda, Angola", "Wuhan, China", "Xi An Shaanxi, China", "Ahmedabad, India", "New York City, United States", "Kuala Lumpur, Malaysia", "Hangzhou, China", "Hong Kong, Hong Kong", "Surat, India", "Dongguan, China", "Suzhou, China", "Foshan, China", "Riyadh, Saudi Arabia", "Shenyang, China", "Baghdad, Iraq", "Dar Es Salaam, Tanzania", "Santiago, Chile", "Pune, India", "Madrid, Spain", "Haerbin, China", "Toronto, Canada", "Belo Horizonte, Brazil", "Singapore, Singapore", "Khartoum, Sudan", "Johannesburg, South Africa", "Dalian, China", "Qingdao, China", "Barcelona, Spain", "Fukuoka, Japan", "Ji Nan Shandong, China", "Zhengzhou, China", "Saint Petersburg, Russia", "Yangon, Myanmar", "Alexandria, Egypt", "Abidjan, Ivory Coast", "Guadalajara, Mexico", "Ankara, Turkey", "Chittagong, Bangladesh", "Melbourne, Australia", "Addis Ababa, Ethiopia", "Sydney, Australia", "Monterrey, Mexico", "Nairobi, Kenya", "Hanoi, Vietnam", "Brasilia, Brazil", "Cape Town, South Africa", "Jiddah, Saudi Arabia", "Changsha, China", "Kunming, China", "Urumqi, China", "Changchun, China", "Xinbei, Taiwan", "Shantou, China", "Hefei, China", "Kabul, Afghanistan", "Rome, Italy", "Ningbo, China", "Tel Aviv, Israel", "Montreal, Canada", "Shijiazhuang, China", "Recife, Brazil", "Yaounde, Cameroon", "Porto Alegre, Brazil", "Fortaleza, Brazil", "Kano, Nigeria", "Medellin, Colombia", "Jaipur, India", "Los Angeles, United States", "Taiyuan Shanxi, China", "Nanning, China", "Ekurhuleni, South Africa"]
DataTable.push(ArrIn1)
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi", "hello"]

    let ArrBegin = []


    let i1 = GETRANDOMi(ArrIn1)
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
            "nameoflession": "Practice 1.5",
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


function FnToArrobj(ArrIn1, ArrIn2) {
    let ObjRes = []
    ArrIn1.forEach((e, i) => {
        if (e.length === 1) {
            ObjRes.push(ArrIn2[i])
        }
        else {
            let ArrTem1 = e.split("-")
            try {
                let StrTem1 = "ObjRes"
                for (let i = 0; i < ArrTem1.length - 1; i++) {
                    if (i > 0) {
                        StrTem1 += "['handling_next']"
                    }
                    StrTem1 += "[" + ArrTem1[i] + "]"
                }
                StrTem1 += "['handling_next']"
                eval(StrTem1).push(ArrIn2[i])

            } catch (error) {
                console.log(error)
            }

        }
    })
    // console.log(JSON.stringify(ObjRes))
    return ObjRes
}

// function GetDataArrToClick(Arr) {
//     let ArrRes = [];
//     Arr.forEach(e => {
//         ArrRes.push(e.input)
//     })
//     return ArrRes
// }

function FnObjHanldingNext(ArrIn1, ArrIn2, objIn, icon) {
    let objOut = {};
    if (objIn !== undefined) {
        objOut = objIn
    }
    let iconOut = ""
    if (icon !== undefined) {
        iconOut = icon
    }
    let objRes =
    {
        "manspeak": ArrIn1,
        "robotspeak": ArrIn2,
        "icon": iconOut,
        "function": objOut,
        "handling_next": []
    }
    return objRes
}


function Fnperson(Arr, DataTable, Begin, Middle, End, robotspeakfirst, icon) {
    // console.log(End)
    let endIn;
    if (End !== undefined) {
        endIn = {
            "handling_next": End
        }
    } else {
        endIn = null
    }
    let person = {
        "total": {
            "image": Arr.img,
            "status": true,
            "gender": Arr.gender,
            "icon": icon,
            "submit": [
                Arr.Submit
            ],
            "submitsyntax": [
                [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                ]
            ],
            "Tabletool": [
                {
                    "indexToSubmit": 0,
                    "dataoftable": DataTable
                }
            ],
            "robotspeakfirst": robotspeakfirst
        },
        "begin": {
            "handling_next": Begin
        },
        "middle": {
            "handling_next": Middle
        },
        "end": endIn
    }

    return person
}

// function PickRandom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}