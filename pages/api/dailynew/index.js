import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    let arr = ["none"]
    try {
        await axios.get('https://e.vnexpress.net/')
            .then((response) => {
                let data = response.data.split('\\').join("").split('\"').join("").split('\n').join("");

                const dom = new jsdom.JSDOM(data);
                let ARRTemp = dom.window.document.querySelectorAll(".title_news_site")
                let ArrHoldRes = []
                ARRTemp.forEach(e => {
                    ArrHoldRes.push({ "title": e.textContent, "href": e.querySelector("a").getAttribute("href") })
                })
                arr.push(ArrHoldRes)
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })


        // console.log(response.data);
    } catch (error) {
        res.status(400).json({ success: false })
    }

}

