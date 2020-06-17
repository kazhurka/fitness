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

// trainers-slider

(function () {
  var slider = document.querySelector('.trainers');
  var picsList = document.querySelector('.trainers__members ul');
  var picsListEl = document.querySelectorAll('.trainers__members li');

  if (!(slider && picsList && picsListEl)) {
    return;
  }

  var position = 0;

  var widthPic = 300;
  var countPic = 2;

  var getParam = function () {
    if (window.screen.width < 1366 && window.screen.width > 767) {
      widthPic = 298;
      countPic = 2;
    } else {
      if (window.screen.width < 768) {
        widthPic = 256;
        countPic = 1;

      } else {
        widthPic = 300;
        countPic = 4;
      }
    }
  };

  getParam();


  slider.querySelector('.trainers__button--left button').onclick = function () {
    position += widthPic * countPic;
    position = Math.min(position, 0);
    picsList.style.marginLeft = position + 'px';

  };

  slider.querySelector('.trainers__button--right button').onclick = function () {
    position -= widthPic * countPic;
    position = Math.max(position, -widthPic * (picsListEl.length - countPic));
    picsList.style.marginLeft = position + 'px';
  };


})();


// reviews-slider

(function () {
  var slider = document.querySelector('.reviews');
  var picsList = document.querySelector('.reviews ul');
  var picsListEl = document.querySelectorAll('.reviews li');

  if (!(slider && picsList && picsListEl)) {
    return;
  }

  var position = 0;

  var widthPic = 580;
  var countPic = 1;

  var getParam = function () {
    if (window.screen.width < 1366 && window.screen.width > 767) {
      widthPic = 566;
      countPic = 1;
    } else {
      if (window.screen.width < 768) {
        widthPic = 226;
        countPic = 1;

      } else {
        widthPic = 560;
        countPic = 1;
      }
    }
  };

  getParam();


  slider.querySelector('.reviews__button--left button').onclick = function () {
    position += widthPic * countPic;
    position = Math.min(position, 0);
    picsList.style.marginLeft = position + 'px';

  };

  slider.querySelector('.reviews__button--right button').onclick = function () {
    position -= widthPic * countPic;
    position = Math.max(position, -widthPic * (picsListEl.length - countPic));
    picsList.style.marginLeft = position + 'px';
  };


})();
