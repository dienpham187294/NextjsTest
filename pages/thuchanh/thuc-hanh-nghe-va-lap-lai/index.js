
import { useState } from "react";

import UpLoadFile from "./S_Uploadfile"

import GamePlay from "./S_GamePlay"



function Manager() {
    const [PageChange, SET_PageChange] = useState(0)
    const [Data, SET_Data] = useState([])


    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Luyện lắng nghe và lặp lại có thể rèn luyện nghe và phát âm. nâng cao khả năng
                            phản xạ và ứng đối nhanh chóng, chính xác và đa dạng hơn trong giao tiếp.
                        </i>
                    </b>
                </p>
            </div>

            <div style={{ textAlign: "center" }} className="mt-1 mb-1">
                <button className="btn btn-sm btn-outline-primary mr-3" onClick={() => { SET_PageChange(S => S - 1) }}>Back</button>
                <button className="btn btn-sm btn-outline-primary" onClick={() => { SET_PageChange(S => S + 1) }}>Forward</button>
            </div>
            {PageChange % 2 === 0 ? <UpLoadFile SET_Data={SET_Data} />
                : PageChange % 2 === 1 ? <GamePlay Data={Data}
                    SET_Data={SET_Data} />
                    : PageChange}


        </div>

    )

}
export default Manager

