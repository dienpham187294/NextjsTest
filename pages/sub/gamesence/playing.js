import React, { useState, useEffect } from "react";
import Dictaphone from "../../components/helpers/Regcognition"
import ArrOfPeopeAppear_ReactJSX from "./playingcomponents/ArrOfPeopeAppear_ReactJSX"

// let flag = true
export default function Playing() {
    const [ArrOfPeopeAppear_ReactData] = useState(arrTotal);
    const [ALLTable_ReactData] = useState(Table);
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
                        ALLTable_ReactData={ALLTable_ReactData}
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
let arrTotal = []
for (let i = 0; i < 20; i++) {
    arrTotal.push(arr[0])
}

let Table = [
    {
        name: "Table People",
        content: [
            {
                "name": "James",
                "age": 30,
                "status": true,
                "room": 1089,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "John",
                "age": 22,
                "status": true,
                "room": 1086,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Robert",
                "age": 31,
                "status": true,
                "room": 1057,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Michael",
                "age": 44,
                "status": true,
                "room": 1004,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "William",
                "age": 41,
                "status": true,
                "room": 1098,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "David",
                "age": 44,
                "status": true,
                "room": 1002,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Richard",
                "age": 32,
                "status": true,
                "room": 1028,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Joseph",
                "age": 36,
                "status": true,
                "room": 1024,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Thomas",
                "age": 24,
                "status": true,
                "room": 1057,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Charles",
                "age": 44,
                "status": true,
                "room": 1016,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Christopher",
                "age": 22,
                "status": true,
                "room": 1044,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Daniel",
                "age": 43,
                "status": true,
                "room": 1000,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Matthew",
                "age": 38,
                "status": true,
                "room": 1015,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Anthony",
                "age": 23,
                "status": true,
                "room": 1077,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Donald",
                "age": 44,
                "status": true,
                "room": 1046,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Mark",
                "age": 23,
                "status": true,
                "room": 1091,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Paul",
                "age": 40,
                "status": true,
                "room": 1017,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Steven",
                "age": 39,
                "status": true,
                "room": 1098,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Andrew",
                "age": 25,
                "status": true,
                "room": 1065,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Kenneth",
                "age": 44,
                "status": true,
                "room": 1049,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Joshua",
                "age": 22,
                "status": true,
                "room": 1060,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Kevin",
                "age": 37,
                "status": true,
                "room": 1035,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Brian",
                "age": 40,
                "status": true,
                "room": 1010,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "George",
                "age": 48,
                "status": true,
                "room": 1100,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Edward",
                "age": 47,
                "status": true,
                "room": 1096,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Ronald",
                "age": 39,
                "status": true,
                "room": 1046,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Timothy",
                "age": 39,
                "status": true,
                "room": 1090,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Jason",
                "age": 32,
                "status": true,
                "room": 1005,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Jeffrey",
                "age": 44,
                "status": true,
                "room": 1026,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Ryan",
                "age": 33,
                "status": true,
                "room": 1084,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Jacob",
                "age": 45,
                "status": true,
                "room": 1035,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Gary",
                "age": 47,
                "status": true,
                "room": 1045,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Nicholas",
                "age": 37,
                "status": true,
                "room": 1028,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Eric",
                "age": 32,
                "status": true,
                "room": 1088,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Jonathan",
                "age": 28,
                "status": true,
                "room": 1070,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Stephen",
                "age": 30,
                "status": true,
                "room": 1047,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Larry",
                "age": 28,
                "status": true,
                "room": 1004,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Justin",
                "age": 35,
                "status": true,
                "room": 1024,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Scott",
                "age": 30,
                "status": true,
                "room": 1007,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Brandon",
                "age": 24,
                "status": true,
                "room": 1100,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Benjamin",
                "age": 28,
                "status": true,
                "room": 1071,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Samuel",
                "age": 44,
                "status": true,
                "room": 1064,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Frank",
                "age": 50,
                "status": true,
                "room": 1084,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Gregory",
                "age": 28,
                "status": true,
                "room": 1083,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Raymond",
                "age": 30,
                "status": true,
                "room": 1074,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Alexander",
                "age": 43,
                "status": true,
                "room": 1091,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Patrick",
                "age": 35,
                "status": true,
                "room": 1094,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Jack",
                "age": 27,
                "status": true,
                "room": 1047,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Dennis",
                "age": 46,
                "status": true,
                "room": 1054,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Jerry",
                "age": 44,
                "status": true,
                "room": 1027,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Tyler",
                "age": 34,
                "status": true,
                "room": 1076,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Aaron",
                "age": 45,
                "status": true,
                "room": 1055,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Jose",
                "age": 49,
                "status": true,
                "room": 1066,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Henry",
                "age": 47,
                "status": true,
                "room": 1077,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Adam",
                "age": 43,
                "status": true,
                "room": 1039,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Douglas",
                "age": 44,
                "status": true,
                "room": 1066,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Nathan",
                "age": 23,
                "status": true,
                "room": 1050,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Peter",
                "age": 42,
                "status": true,
                "room": 1078,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Zachary",
                "age": 32,
                "status": true,
                "room": 1088,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Kyle",
                "age": 45,
                "status": true,
                "room": 1038,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Walter",
                "age": 39,
                "status": true,
                "room": 1001,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Harold",
                "age": 29,
                "status": true,
                "room": 1003,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Jeremy",
                "age": 48,
                "status": true,
                "room": 1088,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Ethan",
                "age": 27,
                "status": true,
                "room": 1014,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Carl",
                "age": 26,
                "status": true,
                "room": 1061,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Keith",
                "age": 48,
                "status": true,
                "room": 1091,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Roger",
                "age": 26,
                "status": true,
                "room": 1086,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Gerald",
                "age": 41,
                "status": true,
                "room": 1097,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Christian",
                "age": 39,
                "status": true,
                "room": 1051,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Terry",
                "age": 24,
                "status": true,
                "room": 1094,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Sean",
                "age": 40,
                "status": true,
                "room": 1012,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Arthur",
                "age": 50,
                "status": true,
                "room": 1079,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Austin",
                "age": 31,
                "status": true,
                "room": 1080,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Noah",
                "age": 24,
                "status": true,
                "room": 1065,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Lawrence",
                "age": 50,
                "status": true,
                "room": 1038,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Jesse",
                "age": 48,
                "status": true,
                "room": 1005,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Joe",
                "age": 29,
                "status": true,
                "room": 1082,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Bryan",
                "age": 39,
                "status": true,
                "room": 1100,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Billy",
                "age": 22,
                "status": true,
                "room": 1003,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Jordan",
                "age": 38,
                "status": true,
                "room": 1058,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Albert",
                "age": 24,
                "status": true,
                "room": 1089,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Dylan",
                "age": 40,
                "status": true,
                "room": 1083,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Bruce",
                "age": 33,
                "status": true,
                "room": 1002,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Willie",
                "age": 20,
                "status": true,
                "room": 1069,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Gabriel",
                "age": 37,
                "status": true,
                "room": 1012,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Alan",
                "age": 23,
                "status": true,
                "room": 1023,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Juan",
                "age": 29,
                "status": true,
                "room": 1007,
                "image": "https://i.postimg.cc/mgdMdLCP/man5.png"
            },
            {
                "name": "Logan",
                "age": 35,
                "status": true,
                "room": 1003,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Wayne",
                "age": 41,
                "status": true,
                "room": 1019,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Ralph",
                "age": 46,
                "status": true,
                "room": 1023,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Roy",
                "age": 26,
                "status": true,
                "room": 1026,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Eugene",
                "age": 28,
                "status": true,
                "room": 1092,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Randy",
                "age": 29,
                "status": true,
                "room": 1080,
                "image": "https://i.postimg.cc/J7JN1WVF/man4.png"
            },
            {
                "name": "Vincent",
                "age": 47,
                "status": true,
                "room": 1029,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Russell",
                "age": 30,
                "status": true,
                "room": 1037,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Louis",
                "age": 34,
                "status": true,
                "room": 1082,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Philip",
                "age": 37,
                "status": true,
                "room": 1062,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Bobby",
                "age": 33,
                "status": true,
                "room": 1041,
                "image": "https://i.postimg.cc/d0pCY5Wv/man1.png"
            },
            {
                "name": "Johnny",
                "age": 40,
                "status": true,
                "room": 1007,
                "image": "https://i.postimg.cc/hjmdPVwm/man3.jpg"
            },
            {
                "name": "Bradley",
                "age": 34,
                "status": true,
                "room": 1016,
                "image": "https://i.postimg.cc/SRWCVcf4/man2.png"
            },
            {
                "name": "Mary",
                "age": 30,
                "status": true,
                "room": 1140,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Patricia",
                "age": 28,
                "status": true,
                "room": 1140,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Jennifer",
                "age": 28,
                "status": true,
                "room": 1130,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Linda",
                "age": 36,
                "status": true,
                "room": 1136,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Elizabeth",
                "age": 28,
                "status": true,
                "room": 1156,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Barbara",
                "age": 37,
                "status": true,
                "room": 1191,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Susan",
                "age": 26,
                "status": true,
                "room": 1105,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Jessica",
                "age": 34,
                "status": true,
                "room": 1165,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Sarah",
                "age": 20,
                "status": true,
                "room": 1132,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Karen",
                "age": 30,
                "status": true,
                "room": 1148,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Nancy",
                "age": 33,
                "status": true,
                "room": 1103,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Lisa",
                "age": 24,
                "status": true,
                "room": 1149,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Margaret",
                "age": 38,
                "status": true,
                "room": 1187,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Betty",
                "age": 27,
                "status": true,
                "room": 1171,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Sandra",
                "age": 31,
                "status": true,
                "room": 1200,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Ashley",
                "age": 19,
                "status": true,
                "room": 1151,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Dorothy",
                "age": 26,
                "status": true,
                "room": 1184,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Kimberly",
                "age": 30,
                "status": true,
                "room": 1105,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Emily",
                "age": 22,
                "status": true,
                "room": 1192,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Donna",
                "age": 20,
                "status": true,
                "room": 1116,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Michelle",
                "age": 25,
                "status": true,
                "room": 1164,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Carol",
                "age": 28,
                "status": true,
                "room": 1157,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Amanda",
                "age": 25,
                "status": true,
                "room": 1129,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Melissa",
                "age": 35,
                "status": true,
                "room": 1197,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Deborah",
                "age": 19,
                "status": true,
                "room": 1115,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Stephanie",
                "age": 19,
                "status": true,
                "room": 1176,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Rebecca",
                "age": 27,
                "status": true,
                "room": 1176,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Laura",
                "age": 32,
                "status": true,
                "room": 1156,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Sharon",
                "age": 30,
                "status": true,
                "room": 1106,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Cynthia",
                "age": 21,
                "status": true,
                "room": 1103,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Kathleen",
                "age": 23,
                "status": true,
                "room": 1123,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Amy",
                "age": 40,
                "status": true,
                "room": 1134,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Shirley",
                "age": 26,
                "status": true,
                "room": 1173,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Angela",
                "age": 35,
                "status": true,
                "room": 1103,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Helen",
                "age": 20,
                "status": true,
                "room": 1107,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Anna",
                "age": 27,
                "status": true,
                "room": 1111,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Brenda",
                "age": 27,
                "status": true,
                "room": 1124,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Pamela",
                "age": 30,
                "status": true,
                "room": 1162,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Nicole",
                "age": 40,
                "status": true,
                "room": 1179,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Samantha",
                "age": 32,
                "status": true,
                "room": 1185,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Katherine",
                "age": 33,
                "status": true,
                "room": 1148,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Emma",
                "age": 33,
                "status": true,
                "room": 1142,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Ruth",
                "age": 29,
                "status": true,
                "room": 1121,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Christine",
                "age": 33,
                "status": true,
                "room": 1156,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Catherine",
                "age": 39,
                "status": true,
                "room": 1199,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Debra",
                "age": 19,
                "status": true,
                "room": 1183,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Rachel",
                "age": 30,
                "status": true,
                "room": 1131,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Carolyn",
                "age": 39,
                "status": true,
                "room": 1119,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Janet",
                "age": 34,
                "status": true,
                "room": 1176,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Virginia",
                "age": 31,
                "status": true,
                "room": 1139,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Maria",
                "age": 20,
                "status": true,
                "room": 1129,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Heather",
                "age": 39,
                "status": true,
                "room": 1167,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Diane",
                "age": 24,
                "status": true,
                "room": 1114,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Julie",
                "age": 19,
                "status": true,
                "room": 1144,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Joyce",
                "age": 22,
                "status": true,
                "room": 1131,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Victoria",
                "age": 30,
                "status": true,
                "room": 1108,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Kelly",
                "age": 32,
                "status": true,
                "room": 1168,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Christina",
                "age": 21,
                "status": true,
                "room": 1176,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Lauren",
                "age": 30,
                "status": true,
                "room": 1157,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Joan",
                "age": 35,
                "status": true,
                "room": 1164,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Evelyn",
                "age": 24,
                "status": true,
                "room": 1161,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Olivia",
                "age": 35,
                "status": true,
                "room": 1135,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Judith",
                "age": 34,
                "status": true,
                "room": 1193,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Megan",
                "age": 26,
                "status": true,
                "room": 1162,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Cheryl",
                "age": 24,
                "status": true,
                "room": 1159,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Martha",
                "age": 32,
                "status": true,
                "room": 1138,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Andrea",
                "age": 37,
                "status": true,
                "room": 1125,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Frances",
                "age": 31,
                "status": true,
                "room": 1146,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Hannah",
                "age": 24,
                "status": true,
                "room": 1167,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Jacqueline",
                "age": 19,
                "status": true,
                "room": 1182,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Ann",
                "age": 23,
                "status": true,
                "room": 1149,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Gloria",
                "age": 33,
                "status": true,
                "room": 1188,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Jean",
                "age": 25,
                "status": true,
                "room": 1196,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Kathryn",
                "age": 23,
                "status": true,
                "room": 1199,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Alice",
                "age": 37,
                "status": true,
                "room": 1185,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Teresa",
                "age": 21,
                "status": true,
                "room": 1138,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Sara",
                "age": 35,
                "status": true,
                "room": 1110,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Janice",
                "age": 28,
                "status": true,
                "room": 1181,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Doris",
                "age": 24,
                "status": true,
                "room": 1130,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Madison",
                "age": 34,
                "status": true,
                "room": 1154,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Julia",
                "age": 28,
                "status": true,
                "room": 1110,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Grace",
                "age": 24,
                "status": true,
                "room": 1141,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Judy",
                "age": 37,
                "status": true,
                "room": 1109,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Abigail",
                "age": 21,
                "status": true,
                "room": 1196,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Marie",
                "age": 19,
                "status": true,
                "room": 1168,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Denise",
                "age": 39,
                "status": true,
                "room": 1104,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Beverly",
                "age": 22,
                "status": true,
                "room": 1169,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Amber",
                "age": 39,
                "status": true,
                "room": 1107,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Theresa",
                "age": 20,
                "status": true,
                "room": 1182,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Marilyn",
                "age": 39,
                "status": true,
                "room": 1184,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Danielle",
                "age": 40,
                "status": true,
                "room": 1151,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Diana",
                "age": 33,
                "status": true,
                "room": 1137,
                "image": "https://i.postimg.cc/tCNFxtgt/women3.jpg"
            },
            {
                "name": "Brittany",
                "age": 27,
                "status": true,
                "room": 1117,
                "image": "https://i.postimg.cc/02spjH9y/women4.jpg"
            },
            {
                "name": "Natalie",
                "age": 19,
                "status": true,
                "room": 1188,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            },
            {
                "name": "Sophia",
                "age": 38,
                "status": true,
                "room": 1113,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Rose",
                "age": 21,
                "status": true,
                "room": 1174,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Isabella",
                "age": 25,
                "status": true,
                "room": 1111,
                "image": "https://i.postimg.cc/MGvBNCmd/women1.jpg"
            },
            {
                "name": "Alexis",
                "age": 38,
                "status": true,
                "room": 1115,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Kayla",
                "age": 37,
                "status": true,
                "room": 1111,
                "image": "https://i.postimg.cc/Jz7ZcDDw/women5.jpg"
            },
            {
                "name": "Charlotte",
                "age": 38,
                "status": true,
                "room": 1134,
                "image": "https://i.postimg.cc/wMKDhwJF/women2.png"
            }
        ]


    },
    {
        name: "Table Fruit",
        content: [
            {
                name: "Elizabeth",
                age: 25,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Avocado",
                fruittochange: "Durian",
                hour: 8,
                minutes: 30,
                endtime: "PM",
            },
            {
                name: "Emily",
                age: 78,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Apple",
                fruittochange: "Lychee",
                hour: 8,
                minutes: 30,
                endtime: "AM",
            },
            {
                name: "Emma",
                age: 44,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Orange",
                fruittochange: "Orange",
                hour: 8,
                minutes: 15,
                endtime: "PM",
            },
            {
                name: "Jessica",
                age: 13,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Banana",
                fruittochange: "Peach",
                hour: 8,
                minutes: 15,
                endtime: "AM",
            },
            {
                name: "Jennifer",
                age: 41,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Grape",
                fruittochange: "Grape",
                hour: 7,
                minutes: 30,
                endtime: "PM",
            },
            {
                name: "Laura",
                age: 72,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Grapefruit",
                fruittochange: "Papaya ",
                hour: 7,
                minutes: 30,
                endtime: "AM",
            },
            {
                name: "Linda",
                age: 47,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Starfruit",
                fruittochange: "Sapota",
                hour: 7,
                minutes: 15,
                endtime: "PM",
            },
            {
                name: "Maria",
                age: 28,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Mango",
                fruittochange: "Apricot",
                hour: 7,
                minutes: 15,
                endtime: "AM",
            },
            {
                name: "Rebecca",
                age: 73,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Pineapple",
                fruittochange: "Watermelon",
                hour: 6,
                minutes: 30,
                endtime: "PM",
            },
            {
                name: "Sarah",
                age: 13,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Mangosteen",
                fruittochange: "Lemon",
                hour: 6,
                minutes: 30,
                endtime: "AM",
            },
            {
                name: "Brian",
                age: 47,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Mandarin",
                fruittochange: "Avocado",
                hour: 9,
                minutes: 0,
                endtime: "PM",
            },
            {
                name: "Christopher",
                age: 58,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Kiwi fruit",
                fruittochange: "Kiwi fruit",
                hour: 9,
                minutes: 0,
                endtime: "AM",
            },
            {
                name: "David",
                age: 14,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Kumquat",
                fruittochange: "Mandarin",
                hour: 9,
                minutes: 15,
                endtime: "PM",
            },
            {
                name: "Daniel",
                age: 73,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Jackfruit",
                fruittochange: "Custard-apple",
                hour: 9,
                minutes: 15,
                endtime: "AM",
            },
            {
                name: "Brian",
                age: 77,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Durian",
                fruittochange: "Mango",
                hour: 9,
                minutes: 30,
                endtime: "PM",
            },
            {
                name: "John",
                age: 40,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Lemon",
                fruittochange: "Plum",
                hour: 9,
                minutes: 30,
                endtime: "AM",
            },
            {
                name: "James",
                age: 43,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Lime",
                fruittochange: "Rambutan",
                hour: 10,
                minutes: 0,
                endtime: "AM",
            },
            {
                name: "Kevin",
                age: 56,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Papaya ",
                fruittochange: "Apple",
                hour: 10,
                minutes: 0,
                endtime: "PM",
            },
            {
                name: "Mark",
                age: 60,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Soursop",
                fruittochange: "Fig",
                hour: 10,
                minutes: 10,
                endtime: "AM",
            },
            {
                name: "Matthew",
                age: 76,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Custard-apple",
                fruittochange: "Cherry",
                hour: 10,
                minutes: 10,
                endtime: "PM",
            },
            {
                name: "Michael",
                age: 80,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Plum",
                fruittochange: "Jackfruit",
                hour: 10,
                minutes: 30,
                endtime: "AM",
            },
            {
                name: "Robert",
                age: 55,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Apricot",
                fruittochange: "Dragon fruit",
                hour: 10,
                minutes: 30,
                endtime: "PM",
            },
            {
                name: "William",
                age: 53,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Peach",
                fruittochange: "Banana",
                hour: 10,
                minutes: 20,
                endtime: "AM",
            },
            {
                name: "Adela",
                age: 16,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Cherry",
                fruittochange: "Guava",
                hour: 10,
                minutes: 20,
                endtime: "PM",
            },
            {
                name: "Agatha",
                age: 42,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Sapota",
                fruittochange: "Starfruit",
                hour: 10,
                minutes: 45,
                endtime: "AM",
            },
            {
                name: "Brenna",
                age: 59,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Rambutan",
                fruittochange: "Soursop",
                hour: 10,
                minutes: 45,
                endtime: "PM",
            },
            {
                name: "Dilys",
                age: 15,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Coconut ",
                fruittochange: "Pear",
                hour: 11,
                minutes: 0,
                endtime: "AM",
            },
            {
                name: "Edna",
                age: 17,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Guava",
                fruittochange: "Grapefruit",
                hour: 11,
                minutes: 0,
                endtime: "PM",
            },
            {
                name: "Fallon",
                age: 51,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Pear",
                fruittochange: "Mangosteen",
                hour: 11,
                minutes: 15,
                endtime: "AM",
            },
            {
                name: "Gerda",
                age: 20,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Fig",
                fruittochange: "Pineapple",
                hour: 11,
                minutes: 15,
                endtime: "PM",
            },
            {
                name: "Guinevere",
                age: 44,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Dragon fruit",
                fruittochange: "Kumquat",
                hour: 12,
                minutes: 0,
                endtime: "AM",
            },
            {
                name: "Martha",
                age: 52,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Melon",
                fruittochange: "Lime",
                hour: 12,
                minutes: 0,
                endtime: "PM",
            },
            {
                name: "Orla",
                age: 17,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Watermelon",
                fruittochange: "Coconut ",
                hour: 12,
                minutes: 30,
                endtime: "AM",
            },
            {
                name: "Selina",
                age: 78,
                image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                status: true,
                nameoffruit: "Lychee",
                fruittochange: "Melon",
                hour: 12,
                minutes: 30,
                endtime: "PM",
            },
        ]
    },
]