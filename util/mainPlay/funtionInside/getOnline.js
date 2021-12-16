import Linkapi from "../../api/Linkapi"

export default async function getOnline(idRoom, idMember, score, SET_DataOnline) {
    try {
        const res = await fetch(
            Linkapi + "api/apiOnline?idRoom=" + idRoom + "&idMember=" + idMember + "&score=" + score
            ,
            {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
        let data = await res.json();
        if (data.success) {
            SET_DataOnline(data.data)
        }
    } catch (error) {
        console.log(error)
    }
}