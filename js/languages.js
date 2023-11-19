document.querySelector('.dropbtn').addEventListener('click', function () {
  document.querySelector('.dropdown-content').classList.toggle('show');
});

// Закривати випадаюче меню при кліку поза його межами
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
