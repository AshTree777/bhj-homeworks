const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;
setInterval(() => {
    rotatorCase[i].classList.toggle('rotator__case_active');
    if (i === rotatorCase.length - 1) {
        i = 0;
        rotatorCase[i].classList.toggle('rotator__case_active');
    } else {
        rotatorCase[i + 1].classList.toggle('rotator__case_active');
        i++;
    }
}, 1000);
