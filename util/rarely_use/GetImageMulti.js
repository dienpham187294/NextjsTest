const GetInfo = async (SET_Data, Word) => {
    try {
        const res = await fetch("http://localhost:3000/api", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Word: Word })
        })
        let data = await res.json();
        SET_Data(data.data)

    } catch (error) {
        SET_Data(["lỗi"]);
    }

}
export default GetInfo