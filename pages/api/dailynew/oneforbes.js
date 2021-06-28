import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    const { link } = req.query
    let arr = ["none"]
    try {
        await axios.get(link)
            .then((response) => {

                let data = response.data.split("S.").join("S").split("m.").join("m")
                const dom = new jsdom.JSDOM(data);
                let main = dom.window.document.querySelector("main");
                let imgtop = main.querySelector("progressive-image").getAttribute("src")
                let ARRTemp = main.querySelectorAll("p");
                let ArrHoldRes = []
                ARRTemp.forEach((e, i) => {
                    if (i === 0) {
                        ArrHoldRes.push({ "text": e.textContent, "img": imgtop })
                    } else {
                        ArrHoldRes.push({ "text": e.textContent })
                    }

                })
                arr.push(ArrHoldRes)

            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })


        // console.log(response.data);
    } catch (error) {
        res.status(400).json({ success: false })
    }

}

