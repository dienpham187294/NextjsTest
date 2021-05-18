import { useState } from "react"
import Dictaphone from "../helpers/Regcognition"
import ArrOfPeopeAppear_ReactJSX from "./ArrOfPeopeAppear_ReactJSX"
function Playing({ ToolData, Gamedata, SET_ScoreSumit }) {

    if (!TestArray(ToolData) || !TestArray(Gamedata)) {
        return "Lỗi cú pháp "
    }
  




    const [ArrOfPeopeAppear_ReactData] = useState(JSON.parse(Gamedata));
    const [ALLTable_ReactData] = useState(JSON.parse(ToolData));
    const [Info_message, SET_Info_message] = useState(null)



    return (
        <>
            <div className="row">
                <div className="col-2">
                    <Dictaphone
                        SET_Info_message={SET_Info_message}
                    />
                </div>
                <div className="col-9">{
                    ArrOfPeopeAppear_ReactData !== null ?

                        <ArrOfPeopeAppear_ReactJSX
                            ArrOfPeopeAppear_ReactData={ArrOfPeopeAppear_ReactData}
                            Info_message={Info_message}
                            SET_Info_message={SET_Info_message}
                            ALLTable_ReactData={ALLTable_ReactData}
                            SET_ScoreSumit={SET_ScoreSumit}
                        /> : ""}
                </div>

            </div>
        </>
    )
}





export default Playing



function TestArray(string_toparce) {
    try {
        if (typeof (JSON.parse(string_toparce).length) === "number") {
            return true
        } else { return false }
    } catch (error) {

        return false
    }
}
