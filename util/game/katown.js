import GetFinal from "../rarely_use/GetFinal";
import Sound from "../Sound/sound"
import ReadMessage from "../Read/ReadMessage"
import arrNPC from "./arrNpc"
let arrLocation = [{ x: 0, y: 0 }];
export default function FN_SetPixi(PIXI, ref) {
    try {
        const app = new PIXI.Application({
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

        let sprite = PIXI.Sprite.from('https://i.postimg.cc/SRWCVcf4/man2.png');
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
                            Xuly(e.xuly)
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


}

async function Xuly(e) {
    try {
        Sound(e["sound1st"]);
        ReadMessage(e["robotspeak1st"].PickRandom(), e["gender"])
    } catch (error) {

    }
}
