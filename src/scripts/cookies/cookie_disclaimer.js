/**
 * Check if a cookie exists
 * If cookie does not exists, display the cookie status banner
 * and set a cookie
 * @param {string} cname the cookie name
 * @param {string} cvalue the cookie value
 * @param {number} exdays the cookie expiration date
 */

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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
  
var cookieContent = document.getElementById('cookie');
var cookieName = getCookie('UK_Parliament__seen_cookie_message');

if (!cookieName && cookieContent) {
   cookieContent.style.display = 'block';
   setCookie('UK_Parliament__seen_cookie_message', 'yes', 28);
}

