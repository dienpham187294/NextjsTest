export default function funtionxuly(Input, SET_ImageLeftSide) {
    try {
        Input.forEach(e => {
            if (e.type === "showHTML") {
                setTimeout(() => {
                    try {
                        var x = document.createElement("div");
                        x.innerHTML = e.data
                        document.getElementById("addCustomItem").appendChild(x);

                        setTimeout(() => {
                            x.scrollIntoView({ behavior: "smooth" });
                        }, 100)

                    } catch (error) {

                    }
                }, 1000);

            }
            if (e.type === "changeImage") {
                SET_ImageLeftSide(e.data)
            }

        });

    } catch (error) {
        console.log(error)
    }
}

