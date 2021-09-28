import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)));
let ArrInput = [
    {
        "input": "beer",
        "robotspeak": [
            "My favorite drink is beer."
        ],
        "manspeak1": ["What’s your favorite drink?"],
    },
    {
        "input": "coke",
        "robotspeak": [
            "My favorite drink is coke."
        ],
        "manspeak1": ["What’s your favorite drink?"],
    },
    {
        "input": "orange juice",
        "robotspeak": [
            "My favorite drink is orange juice."
        ],
        "manspeak1": ["What’s your favorite drink?"],
    }
]



let ArrSubmit = []
for (let i = 0; i < ArrInput.length; i++) {
    ArrSubmit.push([
        ArrInput[i].input
    ])
}
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


const Whatsyourfavoritedrink
    = [
        {
            "nameoflession": "Bài 23: Thức uống yêu thích của bạn là gì?  -- What’s your favorite drink?",
            "huongdan": "Tìm thông tin thức uống yêu thích của người đối thoại?",
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
                                    "Sở thích: "
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

export default Whatsyourfavoritedrink



