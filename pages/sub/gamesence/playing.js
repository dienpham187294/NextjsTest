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
                        SET_Info_message={SET_Info_message}
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
        gender: "male",
        questionandanwers: {
            //Begin -----------------------------------------------
            begin:
            {
                //---------------------------------------
                iamsaying: {
                    texttosay: ["Hi How are you?", "How is going?"],
                    handling:
                    {
                        theysay: ["I'm good. How are you?", "Pretty good. How are you?", "Not bad. How are you?"],
                        icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                        strictmode: true,
                        function: null,
                        handling_next: [
                            {
                                texttosay: ["I'm good", "Pretty good", "Not bad"],
                                theysay: null,
                                strictmode: false,
                                icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                                function: null,
                                handling_next: null
                            },
                            {
                                texttosay: ["I'm not good"],
                                theysay: ["I'm sorry. What happend to you?"],
                                strictmode: true,
                                icon: null,
                                function: null,
                                handling_next: [
                                    {
                                        texttosay: ["Nothing at all"],
                                        theysay: null,
                                        strictmode: false,
                                        icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                                        function: null,
                                        handling_next: null
                                    }
                                ]
                            },
                        ],
                    },
                },
                //---------------------------------------
            },
            //Middle -----------------------------------------------
            middle: [

                {
                    iamsaying: {
                        texttosay: ["What do you want?", "What would you like?", "May I help you anything?"],
                        handling:
                        {
                            theysay: ["I want to take 1 kg apple. Do you have it?", "Do you have any apple?"],
                            icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                            function: null,
                            strictmode: true,
                            handling_next: [
                                {
                                    texttosay: ["Yes I have!", "We have it."],
                                    theysay: null,
                                    strictmode: false,
                                    icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                                    function: null,
                                    handling_next: null
                                },
                                {
                                    texttosay: ["Can you say again!", "What did you say?."],
                                    theysay: ["Do you have apple.", "T would like to buy some apple."],
                                    strictmode: false,
                                    icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                                    function: null,
                                    handling_next: null
                                },

                            ],
                        }
                        ,
                    },
                },
                {
                    iamsaying: {
                        texttosay: ["How many do you want?"],
                        icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                        strictmode: true,
                        function: null,
                        handling:
                        {
                            theysay: ["I want to take 1 kg apple."],
                            icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                            function: null,
                            strictmode: false,
                            handling_next: null
                        },
                    },

                },

            ],
            //End -----------------------------------------------
            end:
            {
                //---------------------------------------
                iamsaying: {
                    texttosay: ["Here you are.", "This is yours."],
                    handling:
                    {
                        theysay: ["Thank's so much."],
                        icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                        function: null,
                        strictmode: true,
                        handling_next: [
                            {
                                texttosay: ["You are welcome!", "Nothing at all."],
                                theysay: null,
                                strictmode: false,
                                icon: "https://i.postimg.cc/mgdMdLCP/man5.png",
                                function: "end_successfull",
                                handling_next: null
                            },

                        ],
                    },
                },
                //---------------------------------------
            }
        },
        submit: {
            info: ["apple", 1],
            submitsyntax: "Apple 1KG",
            strictmode_end: true
        },
    }

]