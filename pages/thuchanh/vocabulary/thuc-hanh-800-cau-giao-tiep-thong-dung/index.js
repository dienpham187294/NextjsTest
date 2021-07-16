import { useState } from "react";
import Read from "../../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../../util/Read/ReadMessage";
import tuvung800cau from "../../../../util/filedulieu/800cau"
import PracticeDiv from "./practice"
import Cookies_checking from "../../../../util/Cookies/Cookies_checking"
import Dictionary_with_image from "../../../helpers/IMAGE/Dictionary_with_image";

function Index_800cauthongdung() {
    const [Data, SET_Data] = useState(tuvung800cau.slice(0, 20))
    const [Practice, SET_Practice] = useState(false)
    const [Data_Commands, SET_Data_Commands] = useState([])
    const [Learn_detail, SET_Learn_detail] = useState("")
    const [Popup, SET_Popup] = useState("")

    return (
        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành 800+ câu giao tiếp thông dụng nhất
                        </i>
                    </b>
                </p>
            </div>
            <hr />

            <hr />
            <div>
                From:    <input type="number" defaultValue="1" id="begin" />
                To:    <input type="number" defaultValue="20" id="end" />
                <input
                    className="btn btn-outline-primary ml-1"
                    onClick={() => {
                        let beginNumber = document.getElementById("begin").value;
                        let endNumber = document.getElementById("end").value;
                        console.log(1, beginNumber > 0, endNumber - beginNumber > 0)
                        if (beginNumber > 0 && endNumber - beginNumber >= 0) {
                            let arr = tuvung800cau.slice(beginNumber - 1, endNumber);
                            SET_Data(arr)
                        }
                    }}
                    type="button" defaultValue="Search"

                />

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
            <b>Từ điển hình ảnh</b>
            <p>{Learn_detail.split(" ").map((e, i) =>
                <span
                    key={i}
                    style={{
                        border: "2px solid green",
                        padding: "0 3px",
                        marginLeft: "15px",
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        SET_Popup(e)
                    }}
                >{e}</span>)}</p>
            {Cookies_checking("V002", "800-cau-thong-dung")}
            {Show_chude()}

            {Practice ?
                <PracticeDiv Data={Data} Data_Commands={Data_Commands} SET_Data_Commands={SET_Data_Commands} SET_Practice={SET_Practice} />
                : ""}
            <Read />
            <Dictionary_with_image Popup={Popup} />

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
                                    SET_Learn_detail(e.EN)
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


export default Index_800cauthongdung

