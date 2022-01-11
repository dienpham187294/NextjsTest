export default function checkObjTableInsert(input, objMain) {
    try {
        let objInput = JSON.parse(input)
        if (Object.keys(objMain.table).includes(objInput.name)) {
            alert("Tên bảng bị trùng")
            return false
        } else {
            return true
        }

    } catch (error) {
        alert("Sai cấu trúc dữ liệu")
        return false
    }
}