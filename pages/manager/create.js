
import React, { useEffect, useState } from 'react'
// import { connectToDatabase } from '../../util/mongodb'
// import parse from 'html-react-parser';
// import Playing from "./play"
import { useRouter } from 'next/router'
const e = React.createElement;

export default function Manager() {
    const [Data, SET_Data] = useState(arr)
    const [Count, SET_Count] = useState(0);
    let arrNew = arr;
    useEffect(() => {
        console.log(Count);
    }, [Count])
    function SHOW_handling_next(Arrhandlingnext, mark) {


        if (Arrhandlingnext !== null) {

            return (
                <div>
                    { Arrhandlingnext.map((e, index) =>
                        <table className="table mt-3" key={Math.random()}>
                            <tbody key={Math.random()} >
                                <tr key={Math.random()}>
                                    <td><h3>Diễn tiến {index}</h3></td>
                                    <td>""</td>
                                </tr>
                                <tr key={Math.random()}>
                                    <td>Người chơi phải nói tiếp:</td>
                                    <td>{JSON.stringify(e.texttosay)}</td>
                                </tr>
                                <tr key={Math.random()}>
                                    <td>Máy đáp lại</td>
                                    <td>{JSON.stringify(e.theysay)}</td>
                                </tr>
                                <tr key={Math.random()}>
                                    <td>Hiển thị icon gì không?</td>
                                    <td>{e.icon !== null ? e.icon : "null"}</td>
                                </tr>
                                <tr key={Math.random()}>
                                    <td>Thực hiện hành động gì không?</td>
                                    <td>{e.function !== null ? e.function : "null"}</td>
                                </tr>
                                <tr key={Math.random()}>
                                    <td>Có tiếp diễn bắt buộc tiếp không?</td>
                                    <td>{SHOW_handling_next(e.handling_next, e.mark)}</td>
                                </tr>
                                <tr key={Math.random()}>
                                    <td>Xóa diễn tiến này</td>
                                    <td> <button className="btn btn-outline-danger" onClick={() => {
                                        FN_Method(e.mark, "Delete")
                                    }}>
                                        Xóa
                                    </button></td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                    <div>Thêm một diễn tiến mới {mark}</div>
                </div>
            )
        }

        return (
            <>
                "Không diễn tiến bắt buộc trở lại diễn tiễn trung đoạn"
                <br />
                <button className="btn btn-sm btn-outline-primary" onClick={() => {
                    FN_Method(mark, "ChangetoSrict")
                }}>Đổi thành diễn tiến bắt buộc</button>
            </>
        )
    }




    function FN_Method(mark, method) {

        if (method === "ChangetoSrict") {
            console.log("Start")

            arrINDEX.push("null")
            findMark(arrNew[0].questionandanwers.begin.iamsaying.handling.handling_next, mark);
            let numberlastnull = arrINDEX.lastIndexOf('null')
            let numberlastend = arrINDEX.lastIndexOf('END')

            let Astring = `arrNew[0].questionandanwers.begin.iamsaying.handling`
            for (let i = numberlastnull + 1; i < numberlastend; i++) {


                Astring += `["handling_next"][`;
                Astring += arrINDEX[i];
                Astring += `]`;


            }
            let Indexfound = eval(Astring)
            // console.log(arrINDEX)
            // console.log(eval(Astring))
            Indexfound.handling_next = [{
                "texttosay": [
                    "You are welcome!",
                    "Nothing at all."
                ],
                "theysay": null,
                "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                "mark": Math.random() * 1000000000,
                "function": "end_successfull",
                "handling_next": null
            }]
            // console.log(mark)
            console.log(Indexfound.handling_next)
            // console.log(JSON.stringify(arrNew))
            SET_Data(arrNew)
            SET_Count(C => C + 1)
            // console.log(JSON.stringify(arrNew))
            console.log("END")
        }



    }
    function SHOW_Begin() {
        // console.log(Data[0].questionandanwers.begin.iamsaying.handling.handling_next);

        if (Data[0].questionandanwers.begin.iamsaying.handling.handling_next !== null) {

            return (
                <div>
                    {SHOW_handling_next(Data[0].questionandanwers.begin.iamsaying.handling.handling_next, Data[0].questionandanwers.begin.iamsaying.handling.mark)}
                </div>

            )
        }


        return (

            "ABC"
        )
    }
    return (
        <div className=" manager_create">
            <div>

                <input className="form-control" type="text" defaultValue={Data[0].image} />
                <select defaultValue={Data[0].gender} className="form-control">
                    <option value="male" >Male</option>
                    <option value="female" >Female</option>
                </select>
            </div>


            <hr />


            <div>
                Begin
            <br />
                Người chơi đầu tiên phải nói:


                {/* Must to say:
            <input className="form-control" type="text" defaultValue="[How are you, What are you doing]" />
            Do something:
            <select className="form-control">
                    <option value="null">Do nothing</option>
                    <option value="read_">Robot speak something</option>
                    <option value="end_successfull">End conversation but not have score</option>
                    <option value="end_unsuccessfull">End conversation and have score</option>
                </select>
                <input className="form-control" type="text" defaultValue="How are you!" />
            Show an incon
            <select className="form-control">
                    <option>Show nothing</option>
                    <option>Show an icon</option>
                </select>
                <input className="form-control" type="text" defaultValue="https://i.postimg.cc/mgdMdLCP/man5.png" />
            Tiếp diễn câu chuyện theo mạch:
            <select className="form-control">
                    <option>Tiếp diễn</option>
                    <option>Không tiếp diễn</option>
                </select>
                <div>

                </div> */}
                {SHOW_Begin()}
            </div>


            <hr />

            <div>
                Middle
            </div>

            <hr />


            <div>
                End
            </div>

            <hr />

            <div>Submit
                <input className="form-control" type="text" defaultValue="[Apple, 1kg]" />
                <input className="form-control" type="text" defaultValue="Apple 1kg" />


            </div>

            <hr />





            <div className="mt-5">
                {JSON.stringify(Data)}
            </div>


        </div>
    )
}




// export async function getStaticProps(context) {
//     const { db } = await connectToDatabase()

//     const isConnected = await db.collection("gamesencedata").find({}).toArray()

//     let Tempdata = JSON.parse(JSON.stringify(isConnected))
//     return {
//         props: { Tempdata },
//     }
// }

let arr = [
    {
        "image": "https://i.postimg.cc/mgdMdLCP/man5.png",
        "status": true,
        "gender": "male",
        "questionandanwers": {
            "begin": {
                "iamsaying": {
                    "texttosay": [
                        "Hi How are you?",
                        "How is going?"
                    ],
                    "handling": {
                        "theysay": [
                            "I'm good. How are you?",
                            "Pretty good. How are you?",
                            "Not bad. How are you?"
                        ],
                        "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                        "function": null,
                        "mark": "124",
                        "handling_next": [
                            {
                                "texttosay": [
                                    "I'm good",
                                    "Pretty good",
                                    "Not bad"
                                ],
                                "theysay": null,
                                "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                                "function": null,
                                "mark": "124222",
                                "handling_next": null
                            },
                            {
                                "texttosay": [
                                    "I'm not good"
                                ],
                                "theysay": [
                                    "I'm sorry. What happend to you?"
                                ],
                                "icon": null,
                                "function": null,
                                "mark": "1242111122",
                                "handling_next": [
                                    {
                                        "texttosay": [
                                            "Nothing at all"
                                        ],
                                        "theysay": null,
                                        "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                                        "function": null,
                                        "mark": "1242111aaaa122",
                                        "handling_next": [
                                            {
                                                "texttosay": [
                                                    "Nothing at all"
                                                ],
                                                "theysay": null,
                                                "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                                                "function": null,
                                                "mark": "1242111aaaa122aaaaaaaaa",
                                                "handling_next": null
                                            }, {
                                                "texttosay": [
                                                    "Nothing at all"
                                                ],
                                                "theysay": null,
                                                "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                                                "function": null,
                                                "mark": "1242111aaaa122aaaasssssssaaaaa",
                                                "handling_next": null
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            "middle": [
                {
                    "iamsaying": {
                        "texttosay": [
                            "What do you want?",
                            "What would you like?",
                            "May I help you anything?"
                        ],
                        "handling": {
                            "theysay": [
                                "I want to take 1 kg apple. Do you have it?",
                                "Do you have any apple?"
                            ],
                            "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "function": null,
                            "handling_next": [
                                {
                                    "texttosay": [
                                        "Yes I have!",
                                        "We have it."
                                    ],
                                    "theysay": null,
                                    "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                                    "function": null,
                                    "handling_next": null
                                },
                                {
                                    "texttosay": [
                                        "Can you say again!",
                                        "What did you say?."
                                    ],
                                    "theysay": [
                                        "Do you have apple.",
                                        "T would like to buy some apple."
                                    ],
                                    "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                                    "function": null,
                                    "handling_next": null
                                }
                            ]
                        }
                    }
                },
                {
                    "iamsaying": {
                        "texttosay": [
                            "How many do you want?"
                        ],
                        "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                        "function": null,
                        "handling": {
                            "theysay": [
                                "I want to take 1 kg apple."
                            ],
                            "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                            "function": null,
                            "handling_next": null
                        }
                    }
                }
            ],
            "end": {
                "iamsaying": {
                    "texttosay": [
                        "Here you are.",
                        "This is yours."
                    ],
                    "handling": {
                        "theysay": [
                            "Thank's so much."
                        ],
                        "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                        "function": null,
                        "handling_next": [
                            {
                                "texttosay": [
                                    "You are welcome!",
                                    "Nothing at all."
                                ],
                                "theysay": null,
                                "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
                                "function": "end_successfull",
                                "handling_next": null
                            }
                        ]
                    }
                }
            }
        },
        "submit": {
            "info": [
                "apple",
                1
            ],
            "submitsyntax": "Apple 1KG"
        }
    }
]
let arrINDEX = ["null"]
function findMark(Arrhandlingnext, mark) {
    if (Arrhandlingnext !== null) {
        Arrhandlingnext.forEach((e, index) => {
            if (e.mark == mark) {
                arrINDEX.push(index);
                arrINDEX.push("END");
                console.log("END", arrINDEX)
            } else {
                if (e.handling_next !== null) {
                    arrINDEX.push(index)
                    findMark(e.handling_next, mark)
                }
            }
        });
    }
}



// let a = `arr[0].questionandanwers.begin.iamsaying.handling["handling_next"][1]["handling_next"][0]["handling_next"]`;
// console.log(eval(a))
// // let list = arr[0].questionandanwers.begin.iamsaying.handling["handling_next"][1]["handling_next"].slice(1, 1)
// // delete arr[0].questionandanwers.begin.iamsaying.handling["handling_next"][1]["handling_next"][0]["handling_next"][1];
// arr[0].questionandanwers.begin.iamsaying.handling["handling_next"][1]["handling_next"][0]["handling_next"].push({
//     "texttosay": [
//         "You are welcome!",
//         "Nothing at all."
//     ],
//     "theysay": null,
//     "icon": "https://i.postimg.cc/mgdMdLCP/man5.png",
//     "mark": Math.random() * 1000000000,
//     "function": "end_successfull",
//     "handling_next": null
// })

// console.log(JSON.stringify(arr))