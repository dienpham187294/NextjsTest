
import { useState } from "react";
import baithuchanhgiaotiep from "../../../../util/filedulieu/20baithuchanhgiaotiep"
import baithuchanhgiaotiep1 from "../../../../util/filedulieu/20baithuchanhgiaotiep1"
function UpLoadFile(props) {
    const [Data_20baithuchanh] = useState(baithuchanhgiaotiep.concat(baithuchanhgiaotiep1))
    function Fnpick(arrPick) {
        try {
            props.SET_Data_InfoOflession(arrPick)
            let ArrDataTool = [];
            arrPick[1].coerdataoflession.forEach(eee => {

                if (eee.Tabletool.length > 0) {
                    eee.Tabletool.forEach(eeee => {
                        ArrDataTool.push(eeee)
                    })
                }
            });

            props.SET_Data_TableTool(ArrDataTool)

            let GameData = [];
            arrPick[1].coerdataoflession.forEach(eee => {
                GameData.push({ "template": eee.template, "ArrToReplace": eee.ArrToReplace, "DataInput": eee.DataInput })
            });

            props.SET_Data_Game(ConvertFileToObject(GameData))

            props.SET_PageChange(P => P + 1);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <table className="table table-striped"><tbody>

                {Data_20baithuchanh.map((e, i) =>
                    <tr key={i}>
                        <td>{e[0].nameoflession}</td>
                        <td
                            onClick={() => {
                                Fnpick(e)
                            }}
                            style={{ cursor: "pointer" }}
                        >Chọn bài học</td>
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