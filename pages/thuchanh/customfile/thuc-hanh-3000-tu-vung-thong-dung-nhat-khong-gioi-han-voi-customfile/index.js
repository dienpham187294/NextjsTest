import { useState } from "react";
import Read from "../../../helpers/Read_ReactSpeech"
import Dictionary from "../../../helpers/Dictionary"
import ImageSearch from "../../../helpers/IMAGE/ImageSearch"
import Dictaphone from "../../../helpers/RegcognitionV1-0-1"
import GetLongest from "../../../../util/rarely_use/GetLongest"
import PracticeDiv from "./practice"


let ArrHold_WordDetail = [["hello", "null", "null", "null"]]

function Manager() {

    const [Data, SET_Data] = useState([])
    const [Detail, SET_Detail] = useState(false)
    const [Page_detail, SET_Page_detail] = useState(1)


    const [MessageToRead, SET_MessageToRead] = useState(["", 1])
    const [Word, SET_Word] = useState("");
    const [MessageListen, SET_MessageListen] = useState("")


    const [Practice, SET_Practice] = useState(false)
    const [Data_Commands, SET_Data_Commands] = useState([])
    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành từ vựng không giới hạn với Customfile
                        </i>
                    </b>
                </p>
            </div>
            <hr />
            {UpLoadFile()}
            <hr />
            <div>
                From:    <input type="number" defaultValue="1" id="begin" />
                To:    <input type="number" defaultValue="20" id="end" />
                <input
                    className="btn btn-outline-primary ml-1"
                    onClick={() => {
                        let beginNumber = document.getElementById("begin").value;
                        let endNumber = document.getElementById("end").value;
                        console.log(1, beginNumber > 0, endNumber - beginNumber > 0)
                        if (beginNumber > 0 && endNumber - beginNumber >= 0) {
                            let arr = Jsonfile.slice(beginNumber - 1, endNumber);
                            SET_Data(arr)
                        }
                    }}
                    type="button" defaultValue="Search"

                />

                <input
                    className="btn btn-outline-primary ml-1" type="button" defaultValue="Thực hành"
                    onClick={() => {
                        let arr = [];
                        let arrIn = [];
                        Data.forEach(e => {
                            arrIn.push(e[0])
                        });
                        arr.push(arrIn);
                        SET_Data_Commands(arr)
                        SET_Practice(true)
                    }}

                />
            </div>

            {Show_3000Words()}
            {Practice ?
                <PracticeDiv SET_Practice={SET_Practice} Data_Commands={Data_Commands} Data={Data} />
                : ""}

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
                            SET_Detail(false);
                            SET_MessageListen("");
                            SET_Word("")
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
                        : Page_detail === 2 ? <Dictionary Word={GetLongest(Word)} />
                            : Page_detail === 3 ? <ImageSearch Word={Word} />
                                : Page_detail === 4
                                    ?
                                    <div>
                                        {MessageListen.indexOf(Word) !== -1 ? <h1>Correct</h1> : ""}
                                        <Dictaphone
                                            Data={
                                                [
                                                    [ArrHold_WordDetail[ArrHold_WordDetail.length - 1][0], "how are you"]
                                                ]
                                            }
                                            SET_MessageListen={SET_MessageListen}
                                        />
                                    </div>
                                    : ""}

                    <Read MessageToRead={MessageToRead} />
                </div>
                : ""}
        </div>
    )



    function Show_3000Words() {
        return (
            <table className="table table-striped"><tbody>
                {
                    Data.map((e, i) =>
                        <tr key={i}>
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
                                        SET_Word(e[0])
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

function UpLoadFile() {
    return (
        <div>
            <div>
                <input className="form-control" onChange={e => {
                    try {
                        // var uploadedFile = e.currentTarget.files[0];

                        // if (uploadedFile.name.indexOf(".ericpham") > -1) {
                        //     // console.log(uploadedFile.name)
                        //     var readFile = new FileReader();
                        //     readFile.onload = function (e) {
                        //         var contents = e.target.result;

                        //         var json = JSON.parse(contents);
                        //         let arrRead = []
                        //         json.Read.forEach(e => {
                        //             arrRead.push({ "text": e, "status": false })
                        //         });
                        //         props.SET_LamQuenData({ "Read": arrRead, "Listen": json.Listen })
                        //     };
                        //     readFile.readAsText(uploadedFile);
                        // } else {
                        //     console.log("Failed to load file");
                        // }
                    } catch (error) {
                        console.log("Failed to load file");
                    }
                }} type="file" />
            </div>

        </div>
    )
}

