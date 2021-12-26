import shuffleArr from "./shuffleArr";
export default function pickNRandomElementsOfArray(arrInput, n) {



    
    return shuffleArr(arrInput).slice(0, n);

}