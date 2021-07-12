import { useEffect, useState } from "react"
const queryString = require('query-string');

export default function Q_String() {

    const [Status, SET_Status] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            const parsed = queryString.parse(window.location.search);
            alert(parsed["token"])
            alert(parsed["name"])
            alert($("#ID_TEXT_BROWSERNAME").text())
        }, 2000)
    }, [Status])

    return (
        <div>
            ABC
        </div>
    )
}