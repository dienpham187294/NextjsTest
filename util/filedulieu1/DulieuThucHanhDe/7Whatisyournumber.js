

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

let ArrInput = ["1 2 3 6 5 2 5 8 6", "5 2 8 4 2 6 2 5 8", "5 1 2 5 4 7 6 3 5"]

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
const Whatisyourphonenumber
    = [
        {
            "nameoflession": "Lesson 7: What is your number?",
            "huongdan": "T??m th??ng tin s??? ??i???n tho???i ng?????i ?????i tho???i?",
            "srcYoutube": "",
            "hoctap": [
                { "EN": "What is your phone number?", "VN": "S??? ??i???n tho???i c???a b???n l?? g???", "IPA": "w??t????z??j??????f????n????n??mb???", "IPAVN": "" },
                { "EN": "My phone number is 617098145.", "VN": "S??? ??i???n tho???i c???a t??i l?? 617098145.", "IPA": "ma????f????n????n??mb??r????z??617 098 145.", "IPAVN": "" },
                { "EN": "Can??I??have??your??new??phone??number?", "VN": "Cho t??i s??? ??i???n tho???i m???i c???a b???n ???????c kh??ng?", "IPA": "k??n??a????h??v??j??????nju????f????n????n??mb???", "IPAVN": "" },
                { "EN": "Long??time??no??see.", "VN": "L??u r???i kh??ng g???p.", "IPA": "l??????ta??m??n??????si??.", "IPAVN": "" },
                { "EN": "Sorry??but??I??have??to??go??now.", "VN": "Xin l???i nh??ng t??i ph???i ??i ngay b??y gi???.", "IPA": "??s??ri??b??t??a????h??v??tu????g??????na??.", "IPAVN": "" },
                { "EN": "I??will??call??you", "VN": "T??i s??? g???i cho b???n", "IPA": "a????w??l??k????l??ju??", "IPAVN": "" },
                { "EN": "That's??no??problem.??See??you??later.", "VN": "Kh??ng v???n ?????. H???n g???p l???i.", "IPA": "????ts??n????????pr??bl??m.??si????ju??????le??t??.", "IPAVN": "" },
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
                                        "I'm good. Long time no see. How are you?",
                                        "I'm ok. Long time no see. How are you?"
                                    ],
                                    "robotspeak": [
                                        "I'm good. Long time no see you.",
                                        "Not too bad. Long time no see you."
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
                                        "What is your phone number, now?",
                                        "Can I have your new phone number?"
                                    ],
                                    "robotspeak": [
                                        "My phone number is ---INPUT",

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
                                        "Sorry but I have to go now. I will call you.",
                                        "I need to go now. I will call you soon"
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
                                    "1 2 3 6 5 2 5 8 6"
                                ],
                                [
                                    "5 2 8 4 2 6 2 5 8",
                                ],
                                [
                                    "5 1 2 5 4 7 6 3 5"
                                ],
                            ]
                        }
                    ]
                }
            ]
        }
    ]

export default Whatisyourphonenumber

