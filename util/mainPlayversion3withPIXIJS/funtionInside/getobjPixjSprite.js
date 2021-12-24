export default function getobjPixjSprite(input, data) {
    let output = JSON.parse($("#ID_objPixjSpriteIntinial").text())
    input.forEach(e => {
        Object.keys(output).forEach(ee => {
            if (ee === data[e].total.viewPick.header) {
                output[ee].push(e)
            }
        })
    })
    $("#ID_objPixjSpriteUse").text(JSON.stringify(output))
}