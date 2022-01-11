
import { useEffect, useState } from "react"
import objMainR from "../../../util/CreateNewDocument/objMainR"
import objTable from "../../../util/CreateNewDocument/objTable"
import viewIndex from "../../../util/CreateNewDocument/viewIndex"
import showSideLeft from "../../../util/CreateNewDocument/showSideLeft"
import checkObjInsert from "../../../util/CreateNewDocument/checkObjInsert"
import checkObjTableInsert from "../../../util/CreateNewDocument/checkObjTableInsert"
import handleObjTable from "../../../util/CreateNewDocument/handleObjTable"
import delObj from "../../../util/CreateNewDocument/delObj"
import showTotal from "../../../util/CreateNewDocument/showTotal"
import showHintAlot from "../../../util/CreateNewDocument/showHintAlot"
import showTable from "../../../util/CreateNewDocument/showTable"
import showAllListOfTable from "../../../util/CreateNewDocument/showAllListOfTable"
import delObjView from "../../../util/CreateNewDocument/delObjView"
import handleObj from "../../../util/CreateNewDocument/handleObj"
import showTableDetail from "../../../util/CreateNewDocument/showTableDetail"


import pickNRandomElementsOfArray from "../../../util/filedulieu1/dataHelperFunction/pickNRandomElementsOfArray"
import getElementsToDataTable from "../../../util/filedulieu1/dataHelperFunction/getElementsToDataTable"
import Fnperson from "../../../util/filedulieu1/dataHelperFunction/Fnperson"
import FnObjHanldingNext from "../../../util/filedulieu1/dataHelperFunction/FnObjHanldingNext"
import FnToArrobj from "../../../util/filedulieu1/dataHelperFunction/FnToArrobj"
import convertArrToObjSource from "../../../util/filedulieu1/dataHelperFunction/convertArrToObjSource"
import objEndSuccefull from "../../../util/filedulieu1/dataHelperFunction/objEndSuccefull"
import turnArrToArrofArr from "../../../util/CreateNewDocument/turnArrToArrofArr"
import ArrPeple from "../../../util/filedulieu1/dataHelperFunction/ArrOfpeple"



function Index() {
    const [sideLeftData, setSideLeftData] = useState([])
    const [objMain, setobjMain] = useState(objMainR)
    const [part, setpart] = useState("begin")
    const [Template, setTemplate] = useState("")
    const [TableViewBeforeInsert, setTableViewBeforeInsert] = useState([])
    const [showObjTable, setshowObjTable] = useState([])



    useEffect(() => {
        viewIndex(objMain, setDataSideLeft, "mainViewBegin", "begin", setpart)
        viewIndex(objMain, setDataSideLeft, "mainViewMid", "mid", setpart)
        viewIndex(objMain, setDataSideLeft, "mainViewEnd", "end", setpart)
    }, [objMain])


    useEffect(() => {
        $("#selectPartID").val(part)
    }, [part])

    useEffect(() => {
        if (localStorage.getItem("objMainR") !== null) {
            setobjMain(JSON.parse(localStorage.getItem("objMainR")))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("objMainR", JSON.stringify(objMain))
    }, [objMain])
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
                <div className="col-5" >
                    <div className="row">
                        <div className="col-6">
                            {showTotal(objMain.total)}
                        </div>
                        <div className="col-6">
                            {showHintAlot(objMain.total.icon)}
                            <div>
                                Máy:
                                <span className="span2"> {objMain.total.robotspeakfirst[0]}</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div id="mainViewBegin"></div>
                    <hr />
                    <div id="mainViewMid"></div>
                    <hr />
                    <div id="mainViewEnd"></div>
                    <hr />
                    {Template !== "" ?
                        <div>
                            <button className="btn btn-danger" onClick={() => { setTemplate("") }}>XXXXXXX</button>
                            <br />
                            {JSON.stringify(Template)}
                        </div>
                        : null}
                </div>
                <div className="col-7" >
                    <select id="selectPartID" defaultValue={part} onChange={(e) => {
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

                    <div className="row">
                        <div className="col-6">
                            <textarea id="textInsert" defaultValue={""}></textarea>
                            <br />
                            <button
                                onClick={() => {
                                    if (checkObjInsert($("#textInsert").val(), objMain, part)) {
                                        handleObj($("#textInsert").val(), objMain, setobjMain, part);
                                        $("#textInsert").val("")
                                    } else {
                                        alert("Sai cấu trúc dữ liệu!")
                                    }

                                }}
                                className="btn btn-outline-primary">Insert</button>
                        </div>
                        <div className="col-6">
                            <button onClick={() => {
                                setobjMain(objMainR)
                                setSideLeftData([])
                            }} className="btn btn-outline-danger">Reset</button>
                        </div>
                    </div>


                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <textarea id="textInsertTable" defaultValue={""} ></textarea>
                            <br />
                            <button
                                onClick={() => {
                                    if (checkObjTableInsert($("#textInsertTable").val(), objMain)) {
                                        handleObjTable($("#textInsertTable").val(), objMain, setobjMain, setTableViewBeforeInsert)
                                    }
                                }}
                                className="btn btn-outline-primary">Insert Table</button>
                            <button
                                onClick={() => {
                                    setTemplate(objTable)
                                }}
                                className="btn btn-outline-primary">GetTemplateTable</button>
                        </div>
                        <div className="col-6">
                            {showAllListOfTable(objMain.table, objMain, setobjMain, setSideLeftData, setshowObjTable)}
                            <br />
                            {showTableDetail(showObjTable, objMain, setobjMain)}

                        </div>
                    </div>


                    <hr />
                    <div id="sideView">
                        {showSideLeft(sideLeftData, objMain, setobjMain, part, setSideLeftData)}


                        {delObjView(sideLeftData, objMain, setobjMain, setSideLeftData, part)}

                        <hr />
                        {JSON.stringify(sideLeftData)}
                    </div>
                </div>
            </div>
            <div>
                <button
                    onClick={() => {
                        let submit = []
                        let ArrTableRoot = []
                        Object.keys(objMain.table).forEach(e => {
                            submit = submit.concat(objMain.table[e].pushSubmit)
                            let arT = turnArrToArrofArr(objMain.table[e].data)
                            ArrTableRoot.push({
                                "name": e,
                                "in0": arT,
                                "in1": arT.slice(0, objMain.table[e].get),
                                "in2": objMain.table[e].get,
                                "in3": pickNRandomElementsOfArray(arT, objMain.table[e].get)
                            })
                        })


                        let core = []
                        ArrPeple.forEach(e => {

                            let input_begin_01 = [];
                            let input_begin_02 = [];

                            objMain.begin.forEach(e => {
                                input_begin_01.push(e.m00)

                                if (e.m05 !== "") {
                                    let output;
                                    let input
                                    ArrTableRoot.forEach(ee => {
                                        if (ee.name === e.m05) {
                                            input = JSON.stringify(e)
                                            ee.in1.forEach((e1, i1) => {
                                                e1.forEach((e2, i2) => {
                                                    input = input.split(e2).join(ee.in3[i1][i2])
                                                })
                                            })

                                        }
                                    })
                                    output = JSON.parse(input)
                                    input_begin_02.push(FnObjHanldingNext(output.m01, output.m02, output.m03, output.m04))
                                } else {
                                    input_begin_02.push(FnObjHanldingNext(e.m01, e.m02, e.m03, e.m04))
                                }
                            })

                            let input_mid_01 = [];
                            let input_mid_02 = [];

                            objMain.mid.forEach(e => {
                                input_mid_01.push(e.m00)
                                if (e.m05 !== "") {
                                    let output;
                                    let input
                                    ArrTableRoot.forEach(ee => {
                                        if (ee.name === e.m05) {
                                            input = JSON.stringify(e)
                                            ee.in1.forEach((e1, i1) => {
                                                e1.forEach((e2, i2) => {
                                                    input = input.split(e2).join(ee.in3[i1][i2])
                                                })
                                            })

                                        }
                                    })
                                    output = JSON.parse(input)
                                    input_mid_02.push(FnObjHanldingNext(output.m01, output.m02, output.m03, output.m04))
                                } else {
                                    input_mid_02.push(FnObjHanldingNext(e.m01, e.m02, e.m03, e.m04))
                                }

                            })
                            let input_end_01 = [];
                            let input_end_02 = [];

                            objMain.end.forEach(e => {
                                input_end_01.push(e.m00)
                                if (e.m05 !== "") {
                                    let output;
                                    let input
                                    ArrTableRoot.forEach(ee => {
                                        if (ee.name === e.m05) {
                                            input = JSON.stringify(e)
                                            ee.in1.forEach((e1, i1) => {
                                                e1.forEach((e2, i2) => {
                                                    input = input.split(e2).join(ee.in3[i1][i2])
                                                })
                                            })

                                        }
                                    })
                                    output = JSON.parse(input)
                                    input_end_02.push(FnObjHanldingNext(output.m01, output.m02, output.m03, output.m04))
                                } else {
                                    input_end_02.push(FnObjHanldingNext(e.m01, e.m02, e.m03, e.m04))
                                }

                            })
                            core.push(
                                Fnperson(
                                    {
                                        "img": e[1],
                                        "gender": e[2],
                                        "viewPick": {
                                            "header": "Guest at the table.",
                                            "img": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"
                                        },
                                        "Submit": submit
                                    },
                                    [],
                                    FnToArrobj(input_begin_01, input_begin_02),
                                    FnToArrobj(input_mid_01, input_mid_02),
                                    FnToArrobj(input_end_01, input_end_02),
                                    objMain.total.robotspeakfirst,
                                    objMain.total.icon
                                )
                            )
                        })
                    }}
                >
                    GetDocuments
                </button>
            </div>

            <div>
                {showTable(TableViewBeforeInsert, objMain, setobjMain, setTableViewBeforeInsert)}
            </div>
            <div >
                <textarea id="textInsert123" defaultValue={""}></textarea>
                <br />
                <button
                    onClick={() => {
                        console.log(
                            JSON.stringify($("#textInsert123").val())
                        )

                    }}
                    className="btn btn-outline-primary">Insert</button>
            </div>
        </>
    )

}
export default Index


















