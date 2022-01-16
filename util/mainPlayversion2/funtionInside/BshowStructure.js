import { useEffect, useState } from "react"
let i = 0
export default function BshowStructure(data) {

    const [DataMainthisdiv, setDataMainthisdiv] = useState(data[0])

    useEffect(() => {
        try {
            viewIndex(showCore(DataMainthisdiv, "begin"), "B01mainDivBegin")
            viewIndex(showCore(DataMainthisdiv, "middle"), "B01mainDivMid")
            viewIndex(showCore(DataMainthisdiv, "end"), "B01mainDivEnd")
        } catch (error) {

        }

    }, [DataMainthisdiv])
    return (
        <div >
            <button
                onClick={() => {
                    try {
                        i = (i + 1) % data.length
                        setDataMainthisdiv(data[i])
                    } catch (error) { }

                }}
            >Next</button>
            <hr />
            <div id="B01mainDivBegin" style={{ backgroundColor: "#e6e6ff" }}></div>
            <hr />
            <div id="B01mainDivMid"></div>
            <hr />
            <div id="B01mainDivEnd" style={{ backgroundColor: "#e6e6ff" }}></div>
            <hr />
            <div id="B01mainDivAllSentences" style={{ backgroundColor: "#e6e6ff" }}></div>
        </div>
    )
}

function showCore(input, index) {
    let output = []

    loopHandle(input[index], "", output)

    return output
}

function loopHandle(input, n, output) {
    try {
        input.handling_next.forEach((e, i) => {
            let m00 = ""
            if (n !== "") { m00 = n + "-" + i } else {
                m00 += i
            }
            let obj = {
                "m00": m00,
                "m01": e.manspeak,
                "m02": e.robotspeak,
                "m03": e.function,
                "m04": e.icon
            }
            output.push(obj)
            if (e.handling_next.length > 0) {
                loopHandle(e, m00, output)
            }
        });
    } catch (error) {

    }
}


function viewIndex(objMain, id) {



    $("#" + id).html("")
    let i = 1
    let arr10 = []
    let arr11 = []
    while (countIndex(i, objMain)) {
        arr10.push(i)
        i++
    }
    arr10.forEach((e, i) => {
        let arrt = []
        objMain.forEach(ee => {
            if (ee.m00.split("-").length === e) {
                arrt.push(ee)
            }
        });
        arr11[i] = arrt
    })

    arr11.forEach((e, i) => {
        if (i === 0) {
            e.forEach(ee => {
                let objHelper = ""
                if (ee.m03.end_successfull) {
                    objHelper += `End`
                }
                if (ee.m04 !== "") {
                    objHelper += `|  Images`
                }
                if (ee.m05 !== null && ee.m05 !== undefined) {
                    objHelper += `| ` + ee.m05
                }



                let divT =
                    `<div id="` + id + ee.m00 + `" class="divT">
                   
                    <span class="span1"> `+ ee.m01[0] + `</span><br/><span  class="span2">` + ee.m02[0] + `</span>
                    <p class="span3">
                    ` + objHelper + `</p>
                <div>`
                $("#" + id).append(divT)

            })
        } else {

            e.forEach(ee => {
                let objHelper = ""
                if (ee.m03.end_successfull) {
                    objHelper = `<br/>End`
                }
                let divT =
                    `<div id="` + id + ee.m00 + `" class="divT">
            
                     <span class="span1"> `+ ee.m01[0] + `</span><br/><span  class="span2">` + ee.m02[0] + `</span>`
                    + objHelper + `
                <div>`
                $("#" + id + ee.m00.slice(0, ee.m00.length - 2)).append(divT);

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
