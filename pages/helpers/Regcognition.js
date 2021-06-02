import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
let Arr_hold_newestInfoMessage = [""];
let flag = true
export default function Dictaphone(props) {
    const router = useRouter()
    const [Message_Regconition, SET_Message_Regconition] = useState("")
    const { finalTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (flag) {
            if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
                router.push("/error")
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
    function Stop_regconition() {
        SpeechRecognition.stopListening({
            continuous: false
        })
    }
    useEffect(
        () => {

            if (Arr_hold_newestInfoMessage[Arr_hold_newestInfoMessage.length - 1] === "") {
                props.SET_Info_message(finalTranscript)
            } else {
                props.SET_Info_message(finalTranscript.replace(Arr_hold_newestInfoMessage[Arr_hold_newestInfoMessage.length - 1] + " ", ""));
            }

            Arr_hold_newestInfoMessage.push(finalTranscript);
        }, [finalTranscript]
    )

    return (
        <>
            <button onClick={() => Start_regconition()} className="btn btn-sm btn-outline-primary">Listen</button>
            <button onClick={() => Stop_regconition()} className="btn btn-sm btn-outline-primary">Stop</button>
            <p>{Message_Regconition}</p>
            <p>{finalTranscript}</p>

        </>
    );
};

