export default function GetFinal(arr) {
    try {
        return arr[arr.length - 1]
    } catch (error) {
        return "none"
    }

}