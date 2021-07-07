import { async } from "regenerator-runtime";
import GetDataCommands from "./GetDataCommands";
import funtionxuly from "./funtionxuly";
import ReadMessage from "../Read/ReadMessage";
export default async function Xylyhandling(MessageApi, handling_next, Data_handlingNext, SET_Data_handlingNext, SET_Data_Commands, SET_ImageLeftSide) {
    try {
        console.log(MessageApi)
        await Data_handlingNext.forEach(e => {
            e["manspeak"].forEach(ee => {
                if (ee === MessageApi) {
                    funtionxuly(e["funtionXuly"], SET_ImageLeftSide);
                    ReadMessage(e["robotspeak"].PickRandom(), e["voice"])
                    if (e["handling_next"].length > 0) {
                        SET_Data_Commands(GetDataCommands(e["handling_next"]));
                        SET_Data_handlingNext(e["handling_next"])
                    } else {
                        SET_Data_Commands(GetDataCommands(handling_next));
                        SET_Data_handlingNext(handling_next)
                    }

                }
            })
        });
    } catch (error) {
        console.log(error)
    }

}