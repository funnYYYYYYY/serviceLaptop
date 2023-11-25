document.querySelector('.social__svg').addEventListener('mouseover', function () {
  this.querySelectorAll('path').forEach(function (path) {
    path.style.stroke = 'rgba(255, 214, 0, 1)';
  });
});

document.querySelector('.social__svg').addEventListener('mouseout', function () {
  this.querySelectorAll('path').forEach(function (path) {
    path.style.stroke = 'black';
  });
});
