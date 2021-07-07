import { prop } from "cheerio/lib/api/attributes";
import { useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import Linkapi from "../api/Linkapi"
let status = ["none"]
let arrHoldeFirstTime_2_Api;
function UpLoadFile(props) {
    const [Data, SET_Data] = useState(arrHoldeFirstTime_2_Api)
    const [Check_CSS, SET_Check_CSS] = useState(0)
    useEffect(() => {
        if (status[status.length - 1] !== props.OBJ_Data_Input["Link_GETAPI_One"]) {
            SET_Data("")

            if (props.OBJ_Data_Input["GET_LINK_ONLINE"]) {
                GetReadingNews(SET_Data, props.OBJ_Data_Input);
                status.push(props.OBJ_Data_Input["Link_GETAPI_One"])
            } else {
                arrHoldeFirstTime_2_Api = props.OBJ_Data_Input["Link_GETAPI_ALL"]
                SET_Data(props.OBJ_Data_Input["Link_GETAPI_ALL"])
            }
        }
    })
    useEffect(() => {
        try {
            document.querySelector("body").style.overflowX = "hidden";
            document.querySelector("body").style.overflowY = "auto";
        } catch (error) {
            console.log("e")
        }
    }, [Check_CSS])
    async function Fn_Pick(href) {
        try {
            props.SET_PageChange(P => P + 1)
            const res = await fetch(Linkapi + props.OBJ_Data_Input["Link_GETAPI_One"] + href, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json();
            let json = data.data;
            let arrRes = []
            let arrImage = []
            json.forEach(e => {
                arrImage.push(e.img)
                let arrTemp = (e.text).split(". ")
                let arrTempFinal = [];
                arrTemp.forEach(ee => {
                    if (ee !== "") {
                        arrTempFinal.push({ "text": ee, "status": false })
                    }
                })
                arrRes.push(arrTempFinal)
            });
            props.SET_ImageData(arrImage)
            props.SET_Read_Data(arrRes)
        } catch (error) {
            console.log("Failed to load file");
        }
    }
    async function Fn_Pick1(data) {
        try {
            let json = data;
            let arrRes = []
            let arrImage = []
            json.forEach(e => {
                arrImage.push(e.img)
                let arrTemp = (e.text).split(". ")
                let arrTempFinal = [];
                arrTemp.forEach(ee => {
                    arrTempFinal.push({ "text": ee, "status": false })
                })
                arrRes.push(arrTempFinal)
            });
            props.SET_ImageData(arrImage)
            props.SET_Read_Data(arrRes)
            props.SET_PageChange(P => P + 1)
        } catch (error) {
            console.log("Failed to load file");
        }
    }



    return (
        <div>
            {Show_Jsonfile(Data, Fn_Pick, Fn_Pick1, props.OBJ_Data_Input)}
        </div>
    )

}




export default UpLoadFile



function Show_Jsonfile(Filejson, Fn_Pick, Fn_Pick1, OBJ_Data_Input) {

    try {

        let d = new Date();
        let n = d.getUTCDate();
        let m = d.getUTCMonth() + 1;
        let y = d.getUTCFullYear();
        return (

            <div>
                <div style={{
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "large",
                    letterSpacing: "4px"
                }}><b>{OBJ_Data_Input["Name_of_table"]} - {n} / {m} / {y} - {Filejson.length} bài. </b>
                </div>
                {Filejson.map((e, i) =>
                    <div key={i} className="row mt-4">
                        <div className="col-9">
                            <span style={{ color: 'blue' }}>#{e.hagtag}</span>
                            <br />
                            <b>{e.title}</b>
                            {Show_Img(e.img)}
                            <hr />
                            <i>{e.description}</i>
                        </div>
                        <div className="col-3">
                            <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => {
                                    if (OBJ_Data_Input["GET_LINK_ONE_STATUS"]) {
                                        Fn_Pick(e.href)
                                    } else {
                                        Fn_Pick1(e.data)
                                    }


                                }}
                            >
                                Đọc
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return "Loading......"
    }
}




async function GetReadingNews(SET_Data, OBJ_Data_Input) {
    try {
        const res = await fetch(Linkapi + OBJ_Data_Input["Link_GETAPI_ALL"], {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        arrHoldeFirstTime_2_Api = data.data;
        SET_Data(data.data)
    } catch (error) {
        console.log("e")
    }
}


function Show_Img(src) {

    try {
        if (src !== "") {
            return (
                <>
                    <hr />
                    <img width="350px" src={src} alt={src} />
                </>
            )
        } else {
            return null
        }
    } catch (error) {
        return null
    }

}