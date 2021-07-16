import Link from 'next/link'

export default function Cookies_ReadingPage(BUYCODE) {
    // setTimeout(()=>{})
    try {
        let Cookies_Buycode = $("#Text_Cookies_Buycode").text();
        if (
            !Cookies_Buycode.includes(BUYCODE)
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
                    <Link href={"/main/price"}>
                        <button className="btn btn-warning mt-5">Mua ngay</button>
                    </Link>
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