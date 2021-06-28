import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    let arr = ["none"]
    try {
        await axios.get('https://www.forbes.com/')
            .then((response) => {
                let data = response.data.split('\\').join("").split('\"').join("").split('\n').join("");
                const dom = new jsdom.JSDOM(data);
                let ARRTemp = dom.window.document.querySelectorAll("a")
                let ArrHoldRes = []
                ARRTemp.forEach(e => {
                    if (e.textContent === e.innerHTML) {
                        if (
                            e.getAttribute("href") !== null
                        ) {
                            if (e.getAttribute("href").indexOf("2021") > -1) {
                                ArrHoldRes.push({ "title": e.textContent, "href": e.getAttribute("href")})
                            }
                        }

                    }

                })
                arr.push(ArrHoldRes)
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}

