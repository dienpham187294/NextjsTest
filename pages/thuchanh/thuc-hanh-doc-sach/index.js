
import { useState } from "react";

import UpLoadFile from "./S_Uploadfile"

import GamePlay from "./S_GamePlay"



function Manager() {
    const [PageChange, SET_PageChange] = useState(0)
    const [Read_Data, SET_Read_Data] = useState([])


    return (

        <div className="container">
            <h1>Thực hành đọc sách</h1>
            <div style={{ textAlign: "center" }} className="mt-1 mb-1">
                <button className="btn btn-sm btn-outline-primary mr-3" onClick={() => { SET_PageChange(S => S - 1) }}>Back</button>
                <button className="btn btn-sm btn-outline-primary" onClick={() => { SET_PageChange(S => S + 1) }}>Forward</button>
            </div>
            {PageChange % 2 === 0 ? <UpLoadFile SET_Read_Data={SET_Read_Data} />
                : PageChange % 2 === 1 ? <GamePlay Data={Read_Data}
                    SET_Read_Data={SET_Read_Data} />
                    : PageChange}


        </div>

    )

}
export default Manager

