
import { useEffect, useState } from "react"
import Dictaphone from "../../../pages/helpers/Regcognition"
import ArrOfPeopeAppear_ReactJSX from "./Gameplay/ArrOfPeopeAppear_ReactJSX"


function GamePlay(props) {
    //Can read length of underfined
    try {
        if (props.Data.length === 0) {
            return <div>Đang chờ dữ liệu</div>
        }
    } catch (error) {
        return <div>Đang chờ dữ liệu</div>
    }

    const [ArrOfPeopeAppear_ReactData] = useState(props.Data);
    const [ALLTable_ReactData] = useState([]);
    const [Info_message, SET_Info_message] = useState(null)



    return (
        <>
            <div className="row">
                <div className="col-md-2 sm-12" style={{ maxHeight: "300px", overflow: "auto" }}>
                    <Dictaphone
                        SET_Info_message={SET_Info_message}
                    />
                </div>
                <div className="col-md-9 sm-12">{
                    ArrOfPeopeAppear_ReactData !== null ?
                        <ArrOfPeopeAppear_ReactJSX
                            ArrOfPeopeAppear_ReactData={ArrOfPeopeAppear_ReactData}
                            Info_message={Info_message}
                            SET_Info_message={SET_Info_message}
                            ALLTable_ReactData={ALLTable_ReactData}
                            Data_TableTool={props.Data_TableTool}

                        /> : ""}
                </div>

            </div>
        </>
    )
}





export default GamePlay
