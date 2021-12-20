export default function showTopLeftPart1(Info_Avatar_Reactdata, ShowInfoHint, Info_Icon_Reactdata, SET_ShowHint, ShowHint) {
    try {
        return <div className="col-4" style={{ textAlign: "left" }}>
            <img
                alt={Info_Avatar_Reactdata} src={Info_Avatar_Reactdata} width="100px"
                onClick={() => { SET_ShowHint(!ShowHint) }}
            />
            {ShowInfoHint(Info_Icon_Reactdata)}
            <div id="showDivInHint"></div>
        </div>
    } catch (error) {
        console.log(error)
        return null
    }
}
