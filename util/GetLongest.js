export default function GetLongest(Str) {
    let arr = Str.split(" ");

    if (arr.length === 1) {
        return arr[0]
    }
    let res = "";
    arr.forEach(e => {
        if (e.length > res.length) {
            res = e;
        }
    });
    return res
}
