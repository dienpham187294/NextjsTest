export default function SortLetter(Input) {
    let Res = [];
    let Data = Input.split(" ")
    Data.forEach(e => {
        Res.push(e.charAt(0) + "...")
    })

    return Res.join(" ")
}
