import List_ID from "../List_IDs/List_IDs"
import Link from 'next/link'
import { useEffect, useState } from "react"
export default function Cookies_ReadingPage(BUYCODE) {
    const [Status, SET_Status] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            try {
                let status = 0
                console.log(document.getElementById(List_ID["Text_Cookies_Buycode"]).innerText.indexOf(BUYCODE))
                if (
                    document.getElementById(List_ID["GET_Cookies"]).innerText.indexOf("@") === -1
                    ||
                    document.getElementById(List_ID["Text_Cookies_Buycode"]).innerText.indexOf(BUYCODE) === -1
                ) {
                    status = 1
                } else {
                    status = 2
                }
                if (status == 1) {
                    document.getElementById("Cookies_checking_show").style.display = "initial"
                }
            } catch (error) {
                console.log(1)
            }
        }, 5000)
    }, [Status])
    return (
        <div
            id="Cookies_checking_show"
            style={{
                position: "absolute",
                backgroundColor: "white",
                top: "15%",
                bottom: "1px",
                left: "1px",
                right: "1px",
                textAlign: "center",
                opacity: "0.9",
                display: "none"
            }}
        >
            <Link href={"/main/price"}>
                <button className="btn btn-warning mt-5">Mua ngay</button>
            </Link>
        </div>
    )
}