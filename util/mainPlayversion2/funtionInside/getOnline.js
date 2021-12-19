// import Linkapi from "../../api/Linkapi"

export default async function getOnline(idRoom, idMember, score, SET_DataOnline) {
    try {


        const res = await fetch(
            "https://nodejsserverforenglishtool.herokuapp.com/api"
            ,
            {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    idRoom: idRoom,
                    idMember: idMember,
                    score: score
                })
            })
        let data = await res.json();

        if (data.success) {
            SET_DataOnline(data.data)
            console.log(1)
        }
    } catch (error) {
        console.log(error)
    }
}