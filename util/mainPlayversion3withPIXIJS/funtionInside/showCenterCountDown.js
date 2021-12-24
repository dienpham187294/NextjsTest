export default function showCenterCountDown() {
    return <div style={{
        position: "fixed",
        top: "10%",
        bottom: "10%",
        right: "10%",
        left: "10%",
        backgroundColor: "white",
        opacity: "0.9",
        textAlign: "center",
        display: "none"
    }}
        id="divCountdown"
    >
        <h1 style={{ color: "red" }}>Next...   <span id="countDown">3</span></h1>

    </div>
}