export default function handleObjTable(input, objMain, setobjMain, setTableViewBeforeInsert) {
    let newObjMain = JSON.parse(JSON.stringify(objMain))
    let inputObj = JSON.parse(input)
    setTableViewBeforeInsert(inputObj)
    // newObjMain.table[inputObj.name] = {}
    // newObjMain.table[inputObj.name].data = inputObj.data
    // newObjMain.table[inputObj.name].get = 0
    // console.log(newObjMain.table)
    // setobjMain(newObjMain)
}


