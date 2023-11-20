function showPrices(category) {
  const allPrices = document.querySelectorAll('.prices');
  console.log('click');
}

(() => {
  const refs = {
    allPrices: document.querySelector('.prices'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function showPrices() {
    console.log('click', click);
  }
})();
