import { async } from "regenerator-runtime";

export default async function Sound(str) {
    try {

        if (document.getElementById(str) !== null) {
            document.getElementById(str).play();

        } else {

            let x = await document.createElement("AUDIO");
            x.setAttribute("class", "soundClass")
            x.setAttribute("id", str)
            x.setAttribute("preload ", "auto")
            if (x.canPlayType("audio/mpeg")) {
                x.setAttribute("src", "/sound/" + str);
            } else {
                x.setAttribute("src", "/sound/" + str);
            }
            document.getElementById("sound").appendChild(x);
            x.play()
        }
    } catch (error) {
        console.log("e")
    }

}