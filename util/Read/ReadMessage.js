export default async function ReadMessage(text, voiceNum, rate) {

    try {
        if (voiceNum === undefined) {
            voiceNum = 0.7;
        }
        if (rate === undefined) {
            rate = 0.7
        }
        if ($("#ID_TEXT_BROWSERNAME").text().indexOf("ios") !== -1) {
            try {
                if ('speechSynthesis' in window) {
                    let msg = new SpeechSynthesisUtterance();
                    let voices = window.speechSynthesis.getVoices();
                    msg.voice = voices[voiceNum + 4];
                    msg.rate = rate;
                    msg.pitch = 1;
                    msg.text = text;
                    speechSynthesis.speak(msg);
                }
            } catch (error) {
                console.log("e")
            }

        } else {
            try {
                // if ('speechSynthesis' in window) {
                //     let msg = new SpeechSynthesisUtterance();
                //     let voices = window.speechSynthesis.getVoices();
                //     msg.voice = voices[voiceNum];
                //     msg.rate = rate;
                //     msg.pitch = 1;
                //     msg.text = text;
                //     speechSynthesis.speak(msg);
                // }
                await $("#SpeechText").val(text)
                await $("#SpeechTextBtn")[0].click();

                if (voiceNum === 1) {
                    await $("#SpeechVoice").val("Google UK English Female")
                    await $("#SpeechVoiceBtn").click();
                } else {
                    await $("#SpeechVoice").val("Google UK English Male")
                    await $("#SpeechVoiceBtn")[0].click();
                }
                setTimeout(() => {
                    try {
                        $(".rs-play")[0].click()
                    } catch (error) {
                        console.log("eclick undefined")
                    }

                }, 100)
            } catch (error) {
                console.log("e")
            }

        }
    } catch (error) {
        console.log("eF")
    }
}
