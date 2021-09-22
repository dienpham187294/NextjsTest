// import { useEffect, useState } from "react"

function DataTool(props) {
    try {
        return (
            <>
                {Show_Table(props.Data, props.Total)}
            </>
        )
    } catch (error) {
        return <div>Đang chờ dữ liệu</div>
    }

}
export default DataTool


function Show_Table(Data, Total) {
    return Data.map((e, index) =>
        <div key={index} style={{ maxHeight: "250px", overflow: "auto" }}>
            <div >
                {e.dataoftable.map((eee, indexeee) =>
                    <div
                        key={indexeee}
                        onClick={() => {
                            Total.stObj.inputSumit += "//" + eee[e.indexToSubmit];
                            Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                            // console.log(eee[e.indexToSubmit])
                        }}
                        style={{ display: "inline-block", cursor: "pointer", border: "1px solid green", borderRadius: "5px", padding: "5px", margin: "5px" }}>
                        {eee.map((eeee, indexeeee) =>
                            <div
                                key={indexeeee}
                            >
                                {Check_ImageOrNot(eeee) ? <img src={eeee} width="60px" /> : eeee}
                                < br />
                            </div>
                        )}
                    </div>
                )}
            </div>
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