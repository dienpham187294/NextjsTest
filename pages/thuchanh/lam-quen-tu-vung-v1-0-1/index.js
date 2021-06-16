
import { useState } from "react";

import UpLoadFile from "./S_Uploadfile"

import GamePlay from "./S_GamePlay"



function Manager() {

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
            <div className="row">
                <div className="col-4">
                    <select className="form-control">
                        <option>
                            Chọn bài học
                        </option>
                    </select>
                </div>
                <div className="col-4">
                    <UpLoadFile SET_LamQuenData={SET_LamQuenData} />
                </div>
                <div className="col-4">
                    Tự tạo file thực hành
                </div>
            </div>


            <GamePlay
                Data={LamQuenData}
                SET_LamQuenData={SET_LamQuenData}
            />

        </div>
    )
}
export default Manager

