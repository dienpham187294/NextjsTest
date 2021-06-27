import { checkCookie, getCookie } from "./functionCookies"

export default function DivNotCookie() {
    try {
        if (checkCookie("ericpham")) {
            return null
        }

        return (
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "10%",
                backgroundColor: "white",
                opacity: "0.9",
                textAlign: "center"
            }}>
                <div
                    style={{
                        width: "100%",
                        marginTop: "30px",
                        backgroundColor: "white",
                        border: "1px solid green",
                        borderRadius: "15px",
                        padding: "15px"
                    }}

                >
                    <hr />
                    Đăng nhập để tiếp tục!
                    <hr />
                    <a href="/main/dangnhap">
                        <input className="btn btn-primary" type="button" value="Đăng nhập" />
                    </a>
                    <hr />
                    <i>"Nhập địa chỉ email và xác thực để đăng nhập vào EnglishTool"</i>
                </div>

            </div>
        )
    } catch (error) {
        return null
    }
}