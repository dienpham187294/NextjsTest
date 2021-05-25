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
        <div>
            {JSON.stringify(props.Data)}
        </div>
    )
}

export default InfoLession