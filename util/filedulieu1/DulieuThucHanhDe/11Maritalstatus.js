import ArrPeple1 from "./ArrOfpeple"
let ArrPeple = ArrPeple1
let ArrInput = [
    {
        "input": "married",
        "robotspeak": ["I’m married."],
        "robotspeak1": ["Yes! I’m married."],
    },
    {
        "input": "single",
        "robotspeak": ["I’m single."],
        "robotspeak1": ["No , but looking for someone nice."]
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
        "---STRINGANWERS",
        "---1STRINGANWERS"
    ]


function GetArr(input) {
    let arrRes = input
    arrRes.forEach(e => {
        let i = GETRANDOMi(ArrInput)
        e[3] = ArrInput[i].input
        e[4] = ToArrConverto(ArrInput[i].robotspeak)
        e[5] = ToArrConverto(ArrInput[i].robotspeak1)
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
const Whatmaritalstatus
    = [
        {
            "nameoflession": "Bài 11: Tình trạng hôn nhân của bạn là gì?  -- What is your marital status? Are you married?",
            "huongdan": "Tìm thông tin tình trạng hôn nhân của người đối thoại?",
            "srcYoutube": "",
            "hoctap": [

            ],
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
                                    "Tình trạng hôn nhân: "
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
                                    "manspeak": [
                                        "What is your marital status?"
                                    ],
                                    "robotspeak": "---STRINGANWERS",
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                },
                                {
                                    "manspeak": [
                                        "Are you married?"
                                    ],
                                    "robotspeak": "---1STRINGANWERS",
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
                                    "manspeak": [
                                        "What is your marital status?"
                                    ],
                                    "robotspeak": "---STRINGANWERS",
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                },
                                {
                                    "manspeak": [
                                        "Are you married?"
                                    ],
                                    "robotspeak": "---1STRINGANWERS",
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
                    "DataInput": GetArr(ArrPeple),
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

export default Whatmaritalstatus



