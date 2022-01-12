
import { useState } from "react";
import shuffleArr from "../filedulieu1/dataHelperFunction/shuffleArr";
function UpLoadFile(props) {

    const [srcYoutube, SET_SrcYoutube] = useState("")

    function Fnpick(arrPick) {
        try {
            props.Total.fnObj.SET_Data_InfoOflession(arrPick[0].hoctap)
            props.Total.fnObj.SET_NameOflession(arrPick[0].nameoflession)
            props.Total.fnObj.SET_Data_Game(shuffleArr(shuffleArr(arrPick[1].coerdataoflession)))
            props.Total.fnObj.SET_PageChange(1);
        } catch (error) {
            console.log(error);
        }
    }
    function setStructure(arrPick) {
        try {
            props.Total.fnObj.SET_Data_InfoOflession(arrPick[0].hoctap)
            props.Total.fnObj.SET_Data_structure(shuffleArr(shuffleArr(arrPick[1].coerdataoflession)))
            props.Total.fnObj.SET_PageChange(2)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ margin: "5%" }}>
            <table className="table table-striped">
                <tbody>
                    {props.DL.map((e, i) =>
                        <tr key={i}>
                            <td>
                                {e[0].storyBoicanh !== "" && e[0].storyBoicanh !== undefined ?
                                    <>
                                        <p style={
                                            {
                                                color: "blueviolet"
                                            }
                                        }>
                                            {e[0].storyBoicanh}
                                        </p>
                                    </>

                                    : null}

                                <b style={{ color: "black" }}>{e[0].nameoflession}</b>
                                <p>{e[0].story}</p>
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

                                        setStructure(e)

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

            {
                srcYoutube !== "" ?
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
                    : null
            }
        </div >
    )
}

export default UpLoadFile

