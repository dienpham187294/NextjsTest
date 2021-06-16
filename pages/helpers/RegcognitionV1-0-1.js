import React, { useEffect, useState } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const appId = '6b82e0d7-8610-45b8-96cd-22f51d4c50f1';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);


let flag = true
if (process.brower) {
    SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
}



function Dictaphone({ Data }) {

    const [message, SET_message] = useState("")
    try {
        if (flag) {
            if (Data !== "") {
                console.log("ok");
                flag = false;

                let commands = []

                Data.forEach(e => {
                    commands.push({
                        command: e,
                        callback: (command) => SET_message(M => M += ` ${command}`),
                        isFuzzyMatch: true,
                        fuzzyMatchingThreshold: 0.2,
                        bestMatchOnly: true
                    })
                });

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
                        >Hold to talk</button>
                        <p
                            style={{ height: "50px", border: "1px solid black", overflow: "auto" }}
                        >{message}</p>

                        {transcript}
                        <hr />

                    </div>
                );

            } else {
                console.log("not ok");
                return "Chưa có dữ liệu"
            }
        }

    } catch (error) {
        return "Lỗi"
    }
};
export default Dictaphone;