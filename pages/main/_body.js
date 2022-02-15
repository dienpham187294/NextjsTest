import { useState } from "react"
import A1_sidebar from "./A1_Sidebar"
export default function body() {
    const [A1_sidebar_offon, setA1_sidebar_offon] = useState(true)

    return (
        <div>
            <div className="row A0_topconent">
                <div className="col-6">
                    <b><i className="A0_01_topcontent">EngPraticeCenter</i></b>
                    <button className="btn btn-primary ml-4" onClick={() => {
                        setA1_sidebar_offon(!A1_sidebar_offon)
                    }}>
                        <i className="fa fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className="col-6">
                    <b>  <i className="A0_02_topcontent">An easy and fast way to gain your skill!</i></b></div>
            </div>
            {A1_sidebar_offon ? <div className="A1_sidebar" ><A1_sidebar /></div> : null}

            <div className="A2_content"> </div>
        </div>
    )
}





{/* <div className="bodyInfomationDiv">
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
                </div> */}
{/* <hr />
                <div className="respondiframe">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/EaUK7bJ-ty8" allowFullScreen></iframe>
                </div>
                <hr />
                <ThuchanhA /> */}