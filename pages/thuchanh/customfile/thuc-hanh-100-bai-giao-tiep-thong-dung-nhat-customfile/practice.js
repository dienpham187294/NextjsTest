import { useEffect, useState } from "react";
import Dictaphone from "../../../helpers/RegcognitionV1-0-1";
import $ from "jquery";
import GetFinal from "../../../../util/GetFinal"
import SetAlert from "../../../../util/SetAlert"
import Check2String from "../../../../util/Check2String"
import ReadMessage from "../../../../util/ReadMessage"

let dataTotal = [["none"]]
let dataJustOne = ["name"]
let Score = ["name"]
function PracticeDiv(props) {
    const [AlertChange, SET_AlertChange] = useState(0);
    useEffect(() => {
        dataTotal.push((props.Data.lession))
        ReadMessage(GetFinal(dataTotal)[0])
        dataJustOne.push(1);
        Score.push(0);
        props.SET_Data_Commands(GetFinal(dataTotal)[GetFinal(dataJustOne)])
        SET_AlertChange(C => C + 1)
    }, [props.Data])

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
                {/* <input type="number" id="numberID" defaultValue="20" /> */}

            </div>


            {/* {JSON.stringify(GetFinal(dataTotal)[GetFinal(dataJustOne)])} */}
            <hr />
            <b>Điểm:</b>  {GetFinal(Score)}
            <hr />
            <b>Câu tiếp theo:</b>   {Show(GetFinal(dataTotal)[GetFinal(dataJustOne)])}
            <hr />
            <input
                style={{ display: "none" }}
                onClick={() => {

                    if (Check2String($("#messageRes").val(), GetFinal(dataTotal)[GetFinal(dataJustOne)])) {
                        ReadMessage(GetFinal(dataTotal)[GetFinal(dataJustOne) + 1])
                        Score.push(GetFinal(Score) + 1);
                        if (GetFinal(dataJustOne) + 1 < GetFinal(dataTotal).length) {
                            dataJustOne.push(GetFinal(dataJustOne) + 2)
                            props.SET_Data_Commands(GetFinal(dataTotal)[GetFinal(dataJustOne)])
                            // $("#numberID").val(15)
                        } else {
                            // $("#numberID").val(-1)
                        }
                        SetAlert(SET_AlertChange);
                    }

                }}
                type="button" id="messageResBtn"
            />
            <hr />
            <Dictaphone
                Data={props.Data_Commands}
            />
        </div>
    )
}

export default PracticeDiv

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
function Show(Arr) {
    try {
        return Arr
    } catch (error) {
        return ""
    }
}

