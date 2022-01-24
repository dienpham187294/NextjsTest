import { useState } from "react"

import Show_SmallView from "./funtionInside/A3_ShowSmallView"
import ShowBigView from "./funtionInside/A3_ShowBigView"
function DataTool(props) {
    const [Data_phongto, SET_Data_phongto] = useState(props.Data[0])
    const [UpdateDataTable, SET_UpdateDataTable] = useState(true)

    try {

        return (
            <>
                {/* {Show_SmallView(props.Data, props.Total, SET_Data_phongto)} */}
                {ShowBigView(props.Data, Data_phongto, props.Total, SET_Data_phongto, UpdateDataTable, SET_UpdateDataTable)}
            </>
        )
    } catch (error) {
        return <div>Đang chờ dữ liệu</div>
    }

}
export default DataTool






