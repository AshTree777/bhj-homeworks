const tabNavigation = document.querySelector('.tab__navigation');
const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tabNavigation.addEventListener('click', event => {
    
    let indexNavigation = tab.indexOf(event.target);

    for (indexContent = 0; indexContent < tabContent.length; indexContent++) {
        tab[indexContent].classList.remove('tab_active');
        tabContent[indexContent].classList.remove('tab__content_active');

        if (indexNavigation === indexContent) {
            tab[indexContent].classList.add('tab_active');
            tabContent[indexContent].classList.add('tab__content_active');
        }

    }

})