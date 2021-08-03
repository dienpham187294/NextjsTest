import Dulieu_hocphatam from "../filedulieu/Dulieu_hocphatam"

export default function Show_tienganhphothong_hocphatam() {


    return (<div>
        <h1 style={{ color: "red" }}>Phần bài học các kiến thức quan trọng và bổ ích về phát âm, đọc chuẩn</h1>
        {Dulieu_hocphatam.map((e, i) =>
            <div key={i}>
                <b>{e.text}</b>
                <br />
                <a href={e.srcYoutube} className="btn btn-outline-primary">Bấm vào đây để học</a>
            </div>
        )}
    </div >)
}