import { useRouter } from 'next/router'
import Linkapi from '../../util/Linkapi';
import { setCookie } from "../../util/functionCookies"
import { useEffect, useState } from 'react';
function Xacthuc() {
    const [Message, SET_Message] = useState("1")
    const router = useRouter()
    const { mail, token } = router.query;

    try {
        if (mail !== undefined) {
            FNSendRequest(mail, token).then((res) => {
                console.log(res)
                if (res.indexOf("Hợp lệ") > -1) {

                    SET_Message("Xác thực thành công");
                    let arrTemp = res.split("-exipired:");

                    setCookie("ericpham", mail + "expr" + arrTemp[1], 3)

                    setTimeout(() => {
                        router.push("/");
                    }, 3000)
                } else {
                    SET_Message("Xác thực không hợp lệ, chuyển về trang đăng nhập.")
                    setTimeout(() => {
                        router.push("/main/dangnhap")
                    }, 3000)
                }
            })
            // console.log("ok")
            // console.log(checkCookie("ericpham"), "cookies")
        }
    } catch (error) {
        console.log("e")
    }



    return (<div style={{ width: "100%", textAlign: "center" }}>
        <h1> {Message}</h1>
    </div>)
}
async function FNSendRequest(mail, token) {
    try {
        const res = await fetch(Linkapi + "api/authenticator?mail=" + mail + "&token=" + token, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        let arr = token.split("epdp");
        if (data.data[0]["_id"].indexOf(arr[0]) !== -1) {

            if (Date.now() - parseInt(arr[1]) > 120000) {
                return ("Phiên hết hạn")
            } else {
                return ("Hợp lệ -exipired:" + data.data[0]["expired"])
            }
        } else {
            return ("Không hợp lệ")
        }


    } catch (error) {
        return ("e")
    }
}
export default Xacthuc

