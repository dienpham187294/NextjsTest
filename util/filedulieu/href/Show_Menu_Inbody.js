import Link from 'next/link'
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
                        <img src={e.img} alt={e.name} width="100%" />
                        <hr />
                        <button className="btn btn-small btn-outline-dark">Xem video giới thiệu</button>
                        <hr />
                        <p>Giá: {e.price}</p>
                        {e.price !== "Miễn phí" ?
                            <p>
                                <Link href={"/"}>
                                    <button className="btn btn-small btn-outline-dark"> Chọn mua</button>
                                </Link>
                            </p>
                            : null}
                        <hr />
                        <Link href={"/" + e.link}>
                            <div style={{ width: "100%", backgroundColor: "black", cursor: "pointer" }}>
                                <i style={{ color: "yellow" }}>Dùng ngay</i>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}