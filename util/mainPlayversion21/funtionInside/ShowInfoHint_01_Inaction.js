import Check_ImageOrNot from "./Check_ImageOrNot"

export default function showHintAlot(input, title) {

    try {
      
        if (title === undefined) {
            title = input
        }
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
                                                title={title}
                                                alt={e} src={e}
                                                width="100px"
                                                height={"100px"}
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
                <>
                    {
                        input === undefined || input === "" ? null :
                            <>
                                {Check_ImageOrNot(input) ?
                                    <>
                                        <img
                                            title={title}
                                            alt={input} src={input}
                                            width="100px" height={"100px"}
                                        />
                                    </>
                                    : <>
                                        <b><i
                                        >{input}</i></b>
                                    </>}
                            </>
                    }
                </>
            )
        } catch (error) {
            return "eror"
        }

    }
}