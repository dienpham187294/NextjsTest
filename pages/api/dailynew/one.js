import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    const { link } = req.query
    let arr = ["none"]
    try {
        await axios.get(link)
            .then((response) => {
                const dom = new jsdom.JSDOM(response.data);
                let imgtop = dom.window.document.querySelector(".thumb_detail_top").querySelector("img").getAttribute("src")

                let ARRTemp = dom.window.document.querySelectorAll("p")
                let ArrHoldRes = []
                ARRTemp.forEach((e, i) => {
                    if (i === 0) {
                        ArrHoldRes.push({ "text": e.textContent, "img": imgtop })
                    } else {
                        ArrHoldRes.push({ "text": e.textContent })
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

