
import { useState } from "react";

import UpLoadFile from "./S_Uploadfile"

import GamePlay from "./S_GamePlay"



function Manager() {
    const [PageChange, SET_PageChange] = useState(0)
    const [LamQuenData, SET_LamQuenData] = useState([])


    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Làm quen với từ vựng và câu trước khi thực hành.
                        </i>
                    </b>
                </p>
            </div>

            <div style={{ textAlign: "center" }} className="mt-1 mb-1">
                <button className="btn btn-sm btn-outline-primary mr-3" onClick={() => { SET_PageChange(S => S - 1) }}>Back</button>
                <button className="btn btn-sm btn-outline-primary" onClick={() => { SET_PageChange(S => S + 1) }}>Forward</button>
            </div>
            {PageChange % 2 === 0 ? <UpLoadFile SET_LamQuenData={SET_LamQuenData} />
                : PageChange % 2 === 1 ? <GamePlay Data={LamQuenData}
                    SET_LamQuenData={SET_LamQuenData} />
                    : PageChange}


        </div>

    )

}
export default Manager

