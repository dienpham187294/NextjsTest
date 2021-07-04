export default function FullScreen(id) {
    try {
        let elem = document.getElementById(id);
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        } else {
            alert(1)
        }
    } catch (error) {
        console.log(error)
    }
}