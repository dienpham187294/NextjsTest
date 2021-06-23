import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { async } from 'regenerator-runtime';
import GetFinal from '../../util/GetFinal';
const Speech = dynamic(
    () => {
        return import('react-speech')
    },
    { ssr: false }
)

let arrText = ["Hi"];
let arrVoice = ["Google UK English Female"];
let arrPitch = [1];
let arrRate = [1];
let arrVolume = [1];
function Read(props) {
    const [Alert, SET_Alert] = useState(0)
    useEffect(() => {

    }, [Alert])
    return (
        <div style={{ display: "none" }}>

            <input type="text" id="SpeechText" defaultValue="hi" />
            <input type="text" id="SpeechVoice" defaultValue="Google UK English Female" />
            <input
                onClick={() => {
                    arrText.push($("#SpeechText").val());
                }}
                type="button" id="SpeechTextBtn"
            />
            <input
                onClick={() => {
                    arrVoice.push($("#SpeechVoice").val());
                    SET_Alert(A => A + 1)
                }}
                type="button" id="SpeechVoiceBtn"
            />



            
            <div id="test" style={{ display: "none" }}>
                <Speech
                    text={arrText[arrText.length - 1]}
                    pitch={GetFinal(arrPitch)}
                    rate={GetFinal(arrRate)}
                    volume={GetFinal(arrVoice)}
                    lang="en-GB"
                    voice={arrVoice[arrVoice.length - 1]}
                    textAsButton={true}
                    displayText="Hello"
                />
            </div>
        </div>
    )
}
export default Read

