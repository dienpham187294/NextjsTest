import ArrPeple from "./ArrOfpeple"
let ARRp = (JSON.parse(JSON.stringify(ArrPeple)).concat(JSON.parse(JSON.stringify(ArrPeple))));
let huongdan = "";

let ArrInput = [
    {
        "input": "Đây là người cần tìm",
        "tuoi": 18,
        "ten": "Jame",
        "gioitinh": "male",
        "img": "https://i.postimg.cc/J7JN1WVF/man4.png"
    },
    {
        "input": "Khác",
        "tuoi": [19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30]
    }

]

huongdan = "Tìm một người lên Jame 18 tuổi."


let ArrSubmit = [
    ["Đây là người cần tìm"]
]
// for (let i = 0; i < ArrInput.length; i++) {
//     ArrSubmit.push([
//         ArrInput[i].input
//     ])
// }
let ArrToReplace =
    [
        "---NAME",
        "---IMAGE",
        "---GENDER",
        "---INPUT",
        "---TUOI"
    ]


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
// function PickRandom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

function ToArrConverto(arr) {
    return JSON.stringify(arr).split(`"`).join(`'`)
}

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}

const Bai1

    = [
        {
            "nameoflession": "Thực hành bài 1",
            "huongdan": huongdan,
            "srcYoutube": "",
            "hoctap": [
            ],
            "status": "",
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
                                    "Đã tìm thấy: "
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
                                    "manspeak": ["Hi, how are you?"],
                                    "robotspeak": ["I'm good", "Good"],
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
                                    "manspeak": ["What is your name?"],
                                    "robotspeak": ["My name is ---NAME"],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                },
                                {
                                    "manspeak": ["How old are you?"],
                                    "robotspeak": ["I am ---TUOI"],
                                    "icon": "",
                                    "function": {
                                        "end_successfull": false,
                                        "end_unsuccessfull": false
                                    },
                                    "handling_next": []
                                }
                            ]
                        },
                        "end": null
                    },
                    "ArrToReplace": ArrToReplace,
                    "DataInput": GetArr(ARRp),
                    "Tabletool": [
                        {
                            "indexToSubmit": 0,
                            "dataoftable": ArrSubmit
                        }
                    ]
                }
            ]
        }
    ]

export default Bai1




