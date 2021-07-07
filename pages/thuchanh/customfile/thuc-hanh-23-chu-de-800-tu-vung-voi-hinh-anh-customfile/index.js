import { useState } from "react";
import Read from "../../../helpers/Read_ReactSpeech"
import ReadMessage from "../../../../util/Read/ReadMessage";
import PracticeDiv from "./practice"


function Manager() {
    const [Data, SET_Data] = useState([])
    const [MessageToRead, SET_MessageToRead] = useState(["", 1])
    const [Practice, SET_Practice] = useState(false)
    const [Data_Commands, SET_Data_Commands] = useState([])



    return (

        <div className="container">
            <div className="text-justify p-3">
                <p>
                    <b>
                        <i>
                            Thực hành các chủ đề từ vựng kèm hình ảnh sinh động với CustomFile
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
                        if (e < tuvunghinhanh.length) {
                            SET_Data(tuvunghinhanh[e])
                        }
                    }}
                    type="button" defaultValue="Chọn"

                />

                <input
                    onClick={() => {
                        let arrTemp = [];
                        Data.forEach(e => {
                            arrTemp.push(e.name)
                        })
                        SET_Data_Commands(arrTemp)
                        SET_Practice(true)
                    }}
                    className="btn btn-outline-primary ml-1" type="button" defaultValue="Thực hành"
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
        return (
            <div>
                {Data.map((ee, indexee) =>
                    <div
                        onClick={() => {
                            ReadMessage(ee.name, 2)
                        }}
                        style={{
                            display: "inline-block",
                            width: "fit-content",
                            margin: "2%",
                            border: "1px solid green",
                            borderRadius: "10px",
                            padding: "10px",
                            cursor: "pointer"
                        }}
                        key={indexee + "1"}>
                        <img alt={ee.name} src={ee.image} width="100px" />
                        <br />
                        {ee.name}
                    </div>
                )}
            </div>
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

