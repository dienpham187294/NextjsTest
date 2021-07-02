import Dictionary from "./DictionaryReadPage"
import GetLongest from "../../util/GetLongest"
import ImageSearch from "./ImageSearch"

function Dictionary_with_image(props) {
    return (
        props.Popup !== "" ?
            <div
                style={{
                    zIndex: 2,
                    position: "fixed",
                    left: "2%",
                    top: "2%",
                    border: "1px solid green",
                    borderRadius: "10px",
                    padding: "15px",
                    width: "20%",
                    minWidth: "250px",
                    maxHeight: "100%",
                    backgroundColor: "white",
                    overflow: "auto"
                }}
            >
                {props.Popup}
                <hr />
                <Dictionary Word={GetLongest(props.Popup)} />
                <hr />
                < ImageSearch Word={props.Popup} />
                <hr />
            </div>
            : null
    )
}

export default Dictionary_with_image