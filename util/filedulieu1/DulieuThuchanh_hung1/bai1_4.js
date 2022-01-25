
import shuffleArr from "../dataHelperFunction/shuffleArr"

import A2_Togo from "./DulieuInside/A2_Togo"
import A2_EatHere from "./DulieuInside/A2_EatHere"
import A2_OrderAtTable from "./DulieuInside/A2_OrderAtTable"
import A2_Menu from "./DulieuInside/A2_Menu"
import A2_Tool from "./DulieuInside/A2_Tool"
import A2_BabyChair from "./DulieuInside/A2_BabyChair"
import A2_Toilet from "./DulieuInside/A2_Toilet"


let InA2_Togo = A2_Togo(10)
let InA2_EatHere = A2_EatHere(10)
let InA2_OrderAtTable = A2_OrderAtTable(10)
let InA2_Menu = A2_Menu(10)
let InA2_Tool = A2_Tool(10)
let InA2_BabyChair = A2_BabyChair(20)
let InA2_Toilet = A2_Toilet(20)



let coerdataoflession = [].concat(
    // InA2_Togo.core,
    // InA2_EatHere.core,
    // InA2_OrderAtTable.core,
    // InA2_Menu.core,
    // InA2_Tool.core,
    InA2_BabyChair.core,
    InA2_Toilet.core
)

let DataTable = [
    InA2_Togo.tool.m01.concat(
        InA2_EatHere.tool.m01,
        InA2_Togo.tool.m02,
        InA2_Togo.tool.m03,
        InA2_Menu.tool.m01,
        InA2_BabyChair.tool.m01,
        InA2_Toilet.tool.m01
    )
]


const Bai14
    = [
        {
            "nameoflession": "B.3.2_04",
            "srcYoutube": "https://www.youtube.com/embed/_UK4Cs7Oj14",
            "srcListenAndSplit": [
                "https://www.youtube.com/embed/8VJw3ExjoII",
                "https://www.youtube.com/embed/mOp9E0kNWgI"
            ],
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
export default Bai14



