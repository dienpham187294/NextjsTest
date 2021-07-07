import { useState } from 'react';
import readXlsxFile from 'read-excel-file'

function Taofilethuchanh() {

    const [Data_lamquen, SET_Data_lamquen] = useState([])
    const [Data_docvanban, SET_Data_docvanban] = useState([])
    const [Data_langnghevalaplai, SET_Data_langnghevalaplai] = useState([])
    const [Data_baitap, SET_Data_baitap] = useState([])
    return (
        <div className="text-center">
            <div>
                <h1>Chọn file excel mẫu</h1>
                <input className="form-control" onChange={e => {
                    try {
                        var uploadedFile = e.currentTarget.files[0];

                        if (uploadedFile) {

                            readXlsxFile(uploadedFile, { sheet: "Lam-quen" }).then((data) => {
                                let arrTapdoc = []
                                data[0].forEach((e, index) => {
                                    if (index !== 0 && e !== null) {
                                        arrTapdoc.push(e)
                                    }
                                });

                                let arrTapnghe = []
                                data[1].forEach((e, index) => {
                                    if (index !== 0 && e !== null) {
                                        arrTapnghe.push(e)
                                    }
                                });

                                SET_Data_lamquen({ "Read": arrTapdoc, "Listen": arrTapnghe })

                            })


                            readXlsxFile(uploadedFile, { sheet: "doc-van-ban" }).then((data) => {
                                let arrTapdoc = []
                                data[0].forEach((e, index) => {
                                    if (index !== 0 && e !== null) {
                                        arrTapdoc.push(e)
                                    }
                                });
                                SET_Data_docvanban(arrTapdoc)
                            })



                            readXlsxFile(uploadedFile, { sheet: "nghe-va-lap-lai" }).then((data) => {
                                let arrTapdoc = []
                                data[0].forEach((e, index) => {
                                    if (index !== 0 && e !== null) {
                                        arrTapdoc.push(e)
                                    }
                                });
                                SET_Data_langnghevalaplai(arrTapdoc)
                            })

                            readXlsxFile(uploadedFile, { sheet: "bai-tap" }).then((data) => {
                                console.log(data)
                                let arrTapdoc = []
                                //  { "question": "A", "anwers":  ["A","I am good", "I am not good","I am so good"],"anwerright": "A"}
                                data.forEach((e, index) => {
                                    if (index !== 0) {
                                        let arrRandom = [1, 2, 3, 4].sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random())

                                        let obj = {
                                            "question": e[0],
                                            "anwers":
                                                [
                                                    e[arrRandom[0]], e[arrRandom[1]], e[arrRandom[2]], e[arrRandom[3]]
                                                ],
                                            "anwerright": e[1]
                                        }
                                        arrTapdoc.push(obj)
                                    }
                                });
                                SET_Data_baitap(arrTapdoc)
                            })


                            readFile.readAsText(uploadedFile);
                        } else {
                            console.log("Failed to load file");
                        }
                    } catch (error) {
                        console.log("Failed to load file");
                    }
                }} type="file" />
            </div>
            {/* {JSON.stringify(Data_lamquen)}
            <br />
            {JSON.stringify(Data_docvanban)}
            <br />
            {JSON.stringify(Data_langnghevalaplai)}
            <br />
            {JSON.stringify(Data_baitap)} */}
            <hr />
            <h5>Lấy file làm quen từ vựng</h5>
            <button className="btn btn-outline-primary"
                onClick={() => {
                    downClick(Data_lamquen, "lamquen")
                }} id="btn">Download</button>
            <hr />
            <h5>Lấy file đọc văn bản</h5>
            <button className="btn btn-outline-primary"
                onClick={() => {
                    downClick(Data_docvanban, "docvanband")
                }} id="btn">Download</button>
            <hr />
            <h5>Lấy file nghe và lặp lại</h5>
            <button className="btn btn-outline-primary"
                onClick={() => {
                    downClick(Data_langnghevalaplai, "langnghevalaplai")
                }} id="btn">Download</button>
            <hr />
            <h5>Lấy file bài tập</h5>
            <button className="btn btn-outline-primary"
                onClick={() => {
                    downClick(Data_baitap, "bai-tap")
                }} id="btn">Download</button>
            <hr />
            <h5>Link download file mẫu</h5>
            <a href="https://www.fshare.vn/file/HUJTAMZTUJVK" target="_blank">Link</a>


        </div>
    )
}

export default Taofilethuchanh


function download(file, text) {

    if (process.browser) {
        //creating an invisible element
        var element = document.createElement("a");

        element.setAttribute(
            "href",
            "data:text/plain;charset=utf-8, " + encodeURIComponent(text)
        );
        element.setAttribute("download", file);

        // Above code is equivalent to
        // <a href="path of file" download="file name">

        document.body.appendChild(element);

        //onClick property
        element.click();

        document.body.removeChild(element);
    }
}

// // Start file download.

function downClick(data, tenvanban) {
    if (process.browser) {
        // Generate download of hello.txt
        // file with some content
        var text = JSON.stringify(data);
        var filename = tenvanban + ".ericpham";

        download(filename, text);
    }
}
