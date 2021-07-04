import { prop } from "cheerio/lib/api/attributes";
import { useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import Linkapi from "../Linkapi"
let status = ["none"]
let arrHoldeFirstTime_2_Api;
function UpLoadFile(props) {
    const [Data, SET_Data] = useState(arrHoldeFirstTime_2_Api)
    useEffect(() => {
        if (status[status.length - 1] !== props.OBJ_Data_Input["Link_GETAPI_One"]) {
            SET_Data("")
            GetReadingNews(SET_Data, props.OBJ_Data_Input);
            status.push(props.OBJ_Data_Input["Link_GETAPI_One"])
        }
    })
    async function Fn_Pick(href) {
        try {

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
            // let arrDataCommands = []
            let arrImage = []
            json.forEach(e => {
                arrImage.push(e.img)
                let arrTemp = (e.text).split(". ")
                let arrTempFinal = [];
                arrTemp.forEach(ee => {
                    arrTempFinal.push({ "text": ee, "status": false })
                    // arrDataCommands.push(ee);
                })
                arrRes.push(arrTempFinal)
            });

            props.SET_ImageData(arrImage)

            props.SET_Read_Data(arrRes)

            // props.SET_Data_Commands(arrDataCommands)

            props.SET_PageChange(P => P + 1)

        } catch (error) {
            console.log("Failed to load file");
        }
    }



    return (
        <div>
            {Show_Jsonfile(Data, Fn_Pick, props.OBJ_Data_Input)}
        </div>
    )

}




export default UpLoadFile



function Show_Jsonfile(Filejson, Fn_Pick, OBJ_Data_Input) {

    try {

        let d = new Date();
        let n = d.getUTCDate();
        let m = d.getUTCMonth() + 1;
        let y = d.getUTCFullYear();
        return (
            <div> <table className="table table-striped">
                <thead>
                    <tr style={{
                        backgroundColor: "black",
                        color: "white",
                        fontSize: "large",
                        letterSpacing: "4px"
                    }}>
                        <td><b>{OBJ_Data_Input["Name_of_table"]} - {n} / {m} / {y} - {Filejson.length} bài. </b></td>

                        <td></td>
                    </tr>
                </thead>
                <tbody>

                    {Filejson.map((e, i) =>

                        <tr key={i}>
                            <td>
                                #{e.hagtag}
                                <br />
                                <b>{e.title}</b>
                                {Show_Img(e.img)}
                                <hr />
                                <i>{e.description}</i>
                            </td>
                            <td>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        Fn_Pick(e.href)
                                    }}
                                >
                                    Đọc
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody></table>
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
                    <img src={src} alt={src} />
                </>
            )
        } else {
            return null
        }
    } catch (error) {
        return null
    }

}