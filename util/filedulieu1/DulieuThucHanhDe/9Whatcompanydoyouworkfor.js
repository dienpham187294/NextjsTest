import ArrPeple from "./ArrOfpeple"
let ArrInput = ["an investment bank", "a small business", "an international company"]
let ArrSubmit = [
    [
        "an investment bank"
    ],
    [
        "a small business",
    ],
    [
        "an international company"
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
const Whatcompanydoyouworkfor
    = [
        {
            "nameoflession": "Bài 9: Bạn làm việc cho công ty nào?  -- What company do you work for?",
            "huongdan": "Tìm thông tin công ty làm việc của người đối thoại?",
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
                                    "Công ty: "
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
                                        "Hi, What company do you work for?"
                                    ],
                                    "robotspeak": [
                                        "I work for ---INPUT",
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
                                        "Hi, What company do you work for?"
                                    ],
                                    "robotspeak": [
                                        "I work for ---INPUT",
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

export default Whatcompanydoyouworkfor



