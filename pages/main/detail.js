import { checkCookie, delettCookie, getCookie } from "../../util/functionCookies"



function Detail() {


    return (
        <div>
            <h5>Tài khoản: {getCookie("ericpham").split("epdp")[0]}</h5>
            <h5>{ShowExpried(getCookie("ericpham").split("epdp")[1])}</h5>
        </div>
    )

    function ShowExpried(e) {
        if (parseInt(e) - Date.now(0) < 0) {
            return "Đã hết thời gian sử dụng."
        }
        return (<span> "Thời gian sử dụng: "{Math.floor(parseInt(e) - Date.now(0) / (24 * 60 * 60))}</span>)
    }
}


export default Detail