import Check_ImageOrNot from "./Check_ImageOrNot"

export default function showHintAlot(input) {
    try {

        return (
            <div>
                {
                    input.map((e, i) =>
                        <div key={i} style={{ display: "inline-block" }} >
                            {e === undefined || e === "" ? null :
                                <>
                                    {Check_ImageOrNot(e) ?
                                        <>
                                            <img
                                                alt={e} src={e}
                                                width="40px"
                                            />
                                        </>
                                        : <>
                                            <b><i
                                            >{e}</i></b>
                                        </>}
                                </>
                            }
                        </div>
                    )
                }
            </div>
        )



    } catch (error) {
        try {
            return (
                <div>
                    {
                        input === undefined || input === "" ? null :
                            <>
                                {Check_ImageOrNot(input) ?
                                    <>
                                        <img
                                            alt={input} src={input}
                                            width="40px" height={"40px"}
                                        />
                                    </>
                                    : <>
                                        <b><i
                                        >{input}</i></b>
                                    </>}
                            </>
                    }
                </div>
            )
        } catch (error) {
            return "eror"
        }

    }
}