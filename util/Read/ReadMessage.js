let i = Date.now()
let saveText = "";
let saveVoiNum = 0;
let savePitch = 0
export default async function ReadMessage(text, voiceNum, rate, pitch) {
    if (text !== undefined) {
        saveText = text;
        saveVoiNum = voiceNum;
        savePitch = pitch
    }

    if (text === undefined) {
        text = saveText
        voiceNum = saveVoiNum
        rate = 0.7
        pitch = savePitch
    }


    if (Date.now() - 1 > 1500) {
        i = Date.now()

        try {
            if (voiceNum === undefined) {
                voiceNum = 1;
            }
            if (rate === undefined) {
                rate = 1
                try {
                    if (text.split(" ").length <= 2) {
                        rate = 0.7
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            if (pitch === undefined) {
                pitch = 1
            }
            if (text === "I") {
                text = "i"
            }
            if ($("#ID_TEXT_BROWSERNAME").text().indexOf("ios") !== -1) {
                try {
                    if ('speechSynthesis' in window) {
                        let msg = new SpeechSynthesisUtterance();
                        let voices = window.speechSynthesis.getVoices();
                        msg.voice = voices[voiceNum + 4];
                        msg.rate = rate;
                        msg.pitch = pitch;
                        msg.text = text;
                        speechSynthesis.speak(msg);
                        try {
                            $("#id_test_rate").text(rate)
                        } catch (error) {

                        }

                    }
                } catch (error) {
                    console.log(error)
                }

            } else {
                try {

                    await $("#SpeechText").val(text)
                    await $("#SpeechRate").val(rate)
                    await $("#SpeechPitch").val(pitch)
                    try {
                        $("#id_test_rate").text(rate)
                    } catch (error) {

                    }
                    await $("#SpeechTextBtn")[0].click();




                    if (voiceNum === 1) {
                        await $("#SpeechVoice").val("Google UK English Female")
                        await $("#SpeechVoiceBtn")[0].click();
                    } else {
                        await $("#SpeechVoice").val("Google UK English Male")
                        await $("#SpeechVoiceBtn")[0].click();
                    }
                    setTimeout(() => {
                        try {
                            $(".rs-play")[0].click()
                        } catch (error) {
                            console.log(error)
                        }

                    }, 100)
                } catch (error) {
                    console.log(error)
                }

            }
        } catch (error) {
            console.log(error)
        }

    }

}
