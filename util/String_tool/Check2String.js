

export default function Check2String(message_API, message_INPUT) {
    try {
        if (message_API.toLowerCase().indexOf(message_INPUT.split(/[\?#!-()',`.]+/).join("").toLowerCase()) > -1) {
            return true
        }
        if (message_API.split(/[\?#!-:()',.]+/).join("").toLowerCase().indexOf(message_INPUT.split(/[\?#!-:()',.]+/).join("").toLowerCase()) > -1) {
            return true
        }
    } catch (error) {
        return false
    }


    return false

}
