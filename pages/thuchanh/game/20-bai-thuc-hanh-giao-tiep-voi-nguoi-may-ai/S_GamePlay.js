
import { useEffect, useState } from "react"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1AI0.5"
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

    const [Data_Commands, SET_Data_Commands] = useState(["hi how are you"])


    return (
        <>
            <div className="row">
                <div className="col-md-2 sm-12" style={{ maxHeight: "300px", overflow: "auto" }}>
                    <Dictaphone
                        Data={Data_Commands}
                    />
                    <input
                        style={{ display: "none" }}
                        onClick={() => {
                            SET_Info_message($("#messageRes").val())
                        }}
                        type="button" id="messageResBtn"
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
                            SET_Data_Commands={SET_Data_Commands}
                            Total={props.Total}
                        /> : ""}
                </div>

            </div>
        </>
    )
}





export default GamePlay
