import Linkapi from "../api/Linkapi";

const GetInfo = async (SET_Data, Word) => {
    //http://localhost:3000/api
    //https://www.englishtool.co/api
    try {
        const res = await fetch(Linkapi + "api/" + Word, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        let data = await res.json();
        SET_Data(data.data)

    } catch (error) {
        SET_Data(["lỗi"]);
    }

}
export default GetInfo