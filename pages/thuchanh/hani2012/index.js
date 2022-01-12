
import { useState } from "react";
import UpLoadFile from "../../../util/mainPlayversion2/S_Uploadfile"
import InfoLession from "../../../util/mainPlayversion2/S_Lession"
import GamePlay from "../../../util/mainPlayversion2/S_GamePlay"
import DL from "../../../util/filedulieu1/DulieuThuchanh_hung/DulieuTotal";
const ShowInterim = true

function Manager() {
    const [PageChange, SET_PageChange] = useState(0)
    const [Data_InfoOflession, SET_Data_InfoOflession] = useState([])

    const [Data_Game, SET_Data_Game] = useState([])
    const [huongdan, SET_huongdan] = useState("")
    const [NameOflession, SET_NameOflession] = useState("")
    const Total = new MDG(SET_PageChange, SET_Data_Game, SET_Data_InfoOflession, SET_huongdan, SET_NameOflession)
    return (
        <div >
            {PageChange === 0 ? <UpLoadFile Total={Total} DL={DL} />
                : PageChange === 2 ? <InfoLession Data={Data_InfoOflession} Total={Total} Data={Data_Game} />
                    : PageChange === 1 ? <GamePlay Data={Data_Game} huongdan={huongdan} NameOflession={NameOflession} Total={Total} ShowInterim={ShowInterim} />
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
