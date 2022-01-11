import delObj from "./delObj"

export default function delObjView(sideLeftData, objMain, setobjMain, setSideLeftData, part) {
    try {
        return sideLeftData.length !== 0
            ? <button
                onClick={() => {
                    delObj(sideLeftData.m00, objMain, setobjMain, setSideLeftData, part)
                }}
                className="btn btn-outline-danger">
                Delete
            </button> : null
    } catch (error) {
        return null
    }
}