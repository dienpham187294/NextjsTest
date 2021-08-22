import Linkapi from "../api/Linkapi"
import DL from "../filedulieu/Dulieu_tieng_anh_lop_6_tap_2"
import PracticeDiv from "./md_image/img_game1"
import PracticeDiv_G2 from "./md_image/img_game2"
export default function MD_Image() {

}





MD_Image.prototype.Show_img = function (arr) {
    try {


        return (
            <div>
                {arr.slice(0, 2).map((e, i) =>
                    <img style={{ marginLeft: "5px" }} src={e} alt={e} key={i} width="60px" onError={(e) => console.log(e.currentTarget.style.display = "none")} />
                )}
            </div>
        )

    } catch (error) {
        return null
    }
}

MD_Image.prototype.Show_img_larger = function (arr) {
    try {


        return (
            <div>
                {arr.map((e, i) =>
                    <img style={{ marginLeft: "5px" }} src={e} alt={e} key={i} width="120px" onError={(e) => console.log(e.currentTarget.style.display = "none")} />
                )}
            </div>
        )

    } catch (error) {
        return null
    }
}

MD_Image.prototype.game_withImg = function (arr, SET_Game_Nhinhinhdoanchu) {

    try {
        let arrres = []

        arr.slice(-3).forEach(e => {
            arrres.push(e.data)
        });





        return <PracticeDiv Data={arr} SET_Game_Nhinhinhdoanchu={SET_Game_Nhinhinhdoanchu} />
    } catch (error) {
        return null
    }

}



MD_Image.prototype.game_withlisten = function (arr, SET_Game_Nghevachoncau) {
    return <PracticeDiv_G2 Data={arr} SET_Game_Nghevachoncau={SET_Game_Nghevachoncau} />
}
