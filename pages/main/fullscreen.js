export default function Fullsreen() {


    return (
        <div id="fullsreen">
            <button onClick={() => {
                var videoElement = document.getElementById("fullsreen");
                videoElement.requestFullscreen();
            }}>
                requestFullscreenc
            </button>
        </div>
    )
}