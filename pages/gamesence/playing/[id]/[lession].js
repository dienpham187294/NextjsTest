import React, { useState, useEffect } from "react";
import Dictaphone from "../../../helpers/Regcognition"
import ArrOfPeopeAppear_ReactJSX from "../../playingcomponents/ArrOfPeopeAppear_ReactJSX"

// let flag = true
function Playing({ note }) {
    const [ArrOfPeopeAppear_ReactData, SET_ArrOfPeopeAppear_ReactData] = useState(null);
    const [ALLTable_ReactData, SET_ALLTable_ReactData] = useState(null);
    const [Info_message, SET_Info_message] = useState(null)

    useEffect(() => {
        try {
            if (note.gamedata !== undefined || note.gamedata !== null) {
                SET_ArrOfPeopeAppear_ReactData(note.gamedata)
                SET_ALLTable_ReactData(note.gametool)
            }

        } catch (error) { }

    })

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
                        /> : ""}
                </div>

            </div>
        </>
    )
}
Playing.getInitialProps = async ({ query: { id, lession } }) => {

    try {
        // const res = await fetch(`http://localhost:3000/api/gamesence/${id}`, {
        //     method: "GET"
        // });
        const res = await fetch(`https://app-testdienpham.herokuapp.com/api/gamesence/${id}`, {
            method: "GET"
        });
        const { data } = await res.json();
        let obj_lession;
        data[0].all_lession.forEach(e => {
            if (e.nameoflession === lession) {
                obj_lession = e
            }
        });
        return { note: obj_lession }
    } catch (error) {
        return { note: null }
    }


}
export default Playing