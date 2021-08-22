import { useEffect, useState } from "react";
// import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.5Repeat";
import $, { data } from "jquery";
import DaoArray from "../../rarely_use/DaoArray"
import GetFinal from "../../rarely_use/GetFinal"
import SetAlert from "../../rarely_use/SetAlert"
// import Check2String from "../../String_tool/Check2String"
import ReadMessage from "../../Read/ReadMessage"

let dataTotal = [["none"]]
let dataJustOne = ["EN"]

let i = 0
let Score = ["EN"]


function PracticeDiv_G2(props) {
    const [AlertChange, SET_AlertChange] = useState(0);
    const [DapAn, SET_DapAn] = useState("");

    const [AllData, SET_AllData] = useState([]);


    const [End, SET_End] = useState(false);
    useEffect(() => {
        try {

            let arr = []
            try {
                props.Data.slice(-3).forEach(e => {
                    arr.push(e.data)
                });
            } catch (error) {

            }
            let merged = [].concat.apply([], arr).sort(() => 0.5 - Math.random()).slice(0, 15);

            let meger1 = [].concat(merged).sort(() => 0.5 - Math.random())


            SET_AllData(meger1)

            dataTotal.push(merged)

            dataJustOne.push(0);

            Score.push(0);

            SET_DapAn(dataTotal.getFinal()[dataJustOne.getFinal()].EN)

            ReadMessage(dataTotal.getFinal()[dataJustOne.getFinal()].EN)

            // SET_HinhanhCauhoi(dataTotal.getFinal()[dataJustOne.getFinal()].ArrImg)

            SET_AlertChange(C => C + 1)

        } catch (error) {
            SET_End(true)
        }

    }, [props.Data])

    useEffect(() => {

        let inter = setInterval(() => {
            let i = parseInt($("#numberID").val()) - 1;

            if (i === -1) {
                // ReadMessage(GetFinal(dataTotal)[GetFinal(dataJustOne)]["EN"])
                if (GetFinal(dataJustOne) + 1 < GetFinal(dataTotal).length) {
                    dataJustOne.push(GetFinal(dataJustOne) + 1)

                    SET_DapAn(dataTotal.getFinal()[dataJustOne.getFinal()].EN)

                    ReadMessage(dataTotal.getFinal()[dataJustOne.getFinal()].EN)

                    // SET_HinhanhCauhoi(dataTotal.getFinal()[dataJustOne.getFinal()].ArrImg)

                    SetAlert(SET_AlertChange);
                    i = 60;
                }

            }
            $("#numberID").val(i)
        }, 1000)
        return () => {
            clearTimeout(inter);
        };
    })


    function Show_Tudechon(arr) {
        try {

            return (
                <div>
                    <br />
                    {arr.map((e, i) =>

                        <div
                            key={i}
                            style={{
                                display: "inline-block",
                                border: "1px solid green",
                                borderRadius: "5px",
                                padding: "5px",
                                margin: "5px",
                                cursor: "pointer"
                            }}


                            onClick={() => {

                                $("#ID_DUNGSAI").text(DapAn)
                                if (DapAn === e.EN) {
                                    Score.push(GetFinal(Score) + 1);
                                    document.getElementById("ID_DUNGSAI").style.backgroundColor = "yellowgreen"
                                }
                                else {
                                    document.getElementById("ID_DUNGSAI").style.backgroundColor = "red"
                                }

                                if (GetFinal(dataJustOne) + 1 < GetFinal(dataTotal).length) {
                                    dataJustOne.push(GetFinal(dataJustOne) + 1)

                                    SET_DapAn(dataTotal.getFinal()[dataJustOne.getFinal()].EN)

                                    ReadMessage(dataTotal.getFinal()[dataJustOne.getFinal()].EN)

                                    // SET_HinhanhCauhoi(dataTotal.getFinal()[dataJustOne.getFinal()].ArrImg)

                                    $("#numberID").val(60)
                                } else {
                                    $("#numberID").val(-1);
                                    SET_End(true)
                                }
                                SetAlert(SET_AlertChange);

                            }}
                        >
                            {e.EN}
                        </div>)}
                </div>
            )
        } catch (error) {
            return null
        }
    }


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
                    props.SET_Game_Nghevachoncau(false)
                }}>Thoát</button>

            <div
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
                <input type="number" id="numberID" defaultValue="75" />

            </div>
            {!End ?
                <div>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <b>Điểm:</b>  {GetFinal(Score)}
                        </div>
                        <div className="col-8 text-center" id="ID_DUNGSAI" style={{ color: "white" }}>

                        </div>
                    </div>
                    <hr />
                    <b>Lắng nghe và chọn thích hợp:</b>

                    {Show_Tudechon(AllData)}


                    <hr /></div>
                :
                <div>
                    <h3>Bạn đạt {GetFinal(Score)} điểm</h3>
                </div>}
        </div>
    )
}

export default PracticeDiv_G2

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

Array.prototype.getFinal = function () {

    return this[this.length - 1]
}


