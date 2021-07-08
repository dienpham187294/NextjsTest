import Link from 'next/link'
import Payment from './payment'
export default function Show_Menu_Inbody(Arr, HeaderString) {
    try {
        return (
            <div style={{ width: "100%", textAlign: "center" }}>
                <h4
                    style={{ backgroundColor: "black", color: "yellow", padding: "15px" }}
                >{HeaderString}</h4>
                {Arr.map((e, i) =>
                    <div style={{ width: "300px", height: "100%", display: "inline-block", border: "4px solid black", margin: "5px", borderRadius: "20px", padding: "10px", backgroundColor: "#EAE8E8" }} key={i}>
                        <div style={{ height: "50px" }}><b>{e.name}</b></div>
                        <hr />
                        <i style={{ fontSize: "small" }}>Ứng dụng công nghệ nhận diện giọng nói</i>
                        {e.img !== "" ? <img src={e.img} alt={e.name} width="100%" /> : null}
                        <hr />
                        <p>{e.price !== "" ? e.price : null}</p>
                        {!(e.price === "Miễn phí" || e.price === "") ?
                            <Link href={"/main/price"}>
                                <button className="btn btn-sm btn-outline-dark"> Chọn mua</button>
                            </Link>
                            : null}
                        {e.youtube !== "" ? <button className="btn btn-sm btn-outline-dark ml-2">Video</button> : null}

                        <hr />
                        <Link href={"/" + e.link}>
                            <div style={{ width: "100%", backgroundColor: "black", cursor: "pointer" }}>
                                <i style={{ color: "yellow" }}>Dùng ngay</i>
                            </div>
                        </Link>
                    </div>
                )}
                <Payment />
            </div>
        )
    } catch (error) {
        return null
    }
}