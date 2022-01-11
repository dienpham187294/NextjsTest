import $ from "jquery"
// import { pick } from "query-string";
import { useEffect, useState } from "react"
import ReadMessage from "../Read/ReadMessage"
import ReadReactSpeech from "../../pages/helpers/Read_ReactSpeechSlow"
import Dictaphone from "../../pages/helpers/RegcognitionV1-0-1AI0.5 _02 highlevel"

let i = 0
export default function Lesson(props) {

    const [Data_Commands, SET_Data_Commands] = useState("====")
    const [IPA, SET_IPA] = useState("")
    useEffect(() => {
        SET_Data_Commands(props.Data[i].EN)
        SET_IPA(props.Data[i].IPA)
    }, [])



    try {
        return (
            <div >
                <ReadReactSpeech />
                <Dictaphone Data={Data_Commands} Xuly={Xuly} />
                <hr />
                <div style={{
                    position: "fixed",
                    top: "5px",
                    left: "15%",
                    backgroundColor: "yellow",
                    border: "1px solid black"
                }}>
                    <p id="interrimID"></p>
                    {IPA}
                    <button onClick={() => { Xuly() }} className="btn btn-primary ml-3">Next</button>
                </div>
                {showRead(props.Data, Data_Commands)}
            </div >
        )
    } catch (error) {
        return null
    }




    function Xuly() {
        i += 1
        SET_Data_Commands(props.Data[i].EN)
        SET_IPA(props.Data[i].IPA)
    }

}

function showRead(data, Data_Commands) {
    try {
        return (
            <table className="table table-striped">
                <tbody>
                    {data.map((e, i) =>
                        <tr key={i}>
                            <td
                                style={{
                                    backgroundColor: e.EN === Data_Commands ? "yellow" : "white"
                                }}
                            >
                                {e.EN}
                            </td>
                            <td>
                                {e.VN}
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        )
    } catch (error) {
        return null
    }
}

function PickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}