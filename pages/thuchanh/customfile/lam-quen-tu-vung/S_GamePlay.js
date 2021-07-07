
import { useEffect, useState } from "react"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.5"
import ReadMessage from "./../../../../util/Read/ReadMessage"
import Read_ReactSpeech from "../../../helpers/Read_ReactSpeech"
import Sound from "../../../../util/Sound/sound"
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
    const [ChooseToRead, SET_ChooseToRead] = useState("")

    const [Get_Anwers_Data, SET_Get_Anwers_Data] = useState("")
    const [ScoreListen, SET_ScoreListen] = useState(0)
    useEffect(() => {
        if (Info_message === ChooseToRead) {
            let data = props.Data;
            data.Read.forEach(e => {
                if (e.text === ChooseToRead) {
                    e.status = true
                    props.SET_LamQuenData(data)
                    SET_Alert(A => A + 1)
                }
                Sound("mixkit-video-game-treasure-2066.wav");
            })
        }

    }, [Info_message])

    function Get_Anwers() {
        let temp = props.Data.Listen.PickRandom()
        SET_Get_Anwers_Data(temp)
        ReadMessage(temp, [1, 2].PickRandom())
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
                <div
                    className="col-3"
                >
                    <Dictaphone
                        Data={ChooseToRead}
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
                                            ReadMessage(e.text, [1, 2].PickRandom())
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
            <Read_ReactSpeech />
            <button style={{ display: "none" }} onClick={() => {
                SET_Info_message($("#messageRes").val())
            }} id="messageResBtn">

            </button>
        </div >
    )
}





export default GamePlay


Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
