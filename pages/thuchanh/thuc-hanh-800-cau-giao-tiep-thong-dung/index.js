import { useState } from "react";
import Read from "../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../util/ReadMessage";
import tuvung800cau from "../../../util/800cau"
import PracticeDiv from "./practice"


function Manager() {
    const [Data, SET_Data] = useState(tuvung800cau.slice(0, 20))
    const [MessageToRead, SET_MessageToRead] = useState(["", 1])
    const [Practice, SET_Practice] = useState(false)
    const [Data_Commands, SET_Data_Commands] = useState([])



    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành 23+ chủ đề với 800+ từ vựng với hình ảnh sinh động
                        </i>
                    </b>
                </p>
            </div>

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


export default Manager
