import React, { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import $ from "jquery";
import { async } from 'regenerator-runtime';
// import { data } from 'cheerio/lib/api/attributes';
const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// const stringSimilarity = require("string-similarity");
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}
let commands = [];
// let Arrinterval1time = 0;
// let Count3time = 0;
let Str_to_Check = "";
// let intervalCheckCommads;
// let indexCheck = 0;
// let ArrNumber = [
//     { "number": 1, "text": "one" },
//     { "number": 2, "text": "two" },
//     { "number": 3, "text": "three" },
//     { "number": 4, "text": "four" },
//     { "number": 5, "text": "five" },
//     { "number": 6, "text": "six" },
//     { "number": 7, "text": "seven" },
//     { "number": 8, "text": "eight" },
//     { "number": 9, "text": "nine" },
//     { "number": 10, "text": "ten" },
//     { "number": 11, "text": "eleven" },
//     { "number": 12, "text": "twelve" },
//     { "number": 13, "text": "thirteen" },
//     { "number": 14, "text": "fourteen" },
//     { "number": 15, "text": "fifteen" },
//     { "number": 16, "text": "sixteen" },
//     { "number": 17, "text": "seventeen" },
//     { "number": 18, "text": "eighteen" },
//     { "number": 19, "text": "nineteen" },
//     { "number": 20, "text": "twenty" }
// ]
function Dictaphone({ Data }) {
    useEffect(() => {
        let MatchingInt = 0.2;
        Str_to_Check = "";
        // Count3time = 0;
        try {
            let Num = Data.split(" ").length
            if (Num > 3 && Num < 5) {
                MatchingInt = 0.5;
            }
            if (Num > 5) {
                MatchingInt = 0.6;
            }
        } catch (error) {
            console.log("e MatchingInt")
        };

        commands = [
            {
                command: Data,
                callback: () => {
                    console.log("CheckCommands")
                    writeMessage();
                },
                isFuzzyMatch: true,
                fuzzyMatchingThreshold: MatchingInt,
                bestMatchOnly: true
            }
        ]
        console.log(Data, MatchingInt)
    }, [Data])




    const {
        listening, interimTranscript
    } = useSpeechRecognition({
        commands
    });
    useEffect(() => {
        try {
            Str_to_Check += interimTranscript + " ";
            interimTranscript !== "" ? $("#interrimID").text(interimTranscript) : CheckCommandFast(Str_to_Check, Data, writeMessage);
        } catch (error) {
            console.log(error)
        }

    }, [interimTranscript]);



    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });
    const stopListening = () => SpeechRecognition.stopListening({ continuous: false, language: 'en-GB' });
    async function writeMessage() {
        try {
            await $("#messageRes").val("one_true");
            await $("#messageResBtn").click();
        } catch (error) {
            console.log("e")
        }
    }

    return (<div style={{ textAlign: "justify" }} >
        <p>
            Microphone: {listening ? <span style={{ color: "white", backgroundColor: "blue", padding: "5px" }}>On</span> : <span style={{ color: "white", backgroundColor: "red", padding: "5px" }}>Off</span>}
            <button
                id="BUTTON_CLICK_TO_TALK"
                className="btn btn-sm btn-outline-info ml-5"
                onClick={() => {
                    if (!listening) {
                        console.log("startReg")
                        startListening()
                    }
                }
                }
            >Click to Talk</button>
            <button
                id="BUTTON_CLICK_TO_STOP_TALK"
                className="btn btn-sm btn-outline-info ml-1 ml-2"
                onClick={() => stopListening()}
            >Click to Stop</button>
        </p>
        <input style={{ display: "none" }} disabled type="text" id="messageRes" />
    </div>
    );
};
export default Dictaphone;



// console.log(commands)
// try {
//     if (Data.split(" ").length < 3) {
//         if (Data === "====" && Data !== "") {
//             clearInterval(intervalCheckCommads);
//             Arrinterval1time = 1;
//         } else {
//             if (Arrinterval1time === 1) {
//                 intervalCheckCommads = setInterval(() => {
//                     CheckCommandFast(Str_to_Check, Data, writeMessage);
//                 }, 1500);
//                 Arrinterval1time = 2;
//             }
//         }
//     }
// } catch (error) {
//     console.log("e inreact data")
// }
async function CheckCommandFast(Str_to_Check, Data, writeMessage) {
    try {
        if (Data.split(" ").length === 1) {
            if (Str_to_Check.toLowerCase().split(/[\?#!-().]+/).join("").includes(Data.toLowerCase().split(/[\?#!-().,]+/).join(""))) {
                console.log("CheckFast")
                writeMessage()
            }
        }
        if (Data.split(" ").length === 2) {
            if (Str_to_Check.toLowerCase().split(/[\?#!-().]+/).join("").includes(Data.toLowerCase().split(/[\?#!-().,]+/).join("").split(" ")[0])) {
                console.log("CheckFast")
                writeMessage()
            }
        }
    } catch (error) {
        console.log("e")
    }



    // try {
    //     ArrNumber.forEach(e => {
    //         (Str_to_Check.includes(e.number)) ? Str_to_Check += e.text : null
    //     })
    // } catch (error) {
    //     console.log("e")
    // }
    // let i = 0;
    // let Arr = Data.toLowerCase().split(/[\?#!-().,]+/).join("").split(" ")
    // let strSort = Str_to_Check.toLowerCase().split(/[\?#!-().]+/).join("");
    // Arr.forEach(e => {
    //     if (strSort.includes(e)) {
    //         i++;
    //     }
    // });
    // if (Arr.length === 1 && Count3time === 0) {
    //     Count3time++;
    // }
    // if (Arr.length === 2 && Count3time === 0) {
    //     i === 1 ? Count3time++ : null
    // }
    // if (Arr.length > 2 && Count3time === 0) {
    //     i > 0.4 * Arr.length ? Count3time++ : null
    // }
    // if (i === Arr.length) {
    //     writeMessage("Đúng 100%");
    //     return;
    // };
    // if (Str_to_Check.length > indexCheck && Count3time > 0) {
    //     Count3time++;
    //     console.log(Count3time)
    // }
    // if (Count3time > 4) {
    //     writeMessage("Đúng 80%");
    //     return
    // }
    // indexCheck = Str_to_Check.length;

}