import { useEffect, useState } from "react"
import Cookies_Admin from "../../util/Cookies/Cookies_Admin"
import Linkapi from "../../util/api/Linkapi"
import { useRouter } from 'next/router'
import { async } from "regenerator-runtime"
import ALL_Href_GET_BUYCODE from "../../util/APP_BODY_NAVIGATION/All_href_link"
let Hold_Data_InfisrtTime = []
let Hold_Data_InfisrtTime_token_app = []
let status = 0;
export default function ADMIN() {
    const router = useRouter()
    const [Status, SET_Status] = useState(0)
    const [Data, SET_Data] = useState(Hold_Data_InfisrtTime)
    const [Data_token_app, SET_Data_token_app] = useState(Hold_Data_InfisrtTime_token_app)

    const [Mail, SET_Mail] = useState("dienpham187294@gmail.com")
    const [BuyCode, SET_BuyCode] = useState("R0001")

    const [Check_BuyCode, SET_Check_BuyCode] = useState(0)
    useEffect(() => {
        if (Cookies_Admin()) {
            router.push("/")
        } else {
            if (status === 0) {
                GET_DATA_FROM_DATABASE(SET_Data, SET_Data_token_app);
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
            <hr />
            <input type="text" id="Admin_ID_TEXT_NAME" placeholder="Nhập tên" />
            <button
                onClick={() => {
                    let a1 = ""
                    let a = 187
                    let b = Date.now()
                    let c = 294
                    let d = Date.now()
                    let F1 = ("https://www.englishtool.co/thuchanh/app/tieng-anh-cap-toc?token=1" + a + b + c + d)
                    let F2 = ("&name=" + $("#Admin_ID_TEXT_NAME").val().split(" ").join("%20"))
                    $("#ADMIN_ID_TEXT_LINKAPP").text(F1 + F2)

                }}
            >Create</button>
            <p id="ADMIN_ID_TEXT_LINKAPP"></p>
            <hr />
            {Show_Token_app(Data_token_app)}
        </div>
    )
}

async function GET_DATA_FROM_DATABASE(SET_Data, SET_Data_token_app) {
    try {
        const res = await fetch(Linkapi + "api/Api_ADMIN", {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        Hold_Data_InfisrtTime = data.data;
        SET_Data(data.data)
        Hold_Data_InfisrtTime_token_app = data.data1;
        SET_Data_token_app(data.data1)
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
function Show_Token_app(Data_token_app) {
    try {
        return (
            <div>
                {
                    Data_token_app.map((e, i) =>
                        <div key={i} style={{ border: "1px solid black" }}>
                            {e.token}
                            <br />
                            {e.name}
                            <br />
                            {Show_list_of_machine(e.list_of_machine)}
                        </div>
                    )
                }
                {JSON.stringify(Object.keys(Data_token_app[0]))}
            </div>
        )
    } catch (error) {
        return null
    }

}
function Show_list_of_machine(list_of_machine) {


    try {
        let Arr_Count = ["none"];

        list_of_machine.forEach(e => {
            let status = false
            Arr_Count.forEach(ee => {
                if (e === ee) {
                    status = true
                }
            })
            if (!status) {
                Arr_Count.push(e)
            }
        });
        return Arr_Count.map((e, i) => <p style={{ border: "1px solid green", marginLeft: "15px", backgroundColor: "#EEEBEB" }} key={i}>{list_of_machine.filter(x => x === e).length} | {e}</p>)
    } catch (error) {
        return null
    }
}