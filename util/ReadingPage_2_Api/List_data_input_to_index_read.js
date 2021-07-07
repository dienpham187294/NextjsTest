import json_all_Vietnamtravel from "../filedulieu/travelVietnamnews/50baidulich"
import json_truyentranh from "../filedulieu/truyentranh/10-bài-truyen-tranh-lan-1"
export default {

    "vnexpress": {
        GET_LINK_ONLINE: true,
        Link_GETAPI_ALL: "api/dailynew",
        GET_LINK_ONE_STATUS: true,
        Link_GETAPI_One: "api/dailynew/one?link=",
        Name_of_table: "Báo International VnExpress",
        Number_of_Div_To_Read: 3,
        Buycode: "R0001"
    },
    "forbes": {
        GET_LINK_ONLINE: true,
        Link_GETAPI_ALL: "api/dailynew/forbes",
        GET_LINK_ONE_STATUS: true,
        Link_GETAPI_One: "api/dailynew/oneforbes?link=",
        Name_of_table: "Tạp chí Forbes",
        Number_of_Div_To_Read: 3,
        Buycode: "R0002"
    },
    "vietnamenews_travel": {
        GET_LINK_ONLINE: false,
        Link_GETAPI_ALL: json_all_Vietnamtravel,
        GET_LINK_ONE_STATUS: true,
        Link_GETAPI_One: "api/vietnamtravel/one?link=",
        Name_of_table: "Khám phá việt nam",
        Number_of_Div_To_Read: 3,
        Buycode: "R0003"
    },
    "50-bai-truyen-tranh": {
        GET_LINK_ONLINE: false,
        Link_GETAPI_ALL: json_truyentranh,
        GET_LINK_ONE_STATUS: false,
        Link_GETAPI_One: "",
        Name_of_table: "Truyện tranh",
        Number_of_Div_To_Read: 1,
        Buycode: "R0004"
    },
    "small-business": {
        GET_LINK_ONLINE: true,
        Link_GETAPI_ALL: "api/dailynew/Entrepreneurs",
        GET_LINK_ONE_STATUS: true,
        Link_GETAPI_One: "api/dailynew/oneforbes?link=",
        Name_of_table: "Small Business/Entrepreneurs",
        Number_of_Div_To_Read: 3,
        Buycode: "R0005"
    },
    "food-drink": {
        GET_LINK_ONLINE: true,
        Link_GETAPI_ALL: "api/dailynew/FoodDrink",
        GET_LINK_ONE_STATUS: true,
        Link_GETAPI_One: "api/dailynew/oneforbes?link=",
        Name_of_table: "Business: Food and Drink",
        Number_of_Div_To_Read: 3,
        Buycode: "R0006"
    },
    "HollywoodEntertainment": {
        GET_LINK_ONLINE: true,
        Link_GETAPI_ALL: "api/dailynew/HollywoodEntertainment",
        GET_LINK_ONE_STATUS: true,
        Link_GETAPI_One: "api/dailynew/oneforbes?link=",
        Name_of_table: "Hollywood & Entertainment",
        Number_of_Div_To_Read: 3,
        Buycode: "R0007"
    }
}