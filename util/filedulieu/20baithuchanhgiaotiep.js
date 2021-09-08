export default [
    [
        {
            "nameoflession": "Where are you from?",
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
                                    "---WHERE"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "WHERE"
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
                                        "Hi how are you?",
                                        "How are you doing?"
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
                                                "I am good.",
                                                "I'm good.",
                                                "Not too bad"
                                            ],
                                            "robotspeak": ["That's ok"],
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
                                        "Where are you from"
                                    ],
                                    "robotspeak": [
                                        "I come from ---WHERE. How about you?"
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
                                        "I come from ...Nice to meet you!"
                                    ],
                                    "robotspeak": [
                                        "Nice to meet you."
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
                    "DataInput": [
                        [
                            "Richard",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Connecticut"
                        ],
                        [
                            "Barbara",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Colorado"
                        ],
                        [
                            "Michael",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Arkansas"
                        ],
                        [
                            "Betty",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Illinois"
                        ],
                        [
                            "Kimberly",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Kentucky"
                        ],
                        [
                            "Lisa",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Idaho"
                        ],
                        [
                            "Steven",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "Kentucky"
                        ],
                        [
                            "Robert",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Alaska"
                        ],
                        [
                            "Susan",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Connecticut"
                        ],
                        [
                            "Dorothy",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Massachusetts"
                        ],
                        [
                            "William",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "California"
                        ],
                        [
                            "Donna",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Maine"
                        ],
                        [
                            "Mary",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Alabama"
                        ],
                        [
                            "Michelle",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Maryland"
                        ],
                        [
                            "David",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Colorado"
                        ],
                        [
                            "Anthony",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Indiana"
                        ],
                        [
                            "Charles",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "Georgia"
                        ],
                        [
                            "Ashley",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Kansas"
                        ],
                        [
                            "Linda",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Arkansas"
                        ],
                        [
                            "Patricia",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Alaska"
                        ],
                        [
                            "Christopher",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Hawaii"
                        ],
                        [
                            "Kenneth",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Massachusetts"
                        ],
                        [
                            "Margaret",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Indiana"
                        ],
                        [
                            "Karen",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Georgia"
                        ],
                        [
                            "Mark",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Iowa"
                        ],
                        [
                            "Thomas",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Florida"
                        ],
                        [
                            "Matthew",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Illinois"
                        ],
                        [
                            "Sandra",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Iowa"
                        ],
                        [
                            "Sarah",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Florida"
                        ],
                        [
                            "Jessica",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Delaware"
                        ],
                        [
                            "Daniel",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Idaho"
                        ],
                        [
                            "Donald",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Kansas"
                        ],
                        [
                            "Joseph",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Delaware"
                        ],
                        [
                            "Emily",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Louisiana"
                        ],
                        [
                            "James",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Alabama"
                        ],
                        [
                            "Nancy",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Hawaii"
                        ],
                        [
                            "Paul",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Louisiana"
                        ],
                        [
                            "Jennifer",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Arizona"
                        ],
                        [
                            "Andrew",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Maine"
                        ],
                        [
                            "Elizabeth",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "California"
                        ],
                        [
                            "John",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Arizona"
                        ],
                        [
                            "Joshua",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Maryland"
                        ]
                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Location",
                            "nameofheader": [
                                "Location"
                            ],
                            "dataoftable": [
                                [
                                    "Alabama"
                                ],
                                [
                                    "Alaska"
                                ],
                                [
                                    "Arizona"
                                ],
                                [
                                    "Arkansas"
                                ],
                                [
                                    "California"
                                ],
                                [
                                    "Colorado"
                                ],
                                [
                                    "Connecticut"
                                ],
                                [
                                    "Delaware"
                                ],
                                [
                                    "Florida"
                                ],
                                [
                                    "Georgia"
                                ],
                                [
                                    "Hawaii"
                                ],
                                [
                                    "Idaho"
                                ],
                                [
                                    "Illinois"
                                ],
                                [
                                    "Indiana"
                                ],
                                [
                                    "Iowa"
                                ],
                                [
                                    "Kansas"
                                ],
                                [
                                    "Kentucky"
                                ],
                                [
                                    "Louisiana"
                                ],
                                [
                                    "Maine"
                                ],
                                [
                                    "Maryland"
                                ],
                                [
                                    "Massachusetts"
                                ],
                                [
                                    "Michigan"
                                ],
                                [
                                    "Minnesota"
                                ],
                                [
                                    "Mississippi"
                                ],
                                [
                                    "Missouri"
                                ],
                                [
                                    "Montana"
                                ],
                                [
                                    "Nebraska"
                                ],
                                [
                                    "Nevada"
                                ],
                                [
                                    "New Hampshire"
                                ],
                                [
                                    "New Jersey"
                                ],
                                [
                                    "New Mexico"
                                ],
                                [
                                    "New York"
                                ],
                                [
                                    "North Carolina"
                                ],
                                [
                                    "North Dakota"
                                ],
                                [
                                    "Ohio"
                                ],
                                [
                                    "Oklahoma"
                                ],
                                [
                                    "Oregon"
                                ],
                                [
                                    "Pennsylvania"
                                ],
                                [
                                    "Rhode Island"
                                ],
                                [
                                    "South Carolina"
                                ],
                                [
                                    "South Dakota"
                                ],
                                [
                                    "Tennessee"
                                ],
                                [
                                    "Texas"
                                ],
                                [
                                    "Utah"
                                ],
                                [
                                    "Vermont"
                                ],
                                [
                                    "Virginia"
                                ],
                                [
                                    "Washington"
                                ],
                                [
                                    "West Virginia"
                                ],
                                [
                                    "Wisconsin"
                                ],
                                [
                                    "Wyoming"
                                ]
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    [
        {
            "nameoflession": "How long have you been there?",
            "description": "How long have you been there? What do you work for? Where are you living now?",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
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
                                    "---NAME",
                                    "---WHERELIVING",
                                    "---WORKFOR",
                                    "---YEARS"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "NAME",
                                    "WHERELIVING",
                                    "WORKFOR",
                                    "YEARS"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hi, we are doing a survey. Can you give me a couple of minutes?"
                                    ],
                                    "robotspeak": [
                                        "Yes of cource",
                                        "Ok that's fine."
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
                                        "What is your name?",
                                        "Can I have your name?"
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        "I am ---NAME"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                },
                                {
                                    "manspeak": [
                                        "Where are you living now?"
                                    ],
                                    "robotspeak": [
                                        "I am living in ---WHERELIVING"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "How long have you been there?"
                                            ],
                                            "robotspeak": [
                                                "I have been there for ---YEARS years"
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
                                {
                                    "manspeak": [
                                        "What do you work for?"
                                    ],
                                    "robotspeak": [
                                        "I am work as ---WORKFOR"
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
                                        "Thank you very much. Nice to meet you."
                                    ],
                                    "robotspeak": [
                                        "Nice to meet you."
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
                        "---WHERELIVING",
                        "---YEARS",
                        "---WORKFOR"
                    ],
                    "DataInput": [
                        [
                            "James",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Alabama",
                            9,
                            "baker"
                        ],
                        [
                            "Robert",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Alaska",
                            2,
                            "barber"
                        ],
                        [
                            "John",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Arizona",
                            5,
                            "beautician"
                        ],
                        [
                            "Michael",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Arkansas",
                            5,
                            "biologist"
                        ],
                        [
                            "William",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "California",
                            10,
                            "bricklayer"
                        ],
                        [
                            "David",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Colorado",
                            9,
                            "bus driver"
                        ],
                        [
                            "Richard",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Connecticut",
                            6,
                            "butcher"
                        ],
                        [
                            "Joseph",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Delaware",
                            10,
                            "caretaker"
                        ],
                        [
                            "Thomas",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Florida",
                            3,
                            "carpenter"
                        ],
                        [
                            "Charles",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "Georgia",
                            5,
                            "chef"
                        ],
                        [
                            "Christopher",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Hawaii",
                            5,
                            "chemist"
                        ],
                        [
                            "Daniel",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Idaho",
                            6,
                            "childcare assistant"
                        ],
                        [
                            "Matthew",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Illinois",
                            5,
                            "coach"
                        ],
                        [
                            "Anthony",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Indiana",
                            8,
                            "construction worker"
                        ],
                        [
                            "Mark",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Iowa",
                            8,
                            "cook"
                        ],
                        [
                            "Donald",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Kansas",
                            10,
                            "cosmetician"
                        ],
                        [
                            "Steven",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "Kentucky",
                            2,
                            "customer adviser"
                        ],
                        [
                            "Paul",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Louisiana",
                            10,
                            "dentist"
                        ],
                        [
                            "Andrew",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Maine",
                            2,
                            "doctor"
                        ],
                        [
                            "Joshua",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Maryland",
                            2,
                            "electrician"
                        ],
                        [
                            "Kenneth",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Massachusetts",
                            2,
                            "engineer"
                        ],
                        [
                            "Kevin",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "Michigan",
                            8,
                            "explorer"
                        ],
                        [
                            "Brian",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Minnesota",
                            5,
                            "farmer"
                        ],
                        [
                            "George",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Mississippi",
                            7,
                            "fashion designer"
                        ],
                        [
                            "Edward",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Missouri",
                            8,
                            "firefighter"
                        ],
                        [
                            "Ronald",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Montana",
                            5,
                            "fitness instructor"
                        ],
                        [
                            "Timothy",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Nebraska",
                            3,
                            "florist"
                        ],
                        [
                            "Jason",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Nevada",
                            3,
                            "gardener"
                        ],
                        [
                            "Jeffrey",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "New Hampshire",
                            2,
                            "glazier"
                        ],
                        [
                            "Ryan",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "New Jersey",
                            7,
                            "graphic artist"
                        ],
                        [
                            "Jacob",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "New Mexico",
                            3,
                            "hairdresser hairstylist"
                        ],
                        [
                            "Gary",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "New York",
                            3,
                            "hunter"
                        ],
                        [
                            "Nicholas",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "North Carolina",
                            6,
                            "jounalist"
                        ],
                        [
                            "Eric",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "North Dakota",
                            9,
                            "make-up artist"
                        ],
                        [
                            "Jonathan",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Ohio",
                            10,
                            "mechanic"
                        ],
                        [
                            "Stephen",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Oklahoma",
                            7,
                            "miner"
                        ],
                        [
                            "Larry",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Oregon",
                            6,
                            "nurse"
                        ],
                        [
                            "Justin",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Pennsylvania",
                            4,
                            "nursery-school teacher"
                        ],
                        [
                            "Scott",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Rhode Island",
                            10,
                            "painter"
                        ],
                        [
                            "Brandon",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "South Carolina",
                            10,
                            "paramedic"
                        ],
                        [
                            "Benjamin",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "South Dakota",
                            6,
                            "physiotherapist"
                        ],
                        [
                            "Samuel",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Tennessee",
                            3,
                            "pilot"
                        ],
                        [
                            "Gregory",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Texas",
                            4,
                            "plumber"
                        ],
                        [
                            "Frank",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male",
                            "Utah",
                            2,
                            "police officer"
                        ],
                        [
                            "Alexander",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male",
                            "Vermont",
                            5,
                            "research scientist"
                        ],
                        [
                            "Raymond",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male",
                            "Virginia",
                            2,
                            "roofer"
                        ],
                        [
                            "Patrick",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Washington",
                            4,
                            "secretary"
                        ],
                        [
                            "Jack",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "West Virginia",
                            3,
                            "shepherd"
                        ],
                        [
                            "Dennis",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male",
                            "Wisconsin",
                            8,
                            "shop assistant"
                        ],
                        [
                            "Jerry",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male",
                            "Wyoming",
                            7,
                            "singer"
                        ],
                        [
                            "Mary",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Alabama",
                            3,
                            "slater"
                        ],
                        [
                            "Patricia",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Alaska",
                            7,
                            "social worker"
                        ],
                        [
                            "Jennifer",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Arizona",
                            9,
                            "surgeon"
                        ],
                        [
                            "Linda",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Arkansas",
                            10,
                            "taxi driver"
                        ],
                        [
                            "Elizabeth",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "California",
                            4,
                            "teacher"
                        ],
                        [
                            "Barbara",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Colorado",
                            6,
                            "thatcher"
                        ],
                        [
                            "Susan",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Connecticut",
                            3,
                            "tiler"
                        ],
                        [
                            "Jessica",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Delaware",
                            6,
                            "tour guide"
                        ],
                        [
                            "Sarah",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Florida",
                            10,
                            "truck driver"
                        ],
                        [
                            "Karen",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Georgia",
                            5,
                            "undertaker"
                        ],
                        [
                            "Nancy",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Hawaii",
                            4,
                            "vet"
                        ],
                        [
                            "Lisa",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Idaho",
                            7,
                            "vocalist"
                        ],
                        [
                            "Betty",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Illinois",
                            7,
                            "waitress"
                        ],
                        [
                            "Margaret",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Indiana",
                            7,
                            "zoologist"
                        ],
                        [
                            "Sandra",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Iowa",
                            2,
                            "baker"
                        ],
                        [
                            "Ashley",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Kansas",
                            9,
                            "barber"
                        ],
                        [
                            "Kimberly",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Kentucky",
                            8,
                            "beautician"
                        ],
                        [
                            "Emily",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Louisiana",
                            6,
                            "biologist"
                        ],
                        [
                            "Donna",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Maine",
                            3,
                            "bricklayer"
                        ],
                        [
                            "Michelle",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Maryland",
                            10,
                            "bus driver"
                        ],
                        [
                            "Dorothy",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Massachusetts",
                            8,
                            "butcher"
                        ],
                        [
                            "Carol",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Michigan",
                            5,
                            "caretaker"
                        ],
                        [
                            "Amanda",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Minnesota",
                            8,
                            "carpenter"
                        ],
                        [
                            "Melissa",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Mississippi",
                            8,
                            "chef"
                        ],
                        [
                            "Deborah",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Missouri",
                            9,
                            "chemist"
                        ],
                        [
                            "Stephanie",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Montana",
                            2,
                            "childcare assistant"
                        ],
                        [
                            "Rebecca",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Nebraska",
                            4,
                            "coach"
                        ],
                        [
                            "Sharon",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Nevada",
                            7,
                            "construction worker"
                        ],
                        [
                            "Laura",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "New Hampshire",
                            4,
                            "cook"
                        ],
                        [
                            "Cynthia",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "New Jersey",
                            2,
                            "cosmetician"
                        ],
                        [
                            "Kathleen",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "New Mexico",
                            5,
                            "customer adviser"
                        ],
                        [
                            "Amy",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "New York",
                            5,
                            "dentist"
                        ],
                        [
                            "Shirley",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "North Carolina",
                            10,
                            "doctor"
                        ],
                        [
                            "Angela",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "North Dakota",
                            9,
                            "electrician"
                        ],
                        [
                            "Helen",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Ohio",
                            2,
                            "engineer"
                        ],
                        [
                            "Anna",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Oklahoma",
                            9,
                            "explorer"
                        ],
                        [
                            "Brenda",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Oregon",
                            6,
                            "farmer"
                        ],
                        [
                            "Pamela",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Pennsylvania",
                            3,
                            "fashion designer"
                        ],
                        [
                            "Nicole",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Rhode Island",
                            5,
                            "firefighter"
                        ],
                        [
                            "Emma",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "South Carolina",
                            6,
                            "fitness instructor"
                        ],
                        [
                            "Samantha",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "South Dakota",
                            9,
                            "florist"
                        ],
                        [
                            "Katherine",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Tennessee",
                            8,
                            "gardener"
                        ],
                        [
                            "Christine",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "Texas",
                            9,
                            "glazier"
                        ],
                        [
                            "Debra",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Utah",
                            3,
                            "graphic artist"
                        ],
                        [
                            "Rachel",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Vermont",
                            6,
                            "hairdresser hairstylist"
                        ],
                        [
                            "Catherine",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female",
                            "Virginia",
                            10,
                            "hunter"
                        ],
                        [
                            "Carolyn",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female",
                            "Washington",
                            7,
                            "jounalist"
                        ],
                        [
                            "Janet",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female",
                            "West Virginia",
                            6,
                            "make-up artist"
                        ],
                        [
                            "Ruth",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female",
                            "Wisconsin",
                            9,
                            "mechanic"
                        ],
                        [
                            "Maria",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female",
                            "Wyoming",
                            6,
                            "miner"
                        ]
                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "List of Location",
                            "nameofheader": [
                                "Location"
                            ],
                            "dataoftable": [
                                [
                                    "Alabama"
                                ],
                                [
                                    "Alaska"
                                ],
                                [
                                    "Arizona"
                                ],
                                [
                                    "Arkansas"
                                ],
                                [
                                    "California"
                                ],
                                [
                                    "Colorado"
                                ],
                                [
                                    "Connecticut"
                                ],
                                [
                                    "Delaware"
                                ],
                                [
                                    "Florida"
                                ],
                                [
                                    "Georgia"
                                ],
                                [
                                    "Hawaii"
                                ],
                                [
                                    "Idaho"
                                ],
                                [
                                    "Illinois"
                                ],
                                [
                                    "Indiana"
                                ],
                                [
                                    "Iowa"
                                ],
                                [
                                    "Kansas"
                                ],
                                [
                                    "Kentucky"
                                ],
                                [
                                    "Louisiana"
                                ],
                                [
                                    "Maine"
                                ],
                                [
                                    "Maryland"
                                ],
                                [
                                    "Massachusetts"
                                ],
                                [
                                    "Michigan"
                                ],
                                [
                                    "Minnesota"
                                ],
                                [
                                    "Mississippi"
                                ],
                                [
                                    "Missouri"
                                ],
                                [
                                    "Montana"
                                ],
                                [
                                    "Nebraska"
                                ],
                                [
                                    "Nevada"
                                ],
                                [
                                    "New Hampshire"
                                ],
                                [
                                    "New Jersey"
                                ],
                                [
                                    "New Mexico"
                                ],
                                [
                                    "New York"
                                ],
                                [
                                    "North Carolina"
                                ],
                                [
                                    "North Dakota"
                                ],
                                [
                                    "Ohio"
                                ],
                                [
                                    "Oklahoma"
                                ],
                                [
                                    "Oregon"
                                ],
                                [
                                    "Pennsylvania"
                                ],
                                [
                                    "Rhode Island"
                                ],
                                [
                                    "South Carolina"
                                ],
                                [
                                    "South Dakota"
                                ],
                                [
                                    "Tennessee"
                                ],
                                [
                                    "Texas"
                                ],
                                [
                                    "Utah"
                                ],
                                [
                                    "Vermont"
                                ],
                                [
                                    "Virginia"
                                ],
                                [
                                    "Washington"
                                ],
                                [
                                    "West Virginia"
                                ],
                                [
                                    "Wisconsin"
                                ],
                                [
                                    "Wyoming"
                                ]
                            ]
                        },
                        {
                            "nameoftable": "List of Job",
                            "nameofheader": [
                                "Name of job"
                            ],
                            "dataoftable": [
                                [
                                    "baker"
                                ],
                                [
                                    "barber"
                                ],
                                [
                                    "beautician"
                                ],
                                [
                                    "biologist"
                                ],
                                [
                                    "bricklayer"
                                ],
                                [
                                    "bus driver"
                                ],
                                [
                                    "butcher"
                                ],
                                [
                                    "caretaker"
                                ],
                                [
                                    "carpenter"
                                ],
                                [
                                    "chef"
                                ],
                                [
                                    "chemist"
                                ],
                                [
                                    "childcare assistant"
                                ],
                                [
                                    "coach"
                                ],
                                [
                                    "construction worker"
                                ],
                                [
                                    "cook"
                                ],
                                [
                                    "cosmetician"
                                ],
                                [
                                    "customer adviser"
                                ],
                                [
                                    "dentist"
                                ],
                                [
                                    "doctor"
                                ],
                                [
                                    "electrician"
                                ],
                                [
                                    "engineer"
                                ],
                                [
                                    "explorer"
                                ],
                                [
                                    "farmer"
                                ],
                                [
                                    "fashion designer"
                                ],
                                [
                                    "firefighter"
                                ],
                                [
                                    "fitness instructor"
                                ],
                                [
                                    "florist"
                                ],
                                [
                                    "gardener"
                                ],
                                [
                                    "glazier"
                                ],
                                [
                                    "graphic artist"
                                ],
                                [
                                    "hairdresser hairstylist"
                                ],
                                [
                                    "hunter"
                                ],
                                [
                                    "jounalist"
                                ],
                                [
                                    "make-up artist"
                                ],
                                [
                                    "mechanic"
                                ],
                                [
                                    "miner"
                                ],
                                [
                                    "nurse"
                                ],
                                [
                                    "nursery-school teacher"
                                ],
                                [
                                    "painter"
                                ],
                                [
                                    "paramedic"
                                ],
                                [
                                    "physiotherapist"
                                ],
                                [
                                    "pilot"
                                ],
                                [
                                    "plumber"
                                ],
                                [
                                    "police officer"
                                ],
                                [
                                    "research scientist"
                                ],
                                [
                                    "roofer"
                                ],
                                [
                                    "secretary"
                                ],
                                [
                                    "shepherd"
                                ],
                                [
                                    "shop assistant"
                                ],
                                [
                                    "singer"
                                ],
                                [
                                    "slater"
                                ],
                                [
                                    "social worker"
                                ],
                                [
                                    "surgeon"
                                ],
                                [
                                    "taxi driver"
                                ],
                                [
                                    "teacher"
                                ],
                                [
                                    "thatcher"
                                ],
                                [
                                    "tiler"
                                ],
                                [
                                    "tour guide"
                                ],
                                [
                                    "truck driver"
                                ],
                                [
                                    "undertaker"
                                ],
                                [
                                    "vet"
                                ],
                                [
                                    "vocalist"
                                ],
                                [
                                    "waitress"
                                ],
                                [
                                    "zoologist"
                                ]
                            ]
                        },
                        {
                            "nameoftable": "Name",
                            "nameofheader": [
                                "Name"
                            ],
                            "dataoftable": [
                                [
                                    "James"
                                ],
                                [
                                    "Robert"
                                ],
                                [
                                    "John"
                                ],
                                [
                                    "Michael"
                                ],
                                [
                                    "William"
                                ],
                                [
                                    "David"
                                ],
                                [
                                    "Richard"
                                ],
                                [
                                    "Joseph"
                                ],
                                [
                                    "Thomas"
                                ],
                                [
                                    "Charles"
                                ],
                                [
                                    "Christopher"
                                ],
                                [
                                    "Daniel"
                                ],
                                [
                                    "Matthew"
                                ],
                                [
                                    "Anthony"
                                ],
                                [
                                    "Mark"
                                ],
                                [
                                    "Donald"
                                ],
                                [
                                    "Steven"
                                ],
                                [
                                    "Paul"
                                ],
                                [
                                    "Andrew"
                                ],
                                [
                                    "Joshua"
                                ],
                                [
                                    "Kenneth"
                                ],
                                [
                                    "Kevin"
                                ],
                                [
                                    "Brian"
                                ],
                                [
                                    "George"
                                ],
                                [
                                    "Edward"
                                ],
                                [
                                    "Ronald"
                                ],
                                [
                                    "Timothy"
                                ],
                                [
                                    "Jason"
                                ],
                                [
                                    "Jeffrey"
                                ],
                                [
                                    "Ryan"
                                ],
                                [
                                    "Jacob"
                                ],
                                [
                                    "Gary"
                                ],
                                [
                                    "Nicholas"
                                ],
                                [
                                    "Eric"
                                ],
                                [
                                    "Jonathan"
                                ],
                                [
                                    "Stephen"
                                ],
                                [
                                    "Larry"
                                ],
                                [
                                    "Justin"
                                ],
                                [
                                    "Scott"
                                ],
                                [
                                    "Brandon"
                                ],
                                [
                                    "Benjamin"
                                ],
                                [
                                    "Samuel"
                                ],
                                [
                                    "Gregory"
                                ],
                                [
                                    "Frank"
                                ],
                                [
                                    "Alexander"
                                ],
                                [
                                    "Raymond"
                                ],
                                [
                                    "Patrick"
                                ],
                                [
                                    "Jack"
                                ],
                                [
                                    "Dennis"
                                ],
                                [
                                    "Jerry"
                                ],
                                [
                                    "Mary"
                                ],
                                [
                                    "Patricia"
                                ],
                                [
                                    "Jennifer"
                                ],
                                [
                                    "Linda"
                                ],
                                [
                                    "Elizabeth"
                                ],
                                [
                                    "Barbara"
                                ],
                                [
                                    "Susan"
                                ],
                                [
                                    "Jessica"
                                ],
                                [
                                    "Sarah"
                                ],
                                [
                                    "Karen"
                                ],
                                [
                                    "Nancy"
                                ],
                                [
                                    "Lisa"
                                ],
                                [
                                    "Betty"
                                ],
                                [
                                    "Margaret"
                                ],
                                [
                                    "Sandra"
                                ],
                                [
                                    "Ashley"
                                ],
                                [
                                    "Kimberly"
                                ],
                                [
                                    "Emily"
                                ],
                                [
                                    "Donna"
                                ],
                                [
                                    "Michelle"
                                ],
                                [
                                    "Dorothy"
                                ],
                                [
                                    "Carol"
                                ],
                                [
                                    "Amanda"
                                ],
                                [
                                    "Melissa"
                                ],
                                [
                                    "Deborah"
                                ],
                                [
                                    "Stephanie"
                                ],
                                [
                                    "Rebecca"
                                ],
                                [
                                    "Sharon"
                                ],
                                [
                                    "Laura"
                                ],
                                [
                                    "Cynthia"
                                ],
                                [
                                    "Kathleen"
                                ],
                                [
                                    "Amy"
                                ],
                                [
                                    "Shirley"
                                ],
                                [
                                    "Angela"
                                ],
                                [
                                    "Helen"
                                ],
                                [
                                    "Anna"
                                ],
                                [
                                    "Brenda"
                                ],
                                [
                                    "Pamela"
                                ],
                                [
                                    "Nicole"
                                ],
                                [
                                    "Emma"
                                ],
                                [
                                    "Samantha"
                                ],
                                [
                                    "Katherine"
                                ],
                                [
                                    "Christine"
                                ],
                                [
                                    "Debra"
                                ],
                                [
                                    "Rachel"
                                ],
                                [
                                    "Catherine"
                                ],
                                [
                                    "Carolyn"
                                ],
                                [
                                    "Janet"
                                ],
                                [
                                    "Ruth"
                                ],
                                [
                                    "Maria"
                                ]
                            ]
                        },
                        {
                            "nameoftable": "Year",
                            "nameofheader": [
                                "Year"
                            ],
                            "dataoftable": [
                                [2], [3], [4], [5], [6], [7], [8], [9], [10]
                            ]
                        }
                    ]
                },
                {
                    "template": {
                        "total": {
                            "image": "---IMAGE",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                []
                            ],
                            "submitsyntax": [
                                [
                                    "NAME",
                                    "WHERELIVING",
                                    "WORKFOR",
                                    "YEARS"
                                ]
                            ],
                            "robotspeakfirst": [
                                "hi",
                                "hello"
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hi, we are doing a survey. Can you give me a couple of minutes?"
                                    ],
                                    "robotspeak": [
                                        "Sorry, I'm busy.",
                                        "I have to go now, sorry."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "That's fine. Nice to meet you."
                                            ],
                                            "robotspeak": [],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": true,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": []
                                        }
                                    ]
                                }
                            ]
                        },
                        "middle": {
                            "handling_next": []
                        },
                        "end": {
                            "handling_next": []
                        }
                    },
                    "ArrToReplace": [
                        "---NAME",
                        "---IMAGE",
                        "---GENDER"
                    ],
                    "DataInput": [
                        [
                            "James",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Robert",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "John",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male"
                        ],
                        [
                            "Michael",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male"
                        ],
                        [
                            "William",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male"
                        ],
                        [
                            "David",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Richard",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Joseph",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male"
                        ],
                        [
                            "Thomas",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male"
                        ],
                        [
                            "Charles",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male"
                        ],
                        [
                            "Christopher",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Daniel",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Matthew",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Anthony",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Mark",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male"
                        ],
                        [
                            "Donald",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male"
                        ],
                        [
                            "Steven",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male"
                        ],
                        [
                            "Paul",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Andrew",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Joshua",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male"
                        ],
                        [
                            "Kenneth",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male"
                        ],
                        [
                            "Kevin",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male"
                        ],
                        [
                            "Brian",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "George",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Edward",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Ronald",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Timothy",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male"
                        ],
                        [
                            "Jason",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male"
                        ],
                        [
                            "Jeffrey",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male"
                        ],
                        [
                            "Ryan",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Jacob",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Gary",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male"
                        ],
                        [
                            "Nicholas",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male"
                        ],
                        [
                            "Eric",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male"
                        ],
                        [
                            "Jonathan",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Stephen",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Larry",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Justin",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Scott",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male"
                        ],
                        [
                            "Brandon",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male"
                        ],
                        [
                            "Benjamin",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male"
                        ],
                        [
                            "Samuel",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Gregory",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Frank",
                            "https://i.postimg.cc/hjmdPVwm/man3.jpg",
                            "male"
                        ],
                        [
                            "Alexander",
                            "https://i.postimg.cc/J7JN1WVF/man4.png",
                            "male"
                        ],
                        [
                            "Raymond",
                            "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "male"
                        ],
                        [
                            "Patrick",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Jack",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Dennis",
                            "https://i.postimg.cc/d0pCY5Wv/man1.png",
                            "male"
                        ],
                        [
                            "Jerry",
                            "https://i.postimg.cc/SRWCVcf4/man2.png",
                            "male"
                        ],
                        [
                            "Mary",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Patricia",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Jennifer",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Linda",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Elizabeth",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Barbara",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Susan",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Jessica",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Sarah",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Karen",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Nancy",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Lisa",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Betty",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Margaret",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Sandra",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Ashley",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Kimberly",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Emily",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Donna",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Michelle",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Dorothy",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Carol",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Amanda",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Melissa",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Deborah",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Stephanie",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Rebecca",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Sharon",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Laura",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Cynthia",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Kathleen",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Amy",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Shirley",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Angela",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Helen",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Anna",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Brenda",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Pamela",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Nicole",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Emma",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Samantha",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Katherine",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Christine",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Debra",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Rachel",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ],
                        [
                            "Catherine",
                            "https://i.postimg.cc/MGvBNCmd/women1.jpg",
                            "female"
                        ],
                        [
                            "Carolyn",
                            "https://i.postimg.cc/wMKDhwJF/women2.png",
                            "female"
                        ],
                        [
                            "Janet",
                            "https://i.postimg.cc/tCNFxtgt/women3.jpg",
                            "female"
                        ],
                        [
                            "Ruth",
                            "https://i.postimg.cc/02spjH9y/women4.jpg",
                            "female"
                        ],
                        [
                            "Maria",
                            "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
                            "female"
                        ]
                    ],
                    "Tabletool": []
                }
            ]
        }
    ], [
        {
            "nameoflession": "What size are you?",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---CLOTHES",
                                    "---SIZE"
                                ],
                                [
                                    "---CLOTHES",
                                    "---SYMBOL"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "CLOTHES",
                                    "SIZE"
                                ],
                                [
                                    "CLOTHES",
                                    "SYMBOL"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?"
                                    ],
                                    "robotspeak": [
                                        "I want to buy a ---CLOTHES."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "What do you think of this ---CLOTHES?"
                                            ],
                                            "robotspeak": [
                                                "Oh yes. It looks good",
                                                "Wow. It looks beautiful",
                                                "It looks pretty",
                                                "Oh yes. It looks great",
                                                "Oh, It looks lovely"
                                            ],
                                            "icon": "https://i.postimg.cc/Hkd6bkS2/smile.png",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "What size are you?",
                                                        "What is your size?"
                                                    ],
                                                    "robotspeak": [
                                                        "I am ---SIZE",
                                                        " I am ---SIZE size",
                                                        " I am a size ---SYMBOL"
                                                    ],
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
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Here you are."
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---CLOTHES",
                        "---SIZE",
                        "---SYMBOL"
                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "shirt", "an extra small", "XS"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "vest", "an extra large", "XL"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "T-shirt", "a small", "S"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "crop top", "a medium", "M"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "polo shirt", "a large", "L"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "jacket", "a medium", "M"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "sweatshirt", "a large", "L"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "tank top", "an extra large", "XL"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "crop top", "an extra small", "XS"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "blouse", "a small", "S"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "waistcoat", "a large", "L"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "sweatshirt", "an extra large", "XL"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "shirt", "a medium", "M"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "vest", "an extra small", "XS"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "jacket", "a small", "S"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "crop top", "a large", "L"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "shirt", "an extra large", "XL"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "polo shirt", "a medium", "M"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "sweatshirt", "an extra small", "XS"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "tank top", "a small", "S"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "waistcoat", "an extra small", "XS"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "blouse", "a large", "L"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "shirt", "a small", "S"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "waistcoat", "an extra large", "XL"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "tank top", "a medium", "M"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "T-shirt", "an extra small", "XS"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "jacket", "an extra large", "XL"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "polo shirt", "a small", "S"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "blouse", "a medium", "M"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "vest", "a large", "L"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Clothes, Size & Symbol ",
                            "nameofheader": ["Clothes", "Size", "Symbol"],
                            "dataoftable": [
                                ["T-shirt", "an extra small", "XS"],
                                ["shirt", "a small", "S"],
                                ["tank top", "a medium", "M"],
                                ["vest", "a large", "L"],
                                ["polo shirt", "an extra large", "XL"],
                                ["blouse", "", ""],
                                ["jacket", "", ""],
                                ["waistcoat", "", ""],
                                ["crop top", "", ""],
                                ["sweatshirt", "", ""]
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    [
        {
            "nameoflession": "What size are you?",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---CLOTHES",
                                    "---SIZE"
                                ],
                                [
                                    "---CLOTHES",
                                    "---SYMBOL"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "CLOTHES",
                                    "SIZE"
                                ],
                                [
                                    "CLOTHES",
                                    "SYMBOL"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?"
                                    ],
                                    "robotspeak": [
                                        "I want to buy a ---CLOTHES."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "What do you think of this ---CLOTHES?"
                                            ],
                                            "robotspeak": [
                                                "Oh yes. It looks good",
                                                "Wow. It's look beautiful",
                                                "It's look pretty",
                                                "Oh yes. It's look great",
                                                "Oh, It's look lovely"
                                            ],
                                            "icon": "https://i.postimg.cc/Hkd6bkS2/smile.png",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "What size are you?",
                                                        "What is your size?"
                                                    ],
                                                    "robotspeak": [
                                                        "I am ---SIZE",
                                                        " I am ---SIZE size",
                                                        " I am a size ---SYMBOL"
                                                    ],
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
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Here you are."
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---CLOTHES",
                        "---SIZE",
                        "---SYMBOL"
                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "shirt", "an extra small", "XS"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "vest", "an extra large", "XL"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "T-shirt", "a small", "S"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "crop top", "a medium", "M"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "polo shirt", "a large", "L"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "jacket", "a medium", "M"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "sweatshirt", "a large", "L"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "tank top", "an extra large", "XL"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "crop top", "an extra small", "XS"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "blouse", "a small", "S"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "waistcoat", "a large", "L"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "sweatshirt", "an extra large", "XL"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "shirt", "a medium", "M"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "vest", "an extra small", "XS"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "jacket", "a small", "S"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "crop top", "a large", "L"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "shirt", "an extra large", "XL"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "polo shirt", "a medium", "M"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "sweatshirt", "an extra small", "XS"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "tank top", "a small", "S"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "waistcoat", "an extra small", "XS"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "blouse", "a large", "L"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "shirt", "a small", "S"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "waistcoat", "an extra large", "XL"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "tank top", "a medium", "M"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "T-shirt", "an extra small", "XS"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "jacket", "an extra large", "XL"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "polo shirt", "a small", "S"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "blouse", "a medium", "M"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "vest", "a large", "L"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Clothes, Size & Symbol ",
                            "nameofheader": ["Clothes", "Size", "Symbol"],
                            "dataoftable": [
                                ["T-shirt", "an extra small", "XS"],
                                ["shirt", "a small", "S"],
                                ["tank top", "a medium", "M"],
                                ["vest", "a large", "L"],
                                ["polo shirt", "an extra large", "XL"],
                                ["blouse", "", ""],
                                ["jacket", "", ""],
                                ["waistcoat", "", ""],
                                ["crop top", "", ""],
                                ["sweatshirt", "", ""]
                            ]
                        }
                    ]
                }
            ]
        }
    ], [
        {
            "nameoflession": "What colour do you like to wear?",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---SIZE"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "SIZE"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        " May I help you?"
                                    ],
                                    "robotspeak": [
                                        "I want to buy a ---CLOTHES.",
                                        "I am looking for a ---CLOTHES.",
                                        "I'd like to buy a ---CLOTHES."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "What do you think of this ---CLOTHES?"
                                            ],
                                            "robotspeak": [
                                                "I don't like  the colour."
                                            ],
                                            "icon": "https://i.postimg.cc/wx5C37xF/sad.png",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "What colour do you like to wear?"
                                                    ],
                                                    "robotspeak": [
                                                        "Can I see ---COLOUR one?"
                                                    ],
                                                    "icon": "",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "Yes, here you are"
                                                            ],
                                                            "robotspeak": [
                                                                "Could I try this on?"
                                                            ],
                                                            "icon": "",
                                                            "function": {
                                                                "end_successfull": false,
                                                                "end_unsuccessfull": false
                                                            },
                                                            "handling_next": [
                                                                {
                                                                    "manspeak": [
                                                                        "Sure. The changing rooms are over there. How does it feel?"
                                                                    ],
                                                                    "robotspeak": [
                                                                        "It’s much too ---NOTFIT. Do you have this in a ---SIZE size?",
                                                                        "It’s a little too ---NOTFIT. Do you have this in a ---SIZE size?",
                                                                        "It’s much too ---NOTFIT. Do you have this in a ---SIZE size?",
                                                                        "It’s a little too ---NOTFIT. Do you have this in a ---SIZE size?"
                                                                    ],
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
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Yes, this is a ---SIZE one"
                                    ],
                                    "robotspeak": [
                                        "Thank you"
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---CLOTHES",
                        "---COLOUR",
                        "---NOTFIT",
                        "---SIZE"
                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "mini - skirt", "a black", "small", "bigger"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "pair of swimming trunks", "a white", "big", "smaller"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "bathing costume ", "a blue", "small", "bigger"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "bathing costume ", "a green", "big", "smaller"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "tee", "a red", "small", "bigger"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "mini - skirt", "a pink", "big", "smaller"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "sundress", "a yellow", "small", "bigger"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "bathing suit", "a purple", "big", "smaller"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "singlet", "an orange", "small", "bigger"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "swimming costume", "a brown", "big", "smaller"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "pair of swimming trunks", "a black", "small", "bigger"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "halterneck", "a white", "big", "smaller"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "swimming costume", "a blue", "small", "bigger"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "tee", "a green", "big", "smaller"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "bathing suit", "a red", "small", "bigger"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "sundress", "a pink", "big", "smaller"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "singlet", "a yellow", "small", "bigger"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "swimsuit", "a purple", "big", "smaller"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "swimsuit", "an orange", "small", "bigger"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "halterneck", "a brown", "big", "smaller"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "sundress", "a purple", "small", "bigger"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "swimming costume", "a white", "big", "smaller"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "bathing costume ", "a white", "small", "bigger"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "singlet", "a black", "big", "smaller"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "mini - skirt", "a blue", "small", "bigger"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pair of swimming trunks", "a yellow", "big", "smaller"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "bathing costume ", "a pink", "small", "bigger"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "tee", "a black", "big", "smaller"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "mini - skirt", "an orange", "small", "bigger"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "bathing suit", "a red", "big", "smaller"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Clothes, colour & size",
                            "nameofheader": ["Clothes", "Colour", "Size"],
                            "dataoftable": [
                                ["pair of swimming trunks", "a black", "bigger"],
                                ["swimming costume", "a white", "smaller"],
                                ["swimsuit", "a blue", ""],
                                ["bathing suit", "a green", ""],
                                ["bathing costume ", "a red", ""],
                                ["singlet", "a pink", ""],
                                ["tee", "a yellow", ""],
                                ["halterneck", "a purple", ""],
                                ["sundress", "an orange", ""],
                                ["mini - skirt", "a brown", ""]

                            ]
                        }
                    ]
                }
            ]
        }
    ], [
        {
            "nameoflession": "They are lastest design.",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---SIZE"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "SIZE"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?"
                                    ],
                                    "robotspeak": [
                                        "Please show me your ---CLOTHES styles for this winter"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "What do you think of these ---Clothes2?"
                                            ],
                                            "robotspeak": [
                                                "Oh, I like this one. Do you have this in ---COLOUR?",
                                                "Oh, I like this one. Have you got this in ---COLOUR?"
                                            ],
                                            "icon": "https://i.postimg.cc/Hkd6bkS2/smile.png",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "Yes. Here you are."
                                                    ],
                                                    "robotspeak": [
                                                        "I’d like to try the ---SIZE one, please.",
                                                        "I’d like to try the ---SIZE one, please."
                                                    ],
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
                                }
                            ]
                        },

                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Sure. The changing rooms are over there."
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---CLOTHES",
                        "---Clothes2",
                        "---COLOUR",
                        "---SIZE"
                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "trousers", "trousers", "black", "smaller"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "sweater", "sweaters", "white", "bigger"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "hoodie", "hoodies", "blue", "smaller"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "coat", "coats", "green", "bigger"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "cargidan", "cargidans", "red", "smaller"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "overcoat", "overcoats", "pink", "bigger"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "pullover", "pullovers", "yellow", "smaller"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "anorak", "anoraks", "purple", "bigger"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "trench coat", "trench coats", "orange", "smaller"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "raincoat", "raincoats", "brown", "bigger"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "trousers", "trousers", "black", "smaller"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "sweater", "sweaters", "white", "bigger"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "hoodie", "hoodies", "blue", "smaller"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "coat", "coats", "green", "bigger"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "cargidan", "cargidans", "red", "smaller"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "overcoat", "overcoats", "pink", "bigger"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "pullover", "pullovers", "yellow", "smaller"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "anorak", "anoraks", "purple", "bigger"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "trench coat", "trench coats", "orange", "smaller"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "raincoat", "raincoats", "brown", "bigger"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "trousers", "trousers", "purple", "smaller"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "sweater", "sweaters", "white", "bigger"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "hoodie", "hoodies", "white", "smaller"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "coat", "coats", "black", "bigger"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "cargidan", "cargidans", "blue", "smaller"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "overcoat", "overcoats", "yellow", "bigger"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "pullover", "pullovers", "pink", "smaller"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "anorak", "anoraks", "black", "bigger"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "trench coat", "trench coats", "orange", "smaller"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "raincoat", "raincoats", "red", "bigger"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Clothes, colour & size",
                            "nameofheader": ["Clothes", "Colour", "Size"],
                            "dataoftable": [
                                ["trousers", "black", "bigger"],
                                ["sweater", "white", "smaller"],
                                ["hoodie", "blue", ""],
                                ["coat", "green", ""],
                                ["cargidan", "red", ""],
                                ["overcoat", "pink", ""],
                                ["pullover", "yellow", ""],
                                ["anorak", "purple", ""],
                                ["trench coat", "orange", ""],
                                ["raincoat", "brown", ""]

                            ]
                        }
                    ]
                }
            ]
        }
    ], [
        {
            "nameoflession": "It is on sale.",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---ACCESSORIES",
                                    "---PRICE",
                                    "---QUANTITY"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "ACCESSORIES",
                                    "PRICE",
                                    "QUANTITY"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?"
                                    ],
                                    "robotspeak": [
                                        "I’m just browsing, thanks."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "OK. Let me know if you need any help."
                                            ],
                                            "robotspeak": [
                                                "Is this ---ACCESSORIES on sale?"
                                            ],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "Yes. I give you a 10% discount if you buy more than 2 items.",
                                                        "Yes. It’s on sale if you buy more than 2 items.",
                                                        "Yes. It’s discounted by 10% if you buy more than 2 items.",
                                                        "Yes. It has a 10% discount if you buy more than 2 items."
                                                    ],
                                                    "robotspeak": [
                                                        "What is the price after the discount?"
                                                    ],
                                                    "icon": "",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "It's ---PRICE. How many do you want?"
                                                            ],
                                                            "robotspeak": [
                                                                "I'll take ---QUANTITY."
                                                            ],
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
                                        }
                                    ]
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Here you are."
                                    ],
                                    "robotspeak": [
                                        "Thank you"
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---ACCESSORIES",
                        "---PRICE",
                        "---QUANTITY"
                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "anklet", "$17", "3"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "bobby pin", "$1", "2"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "bow tie", "$8", "4"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "bracelet", "$14", "5"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "hairband", "$3", "1"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "necklace", "$19", "1"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "pair of ear cuffs", "$12", "4"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "pair of earrings", "$13", "1"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "ring", "$15", "5"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "tie", "$9", "3"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "anklet", "$17", "5"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "bobby pin", "$1", "2"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "bow tie", "$8", "1"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "bracelet", "$14", "1"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "hairband", "$3", "5"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "necklace", "$19", "2"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "pair of ear cuffs", "$12", "1"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "pair of earrings", "$13", "4"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "ring", "$15", "5"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "tie", "$9", "4"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "anklet", "$17", "3"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "bobby pin", "$1", "5"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "bow tie", "$8", "5"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "bracelet", "$14", "1"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "hairband", "$3", "5"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "necklace", "$19", "1"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "pair of ear cuffs", "$12", "5"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "pair of earrings", "$13", "2"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "ring", "$15", "3"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "tie", "$9", "2"]


                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Accessories & Price ",
                            "nameofheader": ["Accessories", "Price"],
                            "dataoftable": [["anklet", "$17"],
                            ["bobby pin", "$1"],
                            ["bow tie", "$8"],
                            ["bracelet", "$14"],
                            ["hairband", "$3"],
                            ["necklace", "$19"],
                            ["pair of ear cuffs", "$12"],
                            ["pair of earrings", "$13"],
                            ["ring", "$15"],
                            ["tie", "$9"]

                            ]
                        }
                    ]
                }
            ]
        }
    ], [
        {
            "nameoflession": "How much are you talking?",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---ACCESSORIES",
                                    "---PRICE",
                                    "---price"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "ACCESSORIES",
                                    "PRICE",
                                    "price"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?"
                                    ],
                                    "robotspeak": [
                                        "I’m just looking around, thanks."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "OK. Let me know if you need any help."
                                            ],
                                            "robotspeak": [
                                                "How much is this ---ACCESSORIES?",
                                                "How much does this ---ACCESSORIES cost?",
                                                "What’s the price of this ---ACCESSORIES?"
                                            ],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "It's ---PRICE."
                                                    ],
                                                    "robotspeak": [
                                                        "It's expensive. Can you give me a discount?",
                                                        "It's expensive. Can you lower the price?",
                                                        "It's expensive. You can’t go down on the price."
                                                    ],
                                                    "icon": "https://i.postimg.cc/RFrk4PwR/expensive.png",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "How much are you talking?",
                                                                "How much lower?",
                                                                "By how much?"
                                                            ],
                                                            "robotspeak": [
                                                                "I'll buy it for ---price."
                                                            ],
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
                                        }
                                    ]
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "OK"
                                    ],
                                    "robotspeak": [],
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---ACCESSORIES",
                        "---PRICE",
                        "---price"
                    ],
                    "DataInput": [["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "belt", "$15", "$13"],
                    ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "briefcase ", "$13", "$10"],
                    ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "cap", "$11", "$8"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "handbag ", "$19", "$14"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "hat", "$12", "$9"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "helmet", "$20", "$17"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "pair of glasses ", "$10", "$7"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "pair of gloves", "$8", "$5"],
                    ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "purse", "$14", "$11"],
                    ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "handbag ", "$19", "$17"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "watch", "$18", "$12"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "belt", "$15", "$10"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "briefcase ", "$13", "$9"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "cap", "$11", "$8"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "handbag ", "$19", "$15"],
                    ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "hat", "$12", "$10"],
                    ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "helmet", "$20", "$15"],
                    ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "pair of glasses ", "$10", "$6"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pair of gloves", "$8", "$6"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "cap", "$11", "$7"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "wallet", "$16", "$14"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "watch", "$18", "$11"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "belt", "$15", "$9"],
                    ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "briefcase ", "$13", "$8"],
                    ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "cap", "$11", "$5"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "watch", "$18", "$16"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "hat", "$12", "$10"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "helmet", "$20", "$16"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "pair of glasses ", "$10", "$9"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "pair of gloves", "$8", "$4"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Accessories & Price ",
                            "nameofheader": ["Accessories", "Price"],
                            "dataoftable": [
                                ["belt", "$15"],
                                ["briefcase ", "$13"],
                                ["cap", "$11"],
                                ["handbag ", "$19"],
                                ["hat", "$12"],
                                ["helmet", "$20"],
                                ["pair of glasses ", "$10"],
                                ["pair of gloves", "$8"],
                                ["purse", "$14"],
                                ["wallet", "$16"],
                                ["watch", "$18"]


                            ]
                        }
                    ]
                }
            ]
        }
    ]

    , [
        {
            "nameoflession": "Can you grow up a bit?",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---ACCESSORIES",
                                    "---price",
                                    "---FinalPrice"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "ACCESSORIES",
                                    "price",
                                    "FinalPrice"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "Do you need any help there?"
                                    ],
                                    "robotspeak": [
                                        "How much is this ---ACCESSORIES?",
                                        "How much does this ---ACCESSORIES cost?",
                                        "What’s the price of this ---ACCESSORIES?"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "It's ---PRICE."
                                            ],
                                            "robotspeak": [
                                                "That's expensive. Can you give me a discount?",
                                                "That's expensive. Can you lower the price?",
                                                "That's expensive. You can’t go down on the price."
                                            ],
                                            "icon": "https://i.postimg.cc/RFrk4PwR/expensive.png",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "How much are you talking?",
                                                        "How much lower?",
                                                        "By how much?"
                                                    ],
                                                    "robotspeak": [
                                                        "I'll buy it for ---price."
                                                    ],
                                                    "icon": "",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "It’s much lower than the asking price. Can you grow up a bit?"
                                                            ],
                                                            "robotspeak": [
                                                                "How about ---FinalPrice?"

                                                            ],
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
                                        }
                                    ]
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "OK. That's better"
                                    ],
                                    "robotspeak": [],
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---ACCESSORIES",
                        "---PRICE",
                        "---price",
                        "---FinalPrice"

                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "swimming cap ", "$15", "$9", "$11"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "pair of goggles", "$13", "$6", "$8"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "pair of sunglasses", "$11", "$5", "$6"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "straw hat", "$9", "$2", "$5"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "cap", "$8", "$3", "$4"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "hair clip", "$3", "$1", "$2"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "scrunchy", "$8", "$4", "$6"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "pair of flip flops", "$10", "$5", "$7"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "swimming cap ", "$15", "$7", "$9"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "pair of goggles", "$13", "$6", "$9"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "pair of sunglasses", "$11", "$5", "$8"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "straw hat", "$9", "$3", "$5"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "cap", "$8", "$3", "$4"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "hair clip", "$3", "$1", "$2"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "scrunchy", "$8", "$2", "$4"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "pair of flip flops", "$10", "$5", "$6"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "swimming cap ", "$15", "$8", "$11"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "pair of goggles", "$13", "$5", "$7"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pair of sunglasses", "$11", "$7", "$8"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "swimming cap ", "$15", "$9", "$10"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "cap", "$8", "$2", "$5"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "pair of goggles", "$13", "$6", "$8"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "scrunchy", "$8", "$2", "$5"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "pair of flip flops", "$10", "$5", "$7"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "swimming cap ", "$15", "$8", "$10"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pair of goggles", "$13", "$7", "$10"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "pair of sunglasses", "$11", "$3", "$5"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "swimming cap ", "$15", "$8", "$11"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "cap", "$8", "$2", "$4"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "pair of flip flops", "$10", "$5", "$7"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Accessories & Price ",
                            "nameofheader": ["Accessories", "Price"],
                            "dataoftable": [
                                ["swimming cap ", "$15"],
                                ["pair of goggles", "$13"],
                                ["pair of sunglasses", "$11"],
                                ["straw hat", "$9"],
                                ["cap", "$8"],
                                ["hair clip", "$3"],
                                ["scrunchy", "$8"],
                                ["pair of flip flops", "$10"]


                            ]
                        }
                    ]
                }
            ]
        }
    ], [
        {
            "nameoflession": "How would you like to pay?",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---ACCESSORIES",
                                    "---TOTAL",
                                    "---PAYMENT"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "ACCESSORIES",
                                    "TOTAL",
                                    "PAYMENT"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "Do you need any help there?"
                                    ],
                                    "robotspeak": [
                                        "How much is this ---ACCESSORIES?",
                                        "How much does this ---ACCESSORIES cost?",
                                        "What’s the price of this ---ACCESSORIES?"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "It's ---PRICE."
                                            ],
                                            "robotspeak": [
                                                "It's a bargain! I'll take ---QUANTITY. What's the total?"
                                            ],
                                            "icon": "https://i.postimg.cc/5NzM5rLq/happy.jpg",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "The total is ---TOTAL. How would you like to pay?",
                                                        "---TOTAL. Would you like to pay cash or by credit card?"
                                                    ],
                                                    "robotspeak": [
                                                        "---PAYMENT"
                                                    ],
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
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "OK."
                                    ],
                                    "robotspeak": [],
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---ACCESSORIES",
                        "---PRICE",
                        "---QUANTITY",
                        "---TOTAL",
                        "---PAYMENT"

                    ],
                    "DataInput": [["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "pair of socks", "$5", "5", "$25", "In cash"],
                    ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "pair of mittens", "$3", "4", "$12", "By credit card"],
                    ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "pair of earmuffs", "$4", "5", "$20", "In cash"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "beanie", "$9", "3", "$27", "By credit card"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "stocking cap", "$8", "4", "$32", "In cash"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "scraf", "$7", "2", "$14", "By credit card"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "pair of stockings", "$6", "2", "$12", "In cash"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "beret", "$8", "3", "$24", "By credit card"],
                    ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "pair of rain boots", "$10", "2", "$20", "In cash"],
                    ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "umbrella", "$7", "3", "$21", "By credit card"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "pair of socks", "$5", "3", "$15", "In cash"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "pair of mittens", "$3", "5", "$15", "By credit card"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "pair of earmuffs", "$4", "4", "$16", "In cash"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "beanie", "$9", "4", "$36", "By credit card"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "stocking cap", "$8", "2", "$16", "In cash"],
                    ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "scraf", "$7", "2", "$14", "By credit card"],
                    ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "pair of stockings", "$6", "3", "$18", "In cash"],
                    ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "beret", "$8", "5", "$40", "By credit card"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pair of rain boots", "$10", "3", "$30", "In cash"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "umbrella", "$7", "2", "$14", "By credit card"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "pair of socks", "$5", "3", "$15", "In cash"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "pair of mittens", "$3", "4", "$12", "By credit card"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "pair of earmuffs", "$4", "3", "$12", "In cash"],
                    ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "beanie", "$9", "2", "$18", "By credit card"],
                    ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "stocking cap", "$8", "4", "$32", "In cash"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "scraf", "$7", "3", "$21", "By credit card"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "pair of stockings", "$6", "2", "$12", "In cash"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "beret", "$8", "5", "$40", "By credit card"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "pair of rain boots", "$10", "4", "$40", "In cash"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "umbrella", "$7", "3", "$21", "By credit card"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Accessories, Price & Payment ",
                            "nameofheader": ["Accessories", "Price", "Payment"],
                            "dataoftable": [
                                ["pair of socks", "$5", "In cash"],
                                ["pair of mittens", "$3", "By credit card"],
                                ["pair of earmuffs", "$4", ""],
                                ["beanie", "$9", ""],
                                ["stocking cap", "$8", ""],
                                ["scraf", "$7", ""],
                                ["pair of stockings", "$6", ""],
                                ["beret", "$8", ""],
                                ["pair of rain boots", "$10", ""],
                                ["umbrella", "$7", ""]

                            ]
                        }
                    ]
                }
            ]
        }
    ], [
        {
            "nameoflession": "Review 1",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---SIZE"
                                ],
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---NUMBERSIZE"],
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---SYMBOL"]
                            ],
                            "submitsyntax": [
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "SIZE"
                                ],
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "NUMBERSIZE"],
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "SYMBOL"]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "What would you like to buy?"
                                    ],
                                    "robotspeak": [
                                        "I want to buy ---CLOTHES",
                                        "I'm looking for ---CLOTHES",
                                        "I’d like to buy ---CLOTHES",
                                        "Do you have any --- CLOTHES in stock?"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "Let me show you."
                                            ],
                                            "robotspeak": [],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": ["What do you think of these ---CLOTHES?. They're latest designs."],
                                                    "robotspeak": [
                                                        "Oh, I like them. Do you have these in a size ---NUMBERSIZE?",
                                                        "Oh, I like this one. Do you have these in ---SIZE?",
                                                        "Oh, I like them. Do you have these in a size ---SYMBOL?",
                                                        "Oh, I like this one. Have you got these in ---SIZE?",
                                                        "Oh, I like this one. Have you got these in a size ---NUMBERSIZE?",
                                                        "Oh, I like this one. Have you got these in a size ---SYMBOL?"
                                                    ],
                                                    "icon": "https://i.postimg.cc/Hkd6bkS2/smile.png",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "Yes. Here you are"
                                                            ],
                                                            "robotspeak": [
                                                                "Could I try the ---COLOUR ones?"
                                                            ],
                                                            "icon": "",
                                                            "function": {
                                                                "end_successfull": false,
                                                                "end_unsuccessfull": false
                                                            },
                                                            "handling_next": [
                                                                {
                                                                    "manspeak": [
                                                                        "Sure. The changing room is over there. What do they feel like?",
                                                                        "Sure. The changing room is over there. Do they feel comfortable?",
                                                                        "Sure. The changing room is over there. How do they feel?"
                                                                    ],
                                                                    "robotspeak": [
                                                                        "They’re just right. I’ll take them."
                                                                    ],
                                                                    "icon": "https://i.postimg.cc/Hkd6bkS2/smile.png",
                                                                    "function": {
                                                                        "end_successfull": false,
                                                                        "end_unsuccessfull": false
                                                                    },
                                                                    "handling_next": []
                                                                }
                                                            ]

                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Thank you."
                                    ],
                                    "robotspeak": [
                                        ""
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---CLOTHES",
                        "---COLOUR",
                        "---SIZE",
                        "---SYMBOL",
                        "---NUMBERSIZE"

                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "halternecks", "black", "an extra small", "XS", "29"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "shirts", "white", "an extra large", "XL", "42"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "tank tops", "blue", "a small", "S", "38"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "mini - skirts", "green", "a medium", "M", "29"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "sundresses", "red", "a large", "L", "32"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "blouses", "pink", "a medium", "M", "42"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "bathing costumes", "yellow", "a large", "L", "26"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "swimsuits", "purple", "an extra large", "XL", "34"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "crop tops", "orange", "an extra small", "XS", "38"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "sweatshirts", "brown", "a small", "S", "37"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "skirts", "black", "a large", "L", "38"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "bathing suits", "white", "an extra large", "XL", "27"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "cargidans", "blue", "a medium", "M", "40"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "swimming costumes", "green", "an extra small", "XS", "31"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "pairs of leggings", "red", "a small", "S", "29"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Anna", "dresses", "pink", "a large", "L", "42"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Helen", "suits", "yellow", "an extra large", "XL", "38"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Amy", "tracksuits", "purple", "a medium", "M", "37"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lily", "pairs of overalls", "orange", "an extra small", "XS", "40"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Betty", "jumpsuits", "brown", "a small", "S", "42"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "pairs of swimming trunks", "purple", "an extra small", "XS", "42"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "pairs of jeans", "white", "a large", "L", "36"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "waistcoats", "white", "a small", "S", "31"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pairs of shorts", "black", "an extra large", "XL", "44"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "jackets", "blue", "a medium", "M", "41"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "singlets", "yellow", "an extra small", "XS", "43"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "tees", "pink", "an extra large", "XL", "33"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "T-shirts", "black", "a small", "S", "34"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "polo shirts", "orange", "a medium", "M", "32"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "vests", "red", "a large", "L", "33"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pairs of trousers", "white", "a small", "S", "28"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "sweaters", "blue", "a large", "L", "30"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "hoodies", "green", "an extra large", "XL", "40"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "coats", "red", "a medium", "M", "42"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "pairs of pants", "pink", "an extra small", "XS", "31"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Andrew", "overcoats", "yellow", "a small", "S", "27"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Ryan", "pullovers", "purple", "a large", "L", "30"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "Eric", "anoraks", "orange", "an extra large", "XL", "41"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Dennis", "trench coats", "brown", "a medium", "M", "42"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Michael", "raincoats", "white", "an extra small", "XS", "26"]


                    ],
                    "Tabletool": [

                        {
                            "nameoftable": "Clothes, colour & size",
                            "nameofheader": ["Clothes", "Colour", "Size", "Symbol"],
                            "dataoftable":
                                [["halternecks", "black", "an extra small", "XS"],
                                ["shirts", "white", "a small", "S"],
                                ["tank tops", "blue", "a medium", "M"],
                                ["mini - skirts", "green", "a large", "L"],
                                ["sundresses", "red", "an extra large", "XL"],
                                ["blouses", "pink", "", ""],
                                ["bathing costumes", "yellow", "", ""],
                                ["swimsuits", "purple", "", ""],
                                ["crop tops", "orange", "", ""],
                                ["sweatshirts", "brown", "", ""],
                                ["skirts", "", "", ""],
                                ["bathing suits", "", "", ""],
                                ["cargidans", "", "", ""],
                                ["swimming costumes", "", "", ""],
                                ["pairs of leggings", "", "", ""],
                                ["dresses", "", "", ""],
                                ["suits", "", "", ""],
                                ["tracksuits", "", "", ""],
                                ["pairs of overalls", "", "", ""],
                                ["jumpsuits", "", "", ""],
                                ["pairs of swimming trunks", "", "", ""],
                                ["pairs of jeans", "", "", ""],
                                ["waistcoats", "", "", ""],
                                ["pairs of shorts", "", "", ""],
                                ["jackets", "", "", ""],
                                ["singlets", "", "", ""],
                                ["tees", "", "", ""],
                                ["T-shirts", "", "", ""],
                                ["polo shirts", "", "", ""],
                                ["vests", "", "", ""],
                                ["pairs of trousers", "", "", ""],
                                ["sweaters", "", "", ""],
                                ["hoodies", "", "", ""],
                                ["coats", "", "", ""],
                                ["pairs of pants", "", "", ""],
                                ["overcoats", "", "", ""],
                                ["pullovers", "", "", ""],
                                ["anoraks", "", "", ""],
                                ["trench coats", "", "", ""],
                                ["raincoats", "", "", ""]

                                ]
                        }
                    ]
                },
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---SIZE"
                                ],
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---NUMBERSIZE"],
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---SYMBOL"]
                            ],
                            "submitsyntax": [
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "SIZE"
                                ],
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "NUMBERSIZE"],
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "SYMBOL"]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "What would you like to buy?"
                                    ],
                                    "robotspeak": [
                                        "I want to buy ---CLOTHES",
                                        "I'm looking for ---CLOTHES",
                                        "I’d like to buy ---CLOTHES",
                                        "Do you have any --- CLOTHES in stock?"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "Let me show you."
                                            ],
                                            "robotspeak": [],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": ["What do you think of these ---CLOTHES?. They're latest designs."],
                                                    "robotspeak": [
                                                        "I don't like the colour. Do you have these in another colour",
                                                        "I don't like the colour. Have you got these in another colour?"
                                                    ],
                                                    "icon": "https://i.postimg.cc/wx5C37xF/sad.png",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "What colour do you like to wear?"
                                                            ],
                                                            "robotspeak": [
                                                                "I like ---COLOUR."
                                                            ],
                                                            "icon": "",
                                                            "function": {
                                                                "end_successfull": false,
                                                                "end_unsuccessfull": false
                                                            },
                                                            "handling_next": [
                                                                {
                                                                    "manspeak": [
                                                                        "Here you are."
                                                                    ],
                                                                    "robotspeak": [
                                                                        "Could I try these in a size ---NUMBERSIZE?",
                                                                        "Could I try these in a size ---SYMBOL?",
                                                                        "Could I try these in ---SIZE?"
                                                                    ],
                                                                    "icon": "",
                                                                    "function": {
                                                                        "end_successfull": false,
                                                                        "end_unsuccessfull": false
                                                                    },
                                                                    "handling_next": [
                                                                        {
                                                                            "manspeak": [
                                                                                "Sure. The changing room is over there. What do they feel like?",
                                                                                "Sure. The changing room is over there. Do they feel comfortable?",
                                                                                "Sure. The changing room is over there. How do they feel?"
                                                                            ],
                                                                            "robotspeak": [
                                                                                "They’re just right. I’ll take them."
                                                                            ],
                                                                            "icon": "https://i.postimg.cc/Hkd6bkS2/smile.png",
                                                                            "function": {
                                                                                "end_successfull": false,
                                                                                "end_unsuccessfull": false
                                                                            },
                                                                            "handling_next": []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Thank you."
                                    ],
                                    "robotspeak": [
                                        ""
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---CLOTHES",
                        "---COLOUR",
                        "---SIZE",
                        "---SYMBOL",
                        "---NUMBERSIZE"
                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "halternecks", "black", "an extra small", "XS", "29"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "shirts", "white", "an extra large", "XL", "42"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "tank tops", "blue", "a small", "S", "38"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "mini - skirts", "green", "a medium", "M", "29"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "sundresses", "red", "a large", "L", "32"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "blouses", "pink", "a medium", "M", "42"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "bathing costumes", "yellow", "a large", "L", "26"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "swimsuits", "purple", "an extra large", "XL", "34"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "crop tops", "orange", "an extra small", "XS", "38"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "sweatshirts", "brown", "a small", "S", "37"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "skirts", "black", "a large", "L", "38"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "bathing suits", "white", "an extra large", "XL", "27"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "cargidans", "blue", "a medium", "M", "40"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "swimming costumes", "green", "an extra small", "XS", "31"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "pairs of leggings", "red", "a small", "S", "29"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Anna", "dresses", "pink", "a large", "L", "42"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Helen", "suits", "yellow", "an extra large", "XL", "38"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Amy", "tracksuits", "purple", "a medium", "M", "37"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lily", "pairs of overalls", "orange", "an extra small", "XS", "40"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Betty", "jumpsuits", "brown", "a small", "S", "42"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "pairs of swimming trunks", "purple", "an extra small", "XS", "42"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "pairs of jeans", "white", "a large", "L", "36"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "waistcoats", "white", "a small", "S", "31"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pairs of shorts", "black", "an extra large", "XL", "44"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "jackets", "blue", "a medium", "M", "41"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "singlets", "yellow", "an extra small", "XS", "43"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "tees", "pink", "an extra large", "XL", "33"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "T-shirts", "black", "a small", "S", "34"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "polo shirts", "orange", "a medium", "M", "32"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "vests", "red", "a large", "L", "33"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pairs of trousers", "white", "a small", "S", "28"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "sweaters", "blue", "a large", "L", "30"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "hoodies", "green", "an extra large", "XL", "40"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "coats", "red", "a medium", "M", "42"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "pairs of pants", "pink", "an extra small", "XS", "31"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Andrew", "overcoats", "yellow", "a small", "S", "27"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Ryan", "pullovers", "purple", "a large", "L", "30"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "Eric", "anoraks", "orange", "an extra large", "XL", "41"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Dennis", "trench coats", "brown", "a medium", "M", "42"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Michael", "raincoats", "white", "an extra small", "XS", "26"]


                    ],
                    "Tabletool": [

                        {
                            "nameoftable": "",
                            "nameofheader": [""],
                            "dataoftable":
                                []
                        }
                    ]
                },
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---BIGGER/SMALLER"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "BIGGER/SMALLER"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "What would you like to buy?"
                                    ],
                                    "robotspeak": [
                                        "I want to buy ---CLOTHES",
                                        "I'm looking for ---CLOTHES",
                                        "I’d like to buy ---CLOTHES",
                                        "Do you have any --- CLOTHES in stock?"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "Let me show you."
                                            ],
                                            "robotspeak": [],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": ["What do you think of these ---CLOTHES?. They're latest designs."],
                                                    "robotspeak": [
                                                        "Oh, I like them. Do you have these in a size ---NUMBERSIZE?",
                                                        "Oh, I like this one. Do you have these in ---SIZE?",
                                                        "Oh, I like them. Do you have these in a size ---SYMBOL?",
                                                        "Oh, I like this one. Have you got these in ---SIZE?",
                                                        "Oh, I like this one. Have you got these in a size ---NUMBERSIZE?",
                                                        "Oh, I like this one. Have you got these in a size ---SYMBOL?"
                                                    ],
                                                    "icon": "https://i.postimg.cc/Hkd6bkS2/smile.png",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "Yes. Here you are"
                                                            ],
                                                            "robotspeak": [
                                                                "Could I try the ---COLOUR ones?"
                                                            ],
                                                            "icon": "",
                                                            "function": {
                                                                "end_successfull": false,
                                                                "end_unsuccessfull": false
                                                            },
                                                            "handling_next": [
                                                                {
                                                                    "manspeak": [
                                                                        "Sure. The changing room is over there. What do they feel like?",
                                                                        "Sure. The changing room is over there. Do they feel comfortable?",
                                                                        "Sure. The changing room is over there. How do they feel?"
                                                                    ],
                                                                    "robotspeak": [
                                                                        "They don't fit. They're much too ---NOTFIT. Do you have these in a ---BIGGER/SMALLER size?",
                                                                        "They don't fit. They're a little too ---NOTFIT. Do you have these in a ---BIGGER/SMALLER size?",
                                                                        "They don't fit. They're much too ---NOTFIT. Do you have these in a ---BIGGER/SMALLER size?",
                                                                        "They don't fit. They're a little too ---NOTFIT. Do you have these in a ---BIGGER/SMALLER size?"
                                                                    ],
                                                                    "icon": "https://i.postimg.cc/wx5C37xF/sad.png",
                                                                    "function": {
                                                                        "end_successfull": false,
                                                                        "end_unsuccessfull": false
                                                                    },
                                                                    "handling_next": []
                                                                }
                                                            ]

                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Yes, here you are."
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---CLOTHES",
                        "---COLOUR",
                        "---SIZE",
                        "---SYMBOL",
                        "---NUMBERSIZE",
                        "---NOTFIT",
                        "---BIGGER/SMALLER"
                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "halternecks", "black", "an extra small", "XS", "29", "small", "bigger"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "shirts", "white", "an extra large", "XL", "42", "big", "smaller"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "tank tops", "blue", "a small", "S", "38", "small", "bigger"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "mini - skirts", "green", "a medium", "M", "29", "big", "smaller"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "sundresses", "red", "a large", "L", "32", "small", "bigger"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "blouses", "pink", "a medium", "M", "42", "big", "smaller"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "bathing costumes", "yellow", "a large", "L", "26", "small", "bigger"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "swimsuits", "purple", "an extra large", "XL", "34", "big", "smaller"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "crop tops", "orange", "an extra small", "XS", "38", "small", "bigger"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "sweatshirts", "brown", "a small", "S", "37", "big", "smaller"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "skirts", "black", "a large", "L", "38", "small", "bigger"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "bathing suits", "white", "an extra large", "XL", "27", "big", "smaller"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "cargidans", "blue", "a medium", "M", "40", "small", "bigger"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "swimming costumes", "green", "an extra small", "XS", "31", "big", "smaller"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "pairs of leggings", "red", "a small", "S", "29", "small", "bigger"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Anna", "dresses", "pink", "a large", "L", "42", "big", "smaller"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Helen", "suits", "yellow", "an extra large", "XL", "38", "small", "bigger"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Amy", "tracksuits", "purple", "a medium", "M", "37", "big", "smaller"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lily", "pairs of overalls", "orange", "an extra small", "XS", "40", "small", "bigger"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Betty", "jumpsuits", "brown", "a small", "S", "42", "big", "smaller"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "pairs of swimming trunks", "purple", "an extra small", "XS", "42", "small", "bigger"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "pairs of jeans", "white", "a large", "L", "36", "big", "smaller"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "waistcoats", "white", "a small", "S", "31", "small", "bigger"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pairs of shorts", "black", "an extra large", "XL", "44", "big", "smaller"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "jackets", "blue", "a medium", "M", "41", "small", "bigger"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "singlets", "yellow", "an extra small", "XS", "43", "big", "smaller"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "tees", "pink", "an extra large", "XL", "33", "small", "bigger"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "T-shirts", "black", "a small", "S", "34", "big", "smaller"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "polo shirts", "orange", "a medium", "M", "32", "small", "bigger"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "vests", "red", "a large", "L", "33", "big", "smaller"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pairs of trousers", "white", "a small", "S", "28", "small", "bigger"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "sweaters", "blue", "a large", "L", "30", "big", "smaller"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "hoodies", "green", "an extra large", "XL", "40", "small", "bigger"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "coats", "red", "a medium", "M", "42", "big", "smaller"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "pairs of pants", "pink", "an extra small", "XS", "31", "small", "bigger"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Andrew", "overcoats", "yellow", "a small", "S", "27", "big", "smaller"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Ryan", "pullovers", "purple", "a large", "L", "30", "small", "bigger"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "Eric", "anoraks", "orange", "an extra large", "XL", "41", "big", "smaller"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Dennis", "trench coats", "brown", "a medium", "M", "42", "small", "bigger"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Michael", "raincoats", "white", "an extra small", "XS", "26", "big", "smaller"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "",
                            "nameofheader": [],
                            "dataoftable":
                                [

                                ]
                        }
                    ]

                },
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---CLOTHES",
                                    "---COLOUR",
                                    "---BIGGER/SMALLER"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "CLOTHES",
                                    "COLOUR",
                                    "BIGGER/SMALLER"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "What would you like to buy?"
                                    ],
                                    "robotspeak": [
                                        "I want to buy ---CLOTHES",
                                        "I'm looking for ---CLOTHES",
                                        "I’d like to buy ---CLOTHES",
                                        "Do you have any --- CLOTHES in stock?"
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "Let me show you."
                                            ],
                                            "robotspeak": [],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": ["What do you think of these ---CLOTHES?. They're latest designs."],
                                                    "robotspeak": [
                                                        "I don't like the colour. Do you have these in another colour",
                                                        "I don't like the colour. Have you got these in another colour?"
                                                    ],
                                                    "icon": "https://i.postimg.cc/wx5C37xF/sad.png",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "What colour do you like to wear?"
                                                            ],
                                                            "robotspeak": [
                                                                "I like ---COLOUR."
                                                            ],
                                                            "icon": "",
                                                            "function": {
                                                                "end_successfull": false,
                                                                "end_unsuccessfull": false
                                                            },
                                                            "handling_next": [
                                                                {
                                                                    "manspeak": [
                                                                        "Here you are."
                                                                    ],
                                                                    "robotspeak": [
                                                                        "Could I try these in a size ---NUMBERSIZE?",
                                                                        "Could I try these in a size ---SYMBOL?",
                                                                        "Could I try these in ---SIZE?"
                                                                    ],
                                                                    "icon": "",
                                                                    "function": {
                                                                        "end_successfull": false,
                                                                        "end_unsuccessfull": false
                                                                    },
                                                                    "handling_next": [
                                                                        {
                                                                            "manspeak": [
                                                                                "Sure. The changing room is over there. What do they feel like?",
                                                                                "Sure. The changing room is over there. Do they feel comfortable?",
                                                                                "Sure. The changing room is over there. How do they feel?"
                                                                            ],
                                                                            "robotspeak": [
                                                                                "They don't fit. They're much too ---NOTFIT. Do you have these in a ---BIGGER/SMALLER size?",
                                                                                "They don't fit. They're a little too ---NOTFIT. Do you have these in a ---BIGGER/SMALLER size?",
                                                                                "They don't fit. They're much too ---NOTFIT. Do you have these in a ---BIGGER/SMALLER size?",
                                                                                "They don't fit. They're a little too ---NOTFIT. Do you have these in a ---BIGGER/SMALLER size?"
                                                                            ],
                                                                            "icon": "https://i.postimg.cc/wx5C37xF/sad.png",
                                                                            "function": {
                                                                                "end_successfull": false,
                                                                                "end_unsuccessfull": false
                                                                            },
                                                                            "handling_next": []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },

                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Yes, here you are."
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---CLOTHES",
                        "---COLOUR",
                        "---SIZE",
                        "---SYMBOL",
                        "---NUMBERSIZE",
                        "---NOTFIT",
                        "---BIGGER/SMALLER"
                    ],
                    "DataInput": [
                        ["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "halternecks", "black", "an extra small", "XS", "29", "small", "bigger"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "shirts", "white", "an extra large", "XL", "42", "big", "smaller"],
                        ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "tank tops", "blue", "a small", "S", "38", "small", "bigger"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "mini - skirts", "green", "a medium", "M", "29", "big", "smaller"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "sundresses", "red", "a large", "L", "32", "small", "bigger"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "blouses", "pink", "a medium", "M", "42", "big", "smaller"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "bathing costumes", "yellow", "a large", "L", "26", "small", "bigger"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "swimsuits", "purple", "an extra large", "XL", "34", "big", "smaller"],
                        ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "crop tops", "orange", "an extra small", "XS", "38", "small", "bigger"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "sweatshirts", "brown", "a small", "S", "37", "big", "smaller"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "skirts", "black", "a large", "L", "38", "small", "bigger"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "bathing suits", "white", "an extra large", "XL", "27", "big", "smaller"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "cargidans", "blue", "a medium", "M", "40", "small", "bigger"],
                        ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "swimming costumes", "green", "an extra small", "XS", "31", "big", "smaller"],
                        ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "pairs of leggings", "red", "a small", "S", "29", "small", "bigger"],
                        ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Anna", "dresses", "pink", "a large", "L", "42", "big", "smaller"],
                        ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Helen", "suits", "yellow", "an extra large", "XL", "38", "small", "bigger"],
                        ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Amy", "tracksuits", "purple", "a medium", "M", "37", "big", "smaller"],
                        ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lily", "pairs of overalls", "orange", "an extra small", "XS", "40", "small", "bigger"],
                        ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Betty", "jumpsuits", "brown", "a small", "S", "42", "big", "smaller"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "pairs of swimming trunks", "purple", "an extra small", "XS", "42", "small", "bigger"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "pairs of jeans", "white", "a large", "L", "36", "big", "smaller"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "waistcoats", "white", "a small", "S", "31", "small", "bigger"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pairs of shorts", "black", "an extra large", "XL", "44", "big", "smaller"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "jackets", "blue", "a medium", "M", "41", "small", "bigger"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "singlets", "yellow", "an extra small", "XS", "43", "big", "smaller"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "tees", "pink", "an extra large", "XL", "33", "small", "bigger"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "T-shirts", "black", "a small", "S", "34", "big", "smaller"],
                        ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "polo shirts", "orange", "a medium", "M", "32", "small", "bigger"],
                        ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "vests", "red", "a large", "L", "33", "big", "smaller"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pairs of trousers", "white", "a small", "S", "28", "small", "bigger"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "sweaters", "blue", "a large", "L", "30", "big", "smaller"],
                        ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "hoodies", "green", "an extra large", "XL", "40", "small", "bigger"],
                        ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "coats", "red", "a medium", "M", "42", "big", "smaller"],
                        ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "pairs of pants", "pink", "an extra small", "XS", "31", "small", "bigger"],
                        ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Andrew", "overcoats", "yellow", "a small", "S", "27", "big", "smaller"],
                        ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Ryan", "pullovers", "purple", "a large", "L", "30", "small", "bigger"],
                        ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "Eric", "anoraks", "orange", "an extra large", "XL", "41", "big", "smaller"],
                        ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Dennis", "trench coats", "brown", "a medium", "M", "42", "small", "bigger"],
                        ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Michael", "raincoats", "white", "an extra small", "XS", "26", "big", "smaller"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "",
                            "nameofheader": [],
                            "dataoftable":
                                [

                                ]
                        }
                    ]

                }
            ]
        }
    ]
    , [
        {
            "nameoflession": "Review 2",
            "description": "...",
            "level": "Dễ",
            "followsubject": "Khóa học tháng 6-2021"
        },
        {
            "coerdataoflession": [
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---ACCESSORIES",
                                    "---PRICE",
                                    "---QUANTITY",
                                    "---TOTAL",
                                    "---PAYMENT"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "ACCESSORIES",
                                    "PRICE",
                                    "QUANTITY",
                                    "TOTAL",
                                    "PAYMENT"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "Do you need any help there?"
                                    ],
                                    "robotspeak": [
                                        "I'm just looking around, thanks.",
                                        "I'm just browsing, thanks."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "OK. Let me know if you need any help."
                                            ],
                                            "robotspeak": [
                                                "How much is this ---ACCESSORIES?",
                                                "How much does this ---ACCESSORIES cost?",
                                                "What’s the price of this ---ACCESSORIES?"
                                            ],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "It's ---PRICE."
                                                    ],
                                                    "robotspeak": [
                                                        "It's a bargain! I'll take ---QUANTITY. What's the total?"
                                                    ],
                                                    "icon": "https://i.postimg.cc/5NzM5rLq/happy.jpg",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "The total is ---TOTAL. How would you like to pay?",
                                                                "---TOTAL. Would you like to pay cash or by credit card?"
                                                            ],
                                                            "robotspeak": [
                                                                "---PAYMENT"
                                                            ],
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
                                        }
                                    ]
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "OK."
                                    ],
                                    "robotspeak": [],
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---ACCESSORIES",
                        "---PRICE",
                        "---QUANTITY",
                        "---TOTAL",
                        "---PAYMENT"

                    ],
                    "DataInput": [["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "anklet", "$17", "2", "$34", "In cash"],
                    ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "bobby pin", "$2", "2", "$4", "By credit card"],
                    ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "bow tie", "$8", "2", "$16", "In cash"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "bracelet", "$14", "4", "$56", "By credit card"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "hairband", "$3", "3", "$9", "In cash"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "necklace", "$19", "2", "$38", "By credit card"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "pair of ear cuffs", "$12", "5", "$60", "In cash"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "pair of earrings", "$13", "2", "$26", "By credit card"],
                    ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "ring", "$15", "5", "$75", "In cash"],
                    ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "tie", "$9", "2", "$18", "By credit card"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "belt", "$15", "5", "$75", "In cash"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "briefcase ", "$13", "3", "$39", "By credit card"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "cap", "$8", "2", "$16", "In cash"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "handbag ", "$19", "2", "$38", "By credit card"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "hat", "$12", "2", "$24", "In cash"],
                    ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Anna", "helmet", "$20", "3", "$60", "By credit card"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Helen", "pair of glasses ", "$10", "2", "$20", "In cash"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Amy", "pair of gloves", "$8", "3", "$24", "By credit card"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lily", "purse", "$14", "2", "$28", "In cash"],
                    ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Betty", "wallet", "$16", "3", "$48", "By credit card"],
                    ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "watch", "$18", "2", "$36", "In cash"],
                    ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "swimming cap ", "$15", "2", "$30", "By credit card"],
                    ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "pair of goggles", "$13", "2", "$26", "In cash"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pair of sunglasses", "$11", "4", "$44", "By credit card"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "straw hat", "$9", "2", "$18", "In cash"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "cap", "$8", "3", "$24", "By credit card"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "hair clip", "$3", "4", "$12", "In cash"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "scrunchy", "$8", "4", "$32", "By credit card"],
                    ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "pair of flip flops", "$10", "3", "$30", "In cash"],
                    ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "pair of socks", "$5", "3", "$15", "By credit card"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pair of mittens", "$3", "3", "$9", "In cash"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "pair of earmuffs", "$4", "4", "$16", "By credit card"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "beanie", "$9", "3", "$27", "In cash"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "stocking cap", "$8", "2", "$16", "By credit card"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "scraf", "$7", "3", "$21", "In cash"],
                    ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Andrew", "pair of stockings", "$6", "3", "$18", "By credit card"],
                    ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Ryan", "beret", "$8", "2", "$16", "In cash"],
                    ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "Eric", "pair of rain boots", "$10", "3", "$30", "By credit card"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Dennis", "umbrella", "$7", "5", "$35", "In cash"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Michael", "cap", "$8", "5", "$40", "By credit card"]


                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "Accessories, Price & Payment ",
                            "nameofheader": ["Accessories", "Price", "Payment"],
                            "dataoftable": [
                                ["anklet", "$17", "By credit card"],
                                ["beanie", "$9", "In cash"],
                                ["belt", "$15", ""],
                                ["beret", "$8", ""],
                                ["bobby pin", "$2", ""],
                                ["bow tie", "$8", ""],
                                ["bracelet", "$14", ""],
                                ["briefcase ", "$13", ""],
                                ["cap", "$8", ""],
                                ["hair clip", "$3", ""],
                                ["hairband", "$3", ""],
                                ["handbag ", "$19", ""],
                                ["hat", "$12", ""],
                                ["helmet", "$20", ""],
                                ["necklace", "$19", ""],
                                ["pair of ear cuffs", "$12", ""],
                                ["pair of earmuffs", "$4", ""],
                                ["pair of earrings", "$13", ""],
                                ["pair of flip flops", "$10", ""],
                                ["pair of glasses ", "$10", ""],
                                ["pair of gloves", "$8", ""],
                                ["pair of goggles", "$13", ""],
                                ["pair of mittens", "$3", ""],
                                ["pair of rain boots", "$10", ""],
                                ["pair of socks", "$5", ""],
                                ["pair of stockings", "$6", ""],
                                ["pair of sunglasses", "$11", ""],
                                ["purse", "$14", ""],
                                ["ring", "$15", ""],
                                ["scraf", "$7", ""],
                                ["scrunchy", "$8", ""],
                                ["stocking cap", "$8", ""],
                                ["straw hat", "$9", ""],
                                ["swimming cap ", "$15", ""],
                                ["tie", "$9", ""],
                                ["umbrella", "$7", ""],
                                ["wallet", "$16", ""],
                                ["watch", "$18", ""]


                            ]
                        }
                    ]
                },
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---ACCESSORIES",
                                    "---PRICE",
                                    "---QUANTITY",
                                    "---TOTAL",
                                    "---PAYMENT"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "ACCESSORIES",
                                    "PRICE",
                                    "QUANTITY",
                                    "TOTAL",
                                    "PAYMENT"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "Do you need any help there?"
                                    ],
                                    "robotspeak": [
                                        "I'm just looking around, thanks.",
                                        "I'm just browsing, thanks."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "OK. Let me know if you need any help."
                                            ],
                                            "robotspeak": [
                                                "How much is this ---ACCESSORIES?",
                                                "How much does this ---ACCESSORIES cost?",
                                                "What’s the price of this ---ACCESSORIES?"
                                            ],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "It's ---PRICE."
                                                    ],
                                                    "robotspeak": [
                                                        "It's very cheap!"
                                                    ],
                                                    "icon": "https://i.postimg.cc/wvYBSxGW/cheap.jpg",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "It's cheap but good."
                                                            ],
                                                            "robotspeak": [
                                                                "I'll take ---QUANTITY. What's the total?"
                                                            ],
                                                            "icon": "",
                                                            "function": {
                                                                "end_successfull": false,
                                                                "end_unsuccessfull": false
                                                            },
                                                            "handling_next": [
                                                                {
                                                                    "manspeak": [
                                                                        "The total is ---TOTAL. How would you like to pay?",
                                                                        "---TOTAL. Would you like to pay cash or by credit card?"
                                                                    ],
                                                                    "robotspeak": ["---PAYMENT"],
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
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "OK."
                                    ],
                                    "robotspeak": [],
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---ACCESSORIES",
                        "---PRICE",
                        "---QUANTITY",
                        "---TOTAL",
                        "---PAYMENT"

                    ],
                    "DataInput": [["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "anklet", "$17", "2", "$34", "In cash"],
                    ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "bobby pin", "$2", "2", "$4", "By credit card"],
                    ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "bow tie", "$8", "2", "$16", "In cash"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "bracelet", "$14", "4", "$56", "By credit card"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "hairband", "$3", "3", "$9", "In cash"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "necklace", "$19", "2", "$38", "By credit card"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "pair of ear cuffs", "$12", "5", "$60", "In cash"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "pair of earrings", "$13", "2", "$26", "By credit card"],
                    ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "ring", "$15", "5", "$75", "In cash"],
                    ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "tie", "$9", "2", "$18", "By credit card"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "belt", "$15", "5", "$75", "In cash"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "briefcase ", "$13", "3", "$39", "By credit card"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "cap", "$8", "2", "$16", "In cash"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "handbag ", "$19", "2", "$38", "By credit card"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "hat", "$12", "2", "$24", "In cash"],
                    ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Anna", "helmet", "$20", "3", "$60", "By credit card"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Helen", "pair of glasses ", "$10", "2", "$20", "In cash"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Amy", "pair of gloves", "$8", "3", "$24", "By credit card"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lily", "purse", "$14", "2", "$28", "In cash"],
                    ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Betty", "wallet", "$16", "3", "$48", "By credit card"],
                    ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "watch", "$18", "2", "$36", "In cash"],
                    ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "swimming cap ", "$15", "2", "$30", "By credit card"],
                    ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "pair of goggles", "$13", "2", "$26", "In cash"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pair of sunglasses", "$11", "4", "$44", "By credit card"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "straw hat", "$9", "2", "$18", "In cash"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "cap", "$8", "3", "$24", "By credit card"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "hair clip", "$3", "4", "$12", "In cash"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "scrunchy", "$8", "4", "$32", "By credit card"],
                    ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "pair of flip flops", "$10", "3", "$30", "In cash"],
                    ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "pair of socks", "$5", "3", "$15", "By credit card"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pair of mittens", "$3", "3", "$9", "In cash"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "pair of earmuffs", "$4", "4", "$16", "By credit card"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "beanie", "$9", "3", "$27", "In cash"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "stocking cap", "$8", "2", "$16", "By credit card"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "scraf", "$7", "3", "$21", "In cash"],
                    ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Andrew", "pair of stockings", "$6", "3", "$18", "By credit card"],
                    ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Ryan", "beret", "$8", "2", "$16", "In cash"],
                    ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "Eric", "pair of rain boots", "$10", "3", "$30", "By credit card"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Dennis", "umbrella", "$7", "5", "$35", "In cash"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Michael", "cap", "$8", "5", "$40", "By credit card"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "",
                            "nameofheader": [],
                            "dataoftable": []
                        }
                    ]
                },
                {
                    "template": {
                        "total": {
                            "image": "---AVATAR",
                            "status": true,
                            "gender": "---GENDER",
                            "submit": [
                                [
                                    "---ACCESSORIES",
                                    "---FinalPrice",
                                    "---QUANTITY",
                                    "---TOTAL",
                                    "---PAYMENT"
                                ]
                            ],
                            "submitsyntax": [
                                [
                                    "ACCESSORIES",
                                    "FinalPrice",
                                    "QUANTITY",
                                    "TOTAL",
                                    "PAYMENT"
                                ]
                            ],
                            "robotspeakfirst": [
                                "Hi.",
                                "Hello."
                            ]
                        },
                        "begin": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "Hello what is your name? "
                                    ],
                                    "robotspeak": [
                                        "My name is ---NAME",
                                        " I am ---NAME "
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
                                        "What do you want to buy?",
                                        "Can I help you?",
                                        "May I help you?",
                                        "How can I help you?",
                                        "Do you need any help there?"
                                    ],
                                    "robotspeak": [
                                        "I'm just looking around, thanks.",
                                        "I'm just browsing, thanks."
                                    ],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": [
                                        {
                                            "manspeak": [
                                                "OK. Let me know if you need any help."
                                            ],
                                            "robotspeak": [
                                                "How much is this ---ACCESSORIES?",
                                                "How much does this ---ACCESSORIES cost?",
                                                "What’s the price of this ---ACCESSORIES?"
                                            ],
                                            "icon": "",
                                            "function": {
                                                "end_successfull": false,
                                                "end_unsuccessfull": false
                                            },
                                            "handling_next": [
                                                {
                                                    "manspeak": [
                                                        "It's ---PRICE."
                                                    ],
                                                    "robotspeak": [
                                                        "It's expensive!"
                                                    ],
                                                    "icon": "https://i.postimg.cc/RFrk4PwR/expensive.png",
                                                    "function": {
                                                        "end_successfull": false,
                                                        "end_unsuccessfull": false
                                                    },
                                                    "handling_next": [
                                                        {
                                                            "manspeak": [
                                                                "I give you a 10% discount.",
                                                                "It’s discounted by 10%.",
                                                                "It has a 10% discount."
                                                            ],
                                                            "robotspeak": [
                                                                "What is the price after the discount?"
                                                            ],
                                                            "icon": "",
                                                            "function": {
                                                                "end_successfull": false,
                                                                "end_unsuccessfull": false
                                                            },
                                                            "handling_next": [
                                                                {
                                                                    "manspeak": [
                                                                        "It's ---price."
                                                                    ],
                                                                    "robotspeak": ["Still expensive."],
                                                                    "icon": "https://i.postimg.cc/wx5C37xF/sad.png",
                                                                    "function": {
                                                                        "end_successfull": false,
                                                                        "end_unsuccessfull": false
                                                                    },
                                                                    "handling_next": [
                                                                        {
                                                                            "manspeak": [
                                                                                "How much are you talking?",
                                                                                "How much lower?",
                                                                                "By how much?"
                                                                            ],
                                                                            "robotspeak": [
                                                                                "I'll buy it for ---FinalPrice."
                                                                            ],
                                                                            "icon": "",
                                                                            "function": {
                                                                                "end_successfull": false,
                                                                                "end_unsuccessfull": false
                                                                            },
                                                                            "handling_next": [
                                                                                {
                                                                                    "manspeak": [
                                                                                        "OK. You get a bargain!"
                                                                                    ],
                                                                                    "robotspeak": [
                                                                                        "I'll take ---QUANTITY. What's the total?"

                                                                                    ],
                                                                                    "icon": "",
                                                                                    "function": {
                                                                                        "end_successfull": false,
                                                                                        "end_unsuccessfull": false
                                                                                    },
                                                                                    "handling_next": [
                                                                                        {
                                                                                            "manspeak": [
                                                                                                "The total is ---TOTAL. How would you like to pay?",
                                                                                                "---TOTAL. Would you like to pay cash or by credit card?"
                                                                                            ],
                                                                                            "robotspeak": ["---PAYMENT"],
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
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "end": {
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "OK."
                                    ],
                                    "robotspeak": [],
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
                        "---AVATAR",
                        "---GENDER",
                        "---NAME",
                        "---ACCESSORIES",
                        "---PRICE",
                        "---price",
                        "---FinalPrice",
                        "---QUANTITY",
                        "---TOTAL",
                        "---PAYMENT"

                    ],
                    "DataInput": [["https://i.postimg.cc/K81pjcZz/wm.png", "female", "Elizabeth", "anklet", "$17", "$15.3", "$13", "2", "$26", "By credit card"],
                    ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Jennifer", "bobby pin", "$2", "$1.8", "$1.2", "2", "$2.4", "In cash"],
                    ["https://i.postimg.cc/sfKTJGxx/wm-1.png", "female", "Emily", "bow tie", "$8", "$7.2", "$6", "2", "$12", "By credit card"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Emma", "bracelet", "$14", "$12.6", "$11", "4", "$44", "In cash"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Jessica", "hairband", "$3", "$2.7", "$2", "3", "$6", "By credit card"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Laura", "necklace", "$19", "$17.1", "$15", "2", "$30", "In cash"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Linda", "pair of ear cuffs", "$12", "$10.8", "$9.1", "5", "$45.5", "By credit card"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Maria", "pair of earrings", "$13", "$11.7", "$8", "2", "$16", "In cash"],
                    ["https://i.postimg.cc/02spjH9y/women4.jpg", "female", "Rebecca", "ring", "$15", "$13.5", "$12", "5", "$60", "By credit card"],
                    ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Sarah", "tie", "$9", "$8.1", "$7", "2", "$14", "In cash"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Susan", "belt", "$15", "$13.5", "$10.5", "5", "$52.5", "By credit card"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Karen", "briefcase ", "$13", "$11.7", "$10", "3", "$30", "In cash"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lisa", "cap", "$8", "$7.2", "$7", "2", "$14", "By credit card"],
                    ["https://i.postimg.cc/wMKDhwJF/women2.png", "female", "Nancy", "handbag ", "$19", "$17.1", "$15.8", "2", "$31.6", "In cash"],
                    ["https://i.postimg.cc/tCNFxtgt/women3.jpg", "female", "Carol", "hat", "$12", "$10.8", "$7.4", "2", "$14.8", "By credit card"],
                    ["https://i.postimg.cc/Jz7ZcDDw/women5.jpg", "female", "Anna", "helmet", "$20", "$18", "$14", "3", "$42", "In cash"],
                    ["https://i.postimg.cc/MGRs0sfJ/wm3.jpg", "female", "Helen", "pair of glasses ", "$10", "$9", "$8", "2", "$16", "By credit card"],
                    ["https://i.postimg.cc/K8CqMXz5/wm4.jpg", "female", "Amy", "pair of gloves", "$8", "$7.2", "$5.1", "3", "$15.3", "In cash"],
                    ["https://i.postimg.cc/MGvBNCmd/women1.jpg", "female", "Lily", "purse", "$14", "$12.6", "$11", "2", "$22", "By credit card"],
                    ["https://i.postimg.cc/7hBXPdd0/wm5.jpg", "female", "Betty", "wallet", "$16", "$14.4", "$12", "3", "$36", "In cash"],
                    ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Brian", "watch", "$18", "$16.2", "$13.6", "2", "$27.2", "By credit card"],
                    ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Christopher", "swimming cap ", "$15", "$13.5", "$11", "2", "$22", "In cash"],
                    ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "David", "pair of goggles", "$13", "$11.7", "$8.7", "2", "$17.4", "By credit card"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Daniel", "pair of sunglasses", "$11", "$9.9", "$7", "4", "$28", "In cash"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Brian", "straw hat", "$9", "$8.1", "$5.8", "2", "$11.6", "By credit card"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "John", "cap", "$8", "$7.2", "$6", "3", "$18", "In cash"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "James", "hair clip", "$3", "$2.7", "$0.8", "4", "$3.2", "By credit card"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Kevin", "scrunchy", "$8", "$7.2", "$4.3", "4", "$17.2", "In cash"],
                    ["https://i.postimg.cc/J7JN1WVF/man4.png", "male", "Mark", "pair of flip flops", "$10", "$9", "$6", "3", "18'$", "By credit card"],
                    ["https://i.postimg.cc/mgdMdLCP/man5.png", "male", "Matthew", "pair of socks", "$5", "$4.5", "$3", "3", "$9", "In cash"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Robert", "pair of mittens", "$3", "$2.7", "$2", "3", "$6", "By credit card"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Jack", "pair of earmuffs", "$4", "$3.6", "$3", "4", "$12", "In cash"],
                    ["https://i.postimg.cc/d0pCY5Wv/man1.png", "male", "Petter", "beanie", "$9", "$8.1", "$7.1", "3", "$21.3", "By credit card"],
                    ["https://i.postimg.cc/SRWCVcf4/man2.png", "male", "Paul", "stocking cap", "$8", "$7.2", "$6", "2", "$12", "In cash"],
                    ["https://i.postimg.cc/hjmdPVwm/man3.jpg", "male", "Jason", "scraf", "$7", "$6.3", "$5", "3", "$15", "By credit card"],
                    ["https://i.postimg.cc/1RKjYYC9/m.png", "male", "Andrew", "pair of stockings", "$6", "$5.4", "$4.8", "3", "$14.4", "In cash"],
                    ["https://i.postimg.cc/Tw6ttrnL/m-2.jpg", "male", "Ryan", "beret", "$8", "$7.2", "$6", "2", "$12", "By credit card"],
                    ["https://i.postimg.cc/q7CFbJYY/m3.png", "male", "Eric", "pair of rain boots", "$10", "$9", "$8.1", "3", "$24.3", "In cash"],
                    ["https://i.postimg.cc/BQYwJPfk/m4.jpg", "male", "Dennis", "umbrella", "$7", "$6.3", "$5.2", "5", "$26", "By credit card"],
                    ["https://i.postimg.cc/C5w6xj1T/m5.jpg", "male", "Michael", "cap", "$8", "$7.2", "$6", "5", "$30", "In cash"]

                    ],
                    "Tabletool": [
                        {
                            "nameoftable": "",
                            "nameofheader": [],
                            "dataoftable": []
                        }
                    ]
                }
            ]
        }
    ]
]