import { useState } from "react";
import DL from "../../../util/filedulieu1/DulieuThuchanh_hung/DulieuTotal";
function UpLoadFile(props) {

    const [srcYoutube, SET_SrcYoutube] = useState("")

    function Fnpick(arrPick) {
        try {
            props.Total.fnObj.SET_Data_InfoOflession(arrPick[0].hoctap)
            props.Total.fnObj.SET_NameOflession(arrPick[0].nameoflession)
            props.Total.fnObj.SET_Data_Game(arrPick[1].coerdataoflession.sort(() => 0.5 - Math.random()))
            props.Total.fnObj.SET_PageChange(1);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div style={{ margin: "5%" }}>
            <table className="table table-striped">
                <tbody>
                    {DL.map((e, i) =>
                        <tr key={i}>
                            <td>
                                <b style={{ color: "black" }}>{e[0].nameoflession}</b>
                                <br />
                                <button
                                    style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                    className="btnHover ml-1"
                                    onClick={() => {
                                        Fnpick(e)
                                    }}

                                >Practice</button>
                                <button
                                    style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                    className="btnHover ml-1"
                                    onClick={() => {
                                        props.Total.fnObj.SET_Data_InfoOflession(e[0].hoctap)
                                        props.Total.fnObj.SET_PageChange(2)
                                    }}
                                >Study</button>
                                {e[0].srcYoutube !== "" ?
                                    <button
                                        style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                        className="btnHover ml-1"
                                        onClick={() => {
                                            SET_SrcYoutube(e[0].srcYoutube)
                                        }}
                                    >Video</button>
                                    : null}
                            </td>
                        </tr>
                    )}
                </tbody></table>

            {srcYoutube !== "" ?
                <div
                    style={{
                        position: "fixed",
                        top: "5px",
                        bottom: "5px",
                        left: "5px",
                        right: "5px",
                        textAlign: "center",
                        backgroundColor: "white",
                    }}
                >
                    <button className="btn btn-danger" onClick={() => { SET_SrcYoutube("") }}>Thoát</button>
                    <hr />


                    <div class="respondiframe">
                        <iframe class="responsive-iframe" src={srcYoutube}></iframe>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default UpLoadFile

