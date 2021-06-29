import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    let arr = ["none"]


    try {
        let ArrHoldRes = []
        for (let i = 1; i <= 5; i++) {
            await axios.get('https://edition.cnn.com/travel/destinations/bangkok/')
                .then((response) => {
                    let data = response.data.split('\\').join("").split('\"').join("").split('\n').join("");
                    const dom = new jsdom.JSDOM(data);
                    let ARRTemp = dom.window.document.querySelectorAll(".vnnews-list-news li")
                    ARRTemp.forEach(e => {
                        ArrHoldRes.push(
                            {
                                "html": e.innerHTML.split('\\').join("").split('\"').join("").split('\n').join(""),
                                "href": 'https://vietnamnews.vn' + e.querySelector("a").getAttribute("href"),
                                "img": e.querySelector("img").getAttribute("src"),
                                "title": e.querySelector(".vnnews-tt-list-news").textContent,
                                "description": e.querySelector(".vnnews-sapo-list-news").textContent
                            }
                        )
                    })
                    arr.push(ArrHoldRes)
                });
        }
        res.status(200).json({ success: true, data: arr[arr.length - 1] })


        // console.log(response.data);
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

