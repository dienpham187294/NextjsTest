export default function DaoArray(arr) {
    try {
        return arr.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random())
    } catch (error) {
        return ["none"]
    }

}