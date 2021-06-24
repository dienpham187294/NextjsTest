
import { useEffect, useState } from "react"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.5"
import ReadMessage from "../../../../util/ReadMessage"
import Read_ReactSpeech from "../../../helpers/Read_ReactSpeech"

let arr = [0];
let ArrDapAnDung = [""];
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

    const [TimeCount, SET_TimeCount] = useState(5)
    const [Cauhoi, SET_Cauhoi] = useState("")
    const [Danhsach_DapAn, SET_Danhsach_DapAn] = useState([])
    const [Score, SET_Score] = useState(0)
    const [DapAn_Chon, SET_DapAn_Chon] = useState("")


    const [End, SET_End] = useState(false)

    useEffect(
        () => {
            let timer1 = setTimeout(() => SET_TimeCount(C => C - 1), 1000);
            return () => {
                clearTimeout(timer1);
            };
        }, [TimeCount]
    );

    useEffect(() => {
        if (DapAn_Chon !== "" && Info_message === DapAn_Chon) {
            let temp = arr[arr.length - 1]
            if (DapAn_Chon === ArrDapAnDung[ArrDapAnDung.length - 1]) {
                SET_Score(S => S + 1)
            }
            if (props.Data[temp] !== undefined) {
                SET_Cauhoi(props.Data[temp].question)
                SET_Danhsach_DapAn(props.Data[temp].anwers)
                SET_TimeCount(30);
                ArrDapAnDung.push(props.Data[temp].anwerright)
                arr.push(temp + 1);
            } else { SET_End(true) }

            SET_Alert(A => A + 1);
        }
    }, [Info_message])

    useEffect(() => {
        if (TimeCount === 0) {
            let temp = arr[arr.length - 1]
            if (props.Data[arr[arr.length - 1]] !== undefined) {
                SET_Cauhoi(props.Data[temp].question)
                SET_Danhsach_DapAn(props.Data[temp].anwers)
                ArrDapAnDung.push(props.Data[temp].anwerright)
                SET_TimeCount(30);
                arr.push(temp + 1);
                SET_Alert(A => A + 1);
            } else { SET_End(true) }

        }
    }, [TimeCount])
    function SHOW_ArrOfAnwers() {
        try {
            return Danhsach_DapAn.map((e, i) =>
                <p
                    key={i}
                    onClick={() => {
                        SET_DapAn_Chon(e)
                    }}
                    style={{ cursor: "pointer" }}
                >
                    {e}</p>
            )
        } catch (error) {
            return ""
        }
    }
    return (
        <div >
            <div className="row">
                <div className="col-6" style={{ maxHeight: "300px", overflow: "auto" }}>
                    <Dictaphone
                        Data={DapAn_Chon}
                    />
                </div>
                <div className="col-6 text-center">

                    {End ?
                        <h3> Điểm: {Score}/{props.Data.length}</h3> :
                        <>
                            <div>
                                {TimeCount} || Câu: {Alert} /{props.Data.length}
                            </div>
                            <hr />
                            {Cauhoi} || Chọn: {DapAn_Chon}
                            <hr />
                            {SHOW_ArrOfAnwers()}
                        </>
                    }
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



