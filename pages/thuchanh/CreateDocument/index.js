import { useEffect, useState } from "react"


let objId = {
    "name": "Eric",
    "gender": "male",
    "age": "28"
}


function Index() {


    return (
        <>
            <div className="row">
                <div className="col-9" >
                    {viewIndex(objMain)}
                </div>

            </div>
        </>
    )

}
export default Index

let objMain = {
    "begin": [
        {
            "m00": "0",
            "m01": ["hi"],
            "m02": ["hi 1"]
        },
        {
            "m00": "0-0",
            "m01": ["hi"],
            "m02": ["hi 1"]
        },
        {
            "m00": "0-0-0",
            "m01": ["hi"],
            "m02": ["hi 1"]
        },
        {
            "m00": "0-0-1",
            "m01": ["hi"],
            "m02": ["hi 1"]
        },
        {
            "m00": "1",
            "m01": ["hi"],
            "m02": ["hi 1"]
        },
        {
            "m00": "1-0",
            "m01": ["hi"],
            "m02": ["hi 1"]
        },
        {
            "m00": "1-0-0",
            "m01": ["hi"],
            "m02": ["hi 1"]
        },
        {
            "m00": "1-0-0-0",
            "m01": ["hi"],
            "m02": ["hi 1"]
        },
        {
            "m00": "1-0-0-1",
            "m01": ["hi"],
            "m02": ["hi 1"]
        }
    ]
}
function viewIndex(objMain) {

    let output = []

    let output2 = []
    objMain.begin.forEach(e => {

        if (!output.includes(e.m00.charAt(0))) {
            output.push(e.m00.charAt(0))
            output2[e.m00.charAt(0)] = []
            output2[e.m00.charAt(0)].push(e.m00)
        } else {
            output2[e.m00.charAt(0)].push(e.m00)
        }

    });
    console.log(output)
    console.log(output2)

    output2.forEach(e => {
        e.forEach(ee => {
            console.log(ee.charAt(7))
        })
    })
    return (
        <div>
            ABC
        </div>
    )
}   