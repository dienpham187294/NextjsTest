export default
    function inter() {
    setTimeout(() => {
        try {
            $("#idClickMiniGame")[0].click()
        } catch (error) {
            inter()
        }
    }, 1000)
}