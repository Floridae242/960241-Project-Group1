var menuButton = document.getElementById('menu-button');
var navigation = document.getElementById('site-navigation');
menuButton.addEventListener('click', function () { navigation.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', navigation.classList.contains('is-open')); });
var projectButtons = document.querySelectorAll('.project-toggle');
projectButtons.forEach(function (button) { button.addEventListener('click', function () { var notes = document.getElementById(button.getAttribute('data-target')); var isHidden = notes.hasAttribute('hidden'); if (isHidden) { notes.removeAttribute('hidden'); button.setAttribute('aria-expanded', 'true'); button.textContent = 'Hide project notes'; } else { notes.setAttribute('hidden', ''); button.setAttribute('aria-expanded', 'false'); button.textContent = 'Read project notes'; } }); });
