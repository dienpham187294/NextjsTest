import { useEffect, useState } from "react"
import Check_ImageOrNot from "../../../../util/rarely_use/Check_ImageOrNot"
function DataTool(props) {
    //Can read length of underfined
    try {
        if (props.Data.length === 0) {
            return <div>Đang chờ dữ liệu</div>
        }
    } catch (error) {
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

            {/* <div style={{ textAlign: "center" }}>
                <select className="form-control" onChange={(e) => {
                    SET_Nameoftable(e.currentTarget.value)
                }}>
                    {Show_option()}
                </select>

            </div> */}
            {Show_Table(props.Data, Nameoftable)}

        </>
    )
}

export default DataTool


function Show_Table(Data, Nameoftable) {
    return Data.map((e, index) =>
        <div key={index} style={{ maxHeight: "350px", overflow: "auto" }}>
            {e.nameoftable === Nameoftable ?
                <div>
                    <h5>{e.nameoftable}</h5>
                    {e.dataoftable.map((e, i) =>
                        <div
                            key={i}
                            onClick={() => {
                                try {
                                    $("#input_submit").text(JSON.stringify(e));

                                    let htmlInput = "<div>"
                                    for (let i = 0; i < e.length; i++) {
                                        htmlInput += Check_ImageOrNot(e[i]) ? `<img src="` + e[i] + `" width="60px" /><br/>` : e[i] + "<br/>"
                                    }
                                    htmlInput += "</div>"
                                    $("#input_submitHTML").html(htmlInput);
                                    $("#input_submitButton").click()
                                } catch (error) {
                                    console.log("e", "input_submit")
                                }

                            }}
                            style={{ display: "inline-block", cursor: "pointer", marginLeft: "5px" }}>
                            {e.map((ee, ii) =>
                                <div
                                    key={ii}
                                >
                                    {
                                        Check_ImageOrNot(ee) ? <img src={ee} width="60px" /> : <span>{ee}</span>
                                    }
                                    <br />
                                </div>
                            )}
                        </div>
                    )}
                </div>



                // <table className="table table-sm">
                //     <thead>
                //         <tr>
                //             {e.nameofheader.map((ee, indexee) =>
                //                 <td key={indexee}><b>{ee}</b></td>
                //             )}
                //         </tr>
                //     </thead>
                //     <tbody>
                //         {e.dataoftable.map((eee, indexeee) =>
                //             <tr key={indexeee}>
                //                 {eee.map((eeee, indexeeee) =>
                //                     <td
                //                         style={{ cursor: "pointer" }}
                //                         onClick={(e) => {
                //                             let TEMP_Targetvalue = e.currentTarget.innerHTML;
                //                             try {
                //                                 if (TEMP_Targetvalue.indexOf("<img") === -1) {
                //                                     let TEMP_inputvalue = document.getElementById("input_submit").value + " " + TEMP_Targetvalue;
                //                                     document.getElementById("input_submit").value = TEMP_inputvalue;
                //                                 }

                //                             } catch (error) {
                //                                 console.log(error)
                //                             }
                //                         }}
                //                         key={indexeeee}>{
                //                             Check_ImageOrNot(eeee) ? <img src={eeee} width="60px" /> : eeee
                //                         }</td>
                //                 )}
                //             </tr>
                //         )}
                //     </tbody>
                // </table>
                : ""}
        </div >
    )
}


