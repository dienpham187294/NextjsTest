export default function pickNRandomElementsOfArray(arrInput, n) {

    return arrInput.sort(() => 0.5 - Math.random()).slice(0, n);

}