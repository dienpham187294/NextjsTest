import { useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import { checkCookie } from "../../util/functionCookies";
import Linkapi from "../../util/Linkapi"
import { useRouter } from 'next/router'
import GetFinal from "../../util/GetFinal"
let email = "";
let numberCheck = [RandomInt(1001, 9999)];
let exp = [];
let flag = true;
function Dangky() {
    const router = useRouter()
    const [Message, SET_Message] = useState("");
    const [Count, SET_Count] = useState(0)
    useEffect(() => {
        if (flag) {
            if (checkCookie("ericpham")) {
                router.push("/")
            }
            flag = false
        }

    })
    async function Xacthuc(e) {
        if (e.indexOf(GetFinal(numberCheck)) > -1) {
            let text = await email + "epdp" + GetFinal(exp);
            await $("#TEXT").text(text);
            await $("#ADD").click();

            setTimeout(() => {
                router.push("/")
            }, 1000);

        }
    }
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


                {Message === "Vui lòng kiểm tra hộp thư email để xác thực tài khoản." ?
                    <input onChange={(e) => {
                        Xacthuc(e.currentTarget.value);
                       
                    }} className="form-control mt-5" type="text" id="maxacthuc" placeholder="Nhập mã xác thực" />

                    : ""}


                {Message === "" ?
                    <div>
                        <input onChange={(e) => {
                            email = e.currentTarget.value;
                        }} className="form-control mt-5" type="text" id="emailID" placeholder="Nhập email" />
                        <input
                            onClick={() => {
                                FNSendRequest().then();
                                SET_Message("Vui lòng chờ trong giây lát.")
                            }}

                            className="btn btn-outline-primary mt-5" type="button" defaultValue="Xác thực tài khoản"
                        />
                    </div> : " "}


                <hr />
                {Message}
            </div>

        </div>
    )

    async function FNSendRequest() {
        let email = document.getElementById("emailID").value;
        try {
            const res = await fetch(Linkapi + "api/mailer/" + email + "?n=" + GetFinal(numberCheck), {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            let data = await res.json();
            if (data.success) {
                SET_Message("Vui lòng kiểm tra hộp thư email để xác thực tài khoản.");
                exp.push(data.data[0]["expired"])
            }


        } catch (error) {
            SET_Message("Có lỗi xảy ra, vui lòng kiểm tra lại")

            setTimeout(() => {
                SET_Message("")
            }, 2000)

        }
    }
}

export default Dangky

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}