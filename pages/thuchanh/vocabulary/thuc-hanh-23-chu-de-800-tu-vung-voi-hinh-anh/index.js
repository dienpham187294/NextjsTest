import { useState } from "react";
import Read from "../../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../../util/Read/ReadMessage";
import tuvunghinhanh from "../../../../util/filedulieu/tuvunghinhanh"
import PracticeDiv from "./practice"
import Cookies_ReadingPage from "../../../../util/Cookies/Cookies_ReadingPage"

function Manager() {
    const [Data, SET_Data] = useState(tuvunghinhanh[0])
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
                Chọn chủ đề:    <input id="chonchude" type="number" defaultValue="1" />
                <input
                    className="btn btn-outline-primary ml-1"
                    onClick={() => {
                        let e = document.getElementById("chonchude").value;
                        if (e < tuvunghinhanh.length) {
                            SET_Data(tuvunghinhanh[e])
                        }
                    }}
                    type="button" defaultValue="Chọn"

                />

                <input
                    onClick={() => {
                        let arrTemp = [];
                        Data.forEach(e => {
                            arrTemp.push(e.name)
                        })
                        SET_Data_Commands(arrTemp)
                        SET_Practice(true)
                    }}
                    className="btn btn-outline-primary ml-1" type="button" defaultValue="Thực hành"
                />
            </div>
            {Cookies_ReadingPage("V004", "3000-tu-vung-thong-dung")}
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
                {Data.map((ee, indexee) =>
                    <div
                        onClick={() => {
                            ReadMessage(ee.name, 2)
                        }}
                        style={{
                            display: "inline-block",
                            width: "fit-content",
                            margin: "2%",
                            border: "1px solid green",
                            borderRadius: "10px",
                            padding: "10px",
                            cursor: "pointer"
                        }}
                        key={indexee + "1"}>
                        <img alt={ee.name} src={ee.image} width="100px" />
                        <br />
                        {ee.name}
                    </div>
                )}
            </div>
        )
    }
}


export default Manager

