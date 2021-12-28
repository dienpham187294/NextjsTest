export default function showTopLeftPart1(Info_Avatar_Reactdata, ShowInfoHint, Info_Icon_Reactdata, SET_ShowHint, ShowHint) {
    try {
        return <div className="col-6" style={{ textAlign: "left", display: "inline-block" }}>
            <div style={{ display: "inline-block" }}>
                <img
                    alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="100px"
                    onClick={() => { SET_ShowHint(!ShowHint) }}
                />
            </div>
            <div style={{ display: "inline-block" }}>
                {ShowInfoHint(Info_Icon_Reactdata)}
            </div>
            <div id="showDivInHint" style={{ display: "inline-block" }}></div>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}
