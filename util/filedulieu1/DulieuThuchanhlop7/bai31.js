import ArrPeple from "./ArrOfpeple"

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

DataTable.push(ArrName)

// let arr_In1 = [
//     { "input": "Can we smile more to live longer?", "qs": "Yes, that’s absolutely true." },
//     { "input": "Does sleeping in help me recover?", "qs": "No, false. Waking up at the same time is better." },
//     { "input": "Should I eat more fresh fish, like sushi?", "qs": "No. Sushi is great. But we shouldn’t eat too much." },
//     { "input": "Sitting too close to the TV is not good, isn’t it?", "qs": "No, it’s not how close you sit. It’s how long you watch TV." },
//     { "input": "How about picking up the food we drop. Is it OK?", "qs": "No, that’s a myth! You shouldn’t eat it, ever!" },
//     { "input": "Do vegetarians get fewer vitamins?", "qs": "No, that’s false. You don’t need meat to get your vitamins." },
//     { "input": "What is a calorie?", "qs": "A calorie is an energy that helps us do our everyday activities." },
//     { "input": "What happens when we have too many calories?", "qs": "If we eat too many calories, we can get fat." },
//     { "input": "What is a healthy number of calories per day?", "qs": "To stay healthy you need between 1,600 and 2,500 calories." },
//     { "input": "Which activity uses a lot of calories?", "qs": "Sports like riding a bike and running using a lot of calories." },
// ]



// DataTable.push(["Have a sunburn.", "Have flu.", "Have a temperature.", "Have a stomachache.", "Have a sore throat."])
ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]

    let SpeakFirst = ["Hi", "Hello"]



    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Hi, What’s your name?"], ["My name is " + e[0], "I am " + e[0], "I'm " + e[0]]))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(["What’s your name?", "Can I know your name?"], ["My name is " + e[0], "I am " + e[0], "I'm " + e[0]]))
    // let i2 = GETRANDOMi(arr_In2)
    // Arrin3.push("0-0")
    // Arrin4.push(FnObjHanldingNext([arr_In1[i1].qs], [arr_In2[i2].input]))

    // Arrin3.push("0-0-0")
    // Arrin4.push(FnObjHanldingNext([arr_In2[i2].qs], ["Thank you."], { end_successfull: true }))

    // let i4 = GETRANDOMi(Arr3Input)
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))

    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, "name"))
})

let hoctap = [
]
let listenOnly = [

]
let writeOnly = [

]
const Bai31

    = [
        {
            "nameoflession": "Thực hành bài 3.1",
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

export default Bai31


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