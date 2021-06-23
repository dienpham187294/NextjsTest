import Show_image from "./Show_image"
import GetFinal from "../GetFinal"
export default function Show_RightSide(props) {
    try {
        return (
            <div>
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "1000px",
                        backgroundColor: "black",
                        top: "5px",
                        opacity: "0.5"
                    }}
                > </div>
                <div
                    id="myDIV"
                    style={{
                        width: "100%",
                        textAlign: "center",
                        position: "fixed",
                        top: "1%",
                        bottom: "1%"
                    }}>
                    <div style={{
                        width: "100%",
                        textAlign: "center"
                    }}
                        onClick={() => {
                            props.SET_ShowSide("")
                        }}
                    >
                        <button className="btn btn-info">Exit</button>
                    </div>
                    <div style={{
                        width: "800px",
                        height: "600px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        marginTop: "10px",
                        backgroundColor: "white",
                        marginLeft: "50%",
                        transform: "translateX(-50%)"
                    }}
                        className="row"
                    >
                        <div className="col-6 pt-5" >
                            {Show_image(GetFinal(props.arrXuly)["Showhinh"])}
                        </div>
                        <div className="col-6 pt-5 text-left">
                            <ul>
                                {props.Data_Commands.map((e, i) =>
                                    <li key={i}>{e}</li>
                                )}
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        )
    } catch (error) {
        return "error"
    }

}