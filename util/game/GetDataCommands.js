export default function GetDataCommands(handling_next) {

    let arr1 = [];
    handling_next.forEach(e => {
        e.manspeak.forEach(ee => {
            arr1.push(ee)
        })
    })
    return arr1
}