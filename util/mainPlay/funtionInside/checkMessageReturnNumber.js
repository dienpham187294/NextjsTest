
const stringSimilarity = require("string-similarity");

export default function checkMessageReturnNumber(message_API, message_INPUT) {
    try {
        let n = stringSimilarity.compareTwoStrings(message_API, message_INPUT) * 10
        if (n > 2 / 3) {
            return [n, message_INPUT.split(" ").length]
        }
        return [0, 0]
    } catch (error) {
        return [0, 0]
    }
}
