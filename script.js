var slidingMenu = function () {
    var menuToggle = document.querySelector('.mainMenu');
    var body = document.body;

    menuToggle.addEventListener('click', function (e) {
        e.preventDefault();
        body.classList.toggle('slideOutNav');
    });
}

slidingMenu();
