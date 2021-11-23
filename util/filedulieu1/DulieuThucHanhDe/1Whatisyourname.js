

let ArrPeple = [
    [
        "Richard",
        "https://i.postimg.cc/SRWCVcf4/man2.png",
        "female",
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
        "female",
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
        "female",
        "orange"
    ],
    [
        "Robert",
        "https://i.postimg.cc/SRWCVcf4/man2.png",
        "female",
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
        "female",
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
        "female",
        "apple"
    ],
    [
        "Anthony",
        "https://i.postimg.cc/SRWCVcf4/man2.png",
        "female",
        "orange"
    ],
    [
        "Charles",
        "https://i.postimg.cc/mgdMdLCP/man5.png",
        "female",
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
        "female",
        "apple"
    ],
    [
        "Kenneth",
        "https://i.postimg.cc/J7JN1WVF/man4.png",
        "female",
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
        "female",
        "orange"
    ],
    [
        "Thomas",
        "https://i.postimg.cc/J7JN1WVF/man4.png",
        "female",
        "apple"
    ],
    [
        "Matthew",
        "https://i.postimg.cc/d0pCY5Wv/man1.png",
        "female",
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
        "female",
        "orange"
    ],
    [
        "Donald",
        "https://i.postimg.cc/J7JN1WVF/man4.png",
        "female",
        "apple"
    ],
    [
        "Joseph",
        "https://i.postimg.cc/hjmdPVwm/man3.jpg",
        "female",
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
        "female",
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
        "female",
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
        "female",
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
        "female",
        "orange"
    ],
    [
        "Joshua",
        "https://i.postimg.cc/hjmdPVwm/man3.jpg",
        "female",
        "bananas"
    ]
]

let arrWHERE = ["Susan", "Jennifer", "Elizabeth"]

function GetArr(input) {
    let arrRes = input
    arrRes.forEach(e => {
        e[0] = PickRandom(arrWHERE)
    });
    return arrRes
}


function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const Whatisyourname = [
    {
        "nameoflession": "Lesson 1: What is your name?",
        "huongdan": "Tìm thông tin người đối thoại tên là gì?",
        "srcYoutube": "https://www.youtube.com/embed/uIlfrvvQiME",
        "hoctap": [
            { "EN": "What is your name?", "VN": "Tên của bạn là gì?", "IPA": "wɒt ɪz jɔː neɪm?", "IPAVN": "" },
            { "EN": "My name is Sophia.", "VN": "Tôi tên là sophia.", "IPA": "maɪ neɪm ɪz səʊˈfiːə.", "IPAVN": "" },
            { "EN": "I’m Liam.", "VN": "Tôi là Liam.", "IPA": "aɪm ˈliːəm.", "IPAVN": "" },
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
                                "---NAME"
                            ]
                        ],
                        "submitsyntax": [
                            [
                                "Tên là:"
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
                                    "What is your name?"
                                ],
                                "robotspeak": [
                                    "My name is ---NAME.",
                                    "I'm ---NAME."
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
                    // "---NAME"
                ],
                "DataInput": GetArr(ArrPeple),
                "Tabletool": [
                    {
                        "indexToSubmit": 0,
                        "dataoftable": [
                            [
                                "Susan",
                            ],
                            [
                                "Jennifer",
                            ],
                            [
                                "Elizabeth",
                            ],
                        ]
                    }
                ]
            }
        ]
    }
]

export default Whatisyourname