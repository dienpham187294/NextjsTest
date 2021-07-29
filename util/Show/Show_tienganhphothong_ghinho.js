import { useEffect, useState } from "react";
import $ from "jquery";
import DaoArray from "../rarely_use/DaoArray"
import GetFinal from "../rarely_use/GetFinal"
import SetAlert from "../rarely_use/SetAlert"
import ReadMessage from "../Read/ReadMessage"
let dataTotal = [["none"]]
let dataJustOne = ["EN"]
let Score = ["EN"]
function Thuchanhnghe(props) {
    const [AlertChange, SET_AlertChange] = useState(0);
    useEffect(() => {
        try {
            dataTotal.push(DaoArray(props.Data))
            dataJustOne.push(0);
            Score.push(0);
            props.SET_Data_Commands(GetFinal(dataTotal)[GetFinal(dataJustOne)]["EN"])
            SET_AlertChange(C => C + 1)
        } catch (error) {
            console.log("e")
        }

    }, [props.Data])

    useEffect(() => {
        let inter = setInterval(() => {
            let i = parseInt($("#numberID").val()) - 1;
            if (i === -1) {
                ReadMessage(GetFinal(dataTotal)[GetFinal(dataJustOne)]["EN"])
                if (GetFinal(dataJustOne) + 1 < GetFinal(dataTotal).length) {
                    dataJustOne.push(GetFinal(dataJustOne) + 1)
                    props.SET_Data_Commands(GetFinal(dataTotal)[GetFinal(dataJustOne)]["EN"])
                    SetAlert(SET_AlertChange);
                    i = 15;
                }
            }
            $("#numberID").val(i)
        }, 1000)
        return () => {
            clearTimeout(inter);
        };
    })



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
                <input type="number" id="numberID" defaultValue="20" />

            </div>
            <hr />
            <b>Điểm:</b>  {GetFinal(Score)}
            <hr />
            <b>Đọc từ có nghĩa:</b>
            <h3 style={{ color: "blue" }}>{Show(GetFinal(dataTotal)[GetFinal(dataJustOne)])}</h3>
            <i id="interrimID"></i>
            <hr />

            <input
                style={{ display: "none" }}
                onClick={() => {
                    ReadMessage(GetFinal(dataTotal)[GetFinal(dataJustOne)]["EN"])
                    Score.push(GetFinal(Score) + 1);
                    if (GetFinal(dataJustOne) + 1 < GetFinal(dataTotal).length) {
                        dataJustOne.push(GetFinal(dataJustOne) + 1)
                        props.SET_Data_Commands(GetFinal(dataTotal)[GetFinal(dataJustOne)]["EN"])
                        $("#numberID").val(15)
                    } else {
                        $("#numberID").val(-1)
                    }
                    SetAlert(SET_AlertChange);
                }}
                type="button" id="messageResBtnThuchanhnghe"
            />
            <hr />
        </div>
    )
}

export default Thuchanhnghe

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
function Show(Arr) {
    try {
        return Arr.VN
    } catch (error) {
        return ""
    }
}

