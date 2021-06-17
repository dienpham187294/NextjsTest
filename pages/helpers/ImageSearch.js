import React, { useEffect, useState } from 'react';
import GetInfo from "../../util/GetImage"

function ImageSearch(props) {
    const [ListImage, SET_ListImage] = useState([])
    useEffect(() => {
        let status = true;
        if (props.Word !== "" && status) {
            GetInfo(SET_ListImage, props.Word);
        }
        return function cleanup() {
            status = false
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

