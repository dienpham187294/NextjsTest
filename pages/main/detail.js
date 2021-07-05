import { checkCookie, delettCookie, getCookie } from "../../util/functionCookies"
import ALL_Href_GET_BUYCODE from "../../util/filedulieu/href/All_href_link"
import List_IDs from "../../util/List_IDs/List_IDs"
import { useEffect, useState } from "react";
import Link from 'next/link'
function Detail() {
    const [Data, SET_Data] = useState([])
    const [Status, SET_Status] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            try {
                if (process.browser) {
                    let buycodetext = document.getElementById(List_IDs["Text_Cookies_Buycode"])
                    let ARR_Buy = []
                    let ARR_KEYS = Object.keys(ALL_Href_GET_BUYCODE);
                    ARR_KEYS.forEach((e) => {
                        ALL_Href_GET_BUYCODE[e].forEach(ee => {
                            if (buycodetext.innerText.indexOf(ee["buycode"]) !== -1) {
                                ARR_Buy.push(ee)
                            }
                        })
                    })
                    console.log(ARR_Buy)
                    SET_Data(ARR_Buy)
                }
            } catch (error) {
                console.log("e")
            }
        }, 1000)

    }, [Status])


    return (
        <div>
            <h5>Tài khoản: {ShowEmail(getCookie("ericpham"))}</h5>
            <hr />
            {Show_KhoahocDaDangky(Data)}
            <hr />
            <div className="text-center">
                <input
                    onClick={() => {
                        try {
                            delettCookie("ericpham");
                            document.getElementById("SET_STATUS").click()
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                    type="button" className="btn btn-outline-danger" defaultValue="Đăng xuất" />
            </div>

        </div>
    )
    function ShowEmail(e) {
        try {
            return e.split("epdp")[0]
        } catch (error) {
            return ""
        }

    }
}


export default Detail


function Show_KhoahocDaDangky(Data) {
    try {
        return (
            <div>
                Các khóa học của bạn:
                <hr />
                {Data.map((e, i) =>
                    <div key={i} style={{
                        display: "inline-block",
                        width: "300px",
                        padding: "15px",
                        border: "1px solid green",
                        borderRadius: "10px"
                    }}>
                        {e.name}
                        <br />
                        <img src={e.img} alt={e.name} width="200px" />
                        <br />
                        <Link href={"/" + e.link}>
                            <button className="btn btn-primary">Đọc</button>
                        </Link>
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}