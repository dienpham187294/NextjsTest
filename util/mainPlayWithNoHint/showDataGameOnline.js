function showDataOnline(DataOnline) {
    // console.log(DataOnline)
    try {
        return (
            <div style={{ textAlign: "left" }}>
                {DataOnline.map((e, i) =>
                    <div key={i}>
                        <div style={{ border: "3px solid green", borderRadius: "3px", padding: "5px", margin: "2px", width: 10 * e.score + "px" }}>
                            {e.score}
                        </div>
                    </div>
                )}
            </div>
        )
    } catch (error) {
        return null
    }
}

export default showDataOnline
