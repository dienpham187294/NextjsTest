import { useState } from "react";
import Dictaphone from "../RegcognitionV1-0-1"
import Read from "../Read_ReactSpeech"
import Dictionary from "../Dictionary"
let arrT = [
    ["i want to", "i don't want to","i want to add","i don't want to grate"],
    ["add", "Break", "Combine", "Crush", "Chop", "Defrost", "Dice", "Grate"]
]

function text() {
    const [Data, SET_Data] = useState("");
    const [MessageToRead, SET_MessageToRead] = useState(["how are you", "Google UK English Female"]);
    return (
        <div>
            <button onClick={() => {
                SET_Data(arrT);
            }}>
                click
            </button>
            <Dictaphone Data={Data} />
            <Read MessageToRead={MessageToRead} />
            <Dictionary SET_MessageToRead={SET_MessageToRead} />
        </div >

    )
}

export default text