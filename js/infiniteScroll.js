let i = 0;
let isRun = false;

isRun = !isRun;

var count = window.prompt("Scrolling delay (seconds) ?", 2);

const start = setInterval(function () {
    i = i + 50;
    window.scrollBy({
        left: 0,
        top: i,
        behavior: "smooth"
    })
}, count * 1000)

if (isRun === false) {
    clearInterval(start);
}

