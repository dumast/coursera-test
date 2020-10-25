function setCookie(cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "theme=" + cvalue + ";" + expires + "; path=/";
}

function getCookie(theme) {
    var name = theme + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var theme = getCookie("theme");
    if (theme == "default") {
        body.className = "";
    }
    if (theme == "dark") {
        body.className = "dark-mode";
    }
}

var body = document.querySelector("body"),
    goDefault = function() {
        body.className = "";
        setCookie("default");
    },
    goDark = function() {
        body.className = "";
        body.classList.add("dark-mode");
        setCookie("dark");
    };

function toggleMode() {
    var theme = getCookie("theme");
    if (theme == "dark") {
        goDefault();
    } else {
        goDark();
    }
}

checkCookie();