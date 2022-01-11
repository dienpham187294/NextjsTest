export default
    function showTotal(total) {

    try {
        return (
            <div>
                Name:  {total.name}<br />
                Gender: {total.gender} <br />
                <img src={total.image} width="50px" />
            </div>
        )
    } catch (error) {
        return "Error"
    }
}
