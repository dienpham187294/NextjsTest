import { useEffect, useLayoutEffect, useState } from "react";

let flag = true;
let arrVoice = []
let synth;
function Read_ReactJSX(props) {
    const [message_speakJSX, SET_message_speakJSX] = useState(null)

    useEffect(() => {
        if (flag) {

            if ('speechSynthesis' in window) {
                SET_message_speakJSX("Text-to-speech supported.")
                synth = window.speechSynthesis;
            } else {
                SET_message_speakJSX('Text-to-speech not supported.');
                alert("Your browser does not support text-to-speech software! Try Chrome desktop, maybe?")
            }

            flag = false;

        }
    })
    useEffect(() => {
        if (props.MessagetoRead !== null) {

            Read(props.MessagetoRead[0], props.MessagetoRead[1])
            props.SET_MessagetoRead(null)

        }
    }, [props.MessagetoRead])
    async function Read(message, i) {

        if (message !== null) {
            try {
                let ut = await new SpeechSynthesisUtterance(message);
                ut.lang = "en-GB"
                ut.voice = await speechSynthesis.getVoices()[i]
                synth.speak(ut);
            } catch (error) {

                console.error();
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