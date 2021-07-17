export default [
    {
        "nameoflession": "FRUIT are you from?",
        "description": "100 đoạn hội thoại cơ bản.",
        "level": "Dễ",
        "followsubject": "Khóa học tháng 6/2021"
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
                                "---FRUIT"
                            ]
                        ],
                        "submitsyntax": "Location",
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
                                        "robotspeak": ["I want to buy something."],
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
                                    "What do you want?"
                                ],
                                "robotspeak": [
                                    "I want to buy ---FRUIT."
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
                                    "Here you are!"
                                ],
                                "robotspeak": [
                                    "Thank you."
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
                    "---FRUIT"
                ],
                "DataInput": [
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
                ],
                "Tabletool": [
                    {
                        "nameoftable": "Cửa hàng hoa quả",
                        "nameofheader": [
                            "Hoa quả"
                        ],
                        "dataoftable": [
                            [
                                "Cam",
                                "orange",
                                "https://i.postimg.cc/HLmGHW13/orange.jpg"
                            ],
                            [
                                "Táo",
                                "apple",
                                "https://i.postimg.cc/ncLhbkGM/apple.jpg"
                            ],
                            [
                                "Chuối",
                                "bananas",
                                "https://i.postimg.cc/G2rbMJpL/bananas.jpg"
                            ],
                        ]
                    }
                ]
            }
        ]
    }
]