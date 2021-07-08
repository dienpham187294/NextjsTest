import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    let arr = ["none"]
    try {

        await axios.get('https://www.forbes.com/food-drink/')
            .then((response) => {
                let data = response.data;
                const dom = new jsdom.JSDOM(data);
                try {
                    let ARRTemp = dom.window.document.querySelectorAll(".byline__by")
                    let ArrHoldRes = []
                    ARRTemp.forEach((e, i) => {
                        try {
                            if (e.parentNode.parentNode.getAttribute("class") !== "byline__author-group") {
                                ArrHoldRes.push(
                                    {
                                        "hagtag": "Food_Drink",
                                        "title": e.parentNode.parentNode.textContent,
                                        "href": e.parentNode.parentNode.querySelector("a").getAttribute("href")
                                    }
                                )
                            }
                        } catch (error) {
                            console.log(i)
                        }

                    })
                    arr.push(ArrHoldRes)
                } catch (error) {
                    console.log("e one forbes")
                }
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}


// String.prototype.SORT_API = function () {
//     return this.split('\"').join("").split('\n').join("").split('.m.').join(".m").split('.S.').join(".S").split('"').join('')
// }
