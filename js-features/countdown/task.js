let countDownTimer = setInterval(function () {
    let countTimer = document.getElementById("timer");
    countTimer.textContent--;
    if (Number(countTimer.textContent) === 0) {
        clearInterval(countDownTimer);
        alert("«Вы победили в конкурсе!»");
    }
}, 1000);







