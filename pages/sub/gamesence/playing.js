import React, { useState, useEffect } from "react";
import Dictaphone from "../../components/helpers/Regcognition"
import ArrOfPeopeAppear_ReactJSX from "./playingcomponents/ArrOfPeopeAppear_ReactJSX"

// let flag = true
export default function Playing() {
    const [ArrOfPeopeAppear_ReactData, SET_ArrOfPeopeAppear_ReactData] = useState(arr);
    const [Info_message, SET_Info_message] = useState(null)
    // useEffect(() => {
    //     if (flag) {
    //         let ArrOfPeopeAppear = []
    //         for (let i = 0; i < 40; i++) {
    //             let obj = {
    //                 name: "name " + i,
    //                 image: "https://i.postimg.cc/mgdMdLCP/man5.png",
    //                 status: true
    //             }
    //             ArrOfPeopeAppear.push(obj)
    //         }
    //         console.log(ArrOfPeopeAppear)
    //         SET_ArrOfPeopeAppear_ReactData(ArrOfPeopeAppear)
    //         flag = false
    //     }
    // })

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <Dictaphone
                        SET_Info_message={SET_Info_message}
                    />
                </div>
                <div className="col-9">
                    <ArrOfPeopeAppear_ReactJSX
                        ArrOfPeopeAppear_ReactData={ArrOfPeopeAppear_ReactData}
                        Info_message={Info_message}
                    />
                </div>

            </div>
        </>
    )
}

let arr = [
    {
        image: "https://i.postimg.cc/mgdMdLCP/man5.png",
        status: true,
        questionandanwers: {
            begin: [
                {
                    Question: ["Hi How are you?"],
                    anwer: {
                        text: ["I'm good. How are you?, Pretty good. How are you?, Not bad. How are you?"],
                        statusStrickmode: true,
                        stricktext: ["I'm good", "Pretty good", "Not bad"]
                    },
                }
            ],

            middle: [
                {
                    Question: ["What do you want?", "What would you like?", "May I help you anything?"],
                    anwer: {
                        text: ["I want to take 1 kg apple. Do you have it?", "Do you have any apple?"],
                        statusStrickmode: true,
                        stricktext: ["Yes I have"],
                        icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                    }
                },
                {
                    Question: ["How many do you want?"],
                    anwer: {
                        text: ["I want to take 1 kg apple."],
                        statusStrickmode: false,
                        stricktext: null,
                        icon: null
                    }
                },

            ],

            end: [
                {
                    Question: ["Here you are."],
                    anwer: {
                        text: ["Thank you."],
                        statusStrickmode: true,
                        stricktext: ["You are welcome", "Nothing at all"],
                        icon: null
                    },
                }
            ]
        },
        submit: {
            info: ["apple", 1],
            templatetoSubmit: "Apple 1KG",
        },
    },

    {
        image: "https://i.postimg.cc/mgdMdLCP/man5.png",
        status: true,
        questionandanwers: {
            begin: [
                {
                    Question: ["Hi How are you?"],
                    anwer: {
                        text: ["I'm good. How are you?, Pretty good. How are you?, Not bad. How are you?"],
                        statusStrickmode: true,
                        stricktext: ["I'm good", "Pretty good", "Not bad"],
                        icon: null
                    },
                }
            ],

            middle: [
                {
                    Question: ["What do you want?", "What would you like?", "May I help you anything?"],
                    anwer: {
                        text: ["I want to take 1 kg banana. Do you have it?", "Do you have any banana?"],
                        statusStrickmode: true,
                        stricktext: ["Yes I have"],
                        icon: null
                    }
                },
                {
                    Question: ["How many do you want?"],
                    anwer: {
                        text: ["I want to take 1 kg apple."],
                        statusStrickmode: false,
                        stricktext: null,
                        icon: null
                    }
                },

            ],

            end: [
                {
                    Question: ["Here you are."],
                    anwer: {
                        text: ["Thank you."],
                        statusStrickmode: true,
                        stricktext: ["You are welcome", "Nothing at all"],
                        icon: null
                    },
                }
            ]
        },
        submit: {
            info: ["banana", 1],
            templatetoSubmit: "Apple 1KG",
        },
    }
]