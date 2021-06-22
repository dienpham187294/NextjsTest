import React, { useRef, useEffect, useState } from "react";
import { async } from "regenerator-runtime";
import GetFinal from "../../util/GetFinal"
import SetAlert from "../../util/SetAlert"
import Sound from "../../util/sound"
let arrLocation = [{ x: 0, y: 0 }];

let arrXuly = [{}]

let arrNPC = [
    {
        "x": 25,
        "y": 380,
        "width": 100,
        "height": 120,
        "xuly":
        {
            "Showhinh": "https://i.postimg.cc/dQym97VH/Address.jpg",
            "soundfirst": "mixkit-ominous-drums-227.wav"
        }
    },
    {
        "x": 185,
        "y": 95,
        "width": 60,
        "height": 55,
        "xuly":
        {
            "Showhinh": "https://i.postimg.cc/d1vPYkN6/Main-House.jpg",
            "soundfirst": "mixkit-video-game-treasure-2066.wav"
        }
    }
    ,
    {
        "x": 275,
        "y": 200,
        "width": 45,
        "height": 50,
        "xuly":
        {
            "Showhinh": "https://i.postimg.cc/dQym97VH/Address.jpg",
            "soundfirst": "mixkit-video-game-treasure-2066.wav"
        }
    }
]
function MyComponent() {
    const ref = useRef(null);
    const [ShowSide, SET_ShowSide] = useState("")
    const [AlertChange, SET_AlertChange] = useState(0)
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
                arrLocation.push({ x: Xuse, y: Yuse });


                console.log(GetFinal(arrLocation))
                try {
                    ticker.start();
                } catch (error) {

                }
            });




            let sprite = PIXI.Sprite.from('https://i.postimg.cc/ZYvK89Lk/Untitled-1.jpg');
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
                                Xuly()
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
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <div ref={ref} />

            {ShowSide === "" ? "" :
                <div>
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "1000px",
                            backgroundColor: "black",
                            top: "5px",
                            opacity: "0.5"
                        }}
                    > </div>
                    <div
                        id="myDIV"
                        style={{
                            width: "100%",
                            textAlign: "center",
                            position: "fixed",
                            top: "1%",
                            bottom: "1%"
                        }}>
                        <div style={{
                            width: "100%",
                            textAlign: "center"
                        }}
                            onClick={() => {
                                SET_ShowSide("")
                            }}
                        >
                            <button className="btn btn-info">Exit</button>
                        </div>

                        {Show_image()}

                    </div>
                </div>
            }

        </div>
    )


    async function Xuly() {
        SET_ShowSide("1")
        SetAlert(SET_AlertChange);
        Sound(GetFinal(arrXuly)["soundfirst"]);
    }

    function Show_image() {
        try {
            return <img src={GetFinal(arrXuly)["Showhinh"]} width="300px" />
        } catch (error) {
            return null
        }
    }
}

export default MyComponent