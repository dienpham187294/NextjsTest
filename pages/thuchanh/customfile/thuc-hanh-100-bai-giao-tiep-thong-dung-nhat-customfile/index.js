import { useState } from "react";
import Read from "../../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../../util/Read/ReadMessage";
import PracticeDiv from "./practice"


function Manager() {
    const [Data, SET_Data] = useState([])
    const [Practice, SET_Practice] = useState(false)
    const [Data_Commands, SET_Data_Commands] = useState([])



    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành các đoạn giao tiếp thông dụng với CustomFile
                        </i>
                    </b>
                </p>
            </div>
            <hr />
            {UpLoadFile()}
            <hr />
            <div>
                Chọn chủ đề:    <input id="chonchude" type="number" defaultValue="1" />
                <input
                    className="btn btn-outline-primary ml-1"
                    onClick={() => {
                        let e = document.getElementById("chonchude").value;
                        if (e - 1 < baigiaotiep.length) {
                            SET_Data(baigiaotiep[e - 1])
                        }
                    }}
                    type="button" defaultValue="Chọn"

                />

                <input
                    onClick={() => {
                        SET_Practice(true)
                    }}
                    className="btn btn-outline-primary ml-1" type="button" defaultValue="Thực hành đọc sau"
                />
            </div>

            {Show_chude()}

            {Practice ?
                <PracticeDiv Data={Data} Data_Commands={Data_Commands} SET_Data_Commands={SET_Data_Commands} SET_Practice={SET_Practice} />
                : ""}

            <Read />


        </div>
    )



    function Show_chude() {

        try {
            return (
                <div>
                    <hr />
                    <h5>{Data.tille}</h5>
                    <hr />
                    <div>
                        {Data.lession.map((e, i) =>
                            <div key={i}>
                                <p
                                    onClick={() => {
                                        ReadMessage(e, 2)
                                    }}
                                    style={{ cursor: "pointer" }}
                                >{i % 2 !== 1 ? <b>{e}</b> : e}</p>
                            </div>
                        )}
                    </div>
                    <hr />
                </div>
            )
        } catch (error) {
            return ""
        }

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

