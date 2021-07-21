import React, { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import List_IDs from '../../util/List_IDs/List_IDs';
import $ from "jquery";
import { async } from 'regenerator-runtime';
import { data } from 'cheerio/lib/api/attributes';
const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
const stringSimilarity = require("string-similarity");
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}
let commands = [];
let ArrMessage = []
let Str_to_Check = ""
let intervalCheckCommads;
let ArrNumber = [
    { "number": 1, "text": "one" },
    { "number": 2, "text": "two" },
    { "number": 3, "text": "three" },
    { "number": 4, "text": "four" },
    { "number": 5, "text": "five" },
    { "number": 6, "text": "six" },
    { "number": 7, "text": "seven" },
    { "number": 8, "text": "eight" },
    { "number": 9, "text": "nine" },
    { "number": 10, "text": "ten" },
    { "number": 11, "text": "eleven" },
    { "number": 12, "text": "twelve" },
    { "number": 13, "text": "thirteen" },
    { "number": 14, "text": "fourteen" },
    { "number": 15, "text": "fifteen" },
    { "number": 16, "text": "sixteen" },
    { "number": 17, "text": "seventeen" },
    { "number": 18, "text": "eighteen" },
    { "number": 19, "text": "nineteen" },
    { "number": 20, "text": "twenty" }
]
function Dictaphone({ Data }) {
    // console.log(Data, "first")
    useEffect(() => {
        let MatchingInt = 0.4;
        Str_to_Check = ""
        try {
            if (Data.toLowerCase().includes("number")) {
                MatchingInt = 0.8;
            }
        } catch (error) {
            console.log("e MatchingInt")
        };
        // console.log(MatchingInt, Data)
        commands = [
            {
                command: Data,
                callback: () => {
                    console.log("===========================commands");
                    writeMessage();
                },
                isFuzzyMatch: true,
                fuzzyMatchingThreshold: MatchingInt,
            }
        ]

        if (Data === "====" && Data !== "") {
            // console.log("co inteval");
            clearInterval(intervalCheckCommads)
        } else {
            // console.log("ko co inteval");
            intervalCheckCommads = setInterval(() => {
                CheckCommandFast(Str_to_Check, Data, writeMessage);
            }, 2000);
        }
    }, [Data])


    const {
        listening, interimTranscript
    } = useSpeechRecognition({
        commands
    });
    useEffect(() => {

        try {
            Str_to_Check += interimTranscript + " ";
            $("#interrimID").text(interimTranscript);
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
                id={List_IDs["BUTTON_CLICK_TO_TALK"]}
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
                className="btn btn-sm btn-outline-info ml-1 ml-2"
                onClick={() => stopListening()}
            >Click to Stop</button>
        </p>
        <input type="text" id="messageRes" />
    </div>
    );
};
export default Dictaphone;

async function CheckCommandFast(Str_to_Check, Data, writeMessage) {
    try {
        ArrNumber.forEach(e => {
            (Str_to_Check.includes(e.number)) ? Str_to_Check += e.text : null
        })
    } catch (error) {

    }
    let i = 0
    let Arr = Data.toLowerCase().split(/[\?#!-().]+/).join("").split(" ")
    let strSort = Str_to_Check.toLowerCase().split(/[\?#!-().]+/).join("")
    // console.log("check", Arr, strSort)
    Arr.forEach(e => {
        if (strSort.includes(e)) {
            i++;
        }
    });
    if (i === Arr.length) {
        writeMessage()
        // console.log("===============interim")
    }
}