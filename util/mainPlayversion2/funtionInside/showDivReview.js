export default function showDivReview(ShowReview, props, secondToMinutes, timeCount, showReview, SET_ShowReview,
    Score, Sai, Boqua) {
    try {
        return <>  {ShowReview !== "" ?
            <div style={{
                position: "fixed",
                top: "2%",
                bottom: "2%",
                right: "2%",
                left: "2%",
                backgroundColor: "white",
                overflow: "auto",
                textAlign: "left"
            }}>
                Bài: {props.NameOflession}

                <b> Điểm: {Score} <span style={{ color: "red" }}>Chọn sai: {Sai} </span> | <span style={{ color: "red" }}>{Boqua}</span> </b>
                <span>{secondToMinutes(timeCount)}</span>

                <hr />
                {showReview(ShowReview, SET_ShowReview)}
            </div>
            : null}
        </>
    } catch (error) {
        console.log(error)
        return null
    }
}