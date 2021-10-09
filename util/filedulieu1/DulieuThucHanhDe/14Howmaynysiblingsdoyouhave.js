import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)));
let ArrInput = [
    {
        "input": "2 brothers",
        "robotspeak": ["I have 2 brothers."],
        "manspeak1": ["Do you have any siblings?"],
    },
    {
        "input": "2 sisters",
        "robotspeak": ["I have 2 sisters."],
        "manspeak1": ["Do you have any siblings?"],
    },
    {
        "input": "2 brothers and 2 sisters.",
        "robotspeak": ["I have 2 brothers and 2 sisters."],
        "manspeak1": ["Do you have any siblings?"],
    },
    {
        "input": "0 brothers and 0 sisters.",
        "robotspeak": ["I don’t have any siblings."],
        "manspeak1": ["Do you have any siblings?"],
    },
]



let ArrSubmit = [
    [
        ArrInput[0].input
    ],
    [
        ArrInput[1].input
    ],
    [
        ArrInput[2].input
    ],
    [
        ArrInput[3].input
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

        e[4] = ToArrConverto(ArrInput[i].manspeak1)

        e[5] = ToArrConverto(ArrInput[i].robotspeak)

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
const Howmamysiblings
    = [
        {
            "nameoflession": "Bài 14: Bạn có bao nhiêu anh chị em ruột ?  -- How many siblings do you have?",
            "huongdan": "Tìm thông tin tình trạng có bao nhiêu anh chị em của người đối thoại?",
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
                                    "Số lượng: "
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

export default Howmamysiblings



