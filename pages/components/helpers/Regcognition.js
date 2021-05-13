import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

let flag = true
let SaveInterimTranscript = "";
export default function Dictaphone(props) {
    const [Message_Regconition, SET_Message_Regconition] = useState("")
    const { finalTranscript, interimTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (flag) {
            if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
                return null;
            }

            if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
                SET_Message_Regconition("Your browser does not support speech recognition software! Try Chrome desktop, maybe?")
                alert("Your browser does not support speech recognition software! Try Chrome desktop, maybe?")
            } else {
                SET_Message_Regconition("Speech recognition software is ready!")
            }
            flag = false;
        }

    });

    function Start_regconition() {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-GB'
        })
    }
    useEffect(
        () => {
            props.SET_Info_message(SaveInterimTranscript);
            SaveInterimTranscript = ""
        }, [finalTranscript]
    )
    useEffect(
        () => {
            if (interimTranscript !== "") {
                SaveInterimTranscript = interimTranscript;
            }
        }, [interimTranscript]
    )
    return (
        <>
            <button onClick={Start_regconition()}>Listen</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <p>{Message_Regconition}</p>
            <p>{finalTranscript}</p>

        </>
    );
};

