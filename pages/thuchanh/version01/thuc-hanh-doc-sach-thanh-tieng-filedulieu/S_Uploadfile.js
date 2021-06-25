import { useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import Filejson from "../../../../util/filedulieu/200baidoc"
import Linkapi from "../../../../util/Linkapi"
import { checkCookie, getCookie } from "../../../../util/functionCookies"
// import connectToDatabase from "../../../../util/mongodb"
// import { GetServerSideProps } from 'next'

let status = true;

function UpLoadFile(props) {
    const [Data, SET_Data] = useState(Filejson)
    const [Insert, SET_Insert] = useState(false)
    const [Message, SET_Message] = useState("")
    useEffect(() => {

        if (status) {
            GetReadingNews(SET_Data, Filejson)
            if (checkCookie("ericpham")) {
                if (getCookie("ericpham").indexOf("dienpham187294") > -1) {
                    SET_Insert(true)
                }
            }


            status = false
        }
    })



    function Fn_Pick(contents) {
        try {
            var json = contents;
            let arrRes = []
            json.forEach(e => {
                let arrTemp = (e).split(" ")
                let arrTempFinal = [];
                arrTemp.forEach(ee => {
                    arrTempFinal.push({ "text": ee.split("\r").join(""), "status": false })
                })
                arrRes.push(arrTempFinal)
            });
            props.SET_Read_Data(arrRes)

            let arrDataCommands = []
            json.forEach(e => {
                let arrTemp = (e).split(". ")
                arrTemp.forEach(ee => {
                    arrDataCommands.push(ee)
                })
            });

            props.SET_Data_Commands(arrDataCommands)

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
        console.log(data, Filejson)
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