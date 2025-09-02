const hasTooltips = document.querySelectorAll('.has-tooltip');

for (const hasTooltip of hasTooltips) {
    const div = document.createElement('div');
    div.textContent = hasTooltip.title;
    div.className = 'tooltip';
    hasTooltip.insertAdjacentElement('afterEnd', div);

    hasTooltip.addEventListener('click', (event) => {
        event.preventDefault();

        let positonTooltip = hasTooltip.getBoundingClientRect();
        div.style.left = positonTooltip.x + 'px';
        div.style.top = positonTooltip.y + 20 + 'px';

        div.classList.toggle('tooltip_active');
    })
}