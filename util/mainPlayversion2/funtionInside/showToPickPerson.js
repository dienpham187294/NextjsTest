export default function showToPickPerson(
    DataShowToPick, SET_DataShowToPick, StatusShowToPick, SET_StatusShowToPick,
    ArrOfPeopeAppear_ReactData, AddTo_Show_ArrOfPeopeAppear_ReactData
) {
    try {
       
        return (
            <>
                {StatusShowToPick ?
                    <div style={{
                        position: "fixed", top: "1px", bottom: "1px", right: "1px",
                        left: "1px", backgroundColor: "white", overflow: "auto", textAlign: "center", zIndex: 4,
                        border: "2px solid violet", borderRadius: '5px'
                    }}>
                        {
                            DataShowToPick.map((e, i) =>
                                <div key={i}
                                    style={{ display: "inline-block", margin: "5px" }}
                                    onClick={() => {
                                        updateDataShowToPick(DataShowToPick, SET_DataShowToPick)
                                        AddTo_Show_ArrOfPeopeAppear_ReactData(e)
                                        SET_StatusShowToPick(false)
                                    }}
                                >
                                    <h5>{ArrOfPeopeAppear_ReactData[e].total.viewPick.header}</h5>
                                    <p>{ArrOfPeopeAppear_ReactData[e].total.viewPick.content}</p>
                                    <img src={ArrOfPeopeAppear_ReactData[e].total.viewPick.img} height="250px" />
                                </div>
                            )
                        }
                    </div>
                    :
                    null}
            </>
        )
    } catch (error) {
        console.log(error)
        return null
    }
}

function updateDataShowToPick(DataShowToPick, SET_DataShowToPick) {

}