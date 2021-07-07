import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    let arr = ["none"]
    try {

        await axios.get('https://www.forbes.com/')
            .then((response) => {
                let data = response.data;
                const dom = new jsdom.JSDOM(data);
                try {
                    // let ARRTemp = dom.window.document.querySelectorAll("a")
                    let ArrHoldRes = []
                    // ARRTemp.forEach((e, i) => {
                    //     try {
                    //         ArrHoldRes.push(
                    //             {
                    //                 "aClass": e.getAttribute("class"),
                    //                 "aText": e.textContent,
                    //                 "html2": e.parentNode.getAttribute("class")
                    //             }
                    //         )
                    //     } catch (error) {
                    //         console.log(i)
                    //     }

                    // })
                    var count = data.SORT_API().indexOf("pageInfo")
                    var count2 = data.SORT_API().indexOf("lazyLoadData")
                    var count3 = data.SORT_API().indexOf("</script>", count2)
                    arr.push(data.SORT_API().slice(count, count2).SORT_1().split("epdp").GET_1().concat(data.SORT_API().slice(count2, count3).SORT_2().split("epdp").GET_2()),)
                } catch (error) {
                    console.log("e one forbes")
                }
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}


String.prototype.SORT_API = function () {
    return this.split('\"').join("").split('\n').join("").split('.m.').join(".m").split('.S.').join(".S").split('"').join('')
}


String.prototype.SORT_1 = function () {
    return this.split(",title:").join("epdp").split(",url:").join("epdp").split(",advoiceBrand:").join("epdp")
}







String.prototype.SORT_2 = function () {
    return this.split(",title:").join("epdp").split(",image:").join("epdp").split(",url:").join("epdp").split(",cardClass").join("epdp")
}



Array.prototype.GET_1 = function () {
    let ARR_RES = [];
    let ARR_RES_1 = []
    this.forEach(e => {
        if (e.indexOf("{") === -1 && e.indexOf("}") === -1) {
            ARR_RES.push(e)
        }
    })
    for (let i = 0; i < ARR_RES.length; i += 2) {
        ARR_RES_1.push(
            {
                "hagtag": "most_popular_news",
                "title": ARR_RES[i],
                "href": ARR_RES[i + 1]
            }
        )
    }
    return ARR_RES_1
}



Array.prototype.GET_2 = function () {
    let ARR_RES = [];
    let ARR_RES_1 = []
    this.forEach(e => {
        if (e.indexOf("{") === -1 && e.indexOf("}") === -1) {
            if (e.split("/").length !== 6) {
                ARR_RES.push(e)
            }

        }
    })
    for (let i = 0; i < ARR_RES.length; i++) {


        if (ARR_RES[i].indexOf("jpg") > 20) {
            ARR_RES_1.push(
                {
                    "hagtag": "daily_news",
                    "title": ARR_RES[i - 1],
                    "img": ARR_RES[i],
                    "href": ARR_RES[i + 1]
                }
            )
        }

    }
    return ARR_RES_1
}