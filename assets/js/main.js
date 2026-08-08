var menuButton = document.querySelector('.menu-button');
var navigation = document.getElementById('site-navigation');

if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
        var isOpen = navigation.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', isOpen);
    });
}
