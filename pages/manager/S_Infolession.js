function InfoLession(props) {
    //Can read length of underfined
    try {
        if (props.Data.length === 0) {
            return <div>Đang chờ dữ liệu</div>
        }
    } catch (error) {
        return <div>Đang chờ dữ liệu</div>
    }



    return (
        <div style={{ marginLeft: "50%", transform: "translateX(-50%)" }}>

            <h1>{props.Data.nameoflession}</h1>
            <p>Mô tả: {props.Data.description}</p>
            <p>Độ khó:  {props.Data.level}</p>
            <p>Nằm trong khóa học: {props.Data.followsubject}</p>

        </div>
    )
}

export default InfoLession