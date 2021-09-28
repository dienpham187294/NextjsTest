import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)));
let ArrInput = [
    {
        "input": "red",
        "robotspeak": [
            "My favorite color is red."
        ],
        "manspeak1": ["What’s your favorite color?"],
    },
    {
        "input": "green",
        "robotspeak": [
            "My favorite color is green."
        ],
        "manspeak1": ["What’s your favorite color?"],
    },
    {
        "input": "yellow",
        "robotspeak": [
            "My favorite color is yellow."
        ],
        "manspeak1": ["What’s your favorite color?"],
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


const Whatsyourfavoritecolor
    = [
        {
            "nameoflession": "Bài 22: Màu sắc yêu thích của bạn là gì?  -- What’s your favorite color?",
            "huongdan": "Tìm thông tin màu sắc yêu thích của người đối thoại?",
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

export default Whatsyourfavoritecolor



