function setCookie(cname, cvalue, exdays) {

    if (process.browser) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

}

function delettCookie(cname) {
  
    setCookie(cname, '', -1);
 
}

function getCookie(cname) {
    if (process.browser) {
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
    }
}

function checkCookie(name) {
   
    var username = getCookie(name);
    if (username !== "") {
        return true;
        /* alert("Welcome again " + username);*/
    } else {
        /* username = prompt("Please enter your name:", "");
         if (username != "" && username != null) {
             setCookie("username", username, 365); 
         } */
        return false;
    }
  
}

export { setCookie, delettCookie, getCookie, checkCookie }