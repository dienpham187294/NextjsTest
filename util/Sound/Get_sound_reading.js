import { async } from "regenerator-runtime";
export default async function Sound(str) {
    try {
        var x = await document.createElement("AUDIO");
        x.setAttribute("class", "soundClass")
        x.setAttribute("loop", "loop");
        if (x.canPlayType("audio/mpeg")) {
            x.setAttribute("src", "/sound/" + str);
        } else {
            x.setAttribute("src", "/sound/" + str);
        }
        document.getElementById("sound").appendChild(x);
        x.play()
    } catch (error) {
        console.log("e")
    }

}