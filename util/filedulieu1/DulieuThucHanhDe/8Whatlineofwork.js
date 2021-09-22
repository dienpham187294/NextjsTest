import ArrPeple from "./ArrOfpeple"
let ArrInput = ["Sales", "Marketing", "Human resources"]
let ArrSubmit = [
    [
        "Sales"
    ],
    [
        "Marketing",
    ],
    [
        "Human resources"
    ],
]
function GetArr(input) {
    let arrRes = input
    arrRes.forEach(e => {
        e[3] = PickRandom(ArrInput)
    });

    return arrRes
}
function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const Whatlineofwork
    = [
        {
            "nameoflession": "Bài 8: Bạn làm trong lĩnh vực nào? -- What line of work are you in?",
            "huongdan": "Tìm thông tin lĩnh vực làm việc của người đối thoại?",
            "srcYoutube": "",
            "hoctap": [
                { "EN": "What line of work are you in?", "VN": "Bạn làm trong lĩnh vực gì?", "IPA": "wɒt laɪn ɒv wɜːk ɑː juː ɪn?", "IPAVN": "" },
                { "EN": "I work in sales.", "VN": "Tôi làm việc trong lĩnh vực bán hàng.", "IPA": "aɪ wɜːk ɪn seɪlz.", "IPAVN": "" },
                { "EN": "Sales", "VN": "Bán hàng", "IPA": "seɪlz", "IPAVN": "" },
                { "EN": "Marketing", "VN": "Tiếp thị", "IPA": "ˈmɑːkɪtɪŋ", "IPAVN": "" },
                { "EN": "Human resources", "VN": "Nguồn nhân lực", "IPA": "ˈhjuːmən rɪˈsɔːsɪz", "IPAVN": "" },
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
                                    "Lĩnh vực: "
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
                                        "What line of work are you in?"
                                    ],
                                    "robotspeak": [
                                        "I work in ---INPUT",
                                    ],
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
                                        "What line of work are you in?"
                                    ],
                                    "robotspeak": [
                                        "I work in ---INPUT",
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "You're done",
                                    ],
                                    "robotspeak": [
                                        "Glad to see you."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": true,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                }
                            ]
                        }
                    },
                    "ArrToReplace": [
                        "---NAME",
                        "---IMAGE",
                        "---GENDER",
                        "---INPUT"
                    ],
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

export default Whatlineofwork



