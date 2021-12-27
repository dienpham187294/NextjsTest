import { useEffect, useState } from "react"
import ArrofPeople from "../../../util/filedulieu1/dataHelperFunction/ArrOfpeple"
let obj = {
    "alert": function () {
        alert(1)
    },
    "ac": "123"
}

let NewArrr = []
ArrofPeople.forEach(e => {
    NewArrr.push(
        {
            "name": e[0],
            "gender": e[2],
            "img": e[1]
        }
    )

})
let objRoot = {}

function Index() {


    return (
        <>
            <div className="row">
                <div className="col-12" style={{ textAlign: "center" }}>
                    <div>
                        <textarea>

                        </textarea>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Index

