
import { useEffect, useState } from "react";

import UpLoadFile from "./S_Uploadfile"
import InfoLession from "./S_Lession"
import GamePlay from "./S_GamePlay"



function Manager() {
    const [PageChange, SET_PageChange] = useState(0)
    const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])
    const [Data_TableTool, SET_Data_TableTool] = useState([])
    const [Data_Game, SET_Data_Game] = useState([])
    const [huongdan, SET_huongdan] = useState("")
    const Total = new MDG(SET_PageChange, SET_Data_TableTool, SET_Data_Game, SET_Data_InfoOflession, SET_huongdan)
    return (
        <div >
            {PageChange === 0 ? <UpLoadFile Total={Total} />
                : PageChange === 2 ? <InfoLession Data={Data_InfoOflession} Total={Total} />
                    : PageChange === 1 ? <GamePlay Data={Data_Game} Data_TableTool={Data_TableTool} huongdan={huongdan} Total={Total} />
                        : PageChange}
        </div>

    )

}
export default Manager

function MDG(
    SET_PageChange,
    SET_Data_TableTool,
    SET_Data_Game,
    SET_Data_InfoOflession,
    SET_huongdan
) {
    this.fnObj = {
        "SET_PageChange": SET_PageChange,
        "SET_Data_TableTool": SET_Data_TableTool,
        "SET_Data_Game": SET_Data_Game,
        "SET_Data_InfoOflession": SET_Data_InfoOflession,
        "SET_huongdan": SET_huongdan
    }
    this.stObj = {
        "inputSumit": "",
    }
}
