
import shuffleArr from "../dataHelperFunction/shuffleArr"
import A3_Anhthu1 from "./DulieuInside/A3_Anhthu1"
import A3_Anhthu2 from "./DulieuInside/A3_Anhthu2"
import A3_Anhthu3 from "./DulieuInside/A3_Anhthu3"
import A3_Anhthu4 from "./DulieuInside/A3_Anhthu4"
import A3_Anhthu5 from "./DulieuInside/A3_Anhthu5"
let InA3_Anhthu1 = A3_Anhthu1(10)
let InA3_Anhthu2 = A3_Anhthu2(10)
let InA3_Anhthu3 = A3_Anhthu3(10)
let InA3_Anhthu4 = A3_Anhthu4(10)
let InA3_Anhthu5 = A3_Anhthu5(10)

let coerdataoflession = [].concat(
    InA3_Anhthu1.core,
    InA3_Anhthu2.core,
    InA3_Anhthu3.core,
    InA3_Anhthu4.core,
    InA3_Anhthu5.core,

)

let DataTable = [
    InA3_Anhthu2.tool.m01
]

const Bai5
    = [
        {
            "nameoflession": "Anh thư",
            "srcYoutube": "",
            "storyBoicanh": "Nhà hàng",
            "story": "",
            "dataTool": DataTable,
            "hoctap": {
                "listenRead": [],
                "listenOnly": [],
                "writeOnly": []
            },
            "status": "",
        },
        {
            "coerdataoflession": shuffleArr(shuffleArr(coerdataoflession))
        }
    ]
export default Bai5



