import Bai11 from "./bai11"
import Bai12 from "./bai12"
import Bai14 from "./bai14"
import Bai15 from "./bai15"
import Bai17 from "./bai17"
import Bai18 from "./bai18"

let coerdataoflession =
    Bai11[1].coerdataoflession.slice(0, 10)
        .concat(Bai12[1].coerdataoflession.slice(0, 10))
        .concat(Bai14[1].coerdataoflession.slice(0, 10))
        .concat(Bai15[1].coerdataoflession.slice(0, 10))
        .concat(Bai17[1].coerdataoflession.slice(0, 10))
        .concat(Bai18[1].coerdataoflession.slice(0, 10))

let hoctap = [

]
let listenOnly = [

]
let writeOnly = [

]
const BaiA9
    = [
        {
            "nameoflession": "A.9|A.2-A.8",
            "srcYoutube": "",
            "hoctap": {
                "listenRead": hoctap,
                "listenOnly": listenOnly,
                "writeOnly": writeOnly
            },
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default BaiA9
