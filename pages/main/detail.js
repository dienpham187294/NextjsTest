import { checkCookie, delettCookie, getCookie } from "../../util/functionCookies"



function Detail() {


    return (
        <div>
            <h5>Tài khoản: {ShowEmail(getCookie("ericpham"))}</h5>
            <h5>{ShowExpried(getCookie("ericpham"))}</h5>
            <hr />
            <input

                onClick={() => {
                    try {
                        delettCookie("ericpham");
                        $("#DElETE").click()
                    } catch (error) {
                        console.log("error")
                    }
                }}
                type="button" className="btn btn-ouline-danger" defaultValue="Đăng xuất" />
        </div>
    )
    function ShowEmail(e) {

        try {
            return e.split("epdp")[0]
        } catch (error) {
            return ""
        }

    }
    function ShowExpried(e) {
        try {
            if (parseInt(e) - Date.now(0) < 0) {
                return "Đã hết thời gian sử dụng."
            }
            return (<span> "Thời gian sử dụng: "{Math.floor(parseInt(e) - Date.now(0) / (24 * 60 * 60))}</span>)
        } catch (error) {
            return ""
        }

    }
}


export default Detail