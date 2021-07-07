import IndexDiv from "../../../../util/ReadingPage_2_Api/index"
import List_data_input_to_index_read from "../../../../util/ReadingPage_2_Api/List_data_input_to_index_read"
export default function Index() {
    return (<IndexDiv OBJ_Data_Input={List_data_input_to_index_read["food-drink"]} />)
}