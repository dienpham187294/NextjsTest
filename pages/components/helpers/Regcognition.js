import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

let flag = true
export default function Dictaphone() {
    const [Message_Regconition, SET_Message_Regconition] = useState("")
    const { finalTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (flag) {
            if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
                return null;
            }

            if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
                SET_Message_Regconition("Your browser does not support speech recognition software! Try Chrome desktop, maybe?")
                console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
            } else {
                SET_Message_Regconition("Speech recognition software is ready!")
            }
            console.log("Start")
            SpeechRecognition.startListening({
                continuous: true,
                language: 'en-GB'
            })
            console.log("EndStart")
            flag = false;
        }

    });
    useEffect(
        () => {
            console.log(finalTranscript)
        }, [finalTranscript]
    )

    return (
        <>
            <button onClick={SpeechRecognition.startListening}>Listen</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <p>{Message_Regconition}</p>
            <p>{finalTranscript}</p>

        </>
    );
};

