import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)));
let ArrInput = ["Christian.", "Buddhism."]
let ArrSubmit = [
    [
        "Christian."
    ],
    [
        "Buddhism.",
    ]
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
const Whatrelegion
    = [
        {
            "nameoflession": "Lesson 10: What religion are you?",
            "huongdan": "Tìm thông tin tôn giáo của người đối thoại?",
            "srcYoutube": "",
            "hoctap": [
                { "EN": "What company do you work for?", "VN": "Bạn làm việc cho công ty nào?", "IPA": "wɒt ˈkʌmpəni duː juː wɜːk fɔː?", "IPAVN": "" },
                { "EN": "I work for an investment bank.", "VN": "Tôi làm việc cho một ngân hàng đầu tư.", "IPA": "aɪ wɜːk fɔːr ən ɪnˈvɛstmənt bæŋk.", "IPAVN": "" },
                { "EN": "an investment bank", "VN": "một ngân hàng đầu tư", "IPA": "ən ɪnˈvɛstmənt bæŋk", "IPAVN": "" },
                { "EN": "a small business", "VN": "một doanh nghiệp nhỏ", "IPA": "ə smɔːl ˈbɪznɪs", "IPAVN": "" },
                { "EN": "an international company", "VN": "một công ty quốc tế", "IPA": "ən ˌɪntə(ː)ˈnæʃənl ˈkʌmpəni", "IPAVN": "" },

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
                                    "Tôn giáo: "
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
                                        "Hi, What religion are you?"
                                    ],
                                    "robotspeak": [
                                        "I am a ---INPUT",
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
                                        "Hi, What religion are you?"
                                    ],
                                    "robotspeak": [
                                        "I am a ---INPUT",
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
                        "end": null
                    },
                    "ArrToReplace": [
                        "---NAME",
                        "---IMAGE",
                        "---GENDER",
                        "---INPUT"
                    ],
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

export default Whatrelegion



