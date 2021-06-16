import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
const Speech = dynamic(
    () => {
        return import('react-speech')
    },
    { ssr: false }
)

let arrText = ["Hi"];
let arrVoice = ["Google UK English Female"];
function Read(props) {
    // const [MessageToRead, SET_MessageToRead] = useState("I have all properties set to their default")
    const [Pitch, SET_Pitch] = useState(1)
    const [Rate, SET_Rate] = useState(1)
    const [Volume, SET_Volume] = useState(1)
    // const [Voice, SET_Voice] = useState("Google UK English Female")
    //Google UK English Male

    useEffect(() => {
     
        try {
            if (props.MessageToRead[0] !== "") {
                arrText.push(props.MessageToRead[0]);
                if (props.MessageToRead[1] === 1) {
                    arrVoice.push("Google UK English Female");
                } else {
                    arrVoice.push("Google UK English Male");
                }
                setTimeout(() => {
                    try {
                        document.getElementsByClassName("rs-play")[0].click()
                    } catch (error) {
                        console.log(1)
                    }

                }, 100)

            }
        } catch (error) {
            console.log("")
        }
    }, [props.MessageToRead])
    return (
        <>
            <div id="test" style={{ display: "none" }}>
                <Speech
                    text={arrText[arrText.length - 1]}
                    pitch={Pitch}
                    rate={Rate}
                    volume={Volume}
                    lang="en-GB"
                    voice={arrVoice[arrVoice.length - 1]}
                    textAsButton={true}
                    displayText="Hello"
                />
            </div>
        </>
    )
}
export default Read