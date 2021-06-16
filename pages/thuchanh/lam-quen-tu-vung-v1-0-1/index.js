
import { useState } from "react";

import UpLoadFile from "./S_Uploadfile"

import GamePlay from "./S_GamePlay"

import Jsonfile from "../../../util/Testfuntion"

function Manager() {

    const [Data, SET_Data] = useState(Jsonfile)

    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành 3000+ từ vựng thông dụng nhất
                        </i>
                    </b>
                </p>
            </div>
            {Show_3000Words(Jsonfile)}
        </div>
    )
}
export default Manager

function Show_3000Words(Jsonfile) {
    return (
        <table className="table table-sm"><tbody>
            {
                Jsonfile.map((e, i) =>
                    <tr key={i}>
                        {
                            e.map((ee, ii) =>
                                <td key={ii} >{ee}</td>
                            )

                        }
                        <td>
                            <input type="checkbox"></input>
                        </td>
                    </tr>
                )
            }
        </tbody></table >

    )
}