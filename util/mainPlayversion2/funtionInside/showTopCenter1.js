export default function showTopCenter1(
    props,
    showOptionToRead,
    Score,
    Info_StrickAnwers_Reactdata,
    showSubmitSyxtax, Info_ToSunmit_Reactdata,
    Boqua, SET_Score, SET_ShowReview, ArrHoldThingToReview, Sai
) {
    try {
        return <div className="col-6">
            <br />
            {showOptionToRead(Score, Info_StrickAnwers_Reactdata)}
            <hr />
            <div className="row">
                <div className="col-6">
                    {showSubmitSyxtax(Info_ToSunmit_Reactdata)}
                    <span id="complete" style={{ color: "red" }}></span>
                    <br />
                    <span style={{ color: "blue" }}>{props.huongdan}</span>
                </div>
                <div className="col-6">
                    <b> Điểm: {Score} <span style={{ color: "red" }}>Chọn sai: {Sai} </span> | <span style={{ color: "red" }}>{Boqua}</span> </b>
                    <span id="thoigian"></span>
                    <button
                        className="btn btn-sm btn-primary ml-1"
                        onClick={() => {
                            timeCount = 1;
                            SET_Score(0);

                        }}
                    >Reset</button>
                    <button
                        className="btn btn-sm btn-primary ml-1"
                        onClick={() => {
                            SET_ShowReview(ArrHoldThingToReview)
                        }}
                    >Review</button>
                    <br />
                    {props.ShowInterim ? <span id="showInterimID" style={{ color: "violet" }}></span> : <span id="showInterimID" style={{ color: "violet", backgroundColor: "violet" }}></span>}
                </div>
            </div>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}