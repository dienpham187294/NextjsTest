export default function Fullsreen() {


    return (
        <div id="fullsreen">
            <button onClick={() => {
                let elem = document.getElementById("fullsreen");
                if (elem.requestFullScreen) {
                    elem.requestFullScreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullScreen) {
                    elem.webkitRequestFullScreen();
                }
            }}>
                requestFullscreenc
            </button>
        </div>
    )
}