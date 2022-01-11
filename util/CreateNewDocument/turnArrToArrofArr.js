export default function turnArrToArrofArr(arr) {
    let outputArr1 = []
    let outFn = []
    for (let i = 0; i < arr.length; i++) {
        outputArr1.push(i)
    }


    arr[0].forEach((e, i) => {
        let objT = []
        outputArr1.forEach(
            (ee) => {
                objT.push(arr[ee][i])
            })
        outFn.push(objT)
    });
    return outFn
}