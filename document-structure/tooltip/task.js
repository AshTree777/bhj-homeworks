const hasTooltips = document.querySelectorAll('.has-tooltip');

for (const hasTooltip of hasTooltips) {
    const div = document.createElement('div');
    div.textContent = hasTooltip.title;
    div.className = 'tooltip';
    hasTooltip.appendChild(div);

    hasTooltip.addEventListener('click', event => {
        event.preventDefault();

        let positonTooltip = hasTooltip.getBoundingClientRect();
        div.style.left = positonTooltip.x + 25 + 'px';
        div.style.top = positonTooltip.y + 25 + 'px';

        div.classList.toggle('tooltip_active');
    })
}