import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)));
// let ARRp = (JSON.parse(JSON.stringify(ArrPeple)).concat(JSON.parse(JSON.stringify(ArrPeple))));

// Gia định những người tới để làm một cuộc khảo sát về sở thích cá nhân

// Một hàm return về hanhdlingNext object một hàm return về Một dãy đan xen các handlingnextObj một hàm thêm Submit)  

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

let Arr1 = [
    {
        "input": "Classes",
        "qs": ["How did you learn English?"],
        "output": ["I took classes for three years."]
    },
    {
        "input": "An intensive course.",
        "qs": ["How did you learn English?"],
        "output": ["I did an intensive course."]
    },
    {
        "input": "By myself",
        "qs": ["How did you learn English?"],
        "output": ["I’ve been studying by myself."]
    },
    {
        "input": "Movies and songs.",
        "qs": ["How did you learn English?"],
        "output": ["I picked it up from movies and songs."]
    },
    {
        "input": "Friend.",
        "qs": ["How did you learn English?"],
        "output": ["My friend taught me."]
    },
]
Arr1.forEach(e => {
    DataTable.push([e.input])
})


ARRp.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(["Hi, Can you speak English?"], ["Yes, of course.", "Yes I am"]))
    let i1 = GETRANDOMi(Arr1)
    ArrInFN.Submit.push(Arr1[i1].input)
    let Arrin3 = ["0"]
    let Arrin4 = [FnObjHanldingNext(Arr1[i1].qs, Arr1[i1].output)]
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4)))
})

const HowdidyoulearnEnglish
    = [
        {
            "nameoflession": "Lesson 33: How did you learn English?",
            "srcYoutube": "",
            "hoctap": [
            ],
            "status": "done",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default HowdidyoulearnEnglish


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

function GetDataArrToClick(Arr) {
    let ArrRes = [];
    Arr.forEach(e => {
        ArrRes.push(e.input)
    })
    return ArrRes
}

function FnObjHanldingNext(ArrIn1, ArrIn2, objIn) {
    let objOut = {};
    if (objIn !== undefined) {
        objOut = objIn
    }
    let objRes =
    {
        "manspeak": ArrIn1,
        "robotspeak": ArrIn2,
        "icon": "",
        "function": objOut,
        "handling_next": []
    }
    return objRes
}


function Fnperson(Arr, DataTable, Begin, Middle) {
    let person = {
        "total": {
            "image": Arr.img,
            "status": true,
            "gender": Arr.gender,
            "submit": [
                Arr.Submit
            ],
            "submitsyntax": [
                [
                    "Yêu cầu 1: ",
                    "Yêu cầu 2: ",
                    "Yêu cầu 3: ",
                    "Yêu cầu 4: ",

                ]
            ],
            "Tabletool": [
                {
                    "indexToSubmit": 0,
                    "dataoftable": DataTable
                }
            ],
            "robotspeakfirst": [
                "Hi",
                "Hello"
            ]
        },
        "begin": {
            "handling_next": Begin
        },
        "middle": {
            "handling_next": Middle
        },
        "end": null
    }
    return person
}

function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}