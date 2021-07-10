export default async function ReadMessage(text, voiceNum) {
    try {
        if ($("#ID_TEXT_BROWSERNAME").text() === "ios") {
            try {
                if ('speechSynthesis' in window) {
                    let msg = new SpeechSynthesisUtterance();
                    let voices = window.speechSynthesis.getVoices();
                    msg.voice = voices[voiceNum + 5];
                    msg.rate = 1;
                    msg.pitch = 1;
                    msg.text = text;
                    speechSynthesis.speak(msg);
                }
            } catch (error) {
                console.log("e")
            }

        } else {
            try {
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
