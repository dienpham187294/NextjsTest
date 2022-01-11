export default function showAllListOfTable(input, objMain, setobjMain, setSideLeftData, setshowObjTable) {
    try {
        let arrT = Object.keys(input)
        return (
            <>
                <select
                    id="selectTableId"
                    onChange={(e) => {
                        if (e.currentTarget.value !== "PickTable") {
                            // setSideLeftData([])
                            setshowObjTable(objMain.table[e.currentTarget.value])
                        } else {
                            // setshowObjTable([])
                        }
                    }}
                >
                    <option >PickTable</option>
                    {arrT.map((e, i) =>
                        e !== "identities" ?
                            <option key={i} className="mt-1">
                                {e}
                            </option> : null

                    )}
                </select>
                <button
                    onClick={() => {
                        delObjTable($("#selectTableId").val(), objMain, setobjMain)
                    }}
                    className="btn btn-danger mr-1" >Del</button>
            </>
        )

    } catch (error) {
        return null
    }
}

function delObjTable(e, objMain, setobjMain) {
    try {
        let objMainN = JSON.parse(JSON.stringify(objMain))
        delete objMainN.table[e];
        $("#selectTableId").val("PickTable")
        setobjMain(objMainN)
    } catch (error) {

    }
}

