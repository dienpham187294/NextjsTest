import React, { useState, useEffect } from "react";
import Dictaphone from "../../components/helpers/Regcognition"
import ArrOfPeopeAppear_ReactJSX from "./playingcomponents/ArrOfPeopeAppear_ReactJSX"

let flag = true
export default function Playing() {
    const [ArrOfPeopeAppear_ReactData, SET_ArrOfPeopeAppear_ReactData] = useState([]);
    useEffect(() => {
        if (flag) {
            let ArrOfPeopeAppear = []
            for (let i = 0; i < 40; i++) {
                let obj = {
                    name: "name " + i,
                    image: "https://i.postimg.cc/mgdMdLCP/man5.png",
                    status: true
                }
                ArrOfPeopeAppear.push(obj)
            }
            console.log(ArrOfPeopeAppear)
            SET_ArrOfPeopeAppear_ReactData(ArrOfPeopeAppear)
            flag = false
        }
    })

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <Dictaphone />
                </div>
                <div className="col-9">
                    <ArrOfPeopeAppear_ReactJSX
                        ArrOfPeopeAppear_ReactData={ArrOfPeopeAppear_ReactData}
                    />
                </div>
            
            </div>
        </>
    )
}