import { useEffect, useState } from "react";
import ALL_Href_GET_BUYCODE from "../../util/APP_BODY_NAVIGATION/All_href_link"
const queryString = require('query-string');
export default function Price() {
    const [Status, Set_status] = useState("1")
    useEffect(() => {
        setTimeout(() => {
            const parsed = queryString.parse(window.location.search);
            document.getElementById("textabc").textContent = JSON.stringify(parsed)
        }, 3000)

    }, [Status])

    return (
        <div className="container text-center">
            <h3>Thanh toán online qua ví điện tử hoặc tài khoản ngân hàng</h3>
            <hr />
            <img src="https://i.postimg.cc/d1ZLfvPL/momo.png" width="15%" />
            <img src="https://i.postimg.cc/sfSM9V4L/zalopay.png" width="15%" />
            <hr />
            <h3>Số điện thoại ví: 0918 284 482</h3>
            <p>Tên ví: PHẠM VĂN ĐIỆN</p>
            <hr />
            <h3>Tài khoản ngân hàng VCB: 0441000737314</h3>
            <h3>Tài khoản ngân hàng ACB: 4487767</h3>
            <p>Chủ tài khoản: PHẠM VĂN ĐIỆN</p>
            <hr />
            <h3>Cú pháp: [Email]_[Mã code]</h3>
            Ví dụ: dienpham187294@gmail.com R0001
            <hr />
            Chọn Mã code
            {SHOW_ALL_HREF_BUYCODE(ALL_Href_GET_BUYCODE)}
            <hr />
            Chúng tôi sẽ kích hoạt tài khoản và gửi thông báo qua email cho bạn trong vòng 2h.
            <hr />
            Nếu có thắc mắc xin liên hệ <a style={{ color: "blue" }} href="https://www.facebook.com/docsachbangtienganhmoingay/" target="_blank">Page Facebook</a>

            <p id="textabc"></p>
        </div>
    )
}


function SHOW_ALL_HREF_BUYCODE(ALL_Href_GET_BUYCODE) {
    let ARR_KEYS = Object.keys(ALL_Href_GET_BUYCODE)
    return (<div>
        <select className="form-control">
            {ARR_KEYS.map((e, i) =>
                ALL_Href_GET_BUYCODE[e].map((e, ii) =>
                    <option key={ii} value={e.buycode}>{e.name}_______Mã code: {e.buycode}</option>
                )
            )}
        </select>
    </div>)
}