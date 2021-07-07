

function UpLoadFile(props) {
    return (
        <div>
            <div>
                <input className="form-control" onChange={e => {
                    try {
                        var uploadedFile = e.currentTarget.files[0];

                        if (uploadedFile) {
                            var readFile = new FileReader();
                            readFile.onload = function (e) {
                                var contents = e.target.result;
                                var json = JSON.parse(contents);

                                // let arr = contents.split("\n")
                                let arrRes = []

                                json.forEach(e => {
                                    let arrTemp = (e).split(" ")
                                    let arrTempFinal = [];
                                    arrTemp.forEach(ee => {
                                        arrTempFinal.push({ "text": ee.split("\r").join(""), "status": false })
                                    })

                                    arrRes.push(arrTempFinal)
                                });
                                props.SET_Read_Data(arrRes)

                                let arrDataCommands = []
                                json.forEach(e => {
                                    let arrTemp = (e).split(". ")
                                    arrTemp.forEach(ee => {
                                        arrDataCommands.push(ee)
                                    })
                                });

                                props.SET_Data_Commands(arrDataCommands)
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
        </div>
    )
}

export default UpLoadFile

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


