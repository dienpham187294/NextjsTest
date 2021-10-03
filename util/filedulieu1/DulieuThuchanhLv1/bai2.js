import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)).concat(JSON.parse(JSON.stringify(ArrPeple))));

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
    "2 3 6 5 8",
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
// console.log(arrSoCon)
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


// function GetArr(input) {
//     let arrRes = input
//     let n = GETRANDOMi(arrRes)

//     arrRes.forEach((e, i) => {
//         if (i === n) {
//             e[0] = ArrInput[0].ten
//             e[1] = ArrInput[0].img
//             e[2] = ArrInput[0].gioitinh
//             e[3] = ArrInput[0].input
//             e[4] = 18
//         } else {
//             e[3] = ArrInput[1].input
//             e[4] = ArrInput[1].tuoi[GETRANDOMi(ArrInput[1].tuoi)]
//         }
//     });
//     return arrRes
// }
function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// function ToArrConverto(arr) {
//     return JSON.stringify(arr).split(`"`).join(`'`)
// }

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}

let DataTable = [
    arrTenNam1, arrTenNu1, arrNgheNghiep1, arrNoiO1, arrSophone1, arrDiaChi1, arrDaKetHonHayChua1, arrSoCon1, tuoi1
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
                    "handling_next": []
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
        "Whatisyourphonenumber": arrSophone[Get_i_arrSophone1].output
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

    let Gettuoii = GETRANDOMi(tuoi)
    submitArr.push(tuoi[Gettuoii].input)
    // console.log(submitArr)
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
        "Whatisyourphonenumber": arrSophone[Get_i_arrSophone1].output
    }

    coerdataoflession.push(Fnperson(obj, DataTable))

}

// for (let i = 0; i < 15; i++) {

// }



// coerdataoflession.push(nam)
const Bai2

    = [
        {
            "nameoflession": "Thực hành bài 2",
            "srcYoutube": "",
            "hoctap": [
            ],
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default Bai2




