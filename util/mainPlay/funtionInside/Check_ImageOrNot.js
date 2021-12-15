export default function Check_ImageOrNot(Stringtocheck) {
    if (
        typeof (Stringtocheck) === "string"
        && (Stringtocheck.includes(".png")
            || Stringtocheck.includes(".jpg")
            || Stringtocheck.includes(".jpeg")
            || Stringtocheck.includes(".gif"))) {
        return true
    }
    return false
}