export default async function ReadMessage(text, voiceNum) {
    try {
        if ($("#ID_TEXT_BROWSERNAME").val() === "ios") {

            try {
                $('#message').val(text);
                if (voiceNum === 1) {
                    $("#number").val("5")
                } else {
                    $("#number").val("6")
                }
                setTimeout(() => {
                    try {
                        $("#BTN_speak_IOS").click()
                    } catch (error) {
                        console.log("eclick undefined")
                    }

                }, 100)
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
        console.log("e")
    }






}
