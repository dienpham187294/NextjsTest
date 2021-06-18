export default function Check2String(str1, str2) {

    try {
        if (str1.toLowerCase().split(/[\?#!-().]+/).join("") === str2.toLowerCase().split(/[\?#!-().]+/).join("")) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }

}