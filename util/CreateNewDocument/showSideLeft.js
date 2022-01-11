import showHintAlot from "./showHintAlot"

export default function showSideLeft(sideLeftData, objMain, setobjMain, part, setSideLeftData) {

    try {
        return (
            <>
                <table className="table">
                    <tbody>
                        <tr>
                            <td> {part} : {sideLeftData.m00}</td>
                        </tr>
                        <tr className="span1">
                            <td>
                                <>
                                    <input type={"text"} id="insertm01" className="form-control" />
                                    <button
                                        onClick={() => {
                                            try {
                                                let inData = JSON.parse($("#insertm01").val())
                                                let objMainG = JSON.parse(JSON.stringify(objMain));
                                                objMainG[part].forEach(e => {
                                                    if (e.m00 === sideLeftData.m00) {
                                                        e.m01 = inData
                                                        setSideLeftData(e)
                                                    }
                                                });
                                                setobjMain(objMainG)

                                            } catch (error) {
                                                alert("Lỗi cấu trúc")
                                            }
                                        }}
                                    >Insert</button>
                                </>
                            </td>
                            <td>{sideLeftData.m01[0]}</td>
                            <td>{showListAw(sideLeftData.m01.slice(1, sideLeftData.m01.length))}</td>
                        </tr>
                        <tr className="span2">
                            <td>
                                <>
                                    <input type={"text"} id="insertm02" className="form-control" />
                                    <button
                                        onClick={() => {
                                            try {
                                                let inData = JSON.parse($("#insertm02").val())
                                                let objMainG = JSON.parse(JSON.stringify(objMain));
                                                objMainG[part].forEach(e => {
                                                    if (e.m00 === sideLeftData.m00) {
                                                        e.m02 = inData
                                                        setSideLeftData(e)
                                                    }
                                                });
                                                setobjMain(objMainG)

                                            } catch (error) {
                                                alert("Lỗi cấu trúc")
                                            }
                                        }}
                                    >Insert</button>
                                </>
                            </td>
                            <td>{sideLeftData.m02[0]}</td>
                            <td>{showListAw(sideLeftData.m02.slice(1, sideLeftData.m02.length))}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="row bg-info text-white" >
                    <div className="col-6 border">
                        {showFunction(sideLeftData.m03, sideLeftData.m00, objMain, setobjMain, part, setSideLeftData)}
                    </div>
                    <div className="col-6 border">
                        {showFunction2(sideLeftData.m03, sideLeftData.m00, objMain, setobjMain, part, setSideLeftData)}

                    </div>
                </div>
                <div className="row" >
                    <div className="col-6 border">
                        {showIcon(sideLeftData.m03, sideLeftData.m00, objMain, setobjMain, part, setSideLeftData)}
                    </div>
                    <div className="col-6 border">
                        {showHintAlot(sideLeftData.m04)}
                    </div>
                </div>
                <div className="row" >
                    <div className="col-6 border">
                        {showListOfTable(sideLeftData.m00, objMain, setobjMain, part, setSideLeftData)}
                    </div>
                    <div className="col-6 border">
                        {sideLeftData.m05}
                    </div>
                </div>
                <hr />
            </>
        )
    } catch (error) {
        return null
    }

}
function showListAw(Arr) {
    try {
        return (
            <>
                {Arr.map((e, i) =>
                    <span key={i}>{e}, </span>
                )}
            </>
        )
    } catch (error) {
        return null
    }
}

function showFunction(input, index, objMain, setobjMain, part, setSideLeftData) {
    try {
        if (!input.endSuccessfull) {
            return <button
                onClick={() => {
                    let objMainG = JSON.parse(JSON.stringify(objMain));
                    objMainG[part].forEach(e => {
                        if (e.m00 === index) {
                            e.m03.endSuccessfull = true
                            setSideLeftData(e)
                        }
                    });

                    setobjMain(objMainG)
                }}
                className="btn btn-small btn-danger">End</button>
        }
        else {
            return null
        }


    } catch (error) {
        return null
    }
}

function showFunction2(input, index, objMain, setobjMain, part, setSideLeftData) {
    try {
        if (input.endSuccessfull) {
            return <button
                onClick={() => {
                    let objMainG = JSON.parse(JSON.stringify(objMain));
                    objMainG[part].forEach(e => {
                        if (e.m00 === index) {
                            e.m03.endSuccessfull = false
                            setSideLeftData(e)
                        }
                    });
                    setobjMain(objMainG)
                }}
                className="btn btn-small btn-danger">End</button>
        }
        else {
            return null
        }


    } catch (error) {
        return null
    }
}

function showIcon(input, index, objMain, setobjMain, part, setSideLeftData) {

    try {
        return (
            <>
                <input type={"text"} id="insertIcon" className="form-control" />
                <button
                    onClick={() => {
                        try {
                            let inData = JSON.parse($("#insertIcon").val())
                            let objMainG = JSON.parse(JSON.stringify(objMain));
                            objMainG[part].forEach(e => {
                                if (e.m00 === index) {
                                    e.m04 = inData
                                    setSideLeftData(e)
                                }
                            });
                            setobjMain(objMainG)

                        } catch (error) {
                            alert("Lỗi cấu trúc")
                        }
                    }}
                >Insert</button>
            </>
        )
    } catch (error) {
        return null
    }
}


function showListOfTable(index, objMain, setobjMain, part, setSideLeftData) {
    try {

        let arrT = Object.keys(objMain.table)

        return (
            <select
                onChange={(e) => {
                    let data = e.currentTarget.value
                    if (data === "None") {
                        let objMainG = JSON.parse(JSON.stringify(objMain));
                        objMainG[part].forEach(e => {
                            if (e.m00 === index) {
                                e.m05 = null
                                setSideLeftData(e)
                            }
                        });
                        setobjMain(objMainG)
                    } else {
                        let objMainG = JSON.parse(JSON.stringify(objMain));
                        objMainG[part].forEach(e => {
                            if (e.m00 === index) {
                                e.m05 = data
                                setSideLeftData(e)
                            }
                        });
                        setobjMain(objMainG)
                    }
                }}
                className="form-control">
                <option>None</option>
                {arrT.map((e, i) => e !== "identities" ? <option key={i}>{e}</option> : null
                )}
            </select>
        )

    } catch (error) {
        return null
    }
}