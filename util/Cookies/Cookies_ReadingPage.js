import List_ID from "../List_IDs/List_IDs"


export default function Cookies_ReadingPage(BUYCODE) {
    // setTimeout(()=>{})
    try {
        console.log(document.getElementById(List_ID["GET_Cookies"]).innerText.indexOf("@"), document.getElementById(List_ID["Text_Cookies_Buycode"]).innerText.indexOf(BUYCODE))
        if (
            document.getElementById(List_ID["GET_Cookies"]).innerText.indexOf("@") === -1
            ||
            document.getElementById(List_ID["Text_Cookies_Buycode"]).innerText.indexOf(BUYCODE) === -1
        ) {
            return (
                <div
                    style={{
                        position: "absolute",
                        backgroundColor: "white",
                        top: "15%",
                        bottom: "1px",
                        left: "1px",
                        right: "1px",
                        textAlign: "center",
                        opacity: "0.9"
                    }}
                >
                    <button className="btn btn-warning mt-5">Mua ngay</button>
                </div>
            )
        } else {
            return null
        }

    } catch (error) {
        console.log(error, "checkcookies")
        return (
            <div
                style={{
                    position: "absolute",
                    backgroundColor: "white",
                    top: "15%",
                    bottom: "1px",
                    left: "1px",
                    right: "1px",
                    textAlign: "center",
                    opacity: "0.9"
                }}
            >
                <button className="btn btn-warning mt-5">Mua ngay</button>
            </div>
        )
    }


}