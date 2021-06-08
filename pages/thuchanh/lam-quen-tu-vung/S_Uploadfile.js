

function UpLoadFile(props) {
    return (
        <div>
            <div>
                <input className="form-control" onChange={e => {
                    try {
                        var uploadedFile = e.currentTarget.files[0];

                        if (uploadedFile.name.indexOf(".ericpham") > -1) {
                            // console.log(uploadedFile.name)
                            var readFile = new FileReader();
                            readFile.onload = function (e) {
                                var contents = e.target.result;

                                var json = JSON.parse(contents);
                                let arrRead = []
                                json.Read.forEach(e => {
                                    arrRead.push({ "text": e, "status": false })
                                });
                                props.SET_LamQuenData({ "Read": arrRead, "Listen": json.Listen })
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




