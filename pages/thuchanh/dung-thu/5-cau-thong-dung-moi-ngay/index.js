import { useState } from "react";
import jsonfileInput from "../../../../util/filedulieu/moingay5cauthongdung/5caumoingay"
import Read from "../../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../../util/Read/ReadMessage";
import PracticeDiv from "./practice"

let i = Math.floor(1625797529110 / (24 * 60 * 60 * 1000));
let j = (Math.floor(Date.now() / (24 * 60 * 60 * 1000)) - i) % jsonfileInput.length;
function INDEX_5caumoingay() {
    const [Data, SET_Data] = useState(jsonfileInput[j])
    const [Practice, SET_Practice] = useState(false)
    const [Data_Commands, SET_Data_Commands] = useState([])

    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành 5 / 800+ câu giao tiếp thông dụng nhất (5 câu mới mỗi ngày)
                        </i>
                    </b>
                </p>
            </div>
            <hr />
            <div>
                <input
                    onClick={() => {
                        let arrTemp = [];
                        Data.forEach(e => {
                            arrTemp.push(e.EN)
                        })
                        SET_Data_Commands(arrTemp)
                        SET_Practice(true)
                    }}
                    className="btn btn-outline-primary ml-1" type="button" defaultValue="Thực hành"
                />
            </div>
            <i>Tips: Bấm để nghe máy đọc</i>
            {Show_chude()}

            {Practice ?
                <PracticeDiv Data={Data} Data_Commands={Data_Commands} SET_Data_Commands={SET_Data_Commands} SET_Practice={SET_Practice} />
                : ""}
            <Read />


        </div>
    )



    function Show_chude() {
        return (
            <div>

                <table className="table table-striped">
                    <tbody>
                        {Data.map((e, i) =>
                            <tr
                                onClick={() => {
                                    ReadMessage(e.EN, 2)
                                }}
                                style={{
                                    cursor: "pointer"
                                }}
                                key={i}>
                                <td>{e.EN}</td>
                                <td>{e.VN}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default INDEX_5caumoingay
