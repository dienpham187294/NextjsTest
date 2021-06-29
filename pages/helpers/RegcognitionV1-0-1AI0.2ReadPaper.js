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
let ArrMessage = []
function Dictaphone({ Data }) {
    const [AllMessage, SET_AllMessage] = useState([])
    const [ShowSide, SET_ShowSide] = useState(false)
    useEffect(() => {
        commands = [{
            command: Data,
            callback: (command) => {
                SET_AllMessage(prevArray => [...prevArray, `${command}`]);
                writeMessage(`${command}`)
            },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.2,
            bestMatchOnly: true
        }]
    }, [Data])
    const {
        listening,
    } = useSpeechRecognition({
        commands
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });
    const stopListening = () => SpeechRecognition.stopListening({ continuous: false, language: 'en-GB' });
    async function writeMessage(massgage) {
        try {
            ArrMessage.push(massgage);
            await $("#messageRes").val(massgage);
            await $("#messageResBtn").click();
            setTimeout(() => {
                try {
                    let id = (AllMessage.length - 1) + 'p_dictaphone'
                    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
                } catch (error) {

                }

            }, 100)
        } catch (error) {
            console.log("e")
        }
    }

    return (<div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
            onClick={startListening}
        >Click to talk</button>
        <button
            className="ml-3"
            onClick={stopListening}
        >Click to stop</button>
        <button
            className="ml-3"
            onClick={() => {
                SET_ShowSide(true)
            }}
        >Turn On Side Bar</button>
        <input disabled type="text" id="messageRes" defaultValue="" />
        {/* <hr />
        <div>{JSON.stringify(Data)}</div> */}
        <hr />
        <div>{AllMessage.map((e, i) =>
            <p key={i} style={{ backgroundColor: i === AllMessage.length - 1 ? "yellow" : "transparent" }} >{e}</p>
        )}</div>
        {
            ShowSide ?
                <div
                    id="Dictaphone_div_Sidebar"
                    style={{
                        position: "fixed",
                        width: "30%",
                        top: "1px",
                        left: "1px",
                        bottom: "20%",
                        overflow: "hidden"
                    }}
                >

                    <button
                        className="ml-3"
                        onClick={() => {
                            SET_ShowSide(false)
                        }}
                    >Turn off Side Bar</button>


                    {AllMessage.map((e, i) =>
                        <p key={i} id={i + "p_dictaphone"} style={{ backgroundColor: i === AllMessage.length - 1 ? "yellow" : "transparent" }} >{e}</p>
                    )}
                </div>
                : ""
        }
    </div>
    );
};
export default Dictaphone;


