

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

let ArrInput = ["January 1st", "February 2nd", "March 4th"]

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
const Whenisyourbirthday
    = [
        {
            "nameoflession": "Lesson 5: When is your birthday?",
            "huongdan": "T??m th??ng tin ng??y sinh ng?????i ?????i tho???i?",
            "srcYoutube": "https://www.youtube.com/embed/n2trpvRsKgU",
            "hoctap": [
                { "EN": "When is your birthday?", "VN": "B???n sinh ng??y n??o?", "IPA": "w??n????z??j????????b??????de???", "IPAVN": "" },
                { "EN": "My birthday is on January 1st.", "VN": "Sinh nh???t c???a t??i l?? v??o ng??y 1 th??ng Gi??ng.", "IPA": "ma??????b??????de??????z????n????????nj????ri??1st.", "IPAVN": "" },
                { "EN": "I'm??having??a??birthday??party??next??week.", "VN": "T??i s??? c?? m???t b???a ti???c sinh nh???t v??o tu???n t???i.", "IPA": "a??m????h??v????????????b??????de??????p????ti??n??kst??wi??k.", "IPAVN": "" },
                { "EN": "Would??you??like??to??come?", "VN": "B???n c?? mu???n ?????n kh??ng?", "IPA": "w??d??ju????la??k??tu????k??m?", "IPAVN": "" },
                { "EN": "It'll??be??fun!", "VN": "N?? s??? r???t vui!", "IPA": "????tl??bi????f??n!", "IPAVN": "" },
                { "EN": "Sure.??I'll??be??there!", "VN": "Ch???c ch???n. T??i s??? ??? ????!", "IPA": "??????.??a??l??bi??????e??!", "IPAVN": "" },
                { "EN": "That's??great.??See??you.", "VN": "Th???t tuy???t. H???n g???p l???i.", "IPA": "????ts??gre??t.??si????ju??.", "IPAVN": "" },

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
                                    "Ng??y sinh:"
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
                                        "I'm good. How are you?",
                                        "I'm ok. How are you?"
                                    ],
                                    "robotspeak": [
                                        "I'm good. I'm having a birthday party next week. Would you like to come?",
                                        "Not too bad. I'm having a birthday party next week. Would you like to come? It'll be fun!"
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
                                        "When is your birthday?"
                                    ],
                                    "robotspeak": [
                                        "My birthday is on ---INPUT"
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
                                        "Sure. I'll be there!"
                                    ],
                                    "robotspeak": [
                                        "That's great. See you."
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
                                    "January 1st",
                                ],
                                [
                                    "February 2nd",
                                ],
                                [
                                    "March 4th",
                                ],
                            ]
                        }
                    ]
                }
            ]
        }
    ]

export default Whenisyourbirthday


