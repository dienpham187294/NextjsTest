import jsonData from "../../../util/filedulieu/Dulieu_tho"
import Dulieu_tienganh from "../../../util/filedulieu/Dulieu_tieng_anh_lop_6_tap_2"




export default async (req, res) => {// const { db } = await connectToDatabase();// TextToIPA.loadDict(); // blocking load
    try {

        let ArrResIpa = []
        let i = 0
        ArrResIpa[0] = []
        jsonData.forEach((e) => {
            if (e.EN === "===") {
                i++;
                ArrResIpa[i] = [];
            } else {
                ArrResIpa[i].push(e);
            }
        })
        ArrResIpa.forEach((e, i) => {
            Dulieu_tienganh[i + 6].data = e
        })

        res.status(200).json({
            success: true,
            // notipa: ArrResIpa,
            data: Dulieu_tienganh
        })



    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}
