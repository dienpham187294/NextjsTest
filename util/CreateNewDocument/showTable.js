export default function showTable(TableViewBeforeInsert, objMain, setobjMain, setTableViewBeforeInsert) {
    try {
        let Arr = []
        for (let i = 0; i < TableViewBeforeInsert.data.length; i++) {
            Arr.push(i)
        }

        return (
            <div style={{
                position: "fixed",
                top: "1px",
                bottom: "1px",
                width: "100%",
                backgroundColor: "white"
            }}>
                <button
                    onClick={() => {
                        insertObjTable(TableViewBeforeInsert, objMain, setobjMain, setTableViewBeforeInsert)
                        $("#textInsertTable").val("")
                    }}
                    className="btn btn-outline-primary">
                    Insert
                </button>
                <table className="table table-striped">
                    <tbody>
                        {TableViewBeforeInsert.data[0].map((e, i) =>
                            <tr key={i}>
                                {Arr.map((ee, ii) =>
                                    <td key={ii}>{TableViewBeforeInsert.data[ii][i]}</td>
                                )}
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    } catch (error) {
        return null
    }
}

function insertObjTable(TableViewBeforeInsert, objMain, setobjMain, setTableViewBeforeInsert) {
    let newObjMain = JSON.parse(JSON.stringify(objMain))

    newObjMain.table[TableViewBeforeInsert.name] = {}
    newObjMain.table[TableViewBeforeInsert.name].data = TableViewBeforeInsert.data
    newObjMain.table[TableViewBeforeInsert.name].get = 0
    newObjMain.table[TableViewBeforeInsert.name].pushSubmit = []
    newObjMain.table[TableViewBeforeInsert.name].tool = false

    setobjMain(newObjMain)
    setTableViewBeforeInsert([])

}