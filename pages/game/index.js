import React, { useRef, useEffect, useState } from "react";
import GetFinal from "../../util/rarely_use/GetFinal"
import arrNPC from "../../util/game/arrNpc"
let arrLocation = [{ x: 0, y: 0 }];
function MyComponent() {
    const ref = useRef(null);
    useEffect(() => {
        // On first render create our application
        try {
            const PIXI = require("pixi.js");
            const { Application } = require("pixi.js");
            const app = new Application({
                width: 1200,
                height: 600,
                backgroundColor: "tranparent"
            });
            let bg = PIXI.Sprite.from('https://i.postimg.cc/VkTnKBrp/MapGame.jpg')
            bg.width = 1200;
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
        <div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
            <div ref={ref} />
        </div>
    )
}

export default MyComponent



