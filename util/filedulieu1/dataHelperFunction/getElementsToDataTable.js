export default function getElementsToDataTable(ArrInput, elementsName) {
    let ArrOutput = []

    ArrInput.forEach(e => {
        ArrOutput.push(e[elementsName])
    });

    return ArrOutput
}