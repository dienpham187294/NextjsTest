

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

let arrWHERE = ["California", "Texas", "Seattle"]

function GetArr(input) {
    let arrRes = input
    arrRes.forEach(e => {
        e[3] = PickRandom(arrWHERE)
    });

    return arrRes
}


function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const DL1 = [
    {
        "nameoflession": "Lesson 2: Where are you from?",
        "huongdan": "T??m th??ng tin ng?????i ?????i tho???i ?????n t??? ????u?",
        "srcYoutube": "https://www.youtube.com/embed/bDvJSWnuvtU",
        "hoctap": [
            { "EN": "Hi, how are you?", "VN": "Ch??o! B???n kh???e kh??ng?", "IPA": "ha??,??ha??????????ju???", "IPAVN": "" },
            { "EN": "I am fine. Thank you.", "VN": "T??i ????n. C???m ??n b???n.", "IPA": "a??????m??fa??n.????????k??ju??.", "IPAVN": "" },
            { "EN": "I am from Vietnam.", "VN": "T??i ?????n t??? Vi???t Nam.", "IPA": "a??????m??fr??m????vj??t??n????m.", "IPAVN": "ai em ph???-rom vietnam" },
            { "EN": "Where are you from?", "VN": "B???n ?????n t??? ????u?", "IPA": "we??r????????ju????fr??m?", "IPAVN": "que a du ph???-rom" },
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
                                "---WHERE"
                            ]
                        ],
                        "submitsyntax": [
                            [
                                "WHERE:"
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
                                    "I'm good. How are you?",
                                    "Not too bad. How are you?"
                                ],
                                "icon": "",
                                "function": {
                                    "end_successfull": false,
                                    "end_unsuccessfull": false
                                },
                                "handling_next": [
                                    {
                                        "manspeak": [
                                            "I am fine. Thank you.",
                                        ],
                                        "robotspeak": ["Where are you from?"],
                                        "icon": "",
                                        "function": {
                                            "end_successfull": false,
                                            "end_unsuccessfull": false
                                        },
                                        "handling_next": []
                                    }
                                ]
                            }
                        ]
                    },
                    "middle": {
                        "handling_next": [
                            {
                                "manspeak": [
                                    "I am from Vietnam."
                                ],
                                "robotspeak": [
                                    "I am from ---WHERE."
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
                    "---WHERE"
                ],
                "DataInput": GetArr(ArrPeple),
                "Tabletool": [
                    {
                        "nameoftable": "C???a h??ng hoa qu???",
                        "nameofheader": [
                            "Hoa qu???"
                        ],
                        "indexToSubmit": 0,
                        "dataoftable": [
                            [
                                "California",
                            ],
                            [
                                "Texas",
                            ],
                            [
                                "Seattle",
                            ],
                        ]
                    }
                ]
            }
        ]
    }
]

export default DL1