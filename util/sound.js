export default function Sound(str) {
    try {
        var x = document.createElement("AUDIO");

        if (x.canPlayType("audio/mpeg")) {
            x.setAttribute("src", "/sound/" + str);
        } else {
            x.setAttribute("src", "");
        }

        x.setAttribute("controls", "controls");
        document.body.appendChild(x);

        setTimeout(() => {
            x.play()

            setTimeout(() => {
                document.body.removeChild(x);
            }, x.duration * 1000)
        }, 100);
    } catch (error) {
        console.log("e")
    }

}