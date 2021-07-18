import { useState } from "react";
import Read from "../../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../../util/Read/ReadMessage";
import baigiaotiep from "../../../../util/filedulieu/100baigiaotiep"
import Cookies_ReadingPage from "../../../../util/Cookies/Cookies_checking"
import PracticeDiv from "./practice"


function Manager() {
    const [Data, SET_Data] = useState(baigiaotiep[0])
    const [Practice, SET_Practice] = useState(false)
    const [Data_Commands, SET_Data_Commands] = useState([])



    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành 100 đoạn giao tiếp thông dụng
                        </i>
                    </b>
                </p>
            </div>

            <div>
                Chọn chủ đề:    <input id="chonchude" type="number" defaultValue="1" />
                <input
                    className="btn btn-outline-primary ml-1"
                    onClick={() => {
                        let e = document.getElementById("chonchude").value;
                        if (e - 1 < baigiaotiep.length) {
                            SET_Data(baigiaotiep[e - 1])
                        }
                    }}
                    type="button" defaultValue="Chọn"

                />

                <input
                    onClick={() => {
                        SET_Practice(true)
                    }}
                    className="btn btn-outline-primary ml-1" type="button" defaultValue="Thực hành đọc sau"
                />
            </div>
            {Cookies_ReadingPage("V003", "100-bai-giao-tiep")}
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
                <hr />
                <h5>{Data.tille}</h5>
                <hr />
                <div>
                    {Data.lession.map((e, i) =>
                        <div key={i}>
                            <p
                                onClick={() => {
                                    ReadMessage(e, 2)
                                }}
                                style={{ cursor: "pointer" }}
                            >{i % 2 !== 1 ? <b>{e}</b> : e}</p>
                        </div>
                    )}
                </div>
                <hr />
            </div>
        )
    }
}


export default Manager

