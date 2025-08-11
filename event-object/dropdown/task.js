const dropdown = document.querySelector('.dropdown');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

dropdown.addEventListener('click', event => {
    dropdownList.classList.toggle('dropdown__list_active');
    dropdownValue.textContent = event.target.textContent;
    event.preventDefault();
});

