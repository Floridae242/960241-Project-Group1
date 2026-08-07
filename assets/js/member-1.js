var menuButton = document.getElementById('menu-button');
var navigation = document.getElementById('site-navigation');

function closeNavigation() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', function () {
    var isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNavigation);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeNavigation();
});

var projectButtons = document.querySelectorAll('.project-toggle');
projectButtons.forEach(function (button) { button.addEventListener('click', function () { var notes = document.getElementById(button.getAttribute('data-target')); var isHidden = notes.hasAttribute('hidden'); if (isHidden) { notes.removeAttribute('hidden'); button.setAttribute('aria-expanded', 'true'); button.textContent = 'Hide project notes'; } else { notes.setAttribute('hidden', ''); button.setAttribute('aria-expanded', 'false'); button.textContent = 'Read project notes'; } }); });
