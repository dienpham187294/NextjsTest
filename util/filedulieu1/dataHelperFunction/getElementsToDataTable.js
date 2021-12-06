export default function getElementsToDataTable(ArrInput, elementsName, option) {
    let ArrOutput = []

    ArrInput.forEach(e => {
        ArrOutput.push(e[elementsName])
        if (option !== null) {
            ArrOutput.push(option)
        }
    });

    return ArrOutput
}