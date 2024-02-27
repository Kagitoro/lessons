



document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          const startY = window.pageYOffset;
          const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset -100;
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




// // Получаем элемент заголовка "Portfolio"
// const titleElement = document.querySelector('.info-port__title');

// // Получаем текст из заголовка
// const titleText = titleElement.textContent;

// // Инициализируем переменную для хранения окрашенного текста с тенью
// let styledTitle = '';

// // Проходим по каждому символу в тексте заголовка
// for (let i = 0; i < titleText.length; i++) {
//     // Если индекс символа нечетный и не является пробелом
//     if (i % 2 === 1 && titleText[i] !== ' ') {
//         // Окрашиваем символ в цвет aqua и добавляем тень
//         styledTitle += `<span style="color: aqua; text-shadow: 0px 0px 50px">${titleText[i]}</span>`;
//     } else {
//         styledTitle += titleText[i]; // Иначе оставляем символ без изменений
//     }
// }

// // Заменяем текст в заголовке на окрашенный с тенью
// titleElement.innerHTML = styledTitle;
