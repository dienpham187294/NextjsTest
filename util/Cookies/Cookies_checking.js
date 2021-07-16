import List_ID from "../List_IDs/List_IDs"
import Link from 'next/link'
import { useEffect, useState } from "react"
import Linkapi from "../api/Linkapi";
import List_IDs from "../List_IDs/List_IDs";
const queryString = require('query-string');


let status1 = false
let status2 = false
export default function Cookies_ReadingPage(BUYCODE, tokenCheck) {

    const [Status, SET_Status] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            CHECK_token_and_mail(BUYCODE, tokenCheck)
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

async function CHECK_token_and_mail(BUYCODE, tokenCheck) {
    console.log(BUYCODE, tokenCheck)
    try {
        const parsed = await queryString.parse(window.location.search);
        console.log(parsed, tokenCheck, "parsed_cookie-checking", parsed["token"].includes(tokenCheck))
        if (parsed["token"] !== undefined) {
            if (!(parsed["token"].includes(tokenCheck))) {
                status1 = false
            } else {
                await CHECK_Token(parsed["token"])
            }
        } else {
            status1 = false
        }
    } catch (error) {
        console.log("e", "no token")
    }

    try {

        // let Cookies_username = $("#" + List_IDs["GET_Cookies"]).text()
        let Cookies_Buycode = $("#Text_Cookies_Buycode").text();
        // console.log(Cookies_username, Cookies_Buycode)
        if (
            Cookies_Buycode.includes(BUYCODE)
        ) { status2 = true } else { status2 = false }
    } catch (error) {
        console.log("e", "cookie buycode underfine")
    }

    console.log(status1, status2)
    if (!(status1 || status2)) {
        document.getElementById("Cookies_checking_show").style.display = "initial"
    }


}


async function CHECK_Token(token) {
    try {
        let browserinfo = $("#ID_TEXT_BROWSERNAME").text() + $("#Detect_device").text()
        const res = await fetch(Linkapi + "api/Token_app/check_token?token=" + token + "&browserinfo=" + browserinfo, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        if (data.data["status"] === "token-found") {
            // SET_Name("Xin chào " + data.data["username"] + ". Chúc " + data.data["username"] + " học tiếng anh vui vẻ.")
            status1 = true

        }
        if (data.data["status"] === "token-not-found") {
            // alert("Tài khoản không tồn tại. Vui lòng nhắn tin vào page để được trợ giúp. Xin cảm ơn!");
            status1 = false
        }
    } catch (error) {
        console.log(error);
        status1 = false
    }
}
