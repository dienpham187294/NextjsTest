import Dulieu_Quangcao from "../filedulieu/Dulieu_Quangcao"
export default function QuangCao(arr) {


    try {
        return (
            <div>
                <i>Một số khóa học khác</i>
                <br />
                {Dulieu_Quangcao.map((e, i) =>
                    <div key={i} style={{ border: "1px solid green", borderRadius: "10px", padding: "5px", margin: "5px", display: "inline-block" }}>
                        <b>{e.name}</b>
                        <br />
                        <i>{e.price}</i>
                        <br />
                        <i>{e.discription}</i>
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }

}