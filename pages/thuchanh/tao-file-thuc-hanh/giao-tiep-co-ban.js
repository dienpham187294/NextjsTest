import { useState } from 'react';
import readXlsxFile from 'read-excel-file'

function Taofilethuchanh() {

    const [Data, SET_Data] = useState([])

    return (
        <div className="text-center">
            <div>
                <h1>Chọn file excel mẫu</h1>
                <input className="form-control" onChange={e => {
                    try {
                        var uploadedFile = e.currentTarget.files[0];

                        if (uploadedFile) {

                            readXlsxFile(uploadedFile, { sheet: "Begin" }).then((data) => {
                                console.log(JSON.parse(data[0][0]))
                                let arrHandling_next = []
                                let arrLocation = []
                                data.forEach((e) => {
                                    let arrTemp = []
                                    let arrTempLocation = []
                                    e.forEach((ee) => {
                                        if (ee !== null) {
                                            arrTemp.push(JSON.parse(ee).data)
                                            arrTempLocation.push(JSON.parse(ee).location)
                                        }
                                    })
                                    arrHandling_next.push(arrTemp)
                                    arrLocation.push(arrTempLocation)
                                });
                                let Handling_next = []
                                arrLocation.forEach((e, i) => {
                                    e.forEach((ee, ii) => {
                                        console.log(ee)
                                        if (ee.length === 1) {
                                            Handling_next.push(arrHandling_next[i][ii])
                                        } else {
                                            let evaltopush = ""
                                            for (let i = 0; i < ee.length - 1; i++) {
                                                evaltopush += `[` + ee[i] + `]['handling_next']`
                                            }
                                            eval("Handling_next" + evaltopush).push(arrHandling_next[i][ii])
                                        }
                                    })

                                })


                                SET_Data({ "handling_next": Handling_next })
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
            {JSON.stringify(Data)}
            {/*  <br />
            {JSON.stringify(Data_docvanban)}
            <br />
            {JSON.stringify(Data_langnghevalaplai)}
            <br />
            {JSON.stringify(Data_baitap)} */}
            {/* <hr />
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
            <h5>Lấy file đọc văn bản</h5>
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
            <a href="https://www.fshare.vn/file/HUJTAMZTUJVK" target="_blank">Link</a> */}


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
