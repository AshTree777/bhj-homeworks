const reveal = Array.from(document.querySelectorAll('.reveal'));

addEventListener('scroll', () => {

    for (let i = 0; i < reveal.length; i++) {
        if (revealVisible(reveal[i])) {
            reveal[i].classList.add('reveal_active');
        } else {
            reveal[i].classList.remove('reveal_active');
        }
    }

})

function revealVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < window.innerHeight * 0.5 || top > window.innerHeight * 0.5) {
        return false;
    }
    return true;
}