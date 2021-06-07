
import { useEffect, useState } from "react"
import Dictaphone from "../../helpers/Regcognition"

let synth;
let arr = [0];
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

    const [TimeCount, SET_TimeCount] = useState(15)

    const [MessageToRead, SET_MessageToRead] = useState("")
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

    useEffect(
        () => {
            let timer1 = setTimeout(() => SET_TimeCount(C => C - 1), 1000);
            return () => {
                clearTimeout(timer1);
            };
        }, [TimeCount]
    );

    useEffect(() => {
        if (MessageToRead !== "" && checkMessage(Info_message, MessageToRead)) {
            let temp = arr[arr.length - 1]
            Read(props.Data[temp]);
            SET_MessageToRead(props.Data[temp]);
            SET_TimeCount(15);
            arr.push(temp + 1);
            SET_Alert(A => A + 1);
        }
    }, [Info_message])

    useEffect(() => {
        if (!Flag && TimeCount === 0 && props.Data[arr[arr.length - 1]] !== undefined) {
            let temp = arr[arr.length - 1]
            Read(props.Data[temp]);
            SET_MessageToRead(props.Data[temp])
            SET_TimeCount(15);
            arr.push(temp + 1);

        }
    }, [TimeCount])

    return (
        <div >
            <div className="row">
                <div className="col-6" style={{ maxHeight: "300px", overflow: "auto" }}>
                    <Dictaphone
                        SET_Info_message={SET_Info_message}
                    />
                </div>
                <div className="col-6 text-justify">
                    <div>
                        {TimeCount} || Điểm: {Alert} /{props.Data.length}
                    </div>

                    Lắng nghe và lặp lại.
                    {/* {JSON.stringify(props.Data)} */}
                </div>
            </div>
        </div>
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