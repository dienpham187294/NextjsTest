import { useEffect, useState } from "react"
import Cookies_Admin from "../../util/Cookies/Cookies_Admin"
import Linkapi from "../../util/api/Linkapi"
import { useRouter } from 'next/router'
import { async } from "regenerator-runtime"
import ALL_Href_GET_BUYCODE from "../../util/APP_BODY_NAVIGATION/All_href_link"
let Hold_Data_InfisrtTime = []
let status = 0;
export default function ADMIN() {
    const router = useRouter()
    const [Status, SET_Status] = useState(0)
    const [Data, SET_Data] = useState(Hold_Data_InfisrtTime)


    const [Mail, SET_Mail] = useState("dienpham187294@gmail.com")
    const [BuyCode, SET_BuyCode] = useState("R0001")

    const [Check_BuyCode, SET_Check_BuyCode] = useState(0)
    useEffect(() => {
        console.log(Object.keys(ALL_Href_GET_BUYCODE))
        if (Cookies_Admin()) {
            router.push("/")
        } else {
            if (status === 0) {
                GET_DATA_FROM_DATABASE(SET_Data);
                status = 1
            }
        }
    }, [Status])
    return (
        <div>
            {SHOW_ALL_USERS(Data, SET_Mail, SET_Check_BuyCode)}
            <hr />
            {SHOW_ALL_HREF_BUYCODE(ALL_Href_GET_BUYCODE, SET_BuyCode)}
            <hr />
            <div className="text-right">
                {Mail} ___________  {BuyCode}
                <br />
                <button
                    onClick={() => {
                        ACTIVE(Mail, BuyCode, SET_Data)
                    }}
                >
                    Active
                </button>
                <button
                    onClick={() => {
                        INACTIVE(Mail, BuyCode, SET_Data)
                    }}
                >
                    InActive
                </button>
                <br />
                {SHOW_CHECK(Data, Check_BuyCode)}
            </div>
        </div>
    )
}

async function GET_DATA_FROM_DATABASE(SET_Data) {
    try {
        const res = await fetch(Linkapi + "api/Api_ADMIN", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        console.log(data)
        Hold_Data_InfisrtTime = data.data;
        SET_Data(data.data)
    } catch (error) {
        console.log(error)
    }
}
async function ACTIVE(mail, buycode, SET_Data) {
    try {
        const res = await fetch(Linkapi + "api/Api_ADMIN/Active?mail=" + mail + "&buycode=" + buycode, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        console.log(data)
        Hold_Data_InfisrtTime = data.data;
        SET_Data(data.data)
    } catch (error) {
        console.log(error)
    }
}

async function INACTIVE(mail, buycode, SET_Data) {
    try {
        const res = await fetch(Linkapi + "api/Api_ADMIN/Inactive?mail=" + mail + "&buycode=" + buycode, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        console.log(data)
        Hold_Data_InfisrtTime = data.data;
        SET_Data(data.data)
    } catch (error) {
        console.log(error)
    }
}
function SHOW_ALL_USERS(Data, SET_Mail, SET_Check_BuyCode) {
    try {
        return (
            <div>
                <select className="form-control" onChange={(e) => {
                    SET_Mail(e.currentTarget.value.split("epdp")[0]);
                    SET_Check_BuyCode(e.currentTarget.value.split("epdp")[1])
                }}>
                    {Data.map((e, i) =>
                        <option key={i} value={e.mail + "epdp" + i}>{e.mail}</option>
                    )}
                </select>

            </div>
        )
    } catch (error) {
        return null
    }

}
function SHOW_ALL_HREF_BUYCODE(ALL_Href_GET_BUYCODE, SET_BuyCode) {
    let ARR_KEYS = Object.keys(ALL_Href_GET_BUYCODE)
    return (<div>
        <select className="form-control" onChange={(e) => {
            SET_BuyCode(e.currentTarget.value)
        }}>
            {ARR_KEYS.map((e, i) =>
                ALL_Href_GET_BUYCODE[e].map((e, ii) =>
                    <option key={ii} value={e.buycode}>{e.name}_______{e.buycode}</option>
                )
            )}
        </select>
    </div>)
}


function SHOW_CHECK(Data, Check_BuyCode) {

    try {
        let Arr_KEY = Object.keys(Data[Check_BuyCode])
        return (
            <div>
                {Arr_KEY.map((e, i) =>
                    <p key={i}>{Data[Check_BuyCode][e]}</p>
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}
