export default function ButtonDictaphone(SetAlert, SET_Check_MessageApiChange) {

    try {
        return (
            <input
                style={{ display: "none" }}
                onClick={() => {
                    try {
                        SetAlert(SET_Check_MessageApiChange)
                    } catch (error) {

                    }
                }}
                type="button" id="messageResBtn"
            />
        )
    } catch (error) {
        return "error"
    }

}