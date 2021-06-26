import { useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import Filejson from "../../../../util/filedulieu/200baidoc"
import Linkapi from "../../../../util/Linkapi"
import { checkCookie, getCookie } from "../../../../util/functionCookies"

function UpLoadFile(props) {
    const [Data, SET_Data] = useState(Filejson)
    const [Insert, SET_Insert] = useState(false)
    const [Message, SET_Message] = useState("")
    const [status, SET_status] = useState(true)
    useEffect(() => {

        if (status) {
            GetReadingNews(SET_Data, Filejson)
            if (checkCookie("ericpham")) {
                if (getCookie("ericpham").indexOf("dienpham187294") > -1) {
                    SET_Insert(true)
                }
            }
            SET_status(false)
        }
    })



    function Fn_Pick(contents) {
        try {
            let json = contents;
            let arrRes = []
            let arrDataCommands = []
            let arrImage = []
            json.forEach(e => {
                arrImage.push(e.img)
                let arrTemp = (e.text).split(". ")
                let arrTempFinal = [];
                arrTemp.forEach(ee => {
                    arrTempFinal.push({ "text": ee, "status": false })
                    arrDataCommands.push(ee);
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
            {Message}
            <hr />
            {Insert ?
                <div>
                    <button
                        onClick={() => {
                            pushNews(document.getElementById("insertReadnews").value, SET_Message, Filejson, SET_Data)
                        }}
                    >Push news</button>
                    <textarea
                        style={{
                            width: "100%",
                            height: "350px"
                        }}
                        id="insertReadnews">
                    </textarea>

                </div>
                : ""}
        </div>
    )

}




export default UpLoadFile



function Show_Jsonfile(Filejson, Fn_Pick) {

    try {
        return (
            <div> <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Type</td>
                        <td>Pick</td>
                    </tr>
                </thead>
                <tbody>

                    {Filejson.map((e, i) =>

                        <tr key={i}>
                            <td>{e.name}</td>
                            <td>{e.type}</td>
                            <td>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        Fn_Pick(e.data)
                                    }}
                                >
                                    Chọn
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




async function GetReadingNews(SET_Data, Filejson) {
    try {
        const res = await fetch(Linkapi + "api/readnews", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        SET_Data(Filejson.concat(data.data).reverse())
    } catch (error) {
        console.log("e")
    }
}

async function pushNews(input, SET_Message, Filejson, SET_Data) {
    try {
        let data = JSON.parse(input)
        const res = await fetch(Linkapi + "api/readnews/push", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        let dataRES = await res.json();
        SET_Data(Filejson.concat(dataRES.data));
        document.getElementById("insertReadnews").value = ""
    } catch (error) {
        console.log(error)
        SET_Message("error")
    }
}