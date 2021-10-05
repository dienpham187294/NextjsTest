import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)).concat(JSON.parse(JSON.stringify(ArrPeple))));



let Data_arrFastFood = [
    {
        "name": "Jelly",
        "input": "https://i.postimg.cc/4x5hG5Y0/Jelly.jpg"
    },
    {
        "name": "Mashed Potatoes",
        "input": "https://i.postimg.cc/TPNLL3qq/Mashed-Potatoes.jpg"
    },
    {
        "name": "Meatballs",
        "input": "https://i.postimg.cc/9X7R0V4Z/Meatballs.jpg"
    },
    {
        "name": "Mixed Vegetables",
        "input": "https://i.postimg.cc/Hs0r029L/Mixed-Vegetables.jpg"
    },
    {
        "name": "Mustard",
        "input": "https://i.postimg.cc/sDCBZ8S8/Mustard.jpg"
    },
    {
        "name": "Pancakes",
        "input": "https://i.postimg.cc/fRBkpRFn/Pancakes.jpg"
    },
    {
        "name": "Pickle",
        "input": "https://i.postimg.cc/9QWrL7LY/Pickle.jpg"
    },
    {
        "name": "Pizza",
        "input": "https://i.postimg.cc/FKz14Q5f/Pizza.jpg"
    },
    {
        "name": "Pork Chops",
        "input": "https://i.postimg.cc/25tyjXr0/Pork-Chops.jpg"
    },
    {
        "name": "Potato Chips",
        "input": "https://i.postimg.cc/mDFDPNrB/Potato-Chips.jpg"
    },
    {
        "name": "Roll",
        "input": "https://i.postimg.cc/5ydtLYHv/Roll.jpg"
    },
    {
        "name": "Salad Dressing",
        "input": "https://i.postimg.cc/7h3ZVH7R/Salad-Dressing.jpg"
    },
    {
        "name": "Spaghetti",
        "input": "https://i.postimg.cc/5NJ0tzWW/Spaghetti.jpg"
    },
    {
        "name": "Steak",
        "input": "https://i.postimg.cc/mZCkRwqS/Steak.jpg"
    },
    {
        "name": "Strawberry Shortcake",
        "input": "https://i.postimg.cc/g2k2VP0M/Strawberry-Shortcake.jpg"
    },
    {
        "name": "Sundae",
        "input": "https://i.postimg.cc/x1xTgFJ9/Sundae.jpg"
    },
    {
        "name": "syrup",
        "input": "https://i.postimg.cc/Wb74q4sF/syrup.jpg"
    },
    {
        "name": "Taco",
        "input": "https://i.postimg.cc/0Nz54dDD/Taco.jpg"
    },
    {
        "name": "Toast",
        "input": "https://i.postimg.cc/1t6mmmWz/Toast.jpg"
    },
    {
        "name": "Tossed Salad",
        "input": "https://i.postimg.cc/fb1WQtfF/Tossed-Salad.jpg"
    },
    {
        "name": "Bacon",
        "input": "https://i.postimg.cc/zvFqhdYZ/Bacon.jpg"
    },
    {
        "name": "Baked Beans",
        "input": "https://i.postimg.cc/xjvfBdJx/Baked-Beans.jpg"
    },
    {
        "name": "Baked Potato",
        "input": "https://i.postimg.cc/NfQstwRg/Baked-Potato.jpg"
    },
    {
        "name": "Beef Stew",
        "input": "https://i.postimg.cc/LsgRD4FV/Beef-Stew.png"
    },
    {
        "name": "Biscuit",
        "input": "https://i.postimg.cc/fT5wTgvY/Biscuit.jpg"
    },
    {
        "name": "Bun",
        "input": "https://i.postimg.cc/13jsDn2t/Bun.jpg"
    },
    {
        "name": "Butter",
        "input": "https://i.postimg.cc/Gm2bBJMV/Butter.jpg"
    },
    {
        "name": "Coffee",
        "input": "https://i.postimg.cc/PqXrMnr3/Coffee.jpg"
    },
    {
        "name": "Cookie",
        "input": "https://i.postimg.cc/7LKPst5x/Cookie.jpg"
    },
    {
        "name": "Egg Roll",
        "input": "https://i.postimg.cc/xC7fYkGh/Egg-Roll.jpg"
    },
    {
        "name": "Egg",
        "input": "https://i.postimg.cc/xC7fYkGh/Egg-Roll.jpg"
    },
    {
        "name": "French-Fries",
        "input": "https://i.postimg.cc/dQbCjDM5/French-Fries.png"
    },
    {
        "name": "Fried Chicken",
        "input": "https://i.postimg.cc/447tcV0K/Fried-Chicken.jpg"
    },
    {
        "name": "hamburger",
        "input": "https://i.postimg.cc/Dm37JtMc/hamburger.jpg"
    },
    {
        "name": "Hot Dog",
        "input": "https://i.postimg.cc/HnypLpBx/Hot-Dog.jpg"
    },
    {
        "name": "Ice Cream Cone",
        "input": "https://i.postimg.cc/cLZ8PjLY/Ice-Cream-Cone.jpg"
    }
]
let arrFastFood1 = []
Data_arrFastFood.forEach(e => {
    arrFastFood1.push(e.input)
})

let arrTenNam1 = [
    "Liam",
    "Noah",
    "Oliver",
    "Elijah",
    "William",
    "James",
    "Benjamin",
    "Lucas",
    "Henry",
    "Alexander",
]
let arrHinhNam = [
    "https://i.postimg.cc/d0pCY5Wv/man1.png",
    "https://i.postimg.cc/SRWCVcf4/man2.png",
    "https://i.postimg.cc/hjmdPVwm/man3.jpg",
    "https://i.postimg.cc/J7JN1WVF/man4.png",
    "https://i.postimg.cc/mgdMdLCP/man5.png"
]
let arrTenNam = []
arrTenNam1.forEach((e) => {
    arrTenNam.push({
        "input": e,
        "output": [
            "My name is " + e,
            "I am " + e
        ]
    })
})
let arrTenNu1 = [
    "Olivia",
    "Emma",
    "Ava",
    "Charlotte",
    "Sophia",
    "Amelia",
    "Isabella",
    "Mia",
    "Evelyn",
    "Harper",
]
let arrHinhNu = [
    "https://i.postimg.cc/MGvBNCmd/women1.jpg",
    "https://i.postimg.cc/wMKDhwJF/women2.png",
    "https://i.postimg.cc/tCNFxtgt/women3.jpg",
    "https://i.postimg.cc/02spjH9y/women4.jpg",
    "https://i.postimg.cc/Jz7ZcDDw/women5.jpg",
]
let arrTenNu = []
arrTenNu1.forEach((e, i) => {
    arrTenNu.push({
        "input": e,
        "output": [
            "My name is " + e,
            "I am " + e
        ]
    })
})
let arrNgheNghiep1 = [
    "Electrician.",
    "Registered nurse.",
    "Marketing specialist.",
    "Police officer.",
    "Truck Driver.",
    "Operations manager.",
    "Lawyer.",
    "Software developer.",
]
let arrNgheNghiep = []
arrNgheNghiep1.forEach(e => {
    arrNgheNghiep.push(
        {
            "input": e,
            "output": [
                "I am work as a " + e,
                "My job is " + e
            ]
        }
    )
})


let arrDiaChi1 = [
    "777 Brockton Avenue.",
    "30 Memorial Drive.",
    "250 Hartford Avenue.",
    "700 Oak Street.",
    "66-4 Parkhurst Road.",
    "591 Memorial Drive.",
    "55 Brooksby Village Way.",
    "137 Teaticket Highway.",
    "42 Fairhaven Commons Way.",
    "374 William S Canning boulevard.",
    "121 Worcester Road.",
    "677 Timpany boulevard.",
    "337 Russell Street.",
    "295 Plymouth Street.",
]

let arrDiaChi = []

arrDiaChi1.forEach(e => {
    arrDiaChi.push(
        {
            "input": e,
            "output": ["My address is " + e, e]
        }
    )
})

let arrSophone1 = [
    "1 2 6 5 8",
    "2 6 8 8 5",
    "2 6 5 8 4",
    "5 6 9 8 5",
    "5 9 8 5 6",
    "2 3 5 6 4",
    "3 6 5 4 1",
    "2 6 5 8 4",
    "2 3 6 5 8",
    "2 3 6 5 9",
    "3 6 9 8 5",
    "2 3 6 5 8",
]

let arrSophone = []
arrSophone1.forEach(e => {
    arrSophone.push(
        {
            "input": e,
            "output": ["My phone number is " + e, e]
        }
    )
})
let arrNoiO1 = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Montgomery",
    "Juneau",
    "Phoenix",
    "Little Rock",
    "Sacramento",
    "Denver",
    "Hartford",
]
let arrNoiO = []
arrNoiO1.forEach(e => {
    arrNoiO.push({
        "input": e,
        "output": [
            "I live in " + e
        ]
    })
})
let arrDaKetHonHayChua1 = ["Married", "Not_yet"]
let arrDaKetHonHayChua = [
    {
        "input": "Married",
        "output": [
            "I’m married."
        ]
    },
    {
        "input": "Not_yet",
        "output": [
            "I’m single."
        ]
    }
]

let arrSoCon1 = ["0", "1", "2"]
let arrSoCon = [
    {
        "input": "0",
        "output": [
            "I do not have any children."
        ],
        "handlingNext": {
            "manspeak": [
                "How many children do you have?"
            ],
            "robotspeak": [
                "I do not have any children."
            ],
            "icon": "",
            "function": {
                "end_successfull": false,
                "end_unsuccessfull": false
            },
            "handling_next": []
        }
    },
    {
        "input": "1",
        "output": [
            "I have 1 children.",
            "I have 1."
        ],
        "handlingNext": {
            "manspeak": [
                "How many children do you have?"
            ],
            "robotspeak": [
                "I have 1 children.",
                "I have 1."
            ],
            "icon": "",
            "function": {
                "end_successfull": false,
                "end_unsuccessfull": false
            },
            "handling_next": []
        }
    },
    {
        "input": "2",
        "output": [
            "I have 2 children.",
            "I have 2."
        ],
        "handlingNext": {
            "manspeak": [
                "How many children do you have?"
            ],
            "robotspeak": [
                "I have 2 children.",
                "I have 2."
            ],
            "icon": "",
            "function": {
                "end_successfull": false,
                "end_unsuccessfull": false
            },
            "handling_next": []
        }
    },
]

let tuoi1 = [
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
];
let tuoi = []
tuoi1.forEach(e => {
    tuoi.push(
        {
            "input": e,
            "output": [
                "I am " + e,
                "My age is " + e
            ]
        }
    )
})

let cobantraihaychua1 = ["Have a boyfriend", "Do not have a boyfriend"]
let arrCobantraihaychua = [
    {
        "input": "Have a boyfriend",
        "output": "I have a boyfriend.",
        "handlingNext": {
            "manspeak": [
                "Do you have a boyfriend?"
            ],
            "robotspeak": [
                "I have a boyfriend."
            ],
            "icon": "",
            "function": {
                "end_successfull": false,
                "end_unsuccessfull": false
            },
            "handling_next": []
        }
    },
    {
        "input": "Do not have a boyfriend",
        "output": "I’m not dating anyone.",
        "handlingNext": {
            "manspeak": [
                "Do you have a boyfriend?"
            ],
            "robotspeak": [
                "I’m not dating anyone."
            ],
            "icon": "",
            "function": {
                "end_successfull": false,
                "end_unsuccessfull": false
            },
            "handling_next": []
        }
    }
]



function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}

let DataTable = [
    arrTenNam1.concat(arrTenNu1, arrNgheNghiep1),
    arrNoiO1.concat(arrDiaChi1, arrSophone1),
    tuoi1.concat(arrDaKetHonHayChua1, arrSoCon1, cobantraihaychua1),
    arrFastFood1
]

function Fnperson(Arr, DataTable) {
    let person = {
        "total": {
            "image": Arr.img,
            "status": true,
            "gender": Arr.gender,
            "submit": [
                Arr.Submit
            ],
            "submitsyntax": [
                [
                    "Yêu cầu 1: ",
                    " 2: ",
                    " 3: ",
                    " 4: ",
                    " 5: ",
                    " 6: ",
                    " 7: ",
                    " 8: ",
                ]
            ],
            "Tabletool": [
                {
                    "indexToSubmit": 0,
                    "dataoftable": DataTable
                }
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
                        "Hi, how are you?"
                    ],
                    "robotspeak": [
                        "I'm good",
                        "Good"
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
                    "robotspeak": Arr.WhatisyournameOutput,
                    "icon": "",
                    "function": {
                        "end_successfull": false,
                        "end_unsuccessfull": false
                    },
                    "handling_next": [
                        {
                            "manspeak": [
                                "What’s your favorite food?"
                            ],
                            "robotspeak": ["My favorite food is " + Arr.favoriteFood],
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
                        "What do you do?"
                    ],
                    "robotspeak": Arr.WhatdoyoudoOutput,
                    "icon": "",
                    "function": {
                        "end_successfull": false,
                        "end_unsuccessfull": false
                    },
                    "handling_next": [
                        {
                            "manspeak": [
                                "Where do you live?"
                            ],
                            "robotspeak": Arr.WheredoyouliveOutput,
                            "icon": "",
                            "function": {
                                "end_successfull": false,
                                "end_unsuccessfull": false
                            },
                            "handling_next": [
                                {
                                    "manspeak": [
                                        "What is your address?"
                                    ],
                                    "robotspeak": Arr.Whatisyouraddress,
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                },
                                {
                                    "manspeak": [
                                        "What is your phone number?"
                                    ],
                                    "robotspeak": Arr.Whatisyourphonenumber,
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                }
                            ]
                        },
                    ]
                },
                {
                    "manspeak": [
                        "How old are you?",
                    ],
                    "robotspeak": Arr.Howoldareyou,
                    "icon": "",
                    "function": {
                        "end_successfull": false,
                        "end_unsuccessfull": false
                    },
                    "handling_next": [
                        {
                            "manspeak": [
                                "Are you married?"
                            ],
                            "robotspeak": Arr.AreyoumarriedOutput,
                            "icon": "",
                            "function": {
                                "end_successfull": false,
                                "end_unsuccessfull": false
                            },
                            "handling_next": Arr.HandlingNext1
                        }
                    ]
                },
            ]
        },
        "end": null
    }

    return person
}


let coerdataoflession = []

for (let i = 0; i < 15; i++) {
    let submitArr = [];

    let GetNamei = GETRANDOMi(arrTenNam)
    submitArr.push(arrTenNam[GetNamei].input)

    let GetJobi = GETRANDOMi(arrNgheNghiep)
    submitArr.push(arrNgheNghiep[GetJobi].input)

    let Getlivei = GETRANDOMi(arrNoiO)
    submitArr.push(arrNoiO[Getlivei].input)


    let Get_i_arrDiaChi = GETRANDOMi(arrDiaChi)
    // submitArr.push(arrNoiO[Getlivei].input)

    let Get_i_arrSophone1 = GETRANDOMi(arrSophone1)
    // submitArr.push(arrNoiO[Getlivei].input)


    if (GetJobi < 4) {
        submitArr.push(arrDiaChi[Get_i_arrDiaChi].input)
    } else {
        submitArr.push(arrSophone[Get_i_arrSophone1].input)
    }




    let Getmarriedi = GETRANDOMi(arrDaKetHonHayChua)
    let DataHandlingNext1 = []
    if (Getmarriedi === 0) {
        let getI1 = GETRANDOMi(arrSoCon);
        DataHandlingNext1.push(arrSoCon[getI1].handlingNext)
        // submitArr.push(arrSoCon[getI1].input) Nam ko can hoi co bao nhieu con
    }


    let Gettuoii = GETRANDOMi(tuoi1)
    // console.log(submitArr)
    let favoriteFood = ""
    let Get_i_arrFastFood1 = GETRANDOMi(arrFastFood1)
    submitArr.push(arrFastFood1[Get_i_arrFastFood1])
    // console.log(arrFastFood1[Get_i_arrFastFood1])
    favoriteFood = Data_arrFastFood[Get_i_arrFastFood1].name
    let obj = {
        "img": PickRandom(arrHinhNam),
        "gender": "male",
        "Submit": submitArr,
        "WhatisyournameOutput": arrTenNam[GetNamei].output,
        "WhatdoyoudoOutput": arrNgheNghiep[GetJobi].output,
        "WheredoyouliveOutput": arrNoiO[Getlivei].output,
        "AreyoumarriedOutput": arrDaKetHonHayChua[Getmarriedi].output,
        "Howoldareyou": tuoi[Gettuoii].output,
        "HandlingNext1": DataHandlingNext1,
        "Whatisyouraddress": arrDiaChi[Get_i_arrDiaChi].output,
        "Whatisyourphonenumber": arrSophone[Get_i_arrSophone1].output,
        "favoriteFood": favoriteFood
    }

    coerdataoflession.push(Fnperson(obj, DataTable))

}


for (let i = 0; i < 15; i++) {
    let submitArr = [];

    let GetNamei = GETRANDOMi(arrTenNu)
    submitArr.push(arrTenNu[GetNamei].input)

    let GetJobi = GETRANDOMi(arrNgheNghiep)
    // submitArr.push(arrNgheNghiep[GetJobi].input)

    let Getlivei = GETRANDOMi(arrNoiO)
    // submitArr.push(arrNoiO[Getlivei].input)

    let Get_i_arrDiaChi = GETRANDOMi(arrDiaChi)
    let Get_i_arrSophone1 = GETRANDOMi(arrSophone1)




    let Getmarriedi = GETRANDOMi(arrDaKetHonHayChua)
    submitArr.push(arrDaKetHonHayChua[Getmarriedi].input)
    let DataHandlingNext1 = []
    if (Getmarriedi === 0) {
        let getI1 = GETRANDOMi(arrSoCon);
        DataHandlingNext1.push(arrSoCon[getI1].handlingNext)
        submitArr.push(arrSoCon[getI1].input)
    }
    else {
        let get_i_arrCobantraihaychua = GETRANDOMi(arrCobantraihaychua);
        DataHandlingNext1.push(arrCobantraihaychua[get_i_arrCobantraihaychua].handlingNext)
        submitArr.push(arrCobantraihaychua[get_i_arrCobantraihaychua].input)
    }

    let Gettuoii = GETRANDOMi(tuoi)
    submitArr.push(tuoi[Gettuoii].input)
    // console.log(submitArr)


    let favoriteFood = ""
    let Get_i_arrFastFood1 = GETRANDOMi(arrFastFood1)
    submitArr.push(arrFastFood1[Get_i_arrFastFood1])
    // console.log(arrFastFood1[Get_i_arrFastFood1])
    favoriteFood = Data_arrFastFood[Get_i_arrFastFood1].name


    let obj = {
        "img": PickRandom(arrHinhNu),
        "gender": "female",
        "Submit": submitArr,
        "WhatisyournameOutput": arrTenNu[GetNamei].output,
        "WhatdoyoudoOutput": arrNgheNghiep[GetJobi].output,
        "WheredoyouliveOutput": arrNoiO[Getlivei].output,
        "AreyoumarriedOutput": arrDaKetHonHayChua[Getmarriedi].output,
        "Howoldareyou": tuoi[Gettuoii].output,
        "HandlingNext1": DataHandlingNext1,
        "Whatisyouraddress": arrDiaChi[Get_i_arrDiaChi].output,
        "Whatisyourphonenumber": arrSophone[Get_i_arrSophone1].output,
        "favoriteFood": favoriteFood
    }

    coerdataoflession.push(Fnperson(obj, DataTable))

}

// for (let i = 0; i < 15; i++) {

// }



// coerdataoflession.push(nam)
const Bai4
    = [
        {
            "nameoflession": "Thực hành bài 4",
            "srcYoutube": "",
            "hoctap": [
            ],
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]
export default Bai4





