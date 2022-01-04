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
        return <div style={{ maxHeight: "250px", overflow: "auto" }}>
            <div >
                {Data.map((eee, indexeee) =>
                    <div
                        key={indexeee}
                        style={{
                            display: "inline-block",
                            cursor: "pointer",
                            border: "1px solid green",
                            borderRadius: "5px", padding: "5px",
                            backgroundColor: "white",
                            margin: "5px",
                            height: "150px",
                            width: "150px",
                            overflowY: "auto",
                            textAlign: "left"
                        }}>
                        <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => {
                                SET_Data_phongto(eee)
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
                                        src={eeee} width="150px" style={{ margin: "5px 0px" }} /> :
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

    } catch (error) {
        console.log(error)
        return "null"
    }

}


function ShowDataPhongto(dataRoot, data, Total, SET_Data_phongto) {
    try {

        return (
            <div
                style={{
                    position: "fixed",
                    border: "5px solid violet",
                    borderRadius: "4px",
                    top: "25%",
                    bottom: "5px",
                    left: "5px",
                    right: "5px",
                    backgroundColor: "white",
                    overflow: "auto",
                    zIndex: 3,
                    padding: "5%",
                    textAlign: "left"
                }}>

                {dataRoot.map((e, index) =>


                    <div key={index} style={{ position: "fixed", bottom: "10%", left: "1px" }}>
                        <div
                        >
                            {dataRoot.map((eee, indexeee) =>
                                <div
                                    key={indexeee}
                                    style={{
                                        cursor: "pointer",
                                    }}>
                                    <button
                                        className="btn btn-primary mt-1"
                                        onClick={() => {
                                            SET_Data_phongto(eee)
                                        }}
                                    >
                                        {Check_ImageOrNot(eee[0]) ?
                                            <img
                                                src={eee[0]} width="40px" /> :
                                            <span
                                                style={{ width: "40px" }}
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
                    style={{ position: "fixed", bottom: "10%", right: "10%" }}
                >Trở lại</button>
                {
                    data.map((eeee, indexeeee) =>
                        <div
                            key={indexeeee}
                            style={{
                                display: Check_ImageOrNot(eeee) ? "inline-block" : "initial",
                                border: "1px solid black",
                                borderRadius: "5px",
                                padding: "10px",
                                margin: "5px",
                            }}
                        >
                            {Check_ImageOrNot(eeee) ?
                                <img
                                    onClick={() => {
                                        Total.stObj.inputSumit += "===" + eeee;
                                        Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                                        Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                    }}
                                    src={eeee} width="250px" style={{ margin: "5px 25px", cursor: "pointer" }} /> :
                                <b
                                    onClick={() => {
                                        Total.stObj.inputSumit += "===" + eeee;
                                        Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                                        Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                                    }}
                                    style={{ cursor: "pointer" }}
                                >{eeee}</b>
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