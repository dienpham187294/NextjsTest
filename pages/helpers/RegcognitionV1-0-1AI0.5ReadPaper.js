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

function Dictaphone({ Data }) {
    useEffect(() => {
        commands = [{
            command: Data,
            callback: (command) => { console.log(command), writeMessage(`${command}`) },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.5,
            bestMatchOnly: false
        }]
    }, [Data])
    const {
        listening,
        transcript
    } = useSpeechRecognition({
        commands
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });



    return (<div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
            onClick={startListening}
        >Click to talk</button>
        <input disabled type="text" id="messageRes" defaultValue="" />
        {/* <hr />
        <div>{JSON.stringify(Data)}</div> */}
        <hr />
        <div>{transcript}</div>
    </div>
    );
};
export default Dictaphone;


async function writeMessage(massgage) {
    try {
        await $("#messageRes").val(massgage);
        await $("#messageResBtn").click();
    } catch (error) {
        console.log("e")
    }
}