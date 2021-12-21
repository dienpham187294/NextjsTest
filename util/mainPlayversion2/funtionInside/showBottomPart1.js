export default function showBottomPart1(
    props,
    SET_Boqua, SET_StatusShowToPick
) {
    try {
        return <div
            style={{
                position: "fixed",
                bottom: "1%",
                left: "10%",
                width: "80%",
                textAlign: "right",
                backgroundColor: "white",

            }}
        >
            <button
                className="btn btn-outline-danger ml-3"
                style={{
                    float: "left",
                }}
                onClick={() => {
                    props.Total.fnObj.SET_PageChange(0)
                    try {
                        $("#idStopLisening")[0].click()
                    } catch (error) { }
                }}
            >Chọn bài</button>
            <button
                className="btn btn-sm btn-outline-info ml-3"
                style={{ float: "left" }}
            >
                <a target={"_blank"} href="https://forms.gle/JZWwQNx4XP8fDken9">Phiếu khảo sát</a>
            </button>


            {/* <button
                className="btn btn-sm btn-warning"
                onClick={() => {
                    getOnline(RoomOnline, idMember, Score, SET_DataOnline)
                }}
            >Cập nhật</button> */}


            <button
                className="btn btn-outline-primary ml-3"
                id="btnNguoitieptheo"
                onClick={() => {
                    SET_Boqua(B => B + 1)
                    SET_StatusShowToPick(true)
                }}
            >Next</button>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}
