// import { useEffect, useState } from "react"

import { useEffect } from "react"

function DataTool(props) {
    useEffect((
    ) => {
        console.log(props.Data, "2222")
    },
        [])

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
    try {
        return Data.map((e, index) =>
            <div key={index} style={{ maxHeight: "250px", overflow: "auto" }}>
                <div >
                    {e.dataoftable.map((eee, indexeee) =>
                        <div
                            key={indexeee}

                            style={{
                                display: "inline-block",
                                cursor: "pointer",
                                border: "1px solid green",
                                borderRadius: "5px", padding: "5px",
                                margin: "5px",
                                maxHeight: "150px",
                                overflowY: "auto"
                            }}>
                            {eee.map((eeee, indexeeee) =>
                                <div
                                    key={indexeeee}
                                >
                                    {Check_ImageOrNot(eeee) ?
                                        <img
                                            onClick={() => {
                                                Total.stObj.inputSumit += "//" + eeee;
                                                // console.log(eeee)
                                                Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                                // console.log(eee[e.indexToSubmit])
                                            }}
                                            src={eeee} width="180px" style={{ margin: "5px 25px" }} /> :
                                        <span
                                            onClick={() => {
                                                Total.stObj.inputSumit += "===" + eeee;
                                                // console.log(eeee)
                                                Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                                // console.log(eee[e.indexToSubmit])
                                            }}
                                        >{eeee}</span>
                                    }
                                    < br />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div >
        )

    } catch (error) {
        console.log(error)
        return null
    }

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