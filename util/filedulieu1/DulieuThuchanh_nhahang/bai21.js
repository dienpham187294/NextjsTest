import ArrPeple from "../dataHelperFunction/ArrOfpeple"
import pickNRandomElementsOfArray from "../dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
import getRandomi from "../dataHelperFunction/getRandomi"
import Fnperson from "../dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../dataHelperFunction/FnToArrobj"
import DataTotal1 from "./DulieuInside/A1_total1"
import objEndSuccefull from "../dataHelperFunction/objEndSuccefull"

let DataTable = []
let coerdataoflession = []

DataTable.push(DataTotal1.awGreeting)
ArrPeple.forEach(e => {

    let objInputPart1 = {}
    objInputPart1.Submit = []
    objInputPart1.img = e[1]
    objInputPart1.gender = e[2]
    objInputPart1.viewPick = DataTotal1.viewPhoneCall()

    let SpeakFirst = []
    let ArrBegin = []
    ArrBegin.push(FnObjHanldingNext(DataTotal1.greeting, DataTotal1.awForNeed, {}, DataTotal1.showSignalFullyBooked))


    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext(DataTotal1.awFordecline(e[2]), DataTotal1.repondsTodecline, objEndSuccefull))

    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(objInputPart1, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, DataTotal1.imgIconCall(e[2])))
})

let hoctap = []
let listenOnly = []
let writeOnly = []
let storyBoicanh = `
Bối cảnh: Hãy tưởng tượng, bạn vừa được nhận vào làm nhân viên phục vụ của một nhà hàng.
Nhà hàng mỗi ngày đều có rất nhiều thực khách, hoàn toàn là người nói tiếng anh. 
Bạn chưa phục vụ nhà hàng bao giờ, bạn cũng không biết giao tiếp bằng tiếng anh. 
Bạn có cảm thấy lo lắng không biết bắt đầu từ đâu? 
Đừng lo, quản lí của nhà hàng Mr.K sẽ hướng dẫn cho bạn từng chút một, đảm bảo bạn sẽ thành thạo trong thời gian ngắn. 
Cùng bắt đầu vào ngày đầu tiên nhé.`
let story =
    `Ngày đầu tiên, Mr.K bảo bạn: Hãy đứng ở cửa và chào khách nhé.`
const Bai21

    = [
        {
            "nameoflession": "B.1.1",
            "storyBoicanh": storyBoicanh,
            "story": story,
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

export default Bai21


