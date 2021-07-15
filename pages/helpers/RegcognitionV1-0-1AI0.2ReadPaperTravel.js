import React, { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import List_IDs from '../../util/List_IDs/List_IDs';
import $ from "jquery";
import { async } from 'regenerator-runtime';
const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}
let commands = [];
let ArrMessage = []
let Str_to_Check = ""
function Dictaphone({ Data }) {
    const [fuzzyMatchingThreshold, SET_fuzzyMatchingThreshold] = useState(0.5)
    const [Style, SET_Style] = useState(false)
    const [OpenSetting, SET_OpenSetting] = useState(0)
    useEffect(() => {
        Str_to_Check = "";
        console.log(fuzzyMatchingThreshold, Style, Data)
        commands = [{
            command: Data,
            callback: (command) => {
                Str_to_Check += "epdp" + `${command}`;
                console.log(Str_to_Check);
                writeMessage(Str_to_Check);
            },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: fuzzyMatchingThreshold,
            bestMatchOnly: Style
        }]
    }, [Data, fuzzyMatchingThreshold, Style])


    const {
        listening, transcript
    } = useSpeechRecognition({
        commands
    });
    useEffect(() => {
        console.log(transcript, "transcript")
    }, [transcript])
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });
    const stopListening = () => SpeechRecognition.stopListening({ continuous: false, language: 'en-GB' });
    async function writeMessage(message) {
        try {
            await $("#messageRes").val(message);
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
                onClick={startListening}
            >Click to Talk</button>
            <button
                className="btn btn-sm btn-outline-info ml-1 ml-2"
                onClick={stopListening}
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
