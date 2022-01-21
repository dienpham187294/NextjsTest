
import shuffleArr from "../dataHelperFunction/shuffleArr"

// import A2_Togo from "./DulieuInside/A2_Togo"
// import A2_EatHere from "./DulieuInside/A2_EatHere"
// import A2_OrderAtTable from "./DulieuInside/A2_OrderAtTable"
// import A2_Menu from "./DulieuInside/A2_Menu"
// import A2_Tool from "./DulieuInside/A2_Tool"
// import A2_BabyChair from "./DulieuInside/A2_BabyChair"
// import A2_Toilet from "./DulieuInside/A2_Toilet"
// import A3_Recommends from "./DulieuInside/A3_Recommends"
// import A3_Recommends1 from "./DulieuInside/A3_Recommends1"
// import A3_RecommendsAndQs from "./DulieuInside/A3_RecommendsAndQs"
// import A3_RecommendsAndQs1 from "./DulieuInside/A3_RecommendsAndQs1"
// import A3_Recommends1AndOrderDrinks from "./DulieuInside/A3_Recommends1AndOrderDrinks"
// import A4_PickOrder_01 from "./DulieuInside/A4_PickOrder_01"
// import A4_PickOrder_02 from "./DulieuInside/A4_PickOrder_02"
// import A4_PickOrder_03 from "./DulieuInside/A4_PickOrder_03"
// import A4_PickOrder_04 from "./DulieuInside/A4_PickOrder_04"
import A5_TakeingReservation_01 from "./DulieuInside/A5_TakeingReservation_01"
import A5_TakeingReservation_02 from "./DulieuInside/A5_TakeingReservation_02"
import A5_TakeingReservation_03 from "./DulieuInside/A5_TakeingReservation_03"
import A5_TakeingReservation_04 from "./DulieuInside/A5_TakeingReservation_04"
import A5_TakeingReservation_05 from "./DulieuInside/A5_TakeingReservation_05"
// let InA2_Togo = A2_Togo(5)
// let InA2_EatHere = A2_EatHere(5)
// // let InA2_OrderAtTable = A2_OrderAtTable(5)
// let InA2_Menu = A2_Menu(5)
// // let InA2_Tool = A2_Tool(5)
// let InA2_BabyChair = A2_BabyChair(5)
// let InA2_Toilet = A2_Toilet(5)
// let InA3_Recommends = A3_Recommends(10)
// let InA3_Recommends1 = A3_Recommends1(10)
// let InA3_RecommendsAndQs = A3_RecommendsAndQs(10)
// let InA3_RecommendsAndQs1 = A3_RecommendsAndQs1(10)
//  let InA3_Recommends1AndOrderDrinks = A3_Recommends1AndOrderDrinks(10)
// let InA4_PickOrder_01 = A4_PickOrder_01(30)
// let InA4_PickOrder_02 = A4_PickOrder_02(30)
// let InA4_PickOrder_03 = A4_PickOrder_03(30)
// let InA4_PickOrder_04 = A4_PickOrder_04(30)

let InA5_TakeingReservation_01 = A5_TakeingReservation_01(30)
let InA5_TakeingReservation_02 = A5_TakeingReservation_02(30)
let InA5_TakeingReservation_03 = A5_TakeingReservation_03(30)
let InA5_TakeingReservation_04 = A5_TakeingReservation_04(30)
let InA5_TakeingReservation_05 = A5_TakeingReservation_05(30)
let coerdataoflession = [].concat(
    // InA3_Recommends.core,
    // InA3_Recommends1.core,
    // InA3_RecommendsAndQs.core,
    // InA3_RecommendsAndQs1.core,
    // InA3_Recommends1AndOrderDrinks.core, InA2_Togo.core,
    // InA2_EatHere.core,
    // InA2_OrderAtTable.core,
    // InA2_Menu.core,
    // InA2_Tool.core,
    // InA2_BabyChair.core,
    // InA2_Toilet.core,
    // InA4_PickOrder_01.core,
    // InA4_PickOrder_02.core,
    // InA4_PickOrder_03.core,
    // InA4_PickOrder_04.core,
    // InA5_TakeingReservation_01.core,
    InA5_TakeingReservation_02.core,
    // InA5_TakeingReservation_03.core,
    // InA5_TakeingReservation_04.core,
    // InA5_TakeingReservation_05.core
)

let DataTable = [
    // InA2_Togo.tool.m01.concat(InA2_EatHere.tool.m01),
    // InA2_Togo.tool.m02.concat(InA2_Togo.tool.m03),
    // InA2_Menu.tool.m01,
    // InA2_BabyChair.tool.m01.concat(InA2_Toilet.tool.m01),
    // InA4_PickOrder_01.tool.m00,
    InA5_TakeingReservation_01.tool.m00
]

const Bai52
    = [
        {
            "nameoflession": "Bài 5_02",
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
export default Bai52



