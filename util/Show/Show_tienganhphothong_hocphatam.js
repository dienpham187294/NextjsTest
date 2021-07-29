import Dulieu_hocphatam from "../filedulieu/Dulieu_hocphatam"

export default function Show_tienganhphothong_hocphatam() {


    return (<div>
        <i>Học phát âm với thầy Kenny N</i>
        {Dulieu_hocphatam.map((e, i) =>
            <div key={i}>
                <b>Học phát âm: {e.text}</b>
                <br />
                <a href={e.srcYoutube} className="btn btn-warning">Bấm để học</a>
            </div>
        )}
    </div >)
}