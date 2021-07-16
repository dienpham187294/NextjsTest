
import { useState } from "react";
import UpLoadFile from "./S_Uploadfile"
import GamePlay from "./S_GamePlay"



function Manager() {
    const [PageChange, SET_PageChange] = useState(0)
    const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])
    const [Data_TableTool, SET_Data_TableTool] = useState([])
    const [Data_Game, SET_Data_Game] = useState([])


    return (
        <div >
            {PageChange % 3 === 0 ? <UpLoadFile SET_Data_InfoOflession={SET_Data_InfoOflession} SET_Data_TableTool={SET_Data_TableTool} SET_Data_Game={SET_Data_Game} SET_PageChange={SET_PageChange} />
                : PageChange % 3 === 1 ? <GamePlay Data={Data_Game} Data_TableTool={Data_TableTool} />
                    : PageChange}
        </div>

    )

}
export default Manager

