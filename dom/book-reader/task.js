const fontControlButtons = Array.from(document.querySelectorAll('.font-size'));
const bookControlFontSize = document.querySelector('.book__control_font-size');
const bookContent = document.querySelector('.book__content');
const arrayFontSize = ['book_fs-small', , 'book_fs-big'];

bookControlFontSize.addEventListener('click', event => {
    event.preventDefault();
    for (let i = 0; i < fontControlButtons.length; i++) {
        bookContent.classList.remove(arrayFontSize[i]);
        fontControlButtons[i].classList.remove('font-size_active');
        if (fontControlButtons[i] === event.target) {
            fontControlButtons[i].classList.add('font-size_active');
            bookContent.classList.add(arrayFontSize[i]);
        }
    }
})