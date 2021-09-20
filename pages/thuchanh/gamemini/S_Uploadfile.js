

// import $ from "jquery"
// import { useEffect, useState } from "react";
import DL from "../../../util/filedulieu1/DulieuThucHanhDe/DulieuTotal";
function UpLoadFile(props) {

    function Fnpick(arrPick) {
        try {

            props.Total.fnObj.SET_Data_InfoOflession(arrPick[0].hoctap)
            let ArrDataTool = [];
            arrPick[1].coerdataoflession.forEach(eee => {
                if (eee.Tabletool.length > 0) {
                    eee.Tabletool.forEach(eeee => {
                        ArrDataTool.push(eeee)
                    })
                }
            });

            props.Total.fnObj.SET_Data_TableTool(ArrDataTool)

            let GameData = [];
            arrPick[1].coerdataoflession.forEach(eee => {
                GameData.push({ "template": eee.template, "ArrToReplace": eee.ArrToReplace, "DataInput": eee.DataInput })
            });

            props.Total.fnObj.SET_Data_Game(ConvertFileToObject(GameData))

            props.Total.fnObj.SET_PageChange(1);
            props.Total.fnObj.SET_huongdan(arrPick[0].huongdan)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div style={{ margin: "5%" }}>
            <table className="table table-striped"><tbody>
                {DL.map((e, i) =>
                    <tr key={i}>
                        <td> <b style={{ color: "blue" }}>{e[0].nameoflession}</b>  </td>
                        <td>
                            <div
                                style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                className="btnHover"
                                onClick={() => {
                                    Fnpick(e)
                                }}

                            >Thực hành</div>
                            <div
                                style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                className="btnHover"
                                onClick={() => {
                                    props.Total.fnObj.SET_Data_InfoOflession(e[0].hoctap)
                                    props.Total.fnObj.SET_PageChange(2)
                                }}
                            >Học tập</div>
                            <div
                                style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                className="btnHover"
                                onClick={() => {
                                    props.Total.fnObj.SET_Data_InfoOflession(e[0].hoctap)
                                    props.Total.fnObj.SET_PageChange(2)
                                }}
                            >Xem video</div>
                        </td>
                    </tr>
                )}
            </tbody></table>
        </div>
    )
}

export default UpLoadFile

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ConvertFileToObject(GameData) {
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

            ARRRES.push(JSON.parse(arrTextTemp[arrTextTemp.length - 1]))
        });

    })

    return ARRRES.sort(() => 0.5 - Math.random());
}