import React, { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import $ from "jquery";
import { async } from 'regenerator-runtime';
const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}
let commands = [];

let arr = ["can you speak again"]

function Dictaphone({ Data, Total }) {
    useEffect(() => {
        commands = [{
            command: Data.concat(arr),
            callback: (command) => { Total.fnObj.Xuly(`${command}`) },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.6,
            bestMatchOnly: true
        }]
    }, [Data])
    const {
        listening,
        interimTranscript
    } = useSpeechRecognition({
        commands
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });
    const stopListening = () => SpeechRecognition.stopListening({ continuous: false, language: 'en-GB' });


    useEffect(() => {
        if (interimTranscript !== "") {
            try {
                $("#showInterimID").text(interimTranscript)
            } catch (error) {

            }
        }

    }, [interimTranscript])
    return (<div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
            id="idClickMiniGame"
            onClick={startListening}
        >Click to talk</button>
        <button
            id="idStopLisening"
            className="ml-3"
            onClick={stopListening}
        >Click to stop</button>
        <input disabled type="text" id="messageRes" defaultValue="" />
    </div>
    );
};
export default Dictaphone;


// async function writeMessage(massgage) {
//     try {
//         await $("#messageRes").val(massgage);
//         await $("#messageResBtn").click();
//     } catch (error) {
//         console.log("e")
//     }
// }