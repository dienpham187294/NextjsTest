
import { useEffect, useState } from "react"
import Dictaphone from "../../helpers/RegcognitionV1-0-1AI0.5_01"
import ArrOfPeopeAppear_ReactJSX from "./GamePlay"
// import $ from "jquery"

function GamePlay(props) {
    //Can read length of underfined
    const [ArrOfPeopeAppear_ReactData] = useState(props.Data);
    const [ALLTable_ReactData] = useState([]);
    const [Info_message, SET_Info_message] = useState(null)

    const [Data_Commands, SET_Data_Commands] = useState(["hi how are you"])

    try {
        if (props.Data.length === 0) {
            return <div>Đang chờ dữ liệu</div>
        }
    } catch (error) {
        return <div>Đang chờ dữ liệu</div>
    }




    return (
        <>
            <div>
                <div style={{ display: "none" }}>
                    <Dictaphone
                        Data={Data_Commands} Total={props.Total}
                    />
                </div>
                <div >{
                    ArrOfPeopeAppear_ReactData !== null ?
                        <ArrOfPeopeAppear_ReactJSX
                            ArrOfPeopeAppear_ReactData={ArrOfPeopeAppear_ReactData}
                            Info_message={Info_message}
                            SET_Info_message={SET_Info_message}
                            ALLTable_ReactData={ALLTable_ReactData}
                            Data_TableTool={props.Data_TableTool}
                            SET_Data_Commands={SET_Data_Commands}
                            Total={props.Total}
                            huongdan={props.huongdan}
                        /> : ""}
                </div>

            </div>
        </>
    )
}

export default GamePlay
