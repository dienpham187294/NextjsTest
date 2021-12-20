import { useState } from "react"
import Check_ImageOrNot from "./funtionInside/Check_ImageOrNot"
function DataTool(props) {
    const [Data_phongto, SET_Data_phongto] = useState(null)
    try {
        return (
            <>
                {Show_Table(props.Data, props.Total, SET_Data_phongto)}
                {ShowDataPhongto(props.Data, Data_phongto, props.Total, SET_Data_phongto)}
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
                                    // Total.fnObj.SET_ShowHint(true)

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
                                                Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                                                Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)

                                            }}
                                            src={eeee} width="180px" style={{ margin: "5px 25px" }} /> :
                                        <span
                                            onClick={() => {
                                                Total.stObj.inputSumit += "===" + eeee;
                                                Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                                                Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
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


function ShowDataPhongto(dataRoot, data, Total, SET_Data_phongto) {
    try {

        return (
            <div
                style={{
                    position: "fixed",
                    border: "1px solid green",
                    borderRadius: "4px",
                    top: "25%",
                    bottom: "5px",
                    left: "5px",
                    right: "5px",
                    backgroundColor: "white",
                    overflow: "auto",
                    zIndex: 3,
                    padding: "15%",
                    textAlign: "left"
                }}>

                {dataRoot.map((e, index) =>
                    <div key={index} style={{ position: "fixed", top: "25%" }}>
                        <div >
                            {e.dataoftable.map((eee, indexeee) =>
                                <div
                                    key={indexeee}
                                    style={{
                                        display: "inline-block",
                                        cursor: "pointer",
                                    }}>
                                    <button
                                        className="btn btn-primary ml-1"
                                        onClick={() => {
                                            SET_Data_phongto(eee)
                                        }}
                                    >
                                        {Check_ImageOrNot(eee[0]) ?
                                            <img
                                                src={eee[0]} height="40px" /> :
                                            <span

                                            >{eee[0].slice(0, 6)}</span>
                                        }

                                    </button>
                                </div>



                            )}
                        </div>

                    </div >
                )}



                <button
                    className="btn btn-danger"
                    onClick={() => { SET_Data_phongto(null) }}
                    style={{ position: "fixed", top: "25%", right: "20%" }}
                >Trở lại</button>
                {
                    data.map((eeee, indexeeee) =>
                        <div
                            key={indexeeee}
                            style={{ display: "inline-block", border: "1px solid black", borderRadius: "5px", padding: "10px", margin: "5px" }}
                        >
                            {Check_ImageOrNot(eeee) ?
                                <img
                                    onClick={() => {
                                        Total.stObj.inputSumit += "===" + eeee;
                                        Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                                        Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                    }}
                                    src={eeee} width="250px" style={{ margin: "5px 25px", cursor: "pointer" }} /> :
                                <span
                                    onClick={() => {
                                        Total.stObj.inputSumit += "===" + eeee;
                                        Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                                        Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                    }}
                                    style={{ cursor: "pointer" }}
                                >{eeee}</span>
                            }
                        </div>
                    )
                }
            </div>

        )

    } catch (error) {
        return null
    }
}