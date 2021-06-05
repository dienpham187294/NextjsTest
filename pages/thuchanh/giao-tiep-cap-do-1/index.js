
import { useState } from "react";

import UpLoadFile from "./S_Uploadfile"
import InfoLession from "./S_Infolession"
import GamePlay from "./S_GamePlay"



function Manager() {
    const [PageChange, SET_PageChange] = useState(0)
    const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])
    const [Data_TableTool, SET_Data_TableTool] = useState([])
    const [Data_Game, SET_Data_Game] = useState([])


    return (
        <div >
            <div style={{ textAlign: "center" }} className="mt-1 mb-1">
                <button className="btn btn-sm btn-outline-primary mr-3" onClick={() => { SET_PageChange(S => S - 1) }}>Back</button>
                <button className="btn btn-sm btn-outline-primary" onClick={() => { SET_PageChange(S => S + 1) }}>Forward</button>
            </div>
            {PageChange % 3 === 0 ? <UpLoadFile SET_Data_InfoOflession={SET_Data_InfoOflession} SET_Data_TableTool={SET_Data_TableTool} SET_Data_Game={SET_Data_Game} />
                : PageChange % 3 === 1 ? <InfoLession Data={Data_InfoOflession} />
                    : PageChange % 3 === 2 ? <GamePlay Data={Data_Game} Data_TableTool={Data_TableTool} />
                        : PageChange}


        </div>

    )

}
export default Manager

