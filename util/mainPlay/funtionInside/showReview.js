export default function showReview(ShowReview, SET_ShowReview) {
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => {
                    SET_ShowReview("")
                }}
                style={{ float: "right" }}
            >
                Thoát
            </button>
            <p>In kết quả: Ctrl P - chọn Lưu dưới dạng PDF/ Save as PDF - Bấm lưu/Save</p>
            <hr />
            {generalReview(ShowReview)}
            <hr />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>
                            Câu cần nói
                        </td>
                        <td>
                            Câu nói của người thực hành phần mềm ghi nhận
                        </td>
                        <td>
                            Những từ còn thiếu trong câu
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        ShowReview.map((e, i) =>
                            <tr key={i}>
                                <td>
                                    {e.textToRead}
                                </td>
                                <td style={{ color: "green" }}>
                                    {e.textReadAlready}
                                </td>
                                <td style={{ color: "red" }}>
                                    {checkPronouns(e.textToRead, e.textReadAlready)}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
function checkPronouns(textToRead, textReadAlready) {

    let output = ""

    let StringtextReadAlready = textReadAlready.toLowerCase()
    let ArrtextToRead = textToRead.toLowerCase().split(" ")

    ArrtextToRead.forEach(e => {
        if (!StringtextReadAlready.includes(e)) {
            output += e + ", "
        }
    })

    return output
}
function generalReview(ShowReview) {
    let output = {}
    let ArrHoldToCheck = []
    ShowReview.forEach(e => {
        if (ArrHoldToCheck.includes(e.textToRead)) {
            output[e.textToRead].nTextToRead += 1;
            output[e.textToRead].Error += checkPronouns(e.textToRead, e.textReadAlready)
        } else {
            output[e.textToRead] =
            {
                "textToRead": e.textToRead,
                "nTextToRead": 1,
                "Error": checkPronouns(e.textToRead, e.textReadAlready)
            }
            ArrHoldToCheck.push(e.textToRead)
        }
    })
    try {
        return (
            <div>
                {ArrHoldToCheck.map((e, i) =>
                    <div key={i}>
                        {output[e].textToRead} x {output[e].nTextToRead}
                        || {showNError(output[e].Error)}
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }

}

function showNError(input) {
    try {
        let ouput = {}
        let ArrError = input.split(", ")
        let ArrHoldElements = []
        ArrError.forEach(e => {
            if (!ArrHoldElements.includes(e) && e !== "") {
                ouput[e] = {
                    "content": e,
                    "times": getOccurrence(ArrError, e)
                };
                ArrHoldElements.push(e)
            }
        })

        return (
            <>
                {
                    ArrHoldElements.map((e, i) =>
                        <>
                            <span key={i} style={{ color: "red" }}>{ouput[e].content} x {ouput[e].times}</span>
                            <span>---</span>
                        </>
                    )
                }
            </>
        )

    } catch (error) {
        console.log(error)
        return null
    }
}

function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

