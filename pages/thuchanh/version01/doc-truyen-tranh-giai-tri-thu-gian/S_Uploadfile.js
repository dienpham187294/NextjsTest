import { useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import Filejson from "../../../../util/filedulieu/truyentranh/01"
import Linkapi from "../../../../util/Linkapi"
import { checkCookie, getCookie } from "../../../../util/functionCookies"

function UpLoadFile(props) {
    const [Data, SET_Data] = useState(Filejson)


    async function Fn_Pick(data) {
        try {
            let json = data;
            let arrRes = []
            let arrDataCommands = []
            let arrImage = []
            json.forEach(e => {
                arrImage.push(e.img)
                let arrTemp = (e.text).split(". ")
                let arrTempFinal = [];
                arrTemp.forEach(ee => {
                    if (ee !== "") {
                        arrTempFinal.push({ "text": ee, "status": false })
                        arrDataCommands.push(ee);
                    }

                })
                arrRes.push(arrTempFinal)
            });

            props.SET_ImageData(arrImage)

            props.SET_Read_Data(arrRes)

            props.SET_Data_Commands(arrDataCommands)

            props.SET_PageChange(P => P + 1)

        } catch (error) {
            console.log("Failed to load file");
        }
    }



    return (
        <div>
            {Show_Jsonfile(Data, Fn_Pick)}
        </div>
    )

}




export default UpLoadFile



function Show_Jsonfile(Filejson, Fn_Pick) {

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
                        <td><b>Truyện tranh - {n} / {m} / {y}</b></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>

                    {Filejson.map((e, i) =>

                        <tr key={i}>
                            <td><b>{e.title}</b> </td>
                            <td>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        Fn_Pick(e.data)
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
        return "error"
    }
}




