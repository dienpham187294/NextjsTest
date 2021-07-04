import IndexDiv from "../../../../util/ReadingPage_2_Api/index"

export default function Index() {
    const OBJ_Data_Input = {
        Link_GETAPI_ALL: "api/dailynew/forbes",
        Link_GETAPI_One: "api/dailynew/oneforbes?link=",
        Name_of_table: "Tạp chí Forbes",
        Number_of_Div_To_Read: 3
    }
    return (<IndexDiv OBJ_Data_Input={OBJ_Data_Input} />)
}