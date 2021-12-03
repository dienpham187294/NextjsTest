import { useState } from "react"

function DataTool(props) {
    const [Data_phongto, SET_Data_phongto] = useState(null)
    try {
        return (
            <>
                {Show_Table(props.Data, props.Total, SET_Data_phongto)}
                {ShowDataPhongto(Data_phongto, props.Total, SET_Data_phongto)}
            </>
        )
    } catch (error) {
        return <div>Đang chờ dữ liệu</div>
    }

}
export default DataTool


function Show_Table(Data, Total, SET_Data_phongto) {
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
                                maxWidth: "15%",
                                overflowY: "auto",
                                textAlign: "left"
                            }}>
                            <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => {
                                    SET_Data_phongto(eee)
                                    console.log(Total, "111111111111")
                                }}
                            >Phóng to</button>
                            {eee.map((eeee, indexeeee) =>
                                <div
                                    key={indexeeee}
                                >
                                    {Check_ImageOrNot(eeee) ?
                                        <img
                                            onClick={() => {
                                                Total.stObj.inputSumit += "===" + eeee;
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
    if (
        typeof (Stringtocheck) === "string"
        && (Stringtocheck.includes(".png")
            || Stringtocheck.includes(".jpg")
            || Stringtocheck.includes(".jpeg")
            || Stringtocheck.includes(".gif"))) {
        return true
    }
    return false
}
function ShowDataPhongto(data, Total, SET_Data_phongto) {
    try {

        return (
            <div
                style={{
                    position: "fixed",
                    border: "1px solid green",
                    borderRadius: "4px",
                    top: "5px",
                    bottom: "5px",
                    left: "5px",
                    right: "5px",
                    backgroundColor: "white",
                    overflow: "auto",
                    zIndex: 3,
                    padding: "15%",
                    textAlign: "left"
                }}>
                <button
                    className="btn btn-danger"
                    onClick={() => { SET_Data_phongto(null) }}
                    style={{ position: "fixed", top: "5px", right: "20%" }}
                >Trở lại</button>
                {
                    data.map((eeee, indexeeee) =>
                        <div
                            key={indexeeee}
                        >

                            {Check_ImageOrNot(eeee) ?
                                <img
                                    onClick={() => {
                                        Total.stObj.inputSumit += "===" + eeee;
                                        // console.log(eeee)
                                        Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                        // console.log(eee[e.indexToSubmit])
                                    }}
                                    src={eeee} width="350px" style={{ margin: "5px 25px", cursor: "pointer" }} /> :
                                <span
                                    onClick={() => {
                                        Total.stObj.inputSumit += "===" + eeee;
                                        // console.log(eeee)
                                        Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                        // console.log(eee[e.indexToSubmit])
                                    }}
                                    style={{ cursor: "pointer" }}
                                >{eeee}</span>
                            }
                            < br />
                        </div>
                    )
                }
            </div>

        )

    } catch (error) {
        return null
    }
}