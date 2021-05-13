import React, { useEffect, useState } from "react"
import Read_ReactJSX from "../../../components/helpers/Read_ReactJSX"
function ArrOfPeopeAppear_ReactJSX(props) {

    const [MessagetoRead, SET_MessagetoRead] = useState(null)
    const [Info_ToQA_Reactdata, SET_Info_ToQA_Reactdata] = useState(null)
    const [Info_ToSunmit_Reactdata, SET_Info_ToSunmit_Reactdata] = useState(null)
    const [Info_StrickAnwers_Reactdata, SET_Info_StrickAnwers_Reactdata] = useState(null)
    const [Info_Icon_Reactdata, SET_Info_Icon_Reactdata] = useState(null)

    // const [Counter, Set_Counter] = useState(1)

    useEffect(
        () => {
            console.log(props.Info_message)
        }, [props.Info_message]
    )

    function AddTo_Show_ArrOfPeopeAppear_ReactData(e) {
        e.status = false;
        console.log(e);
        console.log(e.questionandanwers)
        SET_Info_ToQA_Reactdata(e.questionandanwers)
        console.log(e.submit)
        SET_Info_ToSunmit_Reactdata(e.submit)
    }


    function Show_ArrOfPeopeAppear_ReactData(arr) {
        if (arr !== undefined) {
            return arr.map((e, index) => e.status ?
                <div onClick={() => AddTo_Show_ArrOfPeopeAppear_ReactData(e)} className="GameSence_Playing_Arrpeople" key={index}>
                    <img alt={e.image} src={e.image} />
                </div> : null
            )
        }
        return null
    }
    return (
        <>
            <div className="GameSence_Playing">
                {Show_ArrOfPeopeAppear_ReactData(props.ArrOfPeopeAppear_ReactData)}
            </div>
            {/* {Counter}
            <button
                onClick={() => { Set_Counter(C => C + 1) }}
            >Counter</button> */}
            <Read_ReactJSX MessagetoRead={MessagetoRead} SET_MessagetoRead={SET_MessagetoRead} />
        </>
    )
}
export default ArrOfPeopeAppear_ReactJSX



