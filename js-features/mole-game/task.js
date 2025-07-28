const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

reset = () => {
    dead.textContent = 0;
    lost.textContent = 0;
    return;
}

for (let i = 1; i < 10; i++) {
    let holeClick = getHole(i);
    holeClick.onclick = function () {
        if (holeClick.className.includes('hole_has-mole')) {
            dead.textContent++;
            if (dead.textContent == 10) {
                alert("ПОБЕДА!!! Вы убили 10 кротов!");
                reset();
            }
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert("Вы промахнулись 5 раз! Вы проиграли.");
                reset();
            }
        }
    }
}