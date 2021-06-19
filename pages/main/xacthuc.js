import { useRouter } from 'next/router'
import Linkapi from '../../util/Linkapi';
import { checkCookie } from "../../util/functionCookies"
function Xacthuc() {
    const router = useRouter()
    const { mail, token } = router.query;
    try {
        if (mail !== undefined) {
            FNSendRequest(mail, token);
            console.log("ok")
            console.log(checkCookie("ericpham"), "cookies")
        }
    } catch (error) {
        console.log("e")
    }


    return ("Xác thực")
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

        console.log(data)

    } catch (error) {
        console.log("e")
    }
}
export default Xacthuc

