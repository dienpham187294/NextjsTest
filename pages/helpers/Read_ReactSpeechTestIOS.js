import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { async } from 'regenerator-runtime';
import List_IDs from '../../util/List_IDs/List_IDs';
const Speech = dynamic(
    () => {
        return import('react-speech')
    },
    { ssr: false }
)

let arrText = ["Hi"];
let arrVoice = ["Google UK English Female"];
function Read(props) {
    const [Alert, SET_Alert] = useState(0)
    useEffect(() => {
    }, [Alert])
    return (
        <div style={{}}>

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
            <div id="test">
                <Speech
                    text={arrText[arrText.length - 1]}
                    pitch={1}
                    rate={1}
                    volume={1}
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

