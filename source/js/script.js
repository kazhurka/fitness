'use strict';
var buttonsListEl = document.querySelectorAll('.membership__button');

var picsList = document.querySelector('.membership__offers ul');


var position = 0;

var widthPic = 400;
var countPic = 3;

var getParam = function () {
  if (window.screen.width < 1200 && window.screen.width > 767) {
    widthPic = 488;
  } else {
    if (window.screen.width < 768) {
      widthPic = 419;
    } else {
      widthPic = 400;
    }
  }
};


getParam();
buttonsListEl.forEach(function (item) {

  item.onclick = function (evt) {
    event.preventDefault();
    var activePage = document.querySelector('.membership__button--active');
    activePage.classList.remove('membership__button--active');
    var buttonsListArr = Array.from(buttonsListEl);
    position = -buttonsListArr.indexOf(evt.target.parentNode) * (widthPic * countPic);
    if (screen.width > 1200) {
      picsList.style.marginLeft = position + 'px';
      evt.target.parentNode.classList.add('membership__button--active');
    } else {
      picsList.style.marginTop = position + 'px';
      evt.target.parentNode.classList.add('membership__button--active');
    }

  };
});
