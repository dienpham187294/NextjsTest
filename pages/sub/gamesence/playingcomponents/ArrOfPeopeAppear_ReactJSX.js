import React from "react"
function ArrOfPeopeAppear_ReactJSX(props) {
    return (
        <div className="GameSence_Playing">
            {Show_ArrOfPeopeAppear_ReactData(props.ArrOfPeopeAppear_ReactData)}
        </div>
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

