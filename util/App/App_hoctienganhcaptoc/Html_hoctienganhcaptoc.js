import { useEffect, useState } from "react"
import Read_ReactSpeech from "../../../pages/helpers/Read_ReactSpeech"
import ReadMessage from "../../Read/ReadMessage"
import Dictaphone from "../../../pages/helpers/RegcognitionV1-0-1AI0.2ReadPaperTravel"
import Check2String from "../../String_tool/Check2String"
import List_IDs from "../../List_IDs/List_IDs"
import Linkapi from "../../api/Linkapi"
const queryString = require('query-string');
export default function Show_Demo_Sentence_Basic(OBJ_INPUT) {
    const [Data_Learn, SET_Data_Learn] = useState("")
    const [Data_Commands, SET_Data_Commands] = useState("====")
    const [Docthu, SET_Docthu] = useState("")
    const [Data_use, SET_Data_use] = useState(OBJ_INPUT[0])
    const [Name, SET_Name] = useState("")
    const [ARanking, SET_Ranking] = useState([])
    const [Status, SET_Status] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            const parsed = queryString.parse(window.location.search);
            // alert(parsed["token"])
            // if (parsed["token"].indexOf("187") !== -1 && parsed["token"].indexOf("294") !== -1) {
            alert("Welcome " + parsed["name"])
            try {
                if (parsed["name"] !== undefined && parsed["name"].length > 3) { SET_Name(parsed["name"]) }
            } catch (error) {
                console.log("e")
            }
            // }
            GET_Ranking(SET_Ranking)
        }, 2000)
    }, [Status])
    try {
        return (
            <div className="container">
                <div
                    style={{
                        position: "fixed",
                        top: "0px",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        border: "5px solid green",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        textAlign: 'justify',
                        overflowX: "hidden",
                        overflowY: "auto"
                    }}>
                    <hr />

                    {Name === "" ? "Loading..." :
                        <div>
                            <b>Xin chào: {Name}</b>
                            <select onChange={(e) => {
                                SET_Data_use(OBJ_INPUT[e.currentTarget.value])
                            }} className="form-control">
                                {OBJ_INPUT.map((e, i) =>
                                    <option value={i} key={i}>
                                        {e.title}
                                    </option>
                                )}
                            </select>
                            {Data_Learn === ""
                                ?
                                <div>
                                    <h1>{Data_use["title"]}</h1>
                                    <hr />
                                    <h3 style={{ backgroundColor: "black", color: "yellow", padding: "5px" }}>Bấm chọn câu muốn học</h3>
                                    {Data_use["data"].map((e, i) =>
                                        <div
                                            key={i}
                                            style={{
                                                borderRadius: "10px",
                                                border: "1px solid green",
                                                backgroundColor: "#EEEBEB",
                                                marginTop: "15px",
                                                padding: "10px",
                                                cursor: "pointer"
                                            }}
                                            onClick={() => {
                                                SET_Data_Learn(Data_use["data"][i]);
                                                try {
                                                    document.getElementById(List_IDs["BUTTON_CLICK_TO_TALK"]).click()
                                                } catch (error) {
                                                    console.log("es")
                                                }
                                            }}
                                        >
                                            <h3>{e.VN}</h3>
                                            <i>{e.EN}</i>
                                        </div>
                                    )}
                                </div>
                                :
                                <div className="text-justify">
                                    <hr />
                                    <h1>{Data_Learn.EN}</h1>
                                    <hr />
                                    <h1>{Data_Learn.VN}</h1>

                                    <hr />
                                    <button
                                        className="btn btn-warning"
                                        style={{ fontSize: "larger", padding: "20px" }}
                                        onClick={() => {
                                            ReadMessage(Data_Learn.EN, [1, 2].PickRandom())
                                        }}
                                    >Nghe máy đọc nguyên câu</button>
                                    <br />
                                    <b>Đọc từng chữ:</b>
                                    <br />
                                    {Data_Learn.EN.split(" ").map((e, i) =>
                                        <div
                                            style={{
                                                border: "5px solid green",
                                                padding: "5px",
                                                cursor: "pointer",
                                                display: "inline-block",
                                                marginLeft: "10px"
                                            }}
                                            onClick={() => { ReadMessage(e, [1, 2].PickRandom()) }}
                                            key={i}>
                                            {e}
                                        </div>
                                    )}

                                    <h1>{Data_Learn.IPA}</h1>
                                    <hr />
                                    <button
                                        className="btn btn-warning"
                                        style={{ fontSize: "larger", padding: "20px" }}
                                        onClick={() => {
                                            SET_Data_Commands(Data_Learn.EN);
                                            SET_Docthu("Docthu")
                                        }}
                                    >Đọc thử</button>
                                    {Docthu === "" ? null
                                        : Docthu === "Docthu" ? <img src="https://i.postimg.cc/1z95rjPs/Listening.gif" alt="https://i.postimg.cc/1z95rjPs/Listening.gif" width="100px" />
                                            : <span style={{ fontSize: "larger", color: "red" }}> <b>Chính Xác - Chúc mừng</b></span>
                                    }
                                    <hr />
                                    <button
                                        className="btn btn-warning"
                                        style={{ fontSize: "larger", padding: "20px" }}
                                        onClick={() => {
                                            SET_Data_Learn("");
                                            SET_Docthu("")
                                        }}
                                    >Học câu khác</button>
                                    <hr />
                                    <div>


                                    </div>
                                </div>
                            }
                        </div>
                    }
                    <hr />

                    <h5>Bảng xếp hạng</h5>
                    <i>Đọc đúng mỗi câu tính là một điểm</i>
                    <hr />
                    {Show_ranking(ARanking)}
                    <div></div>
                </div>
                <Dictaphone
                    Data={Data_Commands}
                />
                <Read_ReactSpeech />
                <button style={{ display: "none" }} onClick={() => {
                    console.log("onclick");
                    console.log(Data_Commands);
                    console.log($("#messageRes").val());
                    console.log(Check2String($("#messageRes").val(), Data_Commands))
                    if ($("#messageRes").val() !== "" && Docthu === "Docthu") {
                        if (Check2String($("#messageRes").val(), Data_Commands)) {
                            SET_Docthu("A");
                            ReadMessage("Great", [1, 2].PickRandom());
                            SET_Data_Commands("====")
                            Push_Ranking(Name, SET_Ranking)
                        }
                    }
                }} id="messageResBtn"></button>

            </div >
        )
    } catch (error) {
        return null
    }
}

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}


async function GET_Ranking(SET_Ranking) {
    try {
        const res = await fetch(Linkapi + "api/Xep_hang", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        SET_Ranking(data["data"])
    } catch (error) {
        console.log(error)
    }
}
async function Push_Ranking(Name, SET_Ranking) {
    try {
        if (Name.length > 3) {
            const res = await fetch(Linkapi + "api/Xep_hang/Push_ranking?name=" + Name, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json();
            SET_Ranking(data["data"])
        }
    } catch (error) {
        console.log(error)
    }
}
function Show_ranking(Arr) {
    try {
        return (
            <div>
                {Arr.map((e, i) =>
                    <p key={i}>Hạng {i + 1}-  {e["name"]} - Số điểm: {e["score"]}</p>
                )}
            </div>
        )
    } catch (error) {
        return ""
    }
}