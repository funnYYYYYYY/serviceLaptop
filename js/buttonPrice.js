function showPrices(category, clickedButton) {
  const allPrices = document.querySelectorAll('.prices');
  const allButtons = document.querySelectorAll('.price__btn');
  allPrices.forEach(price => {
    price.classList.add('visually-hidden');
  });
  allButtons.forEach(button => {
    button.classList.remove('active');
  });

  const selectedCategory = document.querySelector(`.${category}`);
  if (selectedCategory) {
    selectedCategory.classList.remove('visually-hidden');
  }

  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.price__btn');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      showPrices(category, this);
    });
  });

  // Активувати кнопку "Комп'ютер" за замовчуванням
  const defaultCategory = 'laptop';
  const defaultButton = document.querySelector(`.price__btn[data-category="${defaultCategory}"]`);
  if (defaultButton) {
    showPrices(defaultCategory, defaultButton);
  }
});
