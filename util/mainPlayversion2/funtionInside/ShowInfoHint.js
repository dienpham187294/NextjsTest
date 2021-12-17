import Check_ImageOrNot from "./Check_ImageOrNot"
export default function ShowInfoHint(Info_Icon_Reactdata, SET_ShowHint) {
    try {
        if (Info_Icon_Reactdata === undefined || Info_Icon_Reactdata === "") {
            $("#showDivInHint").html("")
            return null
        }
        else {
            if (Info_Icon_Reactdata.includes("/>")) {
                $("#showDivInHint").html(Info_Icon_Reactdata)
                return null
            }
            else {
                $("#showDivInHint").html("")
                return (
                    <>
                        {Check_ImageOrNot(Info_Icon_Reactdata) ?
                            <>
                                <img
                                    alt={Info_Icon_Reactdata} src={Info_Icon_Reactdata}
                                    width="140px"
                                    onMouseOver={() => { SET_ShowHint(true) }}
                                    onMouseOut={() => { SET_ShowHint(false) }}
                                />
                            </>
                            : <>
                                <hr />
                                <b><i>{Info_Icon_Reactdata}</i></b>
                            </>}
                    </>
                )
            }
        }
    } catch (error) {
        try {
            return null
        } catch (error) {
            return null
        }
    }
}