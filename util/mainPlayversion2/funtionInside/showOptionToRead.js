import SortLetter from "./SortLetter";

export default function showOptionToRead(Score, Info_StrickAnwers_Reactdata) {
    try {
        if (Score < 3) {
            return Info_StrickAnwers_Reactdata.map((e, index) =>
                <span className="Span_Show_Info_StrickAnwers_Reactdata" key={index}>{e} <b style={{ backgroundColor: "black" }}>||</b> </span>
            )
        }
        else if (Score < 6) {
            return Info_StrickAnwers_Reactdata.map((e, index) =>
                <span className="Span_Show_Info_StrickAnwers_Reactdata" key={index}>{SortLetter(e)} <b style={{ backgroundColor: "black" }}>||</b> </span>
            )
        } else {
            return null
        }
    } catch (error) {
        console.log(error)
    }
    return null
}

