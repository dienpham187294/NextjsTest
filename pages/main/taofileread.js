import { useState } from "react"

function Manager() {
    const [Name, SET_Name] = useState("")
    const [data, SET_data] = useState("")
    return (
        <div>
            <div>
                <input className="form-control" onChange={e => {
                    try {
                        let uploadedFile = e.currentTarget.files[0];

                        if (uploadedFile) {
                            SET_Name(uploadedFile.name);
                            let readFile = new FileReader();
                            readFile.onload = function (e) {
                                let contents = e.target.result;
                                let arrHold = contents.split("\n").join(" ").split("\r").join(" ").split('.”').join('”.').split("**")

                                let ArrRes = {
                                    "title": "",
                                    "data": []
                                };
                                arrHold.forEach((e, i) => {
                                    if (i === 0) {
                                        ArrRes.title = e
                                    } else {
                                        let numJpg;
                                        if (e.indexOf(".jpg") > -1) {
                                            numJpg = e.indexOf(".jpg") + 4;
                                        } else { numJpg = 0 }


                                        ArrRes.data.push({ "img": e.slice(0, numJpg), "text": e.slice(numJpg, e.length) })
                                    }
                                });
                                SET_data(ArrRes)
                            };
                            readFile.readAsText(uploadedFile);
                        } else {
                            console.log("Failed to load file");
                        }
                    } catch (error) {
                        console.log("Failed to load file");
                    }
                }} type="file" />
            </div>
            <button
                onClick={() => {
                    downClick(data, Name)
                }}

            >Down</button>
        </div>
    )
}

export default Manager



function download(file, text) {

    if (process.browser) {
        //creating an invisible element
        let element = document.createElement("a");

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
        let text = JSON.stringify(data);
        let filename = tenvanban + ".txt";

        download(filename, text);
    }
}
