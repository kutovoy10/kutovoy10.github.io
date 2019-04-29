// Вход

var showEnter = function (state) {
    document.getElementById('enter').style.display = state;
    document.getElementById('enter-overflow').style.display = state;
};

// Ваш город

var showYourCity = function (state) {
    document.getElementById('your-city').style.display = state;
    document.getElementById('your-city-overflow').style.display = state;
};

// Регистрация

var showRegistr = function (state) {
    document.getElementById('registr').style.display = state;
    document.getElementById('registr-overflow').style.display = state;
};

// burger-menu

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
})

