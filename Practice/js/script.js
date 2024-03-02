
// ПЛАВНЫЙ ПЕРЕХОД ВНИЗ И ВВЕРХ
document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          const startY = window.pageYOffset;
          const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset -150;
          const scrollStep = 20; // Фиксированная скорость прокрутки
          let currentScrollPosition = startY;
          const direction = startY > targetY ? -1 : 1; // Определение направления прокрутки

          function scroll() {
              if ((direction === 1 && currentScrollPosition >= targetY) || (direction === -1 && currentScrollPosition <= targetY)) {
                  window.scrollTo(0, targetY);
                  return;
              }
              currentScrollPosition = currentScrollPosition + direction * scrollStep; // Умножаем на направление
              window.scrollTo(0, currentScrollPosition);
              requestAnimationFrame(scroll);
          }

          scroll();
      }
  });
});




// АКТИВНАЯ КНОПКА ПРИ ПЕРЕХОДЕ ПО ЯКОРЮ



// Функция для удаления класса active у всех кнопок меню
function removeActiveClass() {
    document.querySelectorAll('.menu__link').forEach(link => {
        link.classList.remove('active');
    });
}

// Функция для установки класса active для кнопки меню, соответствующей текущему якорю
function setActiveLink() {
    const currentAnchor = window.location.hash;
    const correspondingLink = document.querySelector(`.menu__link[href="${currentAnchor}"]`);
    if (correspondingLink) {
        removeActiveClass(); // Удаляем класс active у всех кнопок меню
        correspondingLink.classList.add('active'); // Устанавливаем класс active для соответствующей кнопки меню
    }
}

// Вызываем функцию setActiveLink при загрузке страницы и при изменении якоря
window.addEventListener('DOMContentLoaded', setActiveLink);
window.addEventListener('hashchange', setActiveLink);

// Добавляем обработчики событий для каждой кнопки меню
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function(event) {
        removeActiveClass(); // Удаляем класс active у всех кнопок меню
        this.classList.add('active'); // Устанавливаем класс active для текущей кнопки меню
    });
});






// ПЛАВНАЯ ПРОКРУТКА КОЛЕСИКА МЫШКИ НА САЙТЕ


SmoothScroll({
// Время скролла 400 = 0.4 секунды
animationTime : 800,
// Размер шага в пикселях
stepSize : 75,

// Дополнительные настройки:

// Ускорение
accelerationDelta : 30,
// Максимальное ускорение
accelerationMax : 2,

// Поддержка клавиатуры
keyboardSupport : true,
// Шаг скролла стрелками на клавиатуре в пикселях
arrowScroll : 50,

// Pulse (less tweakable)
// ratio of "tail" to "acceleration"
pulseAlgorithm : true,
pulseScale : 4,
pulseNormalize : 1,

// Поддержка тачпада
touchpadSupport : true,
})








document.querySelector(".header__burger-menu").addEventListener('click', function() {
    this.classList.toggle("active");
    document.querySelector('menu').classList.toggle('open');

})
  