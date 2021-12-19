export default function showBottomPart1(
    props,
    RoomOnline,
    getOnline, idMember, Score, SET_DataOnline,
    SET_RoomOnline, SET_Boqua, SET_StatusShowToPick
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
            <a className="mr-5" target={"_blank"} href="https://forms.gle/JZWwQNx4XP8fDken9">Phiếu khảo sát</a>

            {RoomOnline === "" ?
                <>

                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                            SET_RoomOnline(props.NameOflession)
                            getOnline(props.NameOflession, idMember, Score, SET_DataOnline)
                        }}
                    >Online</button>
                </>
                :
                <>
                    {RoomOnline}
                    <button
                        className="btn btn-sm btn-info mr-2 ml-2"
                    // onClick={() => {

                    // }}
                    >Play Game</button>


                    <button
                        className="btn btn-sm btn-danger mr-2 ml-2"
                        onClick={() => {
                            SET_RoomOnline("")
                        }}
                    >Thoát</button>
                    <button
                        className="btn btn-sm btn-warning"
                        onClick={() => {
                            getOnline(RoomOnline, idMember, Score, SET_DataOnline)
                        }}
                    >Cập nhật</button>
                </>
            }
            <button
                className="btn btn-outline-primary ml-3"
                id="btnNguoitieptheo"
                onClick={() => {
                    SET_Boqua(B => B + 1)
                    // $("#complete").html("")
                    // $("#showbtnNext").hide()
                    props.Total.stObj.inputSumit = ""
                    // props.Total.stObj.indexOfPeople += 1
                    // props.Total.fnObj.AddTo_Show_ArrOfPeopeAppear_ReactData(props.Total.stObj.indexOfPeople)

                    SET_StatusShowToPick(true)
                }}
            >Next</button>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}
