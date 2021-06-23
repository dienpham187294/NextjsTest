import GetFinal from "../GetFinal"
import Sound from "../sound"
import ReadMessage from "../ReadMessage"
export default async function Xuly(SET_ShowSide, SetAlert, SET_Data_Commands, arrXuly, SET_AlertChange) {
    try {
        SET_ShowSide("1")
        SetAlert(SET_AlertChange);

        Sound(GetFinal(arrXuly)["sound1st"]);
        setTimeout(() => {
            try {
                ReadMessage(GetFinal(arrXuly)["robotspeak1st"].PickRandom(), GetFinal(arrXuly)["gender"])
            } catch (error) {

            }
        }, 2000);
        let arr1 = [];
        GetFinal(arrXuly)["handling_next"].forEach(e => {
            e.manspeak.forEach(ee => {
                arr1.push(ee)
            })
        })
        SET_Data_Commands(arr1)
    } catch (error) {
        console.log(error)
    }

}