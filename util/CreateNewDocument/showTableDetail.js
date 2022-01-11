import { useEffect, useState } from "react"
import turnArrToArrofObj from "./turnArrToArrofObj"
let maxi = 3
export default function showTableDetail(showObjTable, objMain, setobjMain) {

    const [index, setindex] = useState(0)
    const [Submit, setSubmit] = useState([])
    const [tool, settool] = useState(false)
    useEffect(() => {
        try {
            $("#getNum").val(showObjTable.get)
            setindex(showObjTable.get)
            setSubmit(showObjTable.pushSubmit)
            settool(showObjTable.tool)
            if (showObjTable.data[0].length < maxi) {
                maxi = showObjTable.data[0].length
            }
        } catch (error) {

        }

    }, [showObjTable])


    try {




        return (
            <div>
                <div>
                    <input
                        onChange={(e) => {
                            setindex(e.currentTarget.value)
                        }}
                        className="form-control" type={"number"} min={0} max={maxi} id="getNum" defaultValue={index} />
                    {showtableindetail(showtableInget(showObjTable, index), Submit, setSubmit, objMain, setobjMain, index, tool, settool)}
                </div>
            </div>

        )

    } catch (error) {
        return null
    }
}

function showtableInget(showObjTable, index) {
    try {
        let arr = turnArrToArrofObj(showObjTable.data).slice(0, index)
        return arr
    } catch (error) {
        return null
    }
}



function showtableindetail(input, Submit, setSubmit, objMain, setobjMain, index, tool, settool) {
    try {
        let arrO = Object.keys(input[0])

        return (
            <>


                <table className="table">
                    <tbody>
                        {input.map((e, i) =>
                            <tr key={i}>
                                {arrO.map((ee, ii) =>
                                    <td
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: Submit.includes(e[ee]) ? "yellow" : "initial"
                                        }}
                                        onClick={() => {
                                            let Temp = JSON.parse(JSON.stringify(Submit));
                                            if (!Temp.includes(e[ee])) {
                                                Temp.push(e[ee])
                                                setSubmit(Temp)
                                            }

                                        }}
                                        key={ii}>
                                        {e[ee]}
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>


                <button
                    className="btn btn-info"
                    onClick={() => {
                        setSubmit([])
                    }}>ClearSM</button>
                {tool ?
                    <button className="btn btn-primary" onClick={() => {
                        settool(!tool)
                    }}>ToolOn</button>
                    :
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            settool(!tool)
                        }}>ToolOff</button>
                }
                <hr />
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        let objMainN = JSON.parse(JSON.stringify(objMain))
                        objMainN.table[$("#selectTableId").val()].get = index
                        objMainN.table[$("#selectTableId").val()].pushSubmit = Submit
                        objMainN.table[$("#selectTableId").val()].tool = tool
                        setobjMain(objMainN)
                    }}
                >
                    Save
                </button>
            </>
        )

    } catch (error) {
        return null
    }
}