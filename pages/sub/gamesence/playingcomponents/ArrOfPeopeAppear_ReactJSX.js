import React, { useState } from "react"
import Read_ReactJSX from "../../../components/helpers/Read_ReactJSX"
function ArrOfPeopeAppear_ReactJSX(props) {

    const [MessagetoRead, SET_MessagetoRead] = useState("-")
    return (
        <>
            <div className="GameSence_Playing">
                {Show_ArrOfPeopeAppear_ReactData(props.ArrOfPeopeAppear_ReactData)}
            </div>
            <Read_ReactJSX MessagetoRead={MessagetoRead} />
        </>
    )
}
export default ArrOfPeopeAppear_ReactJSX

function Show_ArrOfPeopeAppear_ReactData(arr) {
    return arr.map((e, index) =>
        <div className="GameSence_Playing_Arrpeople" key={index}>
            <img alt={e.name} src={e.image} />
        </div>
    )

}

