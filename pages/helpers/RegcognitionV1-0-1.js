import React, { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}

function Dictaphone({ Data, SET_MessageListen }) {
    const [message, SET_message] = useState("")
    let commands = [];
    try {
        Data.forEach(e => {
            commands.push({
                command: e,
                callback: (command) => { SET_MessageListen(M => M += ` ${command}`); SET_message(M => M += ` ${command}`) },
                isFuzzyMatch: true,
                fuzzyMatchingThreshold: 0.2,
                bestMatchOnly: true
            })
        });
    } catch (error) {
        commands.push({
            command: ["Hi how are you test"],
            callback: (command) => { SET_MessageListen(M => M += ` ${command}`); SET_message(M => M += ` ${command}`) },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.2,
            bestMatchOnly: true
        })
    }

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

    return (
        <div>

            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button
                onClick={startListening}
            >Click to talk</button>
            <p
                style={{ height: "50px", border: "1px solid black", overflow: "auto" }}
            >{message}</p>
            {transcript}
            <hr />

        </div>
    );
};
export default Dictaphone;