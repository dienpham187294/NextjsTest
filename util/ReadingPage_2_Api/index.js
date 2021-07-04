
import { useState } from "react";

import UpLoadFile from "./S_Uploadfile"

import GamePlay from "./S_GamePlay"



function Manager(props) {
    const [PageChange, SET_PageChange] = useState(0)
    const [Read_Data, SET_Read_Data] = useState([])
    const [ImageData, SET_ImageData] = useState([])
    const [Data_Commands, SET_Data_Commands] = useState([])

    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Luyện đọc văn bản thành tiếng có thể rèn luyện khả năng phát âm, nâng cao khả năng
                            cảm nhận được câu nói, văn bản, biết nhấn nhá theo ngữ điệu, văn cảnh
                            lâu dần sẽ tránh được đọc, nói một cách rời rạc, ngắc ngứ, thiếu liên mạch
                            gây khó chịu và khó hiểu cho người nghe.
                        </i>
                    </b>
                </p>
            </div>

            <div className="mt-1 mb-1">
                <button className="btn btn-warning mr-3"
                    onClick={() => {
                        if (PageChange !== 0) {
                            SET_PageChange(S => S - 1)
                        }
                    }}>Back</button>
                <button style={{ float: "right" }} className="btn  btn-warning" onClick={() => { SET_PageChange(S => S + 1) }}>Forward</button>
            </div>
            {PageChange % 2 === 0
                ?
                <UpLoadFile
                    SET_Read_Data={SET_Read_Data}
                    SET_Data_Commands={SET_Data_Commands}
                    SET_PageChange={SET_PageChange}
                    SET_ImageData={SET_ImageData}
                    OBJ_Data_Input={props.OBJ_Data_Input}
                />
                : PageChange % 2 === 1
                    ? <GamePlay
                        Data={Read_Data}
                        SET_Data_Commands={SET_Data_Commands}
                        Data_Commands={Data_Commands}
                        SET_Read_Data={SET_Read_Data}
                        ImageData={ImageData}
                        SET_PageChange={SET_PageChange}
                        OBJ_Data_Input={props.OBJ_Data_Input}
                    />
                    : PageChange}


        </div>

    )

}
export default Manager

