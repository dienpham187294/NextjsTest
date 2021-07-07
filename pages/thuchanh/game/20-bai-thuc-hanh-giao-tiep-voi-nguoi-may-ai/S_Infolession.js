function InfoLession(props) {
    //Can read length of underfined
    try {
        if (props.Data.length === 0) {
            return <div>Đang chờ dữ liệu</div>
        }
    } catch (error) {
        return <div>Đang chờ dữ liệu</div>
    }

    function Show_handling(data) {

        try {

            if (data.length === 0) {
                return "Không tiếp diễn"
            }
        } catch (error) {
            return "Lỗi"
        }


        return (data.map((e, index) =>
            <div key={Math.random()}>
                <h5>{index}</h5>
                <table className="table table-sm table-striped" key={Math.random()}>
                    <tbody key={Math.random()}>
                        <tr key={Math.random()}>
                            <td key={Math.random()}>Người chơi cần nói</td>
                            <td key={Math.random()}>{JSON.stringify(e.manspeak)}</td>
                        </tr>
                        <tr key={Math.random()}>
                            <td key={Math.random()}>Máy sẽ đáp lại</td>
                            <td key={Math.random()}>{JSON.stringify(e.robotspeak)}</td>
                        </tr>
                        <tr key={Math.random()}>
                            <td key={Math.random()}>Tiếp diễn</td>
                            <td key={Math.random()}>{Show_handling(e.handling_next)}</td>
                        </tr>
                        <tr key={Math.random()}>
                            <td key={Math.random()}>Kết thúc</td>
                            <td key={Math.random()}>
                                {/* {e.funtion.end_successfull ? "Kết thúc có điểm."
                                    : e.funtion.end_unsuccessfull ? "Kết thúc không có điềm"
                                        : "Chưa kết thúc."} */}

                                {e.function.end_successfull ? <h3>KẾT THÚC CỘNG ĐIỂM</h3> : e.function.end_unsuccessfull ? "Kết thúc không cộng điểm" : "Chưa kết thúc"}

                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr style={{ border: "1px solid green" }} />
            </div>)
        )
    }

    return (
        <>
            <div style={{ border: "1px solid black", borderRadius: "10px", padding: "20px", marginTop: "20px", marginBottom: "50px" }}>

                <h1>{props.Data[0].nameoflession}</h1>
                <p>Mô tả: {props.Data[0].description}</p>
                <p>Độ khó:  {props.Data[0].level}</p>
                <p>Nằm trong khóa học: {props.Data[0].followsubject}</p>
            </div>
            <div>
                {props.Data[1].coerdataoflession.map((e, index) =>
                    <div key={Math.random()} style={{ border: "1px solid black", borderRadius: "10px", marginBottom: "50px", padding: "20px" }}>
                        <h5>Máy nói đầu tiên: {JSON.stringify(e.template.total.robotspeakfirst)}</h5>
                        <h5>Yêu cầu đặt ra: {JSON.stringify(e.template.total.submit)}</h5>
                        <h5>Begin {index}</h5>
                        {Show_handling(e.template.begin.handling_next)}
                        <h5>Middle {index}</h5>
                        {Show_handling(e.template.middle.handling_next)}
                        <h5>End {index}</h5>
                        {Show_handling(e.template.end.handling_next)}
                    </div>

                )}
            </div>
        </>
    )
}

export default InfoLession