import { useEffect, useState } from "react";
import { async } from "regenerator-runtime";
// import Filejson from "../../../../util/filedulieu/200baidoc"
import Linkapi from "../../../../util/Linkapi"
import { checkCookie, getCookie } from "../../../../util/functionCookies"
import { data } from "cheerio/lib/api/attributes";
let status = true
let arrHoldeFirstTime;
function UpLoadFile(props) {
    const [Data, SET_Data] = useState(arrHoldeFirstTime)
    useEffect(() => {
        if (status) {
            GetReadingNews(SET_Data);
            status = false
        }
    })
    async function Fn_Pick(href) {
        try {

            const res = await fetch(Linkapi + "api/dailynew/one?link=" + href, {
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
                        <td><b>Báo VnExpress - {n} / {m} / {y}</b></td>

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




async function GetReadingNews(SET_Data) {
    try {
        const res = await fetch(Linkapi + "api/dailynew", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        let arrNews = [];
        let arrNotNews = [];
        data.data.forEach(e => {
            if (e["href"].indexOf("/news/news") > -1) {
                arrNews.push(e)
            } else {
                arrNotNews.push(e)
            }
        })
        arrHoldeFirstTime = arrNews.concat(arrNotNews);
        SET_Data(arrNews.concat(arrNotNews))
    } catch (error) {
        console.log("e")
    }
}


