export default function handleObj(input, objMain, setobjMain, part) {
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