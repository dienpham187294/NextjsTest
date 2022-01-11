export default function turnArrToArrofObj(arr) {
    let outputArr1 = []
    let outFn = []
    for (let i = 0; i < arr.length; i++) {
        outputArr1.push(i)
    }


    arr[0].forEach((e, i) => {
        let objT = {}
        outputArr1.forEach(
            (ee) => {
                let ke = "in" + ee;
                objT[ke] = arr[ee][i]
            })
        outFn.push(objT)
    });
    return outFn
}