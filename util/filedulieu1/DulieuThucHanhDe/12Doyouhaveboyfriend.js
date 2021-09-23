import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)));
let ArrInput = [
    {
        "input": "Have a boy/girlfriend",
        "robotspeak": ["I have a boyfriend"],
        "robotspeak1": ["I have a girlfriend"],
        "manspeak1": ["Do you have a boyfriend?"],
        "manspeak2": ["Do you have a girlfriend?"]
    },
    {
        "input": "Alone",
        "robotspeak1": ["I’m not dating anyone"],
        "manspeak1": ["Do you have a boyfriend?"],
        "manspeak2": ["Do you have a girlfriend?"]
    },
]



let ArrSubmit = [
    [
        ArrInput[0].input
    ],
    [
        ArrInput[1].input
    ]
]

let ArrToReplace =
    [
        "---NAME",
        "---IMAGE",
        "---GENDER",
        "---INPUT",
        "---1Manspeak",
        "---1RobotSpeak"
    ]


function GetArr(input) {
    let arrRes = input
    arrRes.forEach(e => {
        let i = GETRANDOMi(ArrInput)
        e[3] = ArrInput[i].input
        if (e[2] === "male") {
            e[4] = ToArrConverto(ArrInput[i].manspeak2)
        } else {
            e[4] = ToArrConverto(ArrInput[i].manspeak1)
        }


        if (ArrInput[i].input === "Alone") {
            e[5] = ToArrConverto(ArrInput[i].robotspeak1)
        }
        else {
            if (e[2] === "male") {
                e[5] = ToArrConverto(ArrInput[i].robotspeak1)
            } else {
                e[5] = ToArrConverto(ArrInput[i].robotspeak)
            }
        }
        // console.log(e)
    });

    return arrRes
}
// function PickRandom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

function ToArrConverto(arr) {
    return JSON.stringify(arr).split(`"`).join(`'`)
}

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}
const Doyouhaveboyfriend
    = [
        {
            "nameoflession": "Bài 12: Bạn có bạn trai/gái chưa?  -- Do you have a boyfriend/ girlfriend?Do you have a boyfriend/ girlfriend?",
            "huongdan": "Tìm thông tin tình trạng độc thân của người đối thoại?",
            "srcYoutube": "",
            "hoctap": [

            ],

            "status": "new",
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---IMAGE",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---INPUT"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "Tình trạng: "
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi",
                                "Hello"
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": "---1Manspeak",
                                    "robotspeak": "---1RobotSpeak",
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                }
                            ]
                        },
                        "middle": {
                            "handling_next": [
                                {
                                    "manspeak": "---1Manspeak",
                                    "robotspeak": "---1RobotSpeak",
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                }
                            ]
                        },
                        "end": null
                    },
                    "ArrToReplace": ArrToReplace,
                    "DataInput": GetArr(ARRp),
                    "Tabletool": [
                        {
                            "indexToSubmit": 0,
                            "dataoftable": ArrSubmit
                        }
                    ]
                }
            ]
        }
    ]

export default Doyouhaveboyfriend



