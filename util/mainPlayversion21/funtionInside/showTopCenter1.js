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
            <div className="row">

                <div className="col-8">

                    <b> Điểm: {Score} <span style={{ color: "red" }}>Chọn sai: {Sai} </span> | <span style={{ color: "red" }}>{Boqua}</span> </b>
                    <span id="thoigian"></span>
                    <br />
                    {props.ShowInterim ? <span id="showInterimID" style={{ height: "50px", color: "violet" }}></span> : <span id="showInterimID" style={{ color: "violet", backgroundColor: "violet" }}></span>}
                    {/* <hr /> */}
                    {/* <button
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
                    >Review</button> */}
                    <hr />
                    {showOptionToRead(Score, Info_StrickAnwers_Reactdata)}


                </div>
                <div className="col-4">
                    {showSubmitSyxtax(Info_ToSunmit_Reactdata)}
                    <span id="complete" style={{ color: "red" }}></span>
                    <br />
                    <span style={{ color: "blue" }}>{props.huongdan}</span>
                </div>
            </div>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}