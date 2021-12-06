import ThuchanhA from "../thuchanh/thuchanhde";
export default function body() {
    return (
        <>

            <div className="container">
                <div className="bodyInfomationDiv">
                    <div style={{ padding: "0 0 40px", margin: "40px 40px 0 0" }}>
                        <b style={{ fontSize: "70px", lineHeight: "1.1", letterSpacing: "-0.05em", fontWeight: "800", textAlign: "left" }}><i>English game for Practicing</i></b>
                        <br />
                        <i>Focus on: Listening and Speaking</i>
                    </div>
                    <div className="bodyInfomationDiv2" style={{ margin: "0 0 40px" }}>
                        <span style={{ fontWeight: "400", fontSize: "16px", lineHeight: "1.6", letterSpacing: "-0.02em", color: "#666666" }}>
                            <i>   EngPracticeCenter gives you the best experience with all the features you need for practicing: interesting & effective, flexible time & place, no pressure & shame, and more.</i>
                        </span>
                    </div>
                </div>
                <hr />
                <div className="respondiframe">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/EaUK7bJ-ty8"></iframe>
                </div>
                <hr />
                {/* <div>
                    <select className="form-control">
                        <option>Level 1</option>
                        <option>Level 2</option>
                        <option>Level 3</option>
                        <option>Level 4</option>
                        <option>Level 5</option>
                        <option>Level 6</option>
                        <option>Level 7</option>
                        <option>Level 8</option>
                        <option>Level 9</option>
                        <option>Level 10</option>
                    </select>
                </div> */}
                <ThuchanhA />
            </div>
        </>
    )
}