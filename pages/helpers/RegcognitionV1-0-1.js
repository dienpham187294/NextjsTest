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
            callback: (command) => { writeMessage(`${command}`) },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.2,
            bestMatchOnly: true
        }]
    }, [Data])
    const {
        listening,
        transcript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({
        commands
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true });

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (<div>

        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
            onClick={startListening}
        >Click to talk</button>
        <input type="text" id="messageRes" defaultValue="" />
        {transcript}
        {JSON.stringify(Data)}
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