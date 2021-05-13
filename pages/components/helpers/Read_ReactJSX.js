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
                alert("Your browser does not support text-to-speech software! Try Chrome desktop, maybe?")
            }
            synth = window.speechSynthesis;
            voices = synth.getVoices();
            flag = false;
        }
    })
    useEffect(() => {
        if (props.MessagetoRead !== null) {
            console.log(props.MessagetoRead)
            Read(props.MessagetoRead[0], props.MessagetoRead[1])
            props.SET_MessagetoRead(null)
            console.log("done")
        }
    }, [props.MessagetoRead])
    async function Read(message, i) {

        if (message !== null) {
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