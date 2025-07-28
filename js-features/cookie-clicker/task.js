const imageCookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

imageCookie.onclick = function () {
    counter.textContent++;
    if (counter.textContent % 2 !== 0) {
        imageCookie.width = 250;
    } else {
        imageCookie.width = 200;
    }
}