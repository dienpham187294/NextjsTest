
import { useEffect, useState } from "react"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.5Repeat"
import ReadMessage from "../../../../util/Read/ReadMessage"
import Read_ReactSpeech from "../../../helpers/Read_ReactSpeech"


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


    const [TimeCount, SET_TimeCount] = useState(15)

    const [MessageToRead, SET_MessageToRead] = useState("")


    useEffect(
        () => {
            let timer1 = setTimeout(() => SET_TimeCount(C => C - 1), 1000);
            return () => {
                clearTimeout(timer1);
            };
        }, [TimeCount]
    );

    useEffect(() => {
        if (MessageToRead === Info_message) {
            let temp = arr[arr.length - 1]
            ReadMessage(props.Data[temp], [1, 2].PickRandom());
            SET_MessageToRead(props.Data[temp]);
            SET_TimeCount(15);
            arr.push(temp + 1);
            SET_Alert(A => A + 1);
        }
    }, [Info_message])

    useEffect(() => {
        if (TimeCount === 0 && props.Data[arr[arr.length - 1]] !== undefined) {
            let temp = arr[arr.length - 1]
            ReadMessage(props.Data[temp], [1, 2].PickRandom());
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
                        Data={MessageToRead}
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
            <Read_ReactSpeech />
            <button style={{ display: "none" }} onClick={() => {
                SET_Info_message($("#messageRes").val())
            }} id="messageResBtn">
            </button>
        </div>
    )
}





export default GamePlay

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}
