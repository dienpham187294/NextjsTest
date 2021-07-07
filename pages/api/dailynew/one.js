import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    const { link } = req.query
    let arr = ["none"]
    try {
        await axios.get(link)
            .then((response) => {
                let ArrHoldRes = []
                const dom = new jsdom.JSDOM(response.data);
                try {
                    let Main = dom.window.document.querySelector(".main_fck_detail");
                    let Title_post = Main.querySelector(".title_post");
                    ArrHoldRes.push({
                        "text": SORT_API(Title_post.textContent),
                        "location": Main.innerHTML.indexOf(Title_post.innerHTML)
                    })
                    let Lead_post_detail = Main.querySelector(".lead_post_detail");
                    ArrHoldRes.push({
                        "text": SORT_API(Lead_post_detail.textContent),
                        "location": Main.innerHTML.indexOf(Lead_post_detail.innerHTML)
                    })
                    let Normal = Main.querySelectorAll(".Normal");
                    Normal.forEach((e) => {
                        ArrHoldRes.push(
                            {
                                "text": SORT_API(e.textContent),
                                "location": Main.innerHTML.indexOf(e.innerHTML)
                            }
                        )
                    })

                    let ARR_IMG = []
                    let Img = Main.querySelectorAll("img");
                    Img.forEach((e) => {
                        ARR_IMG.push(
                            {
                                "img": e.getAttribute("src"),
                                "location": Main.innerHTML.indexOf(e.getAttribute("src"))
                            }
                        )
                    })
                    let ARR_Sub_IMG = []
                    let Image = Main.querySelectorAll(".Image");
                    Image.forEach((e) => {
                        ARR_Sub_IMG.push(
                            {
                                "text": SORT_API(e.textContent),
                                "location": Main.innerHTML.indexOf(e.innerHTML)
                            }
                        )
                    })
                    ARR_IMG.forEach((e, i) => {
                        try {
                            e.text = ARR_Sub_IMG[i].text
                        } catch (error) {
                            e.text = "Photos by VnExpress"
                        }

                    })

                    arr.push(ArrHoldRes.concat(ARR_IMG).sort(function (a, b) {
                        return a.location - b.location;
                    }))
                } catch (error) {
                    try {
                        let Arr_hold2 = []
                        let Main2 = dom.window.document.querySelector("#detail_page_photo");
                        let Title_post = Main2.querySelector(".title_post");
                        Arr_hold2.push({
                            "text": SORT_API(Title_post.textContent),
                            "location": Main2.innerHTML.indexOf(Title_post.innerHTML)
                        })
                        let Lead_post_detail = Main2.querySelector(".lead_news_photo_detail");
                        Arr_hold2.push({
                            "text": SORT_API(Lead_post_detail.textContent),
                            "location": Main2.innerHTML.indexOf(Lead_post_detail.innerHTML)
                        })
                        let Arr_Image = Main2.querySelectorAll("img");
                        Arr_Image.forEach((e, i) => {
                            if (i % 2 === 0) {
                                Arr_hold2.push(
                                    {
                                        "img": e.getAttribute("src"),
                                        "location": Main2.innerHTML.indexOf(e.getAttribute("src")),
                                        "text": "Photos by VnExpress"
                                    }
                                )
                            }
                        })
                        let Arr_Text = Main2.querySelectorAll("p");
                        Arr_Text.forEach((e, i) => {
                            Arr_hold2.push(
                                {
                                    "text": SORT_API(e.textContent),
                                    "location": Main2.innerHTML.indexOf(e.innerHTML),
                                }
                            )

                        })
                        let Arr_Temp1 = Arr_hold2.sort(function (a, b) {
                            return a.location - b.location;
                        })


                        arr.push(Arr_Temp1)
                    } catch (error) {
                        console.log("error_ IN_GETNEWS")
                    }
                }
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }

}
function SORT_API(input) {
    return input.split('\"').join("").split('\n').join("").split('.m.').join(".m").split('.S.').join(".S").split('"').join('')
}