export default function shuffleArr(arr) {
    return arr.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random())
}