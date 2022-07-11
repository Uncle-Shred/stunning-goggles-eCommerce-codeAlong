var slidingMenu = function () {
    var menuToggle = document.querySelector('.menuButton');
    var menu = document.querySelector('.slideOutNav');
    var menuClose = document.querySelector('.menuClose');

    menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.toggle('navOpen');
    });

    menuClose.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.toggle('navOpen');
    });
}

slidingMenu();
