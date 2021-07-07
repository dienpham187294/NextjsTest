function setCookie(cname, cvalue, exdays) {

    try {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    } catch (error) {
        console.log(error)
    }

}

function delettCookie(cname) {

    setCookie(cname, '', -1);

}

function getCookie(cname) {
    try {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    } catch (error) {
        console.log(error)
    }

}

function checkCookie(name) {
    try {
        var username = getCookie(name);
        if (username !== "") {
            return true;
        } else {
            return false;
        }

    } catch (error) {
        console.log(error)
    }

}

export { setCookie, delettCookie, getCookie, checkCookie }