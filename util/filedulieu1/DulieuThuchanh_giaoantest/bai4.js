
import shuffleArr from "../dataHelperFunction/shuffleArr"
import A2_Thuytrang1 from "./DulieuInside/A2_Thuytrang1"
import A2_Thuytrang2 from "./DulieuInside/A2_Thuytrang2"
import A2_Thuytrang3 from "./DulieuInside/A2_Thuytrang3"
import A2_Thuytrang4 from "./DulieuInside/A2_Thuytrang4"
import A2_Thuytrang5 from "./DulieuInside/A2_Thuytrang5"
let InA2_Thuytrang5 = A2_Thuytrang5(10)
let InA2_Thuytrang4 = A2_Thuytrang4(10)
let InA2_Thuytrang3 = A2_Thuytrang3(10)
let InA2_Thuytrang2 = A2_Thuytrang2(10)
let InA2_Thuytrang1 = A2_Thuytrang1(10)
let coerdataoflession = [].concat(
    InA2_Thuytrang2.core,
    InA2_Thuytrang1.core,
    InA2_Thuytrang3.core,
    InA2_Thuytrang4.core,
    InA2_Thuytrang5.core
)

let DataTable = [
    InA2_Thuytrang2.tool.m01,
    InA2_Thuytrang2.tool.m02,
    InA2_Thuytrang2.tool.m03,
    InA2_Thuytrang2.tool.m04,
    InA2_Thuytrang4.tool.m01,
]

const Bai4
    = [
        {
            "nameoflession": "Thùy Trang",
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
export default Bai4



