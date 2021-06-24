import React, { useRef, useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import GetFinal from "../../util/GetFinal"
import SetAlert from "../../util/SetAlert"
import Read_ReactSpeech from "../helpers/Read_ReactSpeech"
import arrNPC from "../../util/game/arrNpc"
import Dictaphone from "../helpers/RegcognitionV1-0-1AI"
import Show_RightSide from "../../util/game/showrightside"
import Xuly from "../../util/game/xuly"
import Xylyhandling from "../../util/game/xulyhandling"
import ButtonDictaphone from "../../util/game/ButtonDictaphone"

let arrLocation = [{ x: 0, y: 0 }];
let arrXuly = [{}]
let Arrhandling_next = ["none"];

function MyComponent() {
    const ref = useRef(null);
    const [ShowSide, SET_ShowSide] = useState("")
    const [AlertChange, SET_AlertChange] = useState(0)
    //////////
    const [Data_Commands, SET_Data_Commands] = useState(["hi first"])
    const [Check_MessageApiChange, SET_Check_MessageApiChange] = useState(0)
    const [Data_handlingNext, SET_Data_handlingNext] = useState([])

    const [ImageLeftSide, SET_ImageLeftSide] = useState("")
    //////////
    useEffect(() => {
        // On first render create our application
        try {
            const PIXI = require("pixi.js");
            const { Application } = require("pixi.js");
            const app = new Application({
                width: 600,
                height: 600,
                backgroundColor: "tranparent"
            });
            let bg = PIXI.Sprite.from('https://i.postimg.cc/VkTnKBrp/MapGame.jpg')
            bg.width = 600;
            bg.height = 600;
            app.stage.addChild(bg);
            app.interactive = true;
            app.renderer.view.addEventListener('click', function (e) {
                let Xuse, Yuse;
                if ((e.layerX + sprite.x) % 3 === 0) {
                    Xuse = e.layerX;
                } else {
                    Xuse = e.layerX - (e.layerX + sprite.x) % 3
                }
                if ((e.layerY + sprite.y) % 3 === 0) {
                    Yuse = e.layerY;
                } else {
                    Yuse = e.layerY - (e.layerY + sprite.y) % 3
                }
                console.log(Xuse, Yuse)
                arrLocation.push({ x: Xuse, y: Yuse });
                try {
                    ticker.start();
                } catch (error) {

                }
            });

            let sprite = PIXI.Sprite.from('https://i.postimg.cc/28nB0R6j/Avatar-2.jpg');
            sprite.width = 30;
            sprite.height = 30;
            sprite.x = 99;
            sprite.y = 99;
            sprite.anchor.set(0.5);

            app.stage.addChild(sprite)

            const ticker = new PIXI.Ticker();
            ticker.add(animated);
            // ticker.start();
            function animated() {
                try {
                    if (sprite.x < GetFinal(arrLocation)["x"]) {
                        sprite.x += 3
                    }
                    if (sprite.y < GetFinal(arrLocation)["y"]) {
                        sprite.y += 3
                    }
                    if (sprite.x > GetFinal(arrLocation)["x"]) {
                        sprite.x -= 3
                    }
                    if (sprite.y > GetFinal(arrLocation)["y"]) {
                        sprite.y -= 3
                    }
                    if (
                        sprite.x === GetFinal(arrLocation)["x"] &&
                        sprite.y === GetFinal(arrLocation)["y"]
                    ) {
                        arrNPC.forEach(e => {
                            if (
                                (GetFinal(arrLocation)["x"] > e.x) &&
                                (GetFinal(arrLocation)["x"] < e.x + e.width) &&
                                (GetFinal(arrLocation)["y"] > e.y) &&
                                (GetFinal(arrLocation)["y"] < e.y + e.height)
                            ) {
                                arrXuly.push(e.xuly)
                                Arrhandling_next.push(e.xuly["handling_next"])
                                SET_Data_handlingNext(e.xuly["handling_next"])
                                SET_ImageLeftSide(e.xuly["Showhinh"])
                                Xuly(SET_ShowSide, SetAlert, SET_Data_Commands, arrXuly, SET_AlertChange, SET_ImageLeftSide)
                            }
                        })
                        ticker.stop();
                    }
                } catch (error) {

                }

            }
            // Add app to DOM
            ref.current.appendChild(app.view);
            // Start the PixiJS app
            app.start();
            return () => {
                // On unload completely destroy the application and all of it's children
                app.destroy(true, true);
            };
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        let MessageApi = $("#messageRes").val()
        Xylyhandling(MessageApi, GetFinal(Arrhandling_next), Data_handlingNext, SET_Data_handlingNext, SET_Data_Commands, SET_ImageLeftSide)
    }, [Check_MessageApiChange])

    return (
        <div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>

            <hr />
            <div ref={ref} />
            <hr />
            <div style={{
                position: "fixed",
                width: "300px",
                left: "1px",
                top: "100px",
                zIndex: 1
            }}>
                <Dictaphone Data={Data_Commands} />
                {ButtonDictaphone(SetAlert, SET_Check_MessageApiChange)}
            </div>
            <hr />
            {ShowSide === "" ? "" :
                Show_RightSide({ SET_ShowSide, arrXuly, Data_Commands, ImageLeftSide })
            }
            <Read_ReactSpeech />
        </div>
    )
}

export default MyComponent

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}


