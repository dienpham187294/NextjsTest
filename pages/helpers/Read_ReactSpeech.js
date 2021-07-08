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
    const [Status, SET_Status] = useState(0)
    const [Alert, SET_Alert] = useState(0)
    useEffect(() => {
        try {
            document.getElementById(List_IDs["BUTTON_APPEAR_AFTER_READ_READY"]).click()
        } catch (error) {
            console.log("e")
        }
    }, [Status])
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

