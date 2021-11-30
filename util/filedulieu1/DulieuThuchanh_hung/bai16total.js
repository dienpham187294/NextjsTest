import Bai11 from "./bai11"
import Bai12 from "./bai12"
import Bai14 from "./bai14"
import Bai15 from "./bai15"
let coerdataoflession =
    Bai11[1].coerdataoflession.slice(0, 10)
        .concat(Bai12[1].coerdataoflession.slice(0, 10))
        .concat(Bai14[1].coerdataoflession.slice(0, 10))
        .concat(Bai15[1].coerdataoflession.slice(0, 10))

let hoctap = [

]
let listenOnly = [

]
let writeOnly = [

]
const Bai16

    = [
        {
            "nameoflession": "1.6|1.2-.15",
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

export default Bai16
