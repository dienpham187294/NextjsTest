export default function Scrolltoview(id) {
    try {
        let x = document.getElementById(id);
        x.scrollIntoView({ behavior: "smooth", block: "center" });
    } catch (error) {
        console.log(error)
    }
}

