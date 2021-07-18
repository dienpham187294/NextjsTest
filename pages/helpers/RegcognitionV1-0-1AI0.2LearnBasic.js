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
    const [fuzzyMatchingThreshold, SET_fuzzyMatchingThreshold] = useState(0.6)
    const [Style, SET_Style] = useState(true)
    const [OpenSetting, SET_OpenSetting] = useState(0)
    useEffect(() => {
        Str_to_Check = "";
        console.log(fuzzyMatchingThreshold, Style, Data)
        commands = [{
            command: Data,
            callback: (command) => {
                Str_to_Check = `${command}`;
                console.log(Str_to_Check, "===========================commands");
                writeMessage(Str_to_Check);
            },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: fuzzyMatchingThreshold,
            bestMatchOnly: Style
        }]
    }, [Data, fuzzyMatchingThreshold, Style])


    const {
        listening, interimTranscript
    } = useSpeechRecognition({
        commands
    });
    useEffect(() => {

        if (typeof (Data) === 'string' && interimTranscript !== "") {
            try {
                $("#interrimID").text(interimTranscript)
                let ArrTemp = [];
                let i = 0
                let Arr = Data.toLowerCase().split(/[\?#!-().]+/).join("").split(" ")
                Arr.forEach(e => {
                    if (interimTranscript.toLowerCase().includes(e)) {
                        i++;
                    }
                });
                if (i === Arr.length) {
                    writeMessage(Str_to_Check)
                    console.log(interimTranscript, i, Arr.length, "===============interim")
                }

            } catch (error) {
                console.log("E ID interim")
            }

            // let Temp_str = interimTranscript;
            // ArrNumber.forEach((e) => {
            //     Temp_str.split(e.number).join(e.text)
            // })
            // try {
            //     $("#interrimID").text(Temp_str)
            // } catch (error) {
            //     console.log("E ID interim")
            // }
            // console.log(Temp_str)
            // if (Temp_str.toLowerCase().includes(Data.toLowerCase())) {
            //     Str_to_Check = Data;
            //     console.log(Str_to_Check, "=======================================interim");
            //     writeMessage(Str_to_Check);
            // }
            // console.log(i)
        }
        // console.log(interimTranscript, "interimTranscript")
    }, [interimTranscript])
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });
    const stopListening = () => SpeechRecognition.stopListening({ continuous: false, language: 'en-GB' });
    async function writeMessage(message) {
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
        {OpenSetting % 2 === 0 ? <div>
            <input className="form-control bg-light mt-1" disabled type="text" id="messageRes" defaultValue="" />
            <br />
            <span> Độ chính xác (the similarity of speech):  </span>
            <select
                onChange={(e) => {
                    SET_fuzzyMatchingThreshold(e.currentTarget.value)
                }}
                className="form-control bg-light mt-1"
                defaultValue="0.5">
                <option value="0.1">10%</option>
                <option value="0.2">20%</option>
                <option value="0.3">30%</option>
                <option value="0.4">40%</option>
                <option value="0.5">50%</option>
                <option value="0.6">60%</option>
                <option value="0.7">70%</option>
                <option value="0.8">80%</option>
                <option value="0.9">90%</option>
                <option value="1">100%</option>
            </select>
            <span> Chế độ đọc (matches the speech): </span>
            <select
                onChange={(e) => {
                    if (e.currentTarget.value === "true") {
                        SET_Style(true)
                    } else {
                        SET_Style(false)
                    }
                }}
                className="form-control bg-light mt-1"
                defaultValue={true}>
                <option value={true}>Đọc từng câu một</option>
                <option value={false}>Đọc nhiều câu một lúc</option>
            </select>
        </div> : ""}
    </div>
    );
};
export default Dictaphone;