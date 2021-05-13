



async function Read(abc, i) {
    try {
        let ut = await new SpeechSynthesisUtterance(abc);
        let synth = await window.speechSynthesis;
        let voices = await synth.getVoices();
        ut.voice = await voices[i];
        synth.speak(ut);
    } catch (error) {
        console.log(error)
    }

    // ut.onerror = function (event) {
    //     console.log(event)
    //     // let tempText = document.getElementById("textCommand").value;
    //     // document.getElementById("textCommand").value = tempText + "Speak Api on error!";
    // }
}

export { Read }