// Функція для показу цін
function showPrices(category) {
  // Спочатку приховуємо всі таблиці
  const allPrices = document.querySelectorAll('.prices');
  allPrices.forEach(price => {
    price.classList.add('visually-hidden');
  });

  // Потім показуємо вибрану таблицю
  const selectedCategory = document.querySelector(`.${category}`);
  if (selectedCategory) {
    selectedCategory.classList.remove('visually-hidden');
  }
}

// Додаємо обробник подій до кожної кнопки
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.price__btn');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      showPrices(category);
    });
  });
});
