function InfoLession(props) {
    if (props.Data.length === 0) {
        return <div>Đang chờ dữ liệu</div>
    }


    return (
        <div>
            {JSON.stringify(props.Data)}
        </div>
    )
}

export default InfoLession