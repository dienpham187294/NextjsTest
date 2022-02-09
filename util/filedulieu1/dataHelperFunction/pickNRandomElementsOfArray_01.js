import shuffleArr from "./shuffleArr";
export default function pickNRandomElementsOfArray(arrInput, n) {

    let output = shuffleArr(arrInput)
    return [
        output.slice(0, n),
        output
    ];
}