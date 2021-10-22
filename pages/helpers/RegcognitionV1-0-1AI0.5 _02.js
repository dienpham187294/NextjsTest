import React, { useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import $ from "jquery";
// import { async } from 'regenerator-runtime';
const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}
let commands = [];
function Dictaphone({ Data, Xuly }) {
    useEffect(() => {
        commands = [{
            command: Data,
            callback: (command) => { Xuly(`${command}`) },
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
            $("#interrimID").text(interimTranscript)
        }
    }, [interimTranscript])
    return (<div style={{ display: "none" }}>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
            id="idStartLisening"
            onClick={startListening}
        >Click to talk</button>
        <button
            id="idStopLisening"
            className="ml-3"
            onClick={stopListening}
        >Click to stop</button>
    </div>
    );
};
export default Dictaphone;


