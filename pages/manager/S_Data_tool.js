import { useEffect, useState } from "react"

function DataTool(props) {
    if (props.Data.length === 0) {
        return <div>Đang chờ dữ liệu</div>
    }
    const [Nameoftable, SET_Nameoftable] = useState(props.Data[0].nameoftable)
    // const [ARRPUSH, SET_ARRPUSH] = useState([])


    // useEffect(() => {

    // }, [Nameoftable])
    function Show_option() {
        return props.Data.map((e, index) =>
            <option key={index} value={e.nameoftable}>{e.nameoftable}</option>
        )
    }


    return (
        <>

            <div style={{ textAlign: "center" }}>
                <select className="form-control" onChange={(e) => {
                    SET_Nameoftable(e.currentTarget.value)
                }}>
                    {Show_option()}
                </select>

            </div>
            {Show_Table(props.Data, Nameoftable, props.SET_ArrToSubmit)}

        </>
    )
}

export default DataTool


function Show_Table(Data, Nameoftable, SET_ArrToSubmit) {
    return Data.map((e, index) =>
        <div key={index} style={{ maxHeight: "350px", overflow: "auto" }}>
            {e.nameoftable === Nameoftable ?
                <table className="table table-sm">
                    <thead>
                        <tr>
                            {e.nameofheader.map((ee, indexee) =>
                                <td key={indexee}><b>{ee}</b></td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {e.dataoftable.map((eee, indexeee) =>
                            <tr key={indexeee}>
                                {eee.map((eeee, indexeeee) =>
                                    <td
                                        style={{ cursor: "pointer" }}
                                        onDoubleClick={(e) => {
                                            let temp = e.currentTarget.innerHTML
                                            SET_ArrToSubmit(theArray => [...theArray, temp]);
                                        }}
                                        key={indexeeee}>{
                                            Check_ImageOrNot(eeee) ? <img src={eeee} width="60px" /> : eeee
                                        }</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>


                : ""}
        </div >
    )
}


function Check_ImageOrNot(Stringtocheck) {
    if (typeof (Stringtocheck) === "string") {
        if (
            Stringtocheck.indexOf(".png") > -1
            || Stringtocheck.indexOf(".jpg") > -1
            || Stringtocheck.indexOf(".jpeg") > -1
            || Stringtocheck.indexOf(".gif") > -1
        ) { return true }
    }


    return false
}