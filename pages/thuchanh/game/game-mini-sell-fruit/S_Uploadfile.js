
import { useEffect, useState } from "react";
import Dulieu_gameMiniSellFruit from "../../../../util/filedulieu/Dulieu_gameMiniSellFruit";
function UpLoadFile(props) {
    const [Status] = useState(0)
    useEffect(() => {
        Fnpick(Dulieu_gameMiniSellFruit)
    }, [Status])
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