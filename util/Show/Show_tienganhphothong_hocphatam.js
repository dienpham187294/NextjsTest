import Dulieu_hocphatam from "../filedulieu/Dulieu_hocphatam"
export default function Show_tienganhphothong_hocphatam() {
    return (<div>
        <h4 style={{ color: "blue" }}>Học về cách phát âm.</h4>

        <table className="table table-sm table-striped">
            <tbody>
                {Dulieu_hocphatam.map((e, i) =>
                    <tr key={i}>
                        <td>{e.text}</td>
                        <td> <a href={e.srcYoutube} target="_self" className="btn btn-outline-primary">Học ngay</a></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div >)
}