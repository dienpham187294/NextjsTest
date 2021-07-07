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

                            readXlsxFile(uploadedFile, { sheet: "shop" }).then((data) => {
                                let arr = [];
                                try {
                                    data.forEach(e => {
                                        e.forEach(ee => {
                                            if (ee !== null) {
                                                arr.push(JSON.parse(ee))
                                            }
                                        })
                                    });
                                } catch (error) {
                                    console.log(error)
                                }

                                let Res = arr[0];

                                arr.forEach((e, i) => {
                                    if (i !== 0) {
                                        let str = ""
                                        e["location"].forEach((ee, ii) => {
                                            if (ii < e["location"].length - 2) {
                                                str += `[` + ee + `]["handling_next"]`
                                            }

                                        })
                                        let strRes = `Res["xuly"]["handling_next"]` + str;
                                        eval(strRes).push(e)
                                    }
                                })
                                console.log(Res)
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
        var filename = tenvanban + ".json";

        download(filename, text);
    }
}
