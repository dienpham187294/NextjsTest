

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

let ArrInput = ["Doctor", "Teacher", "Farmer"]

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
const Whatdoyoudo
    = [
        {
            "nameoflession": "Lesson 6: What do you do?/ What is your job?",
            "huongdan": "T??m th??ng tin ngh??? nghi???p ng?????i ?????i tho???i?",
            "srcYoutube": "",
            "hoctap": [
                { "EN": "What do you do?", "VN": "C??ng vi???c c???a b???n l?? g???", "IPA": "w??t??du????ju????du???", "IPAVN": "" },
                { "EN": "What???s your job?", "VN": "C??ng vi???c c???a b???n l?? g???", "IPA": "w??ts??j??????????b?", "IPAVN": "" },
                { "EN": "I???m a student.", "VN": "T??i l?? m????t h???c sinh.", "IPA": "a??m????????stju??d??nt.", "IPAVN": "" },
                { "EN": "Glad??to??see??you??here.", "VN": "Th???t m???ng khi g???p b???n ??? ????y.", "IPA": "gl??d??tu????si????ju????h????.", "IPAVN": "" },
                { "EN": "I??work??as??a Teacher.", "VN": "T??i l??m gi??o vi??n.", "IPA": "a????w????k????z????????ti??????.", "IPAVN": "" },
                { "EN": "Sorry??but??I??have??to??go??now.", "VN": "Th???t xin l???i nh??ng t??i ph???i ??i b??y gi???.", "IPA": "??s??ri??b??t??a????h??v??tu????g??????na??.", "IPAVN": "" },
                { "EN": "That's no problem. See you later!", "VN": "Kh??ng v???n ?????. H???n g???p l???i b???n.", "IPA": "????ts??n????????pr??bl??m.??si????ju??????le??t??!", "IPAVN": "" },
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
                                    "Ngh??? nghi???p: "
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi, how are you?",
                                "Hello, how are you?"
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "I'm good. Glad to see you here.",
                                        "I'm ok.  Glad to see you here."
                                    ],
                                    "robotspeak": [
                                        "I'm good. Glad to see you, too.",
                                        "I'm great. Glad to see you, too."
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
                                        "What do you do, now?",
                                        "What is your job, now?",
                                    ],
                                    "robotspeak": [
                                        "I am a ---INPUT",
                                        "I work as a ---INPUT",
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
                                        "Sorry but I have to go now."
                                    ],
                                    "robotspeak": [
                                        "That's no problem. See you later."
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
                                    "Doctor",
                                ],
                                [
                                    "Teacher",
                                ],
                                [
                                    "Farmer",
                                ],
                            ]
                        }
                    ]
                }
            ]
        }
    ]

export default Whatdoyoudo


