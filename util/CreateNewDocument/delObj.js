export default function delObj(input, objMain, setobjMain, setSideLeftData, part) {
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