const stringSimilarity = require("string-similarity");

export default function Check2String(message_API, message_INPUT) {
    try {
        let status = false
        message_API.split("epdp").forEach(e => {
            console.log(stringSimilarity.compareTwoStrings(e, message_INPUT))
            if (stringSimilarity.compareTwoStrings(e, message_INPUT) > 0.7) {
                status = true
            }
        });

        return status

    } catch (error) {
        console.log(error, "check2string")
        return false
    }
}
