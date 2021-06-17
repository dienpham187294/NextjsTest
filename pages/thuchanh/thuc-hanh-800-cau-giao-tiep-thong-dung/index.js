import { useState } from "react";
import Read from "../../helpers/Read_ReactSpeech"
// import Dictionary from "../../helpers/Dictionary"
// import ImageSearch from "../../helpers/ImageSearch"
// import Dictaphone from "../../helpers/RegcognitionV1-0-1"
import tuvung800cau from "../../../util/800cau"
// import GetLongest from "../../../util/GetLongest"
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
                <PracticeDiv Data={Data} Data_Commands={Data_Commands} SET_MessageToRead={SET_MessageToRead} SET_Practice={SET_Practice} />
                : ""}

            <Read MessageToRead={MessageToRead} />


        </div>
    )



    function Show_chude() {
        return (
            <div>
                {Data.map((ee, indexee) =>
                    <div
                        onClick={() => {
                            SET_MessageToRead([ee.EN, 2]);
                            setTimeout(() => {
                                SET_MessageToRead(["", 2]);
                            }, 100)
                        }}
                        style={{
                            display: "inline-block",
                            width: "45%",
                            margin: "2%",
                            border: "1px solid green",
                            borderRadius: "10px",
                            padding: "10px",
                            cursor: "pointer"
                        }}
                        key={indexee + "1"}>
                        {ee.VN}
                        <br />
                        <h5>{ee.EN}</h5>
                    </div>
                )}
            </div>
        )
    }
}


export default Manager

