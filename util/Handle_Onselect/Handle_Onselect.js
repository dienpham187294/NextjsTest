import ReadMessage from "../ReadMessage"

export default function Handle_Onselect(SET_Show_Popup) {
    try {
        let txt;
        if (window.getSelection) {
            txt = window.getSelection();
        }
        else if (document.getSelection) {
            txt = document.getSelection();
        } else if (document.selection) {
            txt = document.selection.createRange().text;
        }
        if (txt.toString() !== "") {
            ReadMessage(txt, [1, 2].PickRandom());
            SET_Show_Popup(txt.toString())
            try {
                document.getElementById("DictionarySearch").innerText = txt.toString()
            } catch (error) {
                console.log(error)
            }
        } else {
            SET_Show_Popup("")
        }
    } catch (error) {
        console.log(error)
    }

}
Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
