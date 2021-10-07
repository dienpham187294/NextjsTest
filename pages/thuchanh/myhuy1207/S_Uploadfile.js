

// import $ from "jquery"
import { useState } from "react";
import DL from "../../../util/filedulieu1/DulieuThuchanhlop7/DulieuTotal";
function UpLoadFile(props) {

    const [srcYoutube, SET_SrcYoutube] = useState("")

    function Fnpick(arrPick) {
        try {
            props.Total.fnObj.SET_Data_InfoOflession(arrPick[0].hoctap)
            // let ArrDataTool = [];
            // arrPick[1].coerdataoflession.forEach(eee => {
            //     if (eee.Tabletool.length > 0) {
            //         eee.Tabletool.forEach(eeee => {
            //             ArrDataTool.push(eeee)
            //         })
            //     }
            // });

            // props.Total.fnObj.SET_Data_TableTool([])

            // let GameData = [];
            // arrPick[1].coerdataoflession.forEach(eee => {
            //     GameData.push({ "template": eee.template, "ArrToReplace": eee.ArrToReplace, "DataInput": eee.DataInput })
            // });

            props.Total.fnObj.SET_Data_Game(arrPick[1].coerdataoflession.sort(() => 0.5 - Math.random()))
            // console.log(GameData)
            // console.log(JSON.stringify(ConvertFileToObject(GameData, arrPick[0].status)))
            props.Total.fnObj.SET_PageChange(1);
            // props.Total.fnObj.SET_huongdan(arrPick[0].huongdan)

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

                                >Thực hành</button>
                                <button
                                    style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                    className="btnHover ml-1"
                                    onClick={() => {
                                        props.Total.fnObj.SET_Data_InfoOflession(e[0].hoctap)
                                        props.Total.fnObj.SET_PageChange(2)
                                    }}
                                >Học tập</button>

                                {e[0].srcYoutube !== "" ?
                                    <button
                                        style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                        className="btnHover ml-1"
                                        onClick={() => {
                                            SET_SrcYoutube(e[0].srcYoutube)
                                        }}
                                    >Xem video</button>
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

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ConvertFileToObject(GameData, status) {
    // console.log(GameData)
    let Numberofelementwanttopick
    let Numberpickeachone
    if (GameData.length <= 30) {
        Numberofelementwanttopick = 30;
        let NumberofChance = GameData.length;
        Numberpickeachone = Math.floor(Numberofelementwanttopick / NumberofChance)
    } else {
        Numberofelementwanttopick = GameData.length;
        Numberpickeachone = 1
    }

    let ARRRES = []
    GameData.forEach(e => {
        let i = e.DataInput.length - Numberpickeachone - 1;
        let begini = RandomInt(0, i);

        const shuffled = e.DataInput.sort(() => 0.5 - Math.random());
        // Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(begini, begini + Numberpickeachone);
        selected.forEach(eeee => {
            let TextTemp = JSON.stringify(e.template);
            let arrTextTemp = [TextTemp]
            eeee.forEach((ee, index) => {
                arrTextTemp[index + 1] = arrTextTemp[index].split(e.ArrToReplace[index]).join(ee)
            })

            if (status === "new") {
                let arrFN = ((arrTextTemp[arrTextTemp.length - 1]).split('"[').join('[').split(']"').join(']').split(`'`).join(`"`))

                ARRRES.push(JSON.parse(arrFN))
            }
            else {
                let arrFN = ((arrTextTemp[arrTextTemp.length - 1]))

                ARRRES.push(JSON.parse(arrFN))
            }


        });

    })

    return ARRRES.sort(() => 0.5 - Math.random());
}