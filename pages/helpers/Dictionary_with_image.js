import Dictionary from "./DictionaryReadPage"
import GetLongest from "../../util/GetLongest"
import ImageSearch from "./ImageSearch"
import { useEffect, useState } from "react"
import ReadMessage from "../../util/ReadMessage"
function Dictionary_with_image(props) {
    const [Word, SET_Word] = useState("")
    useEffect(() => {
        if (props.Popup !== "") {
            try {
                document.getElementById("Dictionary_ID").style.display = "initial";
            } catch (error) {
                console.log(error)
            }
            SET_Word(props.Popup)
        } else {
            try {
                document.getElementById("Dictionary_ID").style.display = "none";
            } catch (error) {
                console.log("e")
            }

        }
    }, [props.Popup])


    return (
        <div
            id="Dictionary_ID"
            style={{
                position: "fixed",
                left: "2%",
                top: "2%",
                border: "1px solid green",
                borderRadius: "10px",
                padding: "15px",
                width: "70%",
                maxHeight: "100%",
                backgroundColor: "white",
                overflow: "auto"
            }}
        >

            {Word}
            <button
                onClick={() => {
                    try {
                        document.getElementById("Dictionary_ID").style.display = "none";
                    } catch (error) {
                        console.log(error)
                    }
                }}
                style={{ float: "right" }}>X</button>
            <hr />
            <button
                onClick={() => {
                    ReadMessage(Word, 1)
                }}
            >
                Đọc giọng nữ
            </button>
            <button
                onClick={() => {
                    ReadMessage(Word, 2)
                }}
            >
                Đọc giọng name
            </button>
            <hr />
            <Dictionary Word={GetLongest(Word)} />
            <hr />
            < ImageSearch Word={Word} />
            <hr />
        </div>
    )
}

export default Dictionary_with_image