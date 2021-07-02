import axios from "axios"
import jsdom from "jsdom"

export default async (req, res) => {
    const { link } = req.query
    let arr = ["none"]
    try {
        await axios.get(link)
            .then((response) => {
                let data = response.data;
                const dom = new jsdom.JSDOM(data);
                let All = dom.window.document.querySelector(".vnnews-text-post");
                let ARRTemp = dom.window.document.querySelector(".vnnews-text-post").querySelectorAll("img")
                let arrImg = []
                ARRTemp.forEach(e => {
                    arrImg.push(
                        {
                            "img": e.getAttribute("src"),
                            "index": All.innerHTML.indexOf(e.getAttribute("src")),
                            "status": true
                        }
                    )
                })
                let ARRTemp_P = dom.window.document.querySelector(".vnnews-text-post").querySelectorAll("p")
                let ArrP = []
                ARRTemp_P.forEach(e => {
                    let num;
                    if (e.length > 30) {
                        num = 30
                    } else {
                        num = e.length
                    }
                    if (e.textContent.length !== 3) {
                        ArrP.push(
                            {
                                "text": e.textContent.split("\n").join("").split("\t").join(""),
                                "index": All.innerHTML.indexOf(e.innerHTML.slice(5, num))
                            }
                        )
                    }
                })
                for (let i = 0; i < ArrP.length - 2; i++) {
                    for (let j = 0; j < arrImg.length - 1; j++) {
                        if (arrImg[j]["index"] > ArrP[i]["index"] && arrImg[j]["index"] < ArrP[i + 1]["index"] && arrImg[j]["status"]) {

                            ArrP[i + 1].img = arrImg[j]["img"];
                            arrImg[j]["status"] = false
                        }
                    }
                }
                arr.push(ArrP)
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}
