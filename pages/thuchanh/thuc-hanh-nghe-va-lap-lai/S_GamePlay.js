
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
        let Temp_Massage = [" " + Info_message.toLowerCase().split(/[\?#!-(),-.]+/).join("")];
        let Arr = props.Data;
        Arr.forEach(e => {
            e.forEach(ee => {
                if (!ee.status) {
                    let temp = ee.text.split(/[\?#!-(),-.]+/).join("").toLowerCase();

                    if (Temp_Massage[Temp_Massage.length - 1].indexOf(temp) > -1) {
                        ee.status = true;
                        Temp_Massage.push(Temp_Massage[Temp_Massage.length - 1].replace(temp, " "))

                    }
                }
            })
        });
        props.SET_Read_Data(Arr)
        SET_Alert(A => A + 1)
    }, [Info_message])


    return (
        <div >
            <div className="row">
                <div className="col-6" style={{ maxHeight: "300px", overflow: "auto" }}>
                    <Dictaphone
                        SET_Info_message={SET_Info_message}
                    />
                </div>
                <div className="col-6 text-justify">
                    {props.Data.map((e, i) =>
                        <div key={i + "1"}>
                            <p key={i}>{e.map((ee, ii) =>
                                <span
                                    onClick={() => {
                                        Read(ee.text)
                                    }}
                                    key={ii}
                                    style={{ backgroundColor: ee.status ? "yellow" : "transparent", cursor: "pointer" }}>{ee.text} </span>
                            )}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}





export default GamePlay

