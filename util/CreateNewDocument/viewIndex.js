export default function viewIndex(objMain, showLeftSide, id, part, setpart) {
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
                let objHelper = ""
                if (ee.m03.endSuccessfull) {
                    objHelper += `End`
                }
                if (ee.m04.length !== 0) {
                    objHelper += `|  Images`
                }
                if (ee.m05 !== null && ee.m05 !== undefined) {
                    objHelper += `| ` + ee.m05
                }



                let divT =
                    `<div id="` + id + ee.m00 + `" class="divT">
                    <i id="a`+ id + ee.m00 + `" class="span0"> ` + ee.m00[0] + `</i><br/>
                    <span class="span1"> `+ ee.m01[0] + `</span><br/><span  class="span2">` + ee.m02[0] + `</span><br/>
                    <span class="span3">
                    ` + objHelper + `</span>
                <div>`
                $("#" + id).append(divT)
                document.getElementById("a" + id + ee.m00).addEventListener("click", function () {
                    showLeftSide(ee.m00, objMain[part])
                    setpart(part)
                });
            })
        } else {

            e.forEach(ee => {
                let objHelper = ""
                if (ee.m03.endSuccessfull) {
                    objHelper = `<br/>End`
                }
                let divT =
                    `<div id="` + id + ee.m00 + `" class="divT">
                        <i id="a`+ id + ee.m00 + `" class="span0"> ` + ee.m00 + `</i><br/>
                     <span class="span1"> `+ ee.m01[0] + `</span><br/><span  class="span2">` + ee.m02[0] + `</span>`
                    + objHelper + `
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
