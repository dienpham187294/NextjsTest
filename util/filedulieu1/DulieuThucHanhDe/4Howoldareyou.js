

let ArrPeple = [
    [
        "Richard",
        "https://i.postimg.cc/SRWCVcf4/man2.png",
        "male",
        "orange"
    ],
    [
        "Barbara",
        "https://i.postimg.cc/MGvBNCmd/women1.jpg",
        "female",
        "apple"
    ],
    [
        "Michael",
        "https://i.postimg.cc/J7JN1WVF/man4.png",
        "male",
        "orange"
    ],
    [
        "Betty",
        "https://i.postimg.cc/tCNFxtgt/women3.jpg",
        "female",
        "bananas"
    ],
    [
        "Kimberly",
        "https://i.postimg.cc/wMKDhwJF/women2.png",
        "female",
        "bananas"
    ],
    [
        "Lisa",
        "https://i.postimg.cc/wMKDhwJF/women2.png",
        "female",
        "apple"
    ],
    [
        "Steven",
        "https://i.postimg.cc/mgdMdLCP/man5.png",
        "male",
        "orange"
    ],
    [
        "Robert",
        "https://i.postimg.cc/SRWCVcf4/man2.png",
        "male",
        "orange"
    ],
    [
        "Susan",
        "https://i.postimg.cc/wMKDhwJF/women2.png",
        "female",
        "bananas"
    ],
    [
        "Dorothy",
        "https://i.postimg.cc/MGvBNCmd/women1.jpg",
        "female",
        "bananas"
    ],
    [
        "William",
        "https://i.postimg.cc/mgdMdLCP/man5.png",
        "male",
        "orange"
    ],
    [
        "Donna",
        "https://i.postimg.cc/02spjH9y/women4.jpg",
        "female",
        "orange"
    ],
    [
        "Mary",
        "https://i.postimg.cc/MGvBNCmd/women1.jpg",
        "female",
        "apple"
    ],
    [
        "Michelle",
        "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
        "female",
        "orange"
    ],
    [
        "David",
        "https://i.postimg.cc/d0pCY5Wv/man1.png",
        "male",
        "apple"
    ],
    [
        "Anthony",
        "https://i.postimg.cc/SRWCVcf4/man2.png",
        "male",
        "orange"
    ],
    [
        "Charles",
        "https://i.postimg.cc/mgdMdLCP/man5.png",
        "male",
        "apple"
    ],
    [
        "Ashley",
        "https://i.postimg.cc/MGvBNCmd/women1.jpg",
        "female",
        "orange"
    ],
    [
        "Linda",
        "https://i.postimg.cc/02spjH9y/women4.jpg",
        "female",
        "apple"
    ],
    [
        "Patricia",
        "https://i.postimg.cc/wMKDhwJF/women2.png",
        "female",
        "orange"
    ],
    [
        "Christopher",
        "https://i.postimg.cc/d0pCY5Wv/man1.png",
        "male",
        "apple"
    ],
    [
        "Kenneth",
        "https://i.postimg.cc/J7JN1WVF/man4.png",
        "male",
        "apple"
    ],
    [
        "Margaret",
        "https://i.postimg.cc/02spjH9y/women4.jpg",
        "female",
        "orange"
    ],
    [
        "Karen",
        "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
        "female",
        "apple"
    ],
    [
        "Mark",
        "https://i.postimg.cc/hjmdPVwm/man3.jpg",
        "male",
        "orange"
    ],
    [
        "Thomas",
        "https://i.postimg.cc/J7JN1WVF/man4.png",
        "male",
        "apple"
    ],
    [
        "Matthew",
        "https://i.postimg.cc/d0pCY5Wv/man1.png",
        "male",
        "bananas"
    ],
    [
        "Sandra",
        "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
        "female",
        "apple"
    ],
    [
        "Sarah",
        "https://i.postimg.cc/02spjH9y/women4.jpg",
        "female",
        "orange"
    ],
    [
        "Jessica",
        "https://i.postimg.cc/tCNFxtgt/women3.jpg",
        "female",
        "apple"
    ],
    [
        "Daniel",
        "https://i.postimg.cc/SRWCVcf4/man2.png",
        "male",
        "orange"
    ],
    [
        "Donald",
        "https://i.postimg.cc/J7JN1WVF/man4.png",
        "male",
        "apple"
    ],
    [
        "Joseph",
        "https://i.postimg.cc/hjmdPVwm/man3.jpg",
        "male",
        "orange"
    ],
    [
        "Emily",
        "https://i.postimg.cc/tCNFxtgt/women3.jpg",
        "female",
        "orange"
    ],
    [
        "James",
        "https://i.postimg.cc/d0pCY5Wv/man1.png",
        "male",
        "orange"
    ],
    [
        "Nancy",
        "https://i.postimg.cc/MGvBNCmd/women1.jpg",
        "female",
        "bananas"
    ],
    [
        "Paul",
        "https://i.postimg.cc/d0pCY5Wv/man1.png",
        "male",
        "orange"
    ],
    [
        "Jennifer",
        "https://i.postimg.cc/tCNFxtgt/women3.jpg",
        "female",
        "bananas"
    ],
    [
        "Andrew",
        "https://i.postimg.cc/SRWCVcf4/man2.png",
        "male",
        "bananas"
    ],
    [
        "Elizabeth",
        "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
        "female",
        "orange"
    ],
    [
        "John",
        "https://i.postimg.cc/hjmdPVwm/man3.jpg",
        "male",
        "orange"
    ],
    [
        "Joshua",
        "https://i.postimg.cc/hjmdPVwm/man3.jpg",
        "male",
        "bananas"
    ]
]

let ArrInput = ["26", "30", "32"]

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
const Howoldareyou = [
    {
        "nameoflession": "Bài 4: Bạn bao nhiêu tuổi? -- How old are you?",
        "huongdan": "Tìm thông tin người đối thoại bao nhiêu tuổi?",
        "srcYoutube": "",
        "hoctap": [
            { "EN": "How old are you?", "VN": "Bạn bao nhiêu tuổi?", "IPA": "haʊ əʊld ɑː juː?", "IPAVN": "" },
            { "EN": "I’m 26 years old.", "VN": "Năm nay tôi 26 tuổi.", "IPA": "aɪm 26 jɪəz əʊld.", "IPAVN": "" },
            { "EN": "I’m 28.", "VN": "Tôi 28 tuổi.", "IPA": "aɪm 28.", "IPAVN": "" },
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
                                "Số tuổi:"
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
                                    "Hi how are you?"
                                ],
                                "robotspeak": [
                                    "I'm good.",
                                    "Not too bad."
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
                                    "How old are you?"
                                ],
                                "robotspeak": [
                                    "I’m ---INPUT years old.",
                                    "I’m ---INPUT."
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
                                    "Nice to meet you!"
                                ],
                                "robotspeak": [
                                    "Nice to meet you too."
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
                        "dataoftable": [
                            [
                                "26",
                            ],
                            [
                                "30",
                            ],
                            [
                                "32",
                            ],
                        ]
                    }
                ]
            }
        ]
    }
]

export default Howoldareyou