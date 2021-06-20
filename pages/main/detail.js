import { checkCookie, delettCookie, getCookie } from "../../util/functionCookies"



function Detail() {


    return (
        <div>
            <h1>{getCookie("ericpham")}</h1>

            <button
                onClick={() => {
                    console.log(checkCookie("ericpham"))
                    delettCookie("ericpham");
                }}
            >
                Thoát
            </button>
        </div>
    )
}


export default Detail