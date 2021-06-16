import React, { useEffect, useState } from 'react';


function ImageSearch(props) {
    const [ListImage, SET_ListImage] = useState([])
    useEffect(() => {
        if (props.Word !== "") {
            GetInfo(SET_ListImage, props.Word)
        }
    }, [props.Word])


    return (
        <div>
            {Show_list()}
        </div>
    )

    function Show_list() {

        try {
            return (
                <div>
                    {ListImage.map((e, i) =>
                        <div key={i} style={{ display: "inline-block" }}>
                            <img src={e.image} alt={e.image} />
                        </div>
                    )}
                </div>

            )
        } catch (error) {
            return ""
        }
    }



}
export default ImageSearch

const GetInfo = async (SET_Data, Word) => {
    try {
        const res = await fetch("http://localhost:3000/api", {
            method: 'PUT',
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