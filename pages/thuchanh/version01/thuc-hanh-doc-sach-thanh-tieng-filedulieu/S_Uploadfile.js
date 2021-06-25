import Filejson from "../../../../util/filedulieu/200baidoc"

function UpLoadFile(props) {

    function Fn_Pick(contents) {
        try {
            var json = contents;
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

        } catch (error) {
            console.log("Failed to load file");
        }
    }
    return (
        <div>
            {Show_Jsonfile(Fn_Pick)}
        </div>
    )
}
function Show_Jsonfile(Fn_Pick) {
    try {
        return (
            <div> <table className="table table-striped">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Type</td>
                        <td>Pick</td>
                    </tr>
                </thead>
                <tbody>

                    {Filejson.map((e, i) =>

                        <tr key={i}>
                            <td>{e.name}</td>
                            <td>{e.type}</td>
                            <td>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        Fn_Pick(e.data)
                                    }}
                                >
                                    Chọn
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody></table>
            </div>
        )
    } catch (error) {
        return "error"
    }
}
export default UpLoadFile

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


