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
function Dictaphone({ Data }) {
    const [fuzzyMatchingThreshold, SET_fuzzyMatchingThreshold] = useState(0.5)
    const [Style, SET_Style] = useState(true)
    const [OpenSetting, SET_OpenSetting] = useState(0)
    useEffect(() => {
        Str_to_Check = "";
        console.log(fuzzyMatchingThreshold, Style, Data)
        commands = [{
            command: Data,
            callback: (command) => {
                Str_to_Check += "epdp" + `${command}`;
                console.log(Str_to_Check, "commands");
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
            let Temp_str = interimTranscript;
            if (interimTranscript.indexOf(2) !== -1) {
                Temp_str += "two";
            }
            if (interimTranscript.indexOf(3) !== -1) {
                Temp_str += "three";
            }
            if (interimTranscript.indexOf(4) !== -1) {
                Temp_str += "four";
            }
            if (interimTranscript.indexOf(5) !== -1) {
                Temp_str += "five";
            }
            if (interimTranscript.indexOf(6) !== -1) {
                Temp_str += "six";
            }
            if (interimTranscript.indexOf(7) !== -1) {
                Temp_str += "seven";
            }
            if (interimTranscript.indexOf(8) !== -1) {
                Temp_str += "eight";
            }
            if (interimTranscript.indexOf(9) !== -1) {
                Temp_str += "nine";
            }
            if (interimTranscript.indexOf(10) !== -1) {
                Temp_str += "ten";
            }
            if (interimTranscript.indexOf(11) !== -1) {
                Temp_str += "eleven"
            }
            if (interimTranscript.indexOf(12) !== -1) {
                Temp_str += "twelve"
            }
            if (interimTranscript.indexOf(13) !== -1) {
                Temp_str += "thirteen"
            }
            if (interimTranscript.indexOf(14) !== -1) {
                Temp_str += "fourteen"
            }
            if (interimTranscript.indexOf(15) !== -1) {
                Temp_str += "fifteen"
            }
            if (interimTranscript.indexOf(16) !== -1) {
                Temp_str += "sixteen"
            }
            if (interimTranscript.indexOf(17) !== -1) {
                Temp_str += "seventeen"
            }
            if (interimTranscript.indexOf(18) !== -1) {
                Temp_str += "eighteen"
            }
            if (interimTranscript.indexOf(19) !== -1) {
                Temp_str += "nineteen"
            }
            if (interimTranscript.indexOf(20) !== -1) {
                Temp_str += "twenty"
            }
            if (Temp_str.toLowerCase().includes(Data.toLowerCase()) || stringSimilarity.compareTwoStrings(Temp_str.toLowerCase(), Data.toLowerCase()) > 0.7) {
                Str_to_Check += "epdp" + Data;
                console.log(Str_to_Check, "interim");
                writeMessage(Str_to_Check);
            }
        }
        console.log(interimTranscript, "interimTranscript")
    }, [interimTranscript])
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


// import GetLongest from '../../util/GetLongest';
// import Dictionary from './Dictionary';
// import ImageSearch from './ImageSearch';


// {
//     ShowSide ?

//         <div
//             id="Dictaphone_div_Sidebar"
//             style={{
//                 position: "fixed",
//                 width: "19%",
//                 top: "1px",
//                 left: "0.5%",
//                 bottom: "1px",
//                 overflow: "auto",
//                 padding: "3px",
//                 backgroundColor: "white",
//                 border: "5px solid green",
//                 borderRadius: "5px",
//                 zIndex: 2
//             }}
//         >

//             <button
//                 className="ml-3"
//                 onClick={() => {
//                     SET_ShowSide(false)
//                 }}
//             >Turn off Side Bar</button>
//             <hr />
//             <button
//                 onClick={() => {
//                     SET_Word(document.getElementById("DictionarySearch").innerText)
//                 }}
//             >Look up</button>
//             <button
//                 onClick={() => {
//                     document.getElementById("DictionarySearch").innerText = "";
//                     SET_Word("")
//                 }}
//             >Clear</button>
//             <div id="DictionarySearch"></div>
//             {Word !== "" ?
//                 <>
//                     <Dictionary Word={GetLongest(Word)} />
//                     < ImageSearch Word={Word} />
//                 </>
//                 : null}

//             <hr />
//             {AllMessage.map((e, i) =>
//                 <p key={i} id={i + "p_dictaphone"} style={{ backgroundColor: i === AllMessage.length - 1 ? "yellow" : "transparent" }} >{e}</p>
//             )}
//         </div>
//         : ""
// }   function scrolldown() {
//     setTimeout(() => {
//         try {
//             let id = (AllMessage.length - 1) + 'p_dictaphone'
//             document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//         } catch (error) {

//         }

//     }, 100)

// }