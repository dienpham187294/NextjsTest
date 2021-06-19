import { useState } from "react";
import { async } from "regenerator-runtime";
import Linkapi from "../../util/Linkapi"
let email = ""

function Dangky() {
    const [Message, SET_Message] = useState("")

    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <div
                style={{
                    width: "330px",
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                    padding: "20px"
                }}
            >
                <input onChange={(e) => {
                    email = e.currentTarget.value;
                }} className="form-control mt-5" type="text" id="emailID" placeholder="Nhập email" />
                <input
                    onClick={() => {
                        FNSendRequest();
                    }}

                    className="btn btn-outline-primary mt-5" type="button" defaultValue="Xác thực tài khoản" />
                <hr />
                {Message}
            </div>

        </div>
    )

    async function FNSendRequest() {
        let email = document.getElementById("emailID").value;
        try {
            const res = await fetch(Linkapi + "api/mailer/" + email, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json();
            if (data.success) {
                SET_Message("Vui lòng kiểm tra hộp thư email để xác thực tài khoản.")
            }

        } catch (error) {
            SET_Message("Có lỗi xảy ra, vui lòng kiểm tra lại")
        }
    }
}

export default Dangky