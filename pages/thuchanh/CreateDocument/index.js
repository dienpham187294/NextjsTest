
import { useEffect, useState } from "react"


let objId = {
    "name": "Eric",
    "gender": "male",
    "age": "28"
}



function Index() {
    const [sideLeftData, setSideLeftData] = useState([])
    const [objMain, setobjMain] = useState(objMainR)
    const [part, setpart] = useState("begin")
    useEffect(() => {
        viewIndex(objMain, setDataSideLeft, "mainViewBegin", "begin", setpart)
        viewIndex(objMain, setDataSideLeft, "mainViewMid", "mid", setpart)
        viewIndex(objMain, setDataSideLeft, "mainViewEnd", "end", setpart)
    }, [objMain])


    useEffect(() => {
        console.log(part)
    }, [part])

    function setDataSideLeft(i, objMain) {
        objMain.forEach((e) => {
            if (e.m00 === i) {
                setSideLeftData(e)
            }
        })


    }

    return (
        <>
            <div className="row">
                <div className="col-7" >
                    <div id="mainViewBegin"></div>
                    <hr />
                    <div id="mainViewMid"></div>
                    <hr />
                    <div id="mainViewEnd"></div>
                    <hr />
                </div>
                <div className="col-5" >
                    <select defaultValue={part} onChange={(e) => {
                        setpart(e.currentTarget.value)
                    }}>
                        <option value={"begin"}>
                            Begin
                        </option>
                        <option value={"mid"}>
                            Mid
                        </option>
                        <option value={"end"}>
                            End
                        </option>
                    </select>
                    <textarea id="textInsert">

                    </textarea>
                    <br />
                    <button
                        onClick={() => {
                            console.log(
                                $("#textInsert").val()
                            )
                            if (checkObjInsert($("#textInsert").val(), objMain, part)) {
                                handleObj($("#textInsert").val(), objMain, setobjMain, part)
                            }

                        }}
                        className="btn btn-outline-primary">Insert</button>
                    <hr />
                    <div id="sideView">
                        {showSideLeft(sideLeftData)}
                        {sideLeftData.length !== 0
                            ? <button
                                onClick={() => {
                                    delObj(sideLeftData.m00, objMain, setobjMain, setSideLeftData, part)
                                }}
                                className="btn btn-outline-danger">
                                Delete
                            </button> : null}

                        <hr />
                        {JSON.stringify(sideLeftData)}
                    </div>
                </div>
            </div>
        </>
    )

}
export default Index

let objMainR = {
    "begin": [
        {
            "m00": "0",
            "m01": ["hi", "hello", "how are you"],
            "m02": ["hi begin", "hi how are you"]
        },
    ],
    "mid": [
        {
            "m00": "0",
            "m01": ["hi", "hello", "how are you"],
            "m02": ["hi mid", "hi how are you"]
        },
    ],
    "end": [
        {
            "m00": "0",
            "m01": ["hi", "hello", "how are you"],
            "m02": ["hi end", "hi how are you"]
        },
    ]
}
function viewIndex(objMain, showLeftSide, id, part, setpart) {
    $("#" + id).html("")
    let i = 1
    let arr10 = []
    let arr11 = []
    while (countIndex(i, objMain[part])) {
        arr10.push(i)
        i++
    }
    arr10.forEach((e, i) => {
        let arrt = []
        objMain[part].forEach(ee => {
            if (ee.m00.split("-").length === e) {
                arrt.push(ee)
            }
        });
        arr11[i] = arrt
    })

    arr11.forEach((e, i) => {
        if (i === 0) {
            e.forEach(ee => {
                let divT =
                    `<div id="` + id + ee.m00 + `" class="divT">
                    <i id="a`+ id + ee.m00 + `" class="span0"> ` + ee.m00[0] + `</i><br/>
                    <span class="span1"> `+ ee.m01[0] + `</span><br/><span  class="span2">` + ee.m02[0] + `</span>
                <div>`
                $("#" + id).append(divT)
                document.getElementById("a" + id + ee.m00).addEventListener("click", function () {
                    showLeftSide(ee.m00, objMain[part])
                    setpart(part)
                });
            })
        } else {
            e.forEach(ee => {
                let divT =
                    `<div id="` + id + ee.m00 + `" class="divT">
                        <i id="a`+ id + ee.m00 + `" class="span0"> ` + ee.m00 + `</i><br/>
                     <span class="span1"> `+ ee.m01[0] + `</span><br/><span  class="span2">` + ee.m02[0] + `</span>
                <div>`
                $("#" + id + ee.m00.slice(0, ee.m00.length - 2)).append(divT);
                document.getElementById("a" + id + ee.m00).addEventListener("click", function () {
                    showLeftSide(ee.m00, objMain[part])
                    setpart(part)
                });
            })
        }

    })




}

function countIndex(n, arr) {
    let stt = false
    arr.forEach(e => {
        if (e.m00.split("-").length === n) {
            stt = true
        }
    })
    return stt
}

function showSideLeft(sideLeftData) {

    try {
        return (

            <table className="table">
                <tbody>
                    <tr>
                        <td>{sideLeftData.m00}</td>
                    </tr>
                    <tr className="span1">
                        <td>{sideLeftData.m01[0]}</td>
                        <td>{showListAw(sideLeftData.m01.slice(1, sideLeftData.m01.length))}</td>
                    </tr>
                    <tr className="span2">
                        <td>{sideLeftData.m02[0]}</td>
                        <td>{showListAw(sideLeftData.m02.slice(1, sideLeftData.m02.length))}</td>
                    </tr>
                </tbody>
            </table>

        )
    } catch (error) {
        return null
    }

}


function showListAw(Arr) {
    try {
        return (
            <>
                {Arr.map((e, i) =>
                    <p key={i}>{e}</p>
                )}
            </>
        )
    } catch (error) {
        return null
    }
}

function checkObjInsert(input, objMain, part) {
    try {
        let arrIndex = []
        let objInput = JSON.parse(input)

        if (
            !(typeof (objInput.m00) === "string" && typeof (objInput.m01) === "object" && typeof (objInput.m02) === "object")
        ) { return false }

        objMain[part].forEach(e => {
            arrIndex.push(e.m00)
        })

        if (objInput.m00.length === 1 || arrIndex.includes(objInput.m00.slice(0, objInput.m00.length - 2))) {
            return true
        } else {
            return false
        }

    } catch (error) {
        return false
    }
}
function handleObj(input, objMain, setobjMain, part) {
    let newObjMain = JSON.parse(JSON.stringify(objMain))
    let inputObj = JSON.parse(input)


    let stt = false

    newObjMain[part].forEach(e => {
        if (e.m00 === inputObj.m00) {
            e.m01 = inputObj.m01;
            e.m02 = inputObj.m02;
            stt = true
        }
    })
    if (!stt) {
        newObjMain[part].push(inputObj)
    }
    setobjMain(newObjMain)
}

function delObj(input, objMain, setobjMain, setSideLeftData, part) {
    let newObjMain = JSON.parse(JSON.stringify(objMain))
    let output = []
    newObjMain[part].forEach(e => {
        if (e.m00 !== input) {
            output.push(e)
        }
    })
    newObjMain[part] = output
    setobjMain(newObjMain)
    setSideLeftData([])
}