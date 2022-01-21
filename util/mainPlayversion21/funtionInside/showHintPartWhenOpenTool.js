import Check_ImageOrNot from "./Check_ImageOrNot"

export default function showHintPartWhenOpenTool(ShowHint, Info_Icon_Reactdata) {
    try {
        return (
            <>
                {
                    ShowHint ?
                        <div style={{
                            position: "fixed",
                            bottom: "2%",
                            left: "2%",
                            padding: "5px",
                            backgroundColor: "white",
                            border: "1px solid green",
                            borderRadius: "8px",
                            zIndex: 3
                        }}>
                            {Check_ImageOrNot(Info_Icon_Reactdata) ?
                                <>
                                    <img alt={Info_Icon_Reactdata} src={Info_Icon_Reactdata} width="360px" height={"360px"} />
                                </>
                                : <b><i>{Info_Icon_Reactdata}</i></b>}
                        </div>
                        : null
                }
            </>
        )

    } catch (error) {
        return null
    }
}
