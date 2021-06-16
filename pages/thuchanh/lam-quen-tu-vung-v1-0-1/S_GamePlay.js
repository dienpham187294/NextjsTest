
import { useEffect, useState } from "react"
import Dictaphone from "../../helpers/Regcognition"

let synth

function GamePlay(props) {

    try {
        if (props.Data.length === 0) {
            return <div>Đang chờ dữ liệu</div>
        }
    } catch (error) {
        return <div>Lỗi dữ liệu nhập vào. Kiểm tra lại file dữ liệu</div>
    }

    const [Info_message, SET_Info_message] = useState("")
    const [Alert, SET_Alert] = useState(0)
    const [Flag, SET_Flag] = useState(true)

    const [ChooseToRead, SET_ChooseToRead] = useState("")

    const [Get_Anwers_Data, SET_Get_Anwers_Data] = useState("")
    const [ScoreListen, SET_ScoreListen] = useState(0)



    useEffect(() => {
        if (Flag) {
            if ('speechSynthesis' in window) {
                synth = window.speechSynthesis
                Read("ready.")
            }
            SET_Flag(false)
        }
    })

    async function Read(message) {
        if (message !== null) {
            try {
                let ut = await new SpeechSynthesisUtterance(message);
                ut.voice = await synth.getVoices()[3];
                synth.speak(ut);
            } catch (error) {
                console.error();
            }
        }

    }
    useEffect(() => {
        if (checkMessage(Info_message, ChooseToRead)) {
            let data = props.Data;
            data.Read.forEach(e => {
                if (e.text === ChooseToRead) {
                    e.status = true
                    props.SET_LamQuenData(data)
                    SET_Alert(A => A + 1)
                }
            })
        }

    }, [Info_message])

    function Get_Anwers() {
        let temp = props.Data.Listen.PickRandom()
        SET_Get_Anwers_Data(temp)
        Read(temp)
    }
    function Show_Anwers() {
        return <table className="table table-sm table-striped">
            <tbody>{
                props.Data.Listen.map((e, i) =>
                    <tr key={i}>
                        <td
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                if (Get_Anwers_Data === e) {
                                    SET_ScoreListen(S => S + 1)
                                }
                            }}
                        >
                            {e}
                        </td>
                    </tr>
                )
            }</tbody>
        </table>
    }

    return (
        <div >
            <div className="row">
                <div className="col-3" style={{ maxHeight: "300px", overflow: "auto" }}>
                    <Dictaphone
                        SET_Info_message={SET_Info_message}
                    />
                </div>
                <div className="col-9 text-justify">
                    <hr />
                    <h5>Làm quen với việc đọc chuẩn</h5>
                    <div className="text-center p-4">
                        {ChooseToRead}
                    </div>

                    <table className="table table-striped"><tbody>

                        {props.Data.Read.map((e, i) =>
                            <tr key={i + "tr"}>
                                <td style={{ cursor: "pointer", backgroundColor: e.status ? "yellow" : "transparent" }}>
                                    {e.text}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => {
                                            Read(e.text)
                                        }}
                                    > Read </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => {
                                            SET_ChooseToRead(e.text)
                                        }}
                                    > Try it! </button>
                                </td>
                            </tr>
                        )}
                    </tbody></table>
                    <hr />
                    <h5>Làm quen với nghe chuẩn</h5>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => {
                        Get_Anwers()
                    }}>Click to listen</button>
                    <br />
                    {ScoreListen}
                    <br />
                    {Show_Anwers()}
                    <hr />
                </div>
            </div>
        </div >
    )
}





export default GamePlay

function SortMessageToArray(message) {


    let a = message.toLowerCase().split(/[\?#!-().]+\r/).join("")
    let b = a.toString();
    let c = b.split(" ");

    let Res = [];
    c.forEach(e => {
        e !== "";
        Res.push(e)
    })
    return Res

}

function checkMessage(message_API, message_INPUT) {

    if (message_API === null || message_INPUT === null || message_API === "" || message_INPUT === "") {
        return false
    }
    let numCheckRight = 0;
    let Allnumtocheck = SortMessageToArray(message_INPUT).length
    let MessageA = message_API.toLowerCase().split(/[\?#!-().]+\r/).join("")
    SortMessageToArray(message_INPUT).forEach(e => {
        if (MessageA.indexOf(e) !== -1) {
            numCheckRight += 1;
        }
    })
    if (numCheckRight / Allnumtocheck > 2 / 3) {
        return true
    }
    return false
}

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
