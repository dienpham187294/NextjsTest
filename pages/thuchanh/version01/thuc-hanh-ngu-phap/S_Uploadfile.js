
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
                                props.SET_Data(json)
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


