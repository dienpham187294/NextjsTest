import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    let arr = ["none"]
    try {
        await axios.get('https://e.vnexpress.net/')
            .then((response) => {
                let data = response.data;
                const dom = new jsdom.JSDOM(data);
                let Title_news = dom.window.document.querySelectorAll(".title_news_site")
                let ArrHoldRes = []
                Title_news.forEach(e => {
                    let img = "";
                    let description = "";
                    try {
                        if (e.parentNode.querySelector("img") !== null) {
                            img = e.parentNode.querySelector("img").getAttribute("src")
                        }
                        if (e.parentNode.querySelector(".lead_news_site") !== null) {
                            description = e.parentNode.querySelector(".lead_news_site").textContent
                        }

                        if (e.parentNode.getAttribute("class") === "info_news_center") {
                            img = e.parentNode.parentNode.querySelector("img").getAttribute("src")
                        }
                    } catch (error) {
                        console.log(error)
                    }
                    ArrHoldRes.push(
                        {
                            "className": e.parentNode.getAttribute("class"),
                            "title": e.textContent.split("\n").join(""),
                            "href": e.querySelector("a").getAttribute("href"),
                            "description": description.split("\n").join(""),
                            "img": img
                        })
                })

                let Arr_className = [
                    {
                        "className": "item_topstory_list_center",
                        "arr": [],
                        "hagtag": "top_news"
                    },
                    {
                        "className": "item_most_read",
                        "arr": [],
                        "hagtag": "most_read_news"
                    },
                    {
                        "className": "col_300 col box_news_border_title",
                        "arr": [],
                        "hagtag": "news"
                    },
                    {
                        "className": "item_list",
                        "arr": [],
                        "hagtag": "news"
                    },
                    {
                        "className": "item_col_mid_finance",
                        "arr": [],
                        "hagtag": "finance-news"
                    }
                ]
                let arr_hot_news = []
                let arr_Remain = [];
                let i = 1;
                ArrHoldRes.forEach(e => {
                    let status = true
                    if (e.className === "info_news_center" && i === 1) {
                        e.hagtag = "hot_news";
                        arr_hot_news.push(e)
                        i++;
                    }
                    Arr_className.forEach((ee) => {
                        if (e.className === ee.className && e.className !== "info_news_center") {
                            e.hagtag = ee.hagtag;
                            ee.arr.push(e);
                            status = false
                        }
                    })
                    if (status) {
                        e.hagtag = "news"
                        arr_Remain.push(e)
                    }
                })
                let Arr_Concat = [arr_hot_news]
                Arr_className.forEach(e => {
                    let Temp_arr = Arr_Concat[Arr_Concat.length - 1].concat(e['arr'])
                    Arr_Concat.push(Temp_arr)
                })
                let Temp_arr = Arr_Concat[Arr_Concat.length - 1].concat(arr_Remain)
                Arr_Concat.push(Temp_arr)
                arr.push(Arr_Concat[Arr_Concat.length - 1])
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })


        // console.log(response.data);
    } catch (error) {
        res.status(400).json({ success: false })
    }

}

