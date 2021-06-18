import { useState } from "react";
import Read from "../../helpers/Read_ReactSpeech"
// import Dictionary from "../../helpers/Dictionary"
// import ImageSearch from "../../helpers/ImageSearch"
// import Dictaphone from "../../helpers/RegcognitionV1-0-1"
import baigiaotiep from "../../../util/100baigiaotiep"
// import GetLongest from "../../../util/GetLongest"
import PracticeDiv from "./practice"


function Manager() {
    const [Data, SET_Data] = useState(baigiaotiep[0])
    const [MessageToRead, SET_MessageToRead] = useState(["", 1])
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
                        if (e < baigiaotiep.length) {
                            SET_Data(baigiaotiep[e])
                        }
                    }}
                    type="button" defaultValue="Chọn"

                />

                <input
                    onClick={() => {
                        let arrTemp = [];
                        Data.lession[0].forEach((e, i) => {
                            if (i % 2 === 1) {
                                arrTemp.push(e)
                            }
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
                <hr />
                <h5>{Data.tille}</h5>
                <hr />
                <div>
                    {Data.lession[0].map((e, i) =>
                        <>
                            <p
                                onClick={() => {
                                    SET_MessageToRead([e, 2]);
                                    setTimeout(() => {
                                        SET_MessageToRead(["", 2]);
                                    }, 100)
                                }}
                                style={{ cursor: "pointer" }}
                            >{i % 2 !== 1 ? <b>{e}</b> : e}</p>
                        </>
                    )}
                </div>
                <hr />
            </div>
        )
    }
}


export default Manager

