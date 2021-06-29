import axios from "axios"
import jsdom from "jsdom"
import jsondata from "../../../util/filedulieu/travelVietnamnews/50baidulich"
export default async (req, res) => {
    let arr = ["none"]


    try {
        let ArrHoldRes = []

        await axios.get(jsondata[0].href)
            .then((response) => {
                let data = response.data.split('\\').join("").split('\"').join("").split('\n').join("");
                const dom = new jsdom.JSDOM(data);
                let ARRTemp = dom.window.document.querySelector(".vnnews-text-post").querySelectorAll("p")
                ARRTemp.forEach(e => {
                    ArrHoldRes.push(
                        {
                            "html": e.textContent.split('\\').join("").split('\"').join("").split('\n').join("").split('\t').join(""),
                        }
                    )
                })
                arr.push(ArrHoldRes)
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })


        // console.log(response.data);
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

