import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)

let arr_In1 = [
    { "input": "Can we smile more to live longer?", "qs": "Yes, that’s absolutely true." },
    { "input": "Does sleeping in help me recover?", "qs": "No, false. Waking up at the same time is better." },
    { "input": "Should I eat more fresh fish, like sushi?", "qs": "No. Sushi is great. But we shouldn’t eat too much." },
    { "input": "Sitting too close to the TV is not good, isn’t it?", "qs": "No, it’s not how close you sit. It’s how long you watch TV." },
    { "input": "How about picking up the food we drop. Is it OK?", "qs": "No, that’s a myth! You shouldn’t eat it, ever!" },
    { "input": "Do vegetarians get fewer vitamins?", "qs": "No, that’s false. You don’t need meat to get your vitamins." },
    { "input": "What is a calorie?", "qs": "A calorie is an energy that helps us do our everyday activities." },
    { "input": "What happens when we have too many calories?", "qs": "If we eat too many calories, we can get fat." },
    { "input": "What is a healthy number of calories per day?", "qs": "To stay healthy you need between 1,600 and 2,500 calories." },
    { "input": "Which activity uses a lot of calories?", "qs": "Sports like riding a bike and running using a lot of calories." },
]
let tArr = []
arr_In1.forEach(e => {
    tArr.push(e.qs);
    tArr.push("---")
})
DataTable.push(tArr)
// let arr_In2 = [
//     { "input": "I play computer games and watch TV a lot. My eyes feel really dry. What should I do?", "qs": "You should try to rest your eyes. Also, try the 20-20-20 rule: every 20 minutes look away about 20 feet for 20 seconds" },
//     { "input": "I love burgers and chips, but I’m putting on weight. What can I do?", "qs": "You can start to count your calories. Then think about how much exercise you do. Eat less junk food, and exercise more. You should be fine." },
//     { "input": "By the weekend I’m so tired. Do you think I should sleep in, or wake up at the usual time on Saturday and Sunday?", "qs": "I think you should set your alarm for 8 a.m., or 9 a.m. It’s good to maintain your usual sleep pattern. Try to exercise, or do something healthy once you are awake." },
// ]
// DataTable.push(["Have a sunburn.", "Have flu.", "Have a temperature.", "Have a stomachache.", "Have a sore throat."])
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["hi. I'm " + e[0], "hello. I'm " + e[0]]

    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["hi " + e[0] + ", how can I help you?"], ["I have a few questions can you answer them for me?"]))

    //middle

    let Arrin3 = []
    let Arrin4 = []
    let i1 = GETRANDOMi(arr_In1)
    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["Yes of course. What do you want to know?", "What is your question?"], [arr_In1[i1].input]))
    Arrin3.push("0-0")
    Arrin4.push(FnObjHanldingNext([arr_In1[i1].qs], ["Thank you."], { end_successfull: true }))

    let End = []
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "https://i.postimg.cc/qqdJ9jR5/call-Butoon.png"))
})

let hoctap = [
    { "EN": "Yes, that’s absolutely true.", "VN": "Vâng, điều đó hoàn toàn đúng.", "IPA": "jɛs, ðæts ˈæbsəluːtli truː." },
    { "EN": "No, false. Waking up at the same time is better.", "VN": "Không, sai. Thức dậy cùng một lúc sẽ tốt hơn.", "IPA": "nəʊ, fɔːls. ˈweɪkɪŋ ʌp æt ðə seɪm taɪm ɪz ˈbɛtə." },
    { "EN": "No. Sushi is great. But we shouldn’t eat too much.", "VN": "Không. Sushi rất tuyệt. Nhưng chúng ta không nên ăn quá nhiều.", "IPA": "nəʊ. ˈsʊʃi ɪz greɪt. bʌt wiː ʃʊdnt iːt tuː mʌʧ." },
    { "EN": "No, it’s not how close you sit. It’s how long you watch TV.", "VN": "Không, không phải là bạn ngồi gần như thế nào. Đó là thời lượng bạn xem TV.", "IPA": "nəʊ, ɪts nɒt haʊ kləʊs juː sɪt. ɪts haʊ lɒŋ juː wɒʧ ˌtiːˈviː." },
    { "EN": "No, that’s a myth! You shouldn’t eat it, ever!", "VN": "Không, đó là một huyền thoại! Bạn không nên ăn nó, bao giờ!", "IPA": "nəʊ, ðæts ə mɪθ! juː ʃʊdnt iːt ɪt, ˈɛvə!" },
    { "EN": "No, that’s false. You don’t need meat to get your vitamins.", "VN": "Không, điều đó là sai. Bạn không cần thịt để có được vitamin.", "IPA": "nəʊ, ðæts fɔːls. juː dəʊnt niːd miːt tuː gɛt jɔː ˈvɪtəmɪnz." },
    { "EN": "A calorie is an energy that helps us do our everyday activities.", "VN": "Calo là năng lượng giúp chúng ta thực hiện các hoạt động hàng ngày.", "IPA": "ə ˈkæləri ɪz ən ˈɛnəʤi ðæt hɛlps ʌs duː ˈaʊər ˈɛvrɪdeɪ ækˈtɪvɪtiz." },
    { "EN": "If we eat too many calories, we can get fat.", "VN": "Nếu chúng ta ăn quá nhiều calo, chúng ta có thể bị béo.", "IPA": "ɪf wiː iːt tuː ˈmɛni ˈkæləriz, wiː kæn gɛt fæt." },
    { "EN": "To stay healthy you need between 1,600 and 2,500 calories.", "VN": "Để giữ sức khỏe, bạn cần từ 1.600 đến 2.500 calo.", "IPA": "tuː steɪ ˈhɛlθi juː niːd bɪˈtwiːn 1,600 ænd 2,500 ˈkæləriz." },
    { "EN": "Sports like riding a bike and running using a lot of calories.", "VN": "Các môn thể thao như đạp xe và chạy sử dụng nhiều calo.", "IPA": "spɔːts laɪk ˈraɪdɪŋ ə baɪk ænd ˈrʌnɪŋ ˈjuːzɪŋ ə lɒt ɒv ˈkæləriz." },
]
let listenOnly = [
    [
        "Can we smile more to live longer?",
        "Does sleeping in help me recover?",
        "Should I eat more fresh fish, like sushi?",
        "Sitting too close to the TV is not good, isn’t it?",
        "How about picking up the food we drop. Is it OK?",
        "Do vegetarians get fewer vitamins?",
        "What is a calorie?",
        "What happens when we have too many calories?",
        "What is a healthy number of calories per day?",
        "Which activity uses a lot of calories?",
    ]
]
let writeOnly = [

]
const Bai22

    = [
        {
            "nameoflession": "Thực hành bài 2.2",
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