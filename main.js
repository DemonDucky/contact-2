const height = window.innerHeight
const body = document.querySelector('body')
const facebook = document.querySelector('#facebook')
const instagram = document.querySelector('#instagram')

body.style.height = height + 'px'

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'MacOS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

const os = getOS()


facebook.onclick = function () {
    if (os === "iOS") {
        window.location = "fb://profile/100030640875411"
    } else if (os === "Android") {
        window.location = "intent://profile/100030640875411#Intent;package=com.facebook.katana;scheme=fb;end"
    } else {
        window.open("https://www.facebook.com/vit.conn/", "_blank")
    }
}

instagram.onclick = function () {
    if (os === "iOS" || os === "Android") {
        window.location = "instagram://user?username=tuan.anhlg"
    } else if (os === "Android") {
        window.location = "intent://www.instagram.com/tuan.anhlg/#Intent;package=com.instagram.android;scheme=https;end"
    } else {
        window.open("https://www.instagram.com/tuan.anhlg/", "_blank")
    }
}