
import { useState } from "react";

// import UpLoadFile from "./S_Uploadfile"

// import GamePlay from "./S_GamePlay"
import Read from "../../helpers/Read_ReactSpeech"
import Dictionary from "../../helpers/Dictionary"
import ImageSearch from "../../helpers/ImageSearch"
import Jsonfile from "../../../util/Testfuntion"
import GetLongest from "../../../util/GetLongest"
let ArrHold_WordDetail = [["hello", "null", "null", "null"]]
function Manager() {

    const [Data, SET_Data] = useState(Jsonfile)
    const [Detail, SET_Detail] = useState(false)
    const [Page_detail, SET_Page_detail] = useState(1)


    const [MessageToRead, SET_MessageToRead] = useState(["", 1])
    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành 3000+ từ vựng thông dụng nhất
                        </i>
                    </b>
                </p>
            </div>
            {Show_3000Words()}
            {Detail
                ? <div
                    style={{
                        position: "fixed",
                        top: "3%",
                        bottom: "3%",
                        left: "3%",
                        right: "3%",
                        border: "1px solid black",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        overflow: "auto"
                    }}
                >
                    <div style={{
                        width: "100%",
                        textAlign: "center",
                        padding: "10px"
                    }}>
                        <button
                            onClick={() => {
                                SET_Page_detail(1)
                            }}
                            className="btn btn-sm btn-outline-primary">Anh việt</button>
                        <button
                            onClick={() => {
                                SET_Page_detail(2)
                            }}
                            className="btn btn-sm btn-outline-primary">Anh - Anh</button>
                        <button
                            onClick={() => {
                                SET_Page_detail(3)
                            }}
                            className="btn btn-sm btn-outline-primary">Hình ảnh</button>
                        <button
                            onClick={() => {
                                SET_Page_detail(4)
                            }}
                            className="btn btn-sm btn-outline-primary">Tập phát âm</button>
                        <button
                            onClick={() => {
                                SET_MessageToRead([ArrHold_WordDetail[ArrHold_WordDetail.length - 1][0], 1]);
                                setTimeout(() => {
                                    SET_MessageToRead(["", 1]);
                                }, 100)
                            }}

                            className="btn btn-sm btn-outline-info">Nghe giọng nữ</button>
                        <button
                            onClick={() => {
                                SET_MessageToRead([ArrHold_WordDetail[ArrHold_WordDetail.length - 1][0], 2]);
                                setTimeout(() => {
                                    SET_MessageToRead(["", 1]);
                                }, 100)
                            }}

                            className="btn btn-sm btn-outline-info">Nghe giọng nam</button>
                        <button onClick={() => {
                            SET_Detail(false)
                        }} className="btn btn-sm btn-outline-danger">Cancel</button>
                    </div>
                    {Page_detail === 1 ?
                        <div className="text-center">
                            <h1>{ArrHold_WordDetail[ArrHold_WordDetail.length - 1][0]}</h1>
                            <p>
                                {ArrHold_WordDetail[ArrHold_WordDetail.length - 1][1]}
                            </p>
                            <p>
                                {ArrHold_WordDetail[ArrHold_WordDetail.length - 1][2]}
                            </p> <p>
                                {ArrHold_WordDetail[ArrHold_WordDetail.length - 1][3]}
                            </p>

                        </div>
                        : Page_detail === 2 ? <Dictionary Word={GetLongest(ArrHold_WordDetail[ArrHold_WordDetail.length - 1][0])} />
                            : Page_detail === 3 ? <ImageSearch Word={(ArrHold_WordDetail[ArrHold_WordDetail.length - 1][0])} />
                                : Page_detail === 4 ? "Tập phát âm"
                                    : ""}

                    <Read MessageToRead={MessageToRead} />
                </div>
                : ""}
        </div>
    )



    function Show_3000Words() {
        return (
            <table className="table"><tbody>
                {
                    Jsonfile.map((e, i) =>
                        <tr key={i}>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            {/* {
                                e.map((ee, ii) =>
                                    <td key={ii} >{ee}</td>
                                )

                            } */}
                            <td>
                                {e[0]}
                            </td>
                            <td>
                                {e[3]}
                            </td>
                            <td>
                                <input
                                    onClick={() => {
                                        ArrHold_WordDetail.push(e);
                                        SET_Detail(true);
                                    }}
                                    className="form-control" type="button" value="Detail" />
                            </td>

                        </tr>
                    )
                }
            </tbody></table >
        )
    }
}


export default Manager

