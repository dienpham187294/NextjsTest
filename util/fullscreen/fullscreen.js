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
            alert("Máy không hỗ trợ full màn hình")
        }
    } catch (error) {
        console.log(error)
    }
}