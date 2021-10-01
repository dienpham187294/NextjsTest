import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)).concat(JSON.parse(JSON.stringify(ArrPeple))));

let arrTenNam1 = ["Richard", "Michael", "Steven", "Robert", "William"]
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
    "Barbara", "Kimberly", "Betty", "Donna", "Michelle"
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
let arrNgheNghiep1 = ["Doctor", "Teacher", "Engineer", "Farmer", "Driver"]
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
let arrNoiO1 = ["Vietnam", "ThaiLan", "Singapore", "USA", "England"]
let arrNoiO = []
arrNoiO1.forEach(e => {
    arrNoiO.push({
        "input": e,
        "output": [
            "I live in " + e
        ]
    })
})
let arrDaKetHonHayChua1 = ["Married", "Not yet"]
let arrDaKetHonHayChua = [
    {
        "input": "Married",
        "output": [
            "I’m married."
        ]
    },
    {
        "input": "Not yet",
        "output": [
            "I’m single."
        ]
    }
]
let tuoi1 = [18, 19, 20, 21, 22];
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


function GetArr(input) {
    let arrRes = input
    let n = GETRANDOMi(arrRes)

    arrRes.forEach((e, i) => {
        if (i === n) {
            e[0] = ArrInput[0].ten
            e[1] = ArrInput[0].img
            e[2] = ArrInput[0].gioitinh
            e[3] = ArrInput[0].input
            e[4] = 18
        } else {
            e[3] = ArrInput[1].input
            e[4] = ArrInput[1].tuoi[GETRANDOMi(ArrInput[1].tuoi)]
        }
    });
    return arrRes
}
function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function ToArrConverto(arr) {
    return JSON.stringify(arr).split(`"`).join(`'`)
}

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}

let DataTable = [
    arrTenNam1, arrTenNu1, arrNgheNghiep1, arrNoiO1, arrDaKetHonHayChua1, tuoi1
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
                    "Yêu cầu 2: ",
                    "Yêu cầu 3: ",
                    "Yêu cầu 4: ",
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
                            "handling_next": []
                        }
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
                            "handling_next": [

                            ]
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

    let Getmarriedi = GETRANDOMi(arrDaKetHonHayChua)

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
        "Howoldareyou": tuoi[Gettuoii].output
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

    let Getmarriedi = GETRANDOMi(arrDaKetHonHayChua)
    submitArr.push(arrDaKetHonHayChua[Getmarriedi].input)


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
        "Howoldareyou": tuoi[Gettuoii].output
    }

    coerdataoflession.push(Fnperson(obj, DataTable))

}

// for (let i = 0; i < 15; i++) {

// }



// coerdataoflession.push(nam)
const Bai1

    = [
        {
            "nameoflession": "Thực hành bài 1",
            "srcYoutube": "",
            "hoctap": [
            ],
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default Bai1




