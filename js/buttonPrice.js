// Функція для показу цін та встановлення класу active
function showPrices(category, clickedButton) {
  // Приховуємо всі таблиці та видаляємо клас active з усіх кнопок
  const allPrices = document.querySelectorAll('.prices');
  const allButtons = document.querySelectorAll('.price__btn');
  allPrices.forEach(price => {
    price.classList.add('visually-hidden');
  });
  allButtons.forEach(button => {
    button.classList.remove('active');
  });

  // Показуємо вибрану таблицю
  const selectedCategory = document.querySelector(`.${category}`);
  if (selectedCategory) {
    selectedCategory.classList.remove('visually-hidden');
  }

  // Додаємо клас active до натиснутої кнопки
  clickedButton.classList.add('active');
}

// Додаємо обробник подій до кожної кнопки
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.price__btn');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      showPrices(category, this);
    });
  });
});
