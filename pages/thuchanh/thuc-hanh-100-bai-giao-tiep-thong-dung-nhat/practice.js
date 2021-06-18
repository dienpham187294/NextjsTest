import { useEffect, useState } from "react";
import Dictaphone from "../../helpers/RegcognitionV1-0-1";


function PracticeDiv(props) {
    const [MessageListen, SET_MessageListen] = useState("")
   
    return (
        <div style={{
            position: "fixed",
            top: "3%",
            bottom: "3%",
            left: "3%",
            right: "3%",
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "white",
            overflow: "auto"
        }}>
            <button
                style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px"
                }}
                className="btn btn-outline-danger"
                onClick={() => {
                    props.SET_Practice(false)
                }}>Thoát</button>

            <div
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
               "Practice"
                {JSON.stringify(props.Data)}

            </div>










            <hr />
            <div style={{
                width: "100%",
                bottom: "10px",
                height: "200px",
                textAlign: "center"
            }}>
                <Dictaphone
                    Data={props.Data_Commands}
                    SET_MessageListen={SET_MessageListen}
                />
            </div>
        </div>
    )
}

export default PracticeDiv

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}