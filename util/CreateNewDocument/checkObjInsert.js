export default function checkObjInsert(input, objMain, part) {
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