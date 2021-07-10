const stringSimilarity = require("string-similarity");

export default function Check2String(message_API, message_INPUT) {
    try {
        let status = false
        message_API.split("epdp").forEach(e => {
            if (stringSimilarity.compareTwoStrings(e, message_INPUT) > 0.8) {
                status = true
            }
        });

        return status

    } catch (error) {
        console.log(error, "check2string")
        return false
    }
}
