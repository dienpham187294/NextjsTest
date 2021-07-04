import IndexDiv from "../../../../util/ReadingPage_2_Api"

export default function Index() {
    const OBJ_Data_Input = {
        Link_GETAPI_ALL: "api/dailynew",
        Link_GETAPI_One: "api/dailynew/one?link=",
        Name_of_table: "Báo International VnExpress",
        Number_of_Div_To_Read: 3
    }
    return (<IndexDiv OBJ_Data_Input={OBJ_Data_Input} />)
}