// import Linkapi from "../../api/Linkapi"

export default async function resetOnline() {
    try {
        const res = await fetch(
            "https://nodejsserverforenglishtool.herokuapp.com/reset"
            ,
            {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
    } catch (error) {
        console.log(error)
    }
}