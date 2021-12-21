export default
    function showSubmitSyxtax(Info_ToSunmit_Reactdata) {

    try {
        return (
            Info_ToSunmit_Reactdata.map((e, i) =>
                <div key={i} style={{
                    border: "1px solid black",
                    padding: "5px",
                    borderRadius: "5px",
                    margin: "5px",
                    textAlign: "left"
                }}>

                    {e.map((ee, ii) =>
                        <div style={{ borderLeft: "5px solid green", padding: "3px", display: "inline-block", }} key={ii}>
                            <div id={"ct" + i + ii}>
                                <span id={"ct1" + i + ii}></span>
                            </div>
                        </div>
                    )}

                </div>
            )
        )
    } catch (error) {
        return JSON.stringify(Info_ToSunmit_Reactdata)
    }
}
