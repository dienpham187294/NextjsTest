import GetFinal from "../rarely_use/GetFinal"
import Sound from "../Sound/sound"
import ReadMessage from "../Read/ReadMessage"
import funtionxuly from "./funtionxuly"
import GetDataCommands from "./GetDataCommands"
export default async function Xuly(SET_ShowSide, SetAlert, SET_Data_Commands, arrXuly, SET_AlertChange, SET_ImageLeftSide) {
    try {
        funtionxuly(GetFinal(arrXuly)["funtionXuly"], SET_ImageLeftSide)
        SET_ShowSide("1")
        SetAlert(SET_AlertChange);
        Sound(GetFinal(arrXuly)["sound1st"]);
        setTimeout(() => {
            try {
                ReadMessage(GetFinal(arrXuly)["robotspeak1st"].PickRandom(), GetFinal(arrXuly)["gender"])
            } catch (error) {

            }
        }, 2000);
        SET_Data_Commands(GetDataCommands(GetFinal(arrXuly)["handling_next"]))
    } catch (error) {
        console.log(error)
    }

}

