

function UpLoadFile(props) {
    return (
        <div>
            <div>
                <input className="form-control" onChange={e => {
                    try {
                        var uploadedFile = e.currentTarget.files[0];

                        if (uploadedFile) {
                            // console.log(uploadedFile.name)
                            var readFile = new FileReader();
                            readFile.onload = function (e) {
                                var contents = e.target.result;
                                var json = JSON.parse(contents);
                                let Arr_read = []
                                let Arr_listen = []
                                json.forEach(e => {
                                    Arr_read.push({ "text": e[0], "ipa": e[1], "img": e[2], "status": false })
                                    Arr_listen.push(e[0])
                                });
                                props.SET_LamQuenData({ "Read": Arr_read, "Listen": Arr_listen })
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
            <hr />
            <i>File mẫu</i>
            <br />
            <img width="50%" src="https://i.postimg.cc/HknGFdg3/Lam-quen-tu-vung-v1-0-2.png" alt="https://i.postimg.cc/HknGFdg3/Lam-quen-tu-vung-v1-0-2.png" />
        </div>
    )
}

export default UpLoadFile




