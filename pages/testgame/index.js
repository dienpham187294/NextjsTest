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

                            readXlsxFile(uploadedFile, { sheet: "final" }).then((data) => {
                                console.log(JSON.stringify(data))
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
            {/* {Show_map()} */}

        </div>
    )


    function Show_map() {
        try {
            return (
                <table>
                    <tbody>
                        {Data.map((e, i) =>
                            <tr key={i}>
                                {e.map((ee, ii) =>
                                    <td key={ii}>{ee === null
                                        ?
                                        <div className="mapdiv">
                                            null
                                        </div>
                                        :
                                        <div className="mapdiv">
                                            {ee.name}
                                        </div>}
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            )

        } catch (error) {
            return "Đợi dữ liệu"
        }
    }
}

export default Taofilethuchanh