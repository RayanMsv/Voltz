function adapt() {
    var h = document.getElementById("lang").offsetHeight;
    var l = document.getElementById("lang").offsetWidth;
    var language = $(".language img");
    if (h >= l * 3 / 4) {
        language.css("width", (l) + "px");
        language.css("height", (h / 2) + "px");
    } else {
        language.css("width", (l / 2 - 1) + "px");
        language.css("height", (h) + "px");
    }
}

window.onload = adapt();
window.onresize = adapt();
