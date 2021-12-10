
import { useState } from "react";

import UpLoadFile from "./S_Uploadfile"
import InfoLession from "../../../util/mainPlay/S_Lession"
import GamePlay from "../../../util/mainPlay/S_GamePlay"



function Manager() {
    const [PageChange, SET_PageChange] = useState(0)
    const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])

    const [Data_Game, SET_Data_Game] = useState([])
    const [huongdan, SET_huongdan] = useState("")
    const [NameOflession, SET_NameOflession] = useState("")
    const Total = new MDG(SET_PageChange, SET_Data_Game, SET_Data_InfoOflession, SET_huongdan, SET_NameOflession)
    return (
        <div >
            {PageChange === 0 ? <UpLoadFile Total={Total} />
                : PageChange === 2 ? <InfoLession Data={Data_InfoOflession} Total={Total} />
                    : PageChange === 1 ? <GamePlay Data={Data_Game} huongdan={huongdan} NameOflession={NameOflession} Total={Total} />
                        : PageChange}
        </div>

    )

}
export default Manager

function MDG(
    SET_PageChange,
    SET_Data_Game,
    SET_Data_InfoOflession,
    SET_huongdan,
    SET_NameOflession
) {
    this.fnObj = {
        "SET_PageChange": SET_PageChange,
        "SET_Data_Game": SET_Data_Game,
        "SET_Data_InfoOflession": SET_Data_InfoOflession,
        "SET_huongdan": SET_huongdan,
        "SET_NameOflession": SET_NameOflession
    }
    this.stObj = {
        "inputSumit": "",
    }
}
