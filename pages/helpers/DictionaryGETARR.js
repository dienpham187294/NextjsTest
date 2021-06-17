import { useEffect, useState } from 'react';
import Jsonfile from "../../util/Testfuntion"
import Filedeffinition from "../../util/definition"
import GetLongest from "../../util/GetLongest"
import GetInfo from "../../util/GetImage"
import { async } from 'regenerator-runtime';
let flag = true;
let arrHoldeImage = []
function Dictionary() {
    const [DefineWord, SET_DefineWord] = useState("")
    const [DataImage, SET_DataImage] = useState([])
    const Owlbot = require('owlbot-js');
    const client = Owlbot("ec7bc79a68147ad64fb199f357d001f5428e7ddd");
    let file_use = Jsonfile.slice(0, 20)
    useEffect(() => {
        console.log(DataImage)
    }, [DataImage])
    return (
        <div>
            <table className="table"><tbody>
                {file_use.map((e, i) =>
                    <tr key={i}>
                        <td>{e[0]}</td>
                        <td>
                            <button onClick={() => {
                                GetInfo(SET_DataImage, e[0])
                            }}>Image</button>
                        </td>
                        <td>GetDefinition</td>
                    </tr>
                )}
            </tbody></table>

        </div>
    )
    async function GetDefinition(client, arrRess, arr, i, trying) {
        setTimeout(() => {
            let arrTemp = arrRess;
            let word = GetLongest(arr[i][0])

            client.define(word).then(function (result) {
                arrTemp.push(result);
                i += 1;
                if (i === arr.length) {
                    console.log(JSON.stringify(arrTemp))
                } else {
                    GetDefinition(client, arrTemp, arr, i, 0)
                }
            }).catch(function (error) {
                if (trying === 0) {
                    GetDefinition(client, arrTemp, arr, i, 1)
                } else {
                    arrTemp.push(null);
                    GetDefinition(client, arrTemp, arr, i + 1, 1)
                }
            })

        }, 2000)
    }
}

export default Dictionary

