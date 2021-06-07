
import readXlsxFile from 'read-excel-file'
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

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// function ConvertFileToObject(GameData) {
//     let Numberofelementwanttopick = 30;
//     let NumberofChance = GameData.length;
//     let Numberpickeachone = Math.floor(Numberofelementwanttopick / NumberofChance)
//     let ARRRES = []
//     GameData.forEach(e => {
//         let i = e.DataInput.length - Numberpickeachone - 1;
//         let begini = RandomInt(0, i);

//         const shuffled = e.DataInput.sort(() => 0.5 - Math.random());
//         // Get sub-array of first n elements after shuffled
//         let selected = shuffled.slice(begini, begini + Numberpickeachone);

//         selected.forEach(eeee => {
//             let TextTemp = JSON.stringify(e.template);
//             let arrTextTemp = [TextTemp]
//             eeee.forEach((ee, index) => {
//                 arrTextTemp[index + 1] = arrTextTemp[index].split(e.ArrToReplace[index]).join(ee)
//             })

//             ARRRES.push(JSON.parse(arrTextTemp[arrTextTemp.length - 1]))
//         });

//     })

//     return ARRRES.sort(() => 0.5 - Math.random());
// }