import { useEffect, useState } from "react";

let flag = true;
let synth, voices;
function Read_ReactJSX(props) {
    const [message_speakJSX, SET_message_speakJSX] = useState(null)

    useEffect(() => {
        if (flag) {
            if ('speechSynthesis' in window) {
                SET_message_speakJSX(null)
            } else {
                SET_message_speakJSX('Text-to-speech not supported.');
            }
            synth = window.speechSynthesis;
            voices = synth.getVoices();
            flag = false;
        }
    })
    useEffect(() => {
        if (!flag) {
            Read(props.MessagetoRead, 1)
        }
    }, [props.MessagetoRead])
    async function Read(message, i) {

        if (message !== "-") {
            let number = 1;
            if (i !== 1) {
                number = 3;
                try {
                    let ut = await new SpeechSynthesisUtterance(message);
                    ut.voice = await voices[3];
                    synth.speak(ut);
                } catch (error) {
                    console.log(error)
                }
            } else {
                try {
                    let ut = await new SpeechSynthesisUtterance(message);
                    // let synth = await window.speechSynthesis;
                    // let voices = await synth.getVoices();
                    ut.voice = await voices[1];
                    synth.speak(ut);
                } catch (error) {
                    console.log(error)
                }
            }

        }

    }


    return (
        <>
            {message_speakJSX}
        </>
    )
}
export default Read_ReactJSX