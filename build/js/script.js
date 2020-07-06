'use strict';

var posInit = 0;
var posLastFinal = 0;
var posFinal = 0;
var DELTA = 25;
var position = 0;
var swipeEndWrapper = function () {};

var moveToRight = function (widthPic, countPic, picsList, picsListEl) {
  position -= widthPic * countPic;
  position = Math.max(position, -widthPic * (picsListEl.length - countPic));
  picsList.style.marginLeft = position + 'px';
};

var moveToLeft = function (widthPic, countPic, picsList) {
  position += widthPic * countPic;
  position = Math.min(position, 0);
  picsList.style.marginLeft = position + 'px';
};

var getEvent = function () {
  return event.type.search('touch') !== -1 ? event.touches[0] : event;
};

var swipeStartHandler = function (widthPic, countPic, picsList, picsListEl) {
  var evt = getEvent();
  posInit = evt.clientX;

  swipeEndWrapper = function () {
    swipeEndHandler(widthPic, countPic, picsList, picsListEl);
  };

  document.addEventListener('touchmove', swipeActionHandler);
  document.addEventListener('touchend', swipeEndWrapper);
};

var swipeActionHandler = function () {
  var evt = getEvent();
  posFinal = evt.clientX;
};

var swipeEndHandler = function (widthPic, countPic, picsList, picsListEl) {
  document.removeEventListener('touchmove', swipeActionHandler);
  document.removeEventListener('touchend', swipeEndWrapper);

  var posDelta = posLastFinal !== posFinal ? posInit - posFinal : 0;
  posLastFinal = posFinal;

  if (Math.abs(posDelta) < DELTA) {
    return;
  }

  if (posDelta > 0) {
    moveToRight(widthPic, countPic, picsList, picsListEl);
  } else {
    moveToLeft(widthPic, countPic, picsList);
  }
};

// page-scroll
var membershipLink = document.querySelector('#to-membership');
var membershipLinkFooter = document.querySelector('#to-membership-footer');

var scrollPageHandler = function (evt) {
  evt.preventDefault();
  window.scroll({
    top: 1400,
    left: 0,
    behavior: 'smooth'
  });
};

membershipLink.addEventListener('click', scrollPageHandler);
membershipLinkFooter.addEventListener('click', scrollPageHandler);

// membership-slider
(function () {
  var tabButtons = document.querySelectorAll('.membership__button button');
  var tabPanes = document.querySelectorAll('.membership__pane');

  for (var i = 0; i < tabButtons.length; i++) {

    tabButtons[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      var activeTabAttr = evt.target.getAttribute('data-tab');
      for (var j = 0; j < tabButtons.length; j++) {
        var contentAttr = tabPanes[j].getAttribute('data-tab-content');
        if (activeTabAttr === contentAttr) {
          tabButtons[j].parentNode.classList.add('membership__button--active');
          tabPanes[j].classList.add('membership__pane--active');
        } else {
          tabButtons[j].parentNode.classList.remove('membership__button--active');
          tabPanes[j].classList.remove('membership__pane--active');
        }
      }
    });
  }
})();


// trainers-slider
(function () {

  var slider = document.querySelector('.trainers');
  var picsList = document.querySelector('.trainers__members ul');
  var picsListEl = document.querySelectorAll('.trainers__members li');

  if (!(slider && picsList && picsListEl)) {
    return;
  }

  var widthPic = 300;
  var countPic = 2;

  var getParam = function () {
    if (window.screen.width < 1300 && window.screen.width > 1200) {
      widthPic = 300;
      countPic = 3;
    } else {
      if (window.screen.width < 1200 && window.screen.width > 767) {
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
    }
  };

  getParam();

  window.onresize = function () {
    getParam();
  };

  slider.querySelector('.trainers__button--left button').onclick = function () {
    moveToLeft(widthPic, countPic, picsList);
  };

  slider.querySelector('.trainers__button--right button').onclick = function () {
    moveToRight(widthPic, countPic, picsList, picsListEl);
  };

  slider.addEventListener('touchstart', function () {
    swipeStartHandler(widthPic, countPic, picsList, picsListEl);
  });
})();


// reviews-slider

(function () {
  var slider = document.querySelector('.reviews');
  var picsList = document.querySelector('.reviews ul');
  var picsListEl = document.querySelectorAll('.reviews li');

  if (!(slider && picsList && picsListEl)) {
    return;
  }

  var widthPic = 560;
  var countPic = 1;
  var setCardWidth = function (item) {
    item.style.width = window.screen.width - (window.screen.width * 0.29) + 'px';
  };

  var getParam = function () {
    if (window.screen.width < 1366 && window.screen.width > 767) {
      widthPic = 566;
      countPic = 1;
    } else {
      if (window.screen.width < 768) {
        widthPic = Math.round(window.screen.width - (window.screen.width * 0.29));
        console.log(widthPic)
        countPic = 1;
        picsListEl.forEach(setCardWidth);
      } else {
        widthPic = 560;
        countPic = 1;
      }
    }
  };

  getParam();

  window.onresize = function () {
    getParam();
  };

  slider.querySelector('.reviews__button--left button').onclick = function () {
    moveToLeft(widthPic, countPic, picsList);
  };

  slider.querySelector('.reviews__button--right button').onclick = function () {
    moveToRight(widthPic, countPic, picsList, picsListEl);
  };

  slider.addEventListener('touchstart', function () {
    swipeStartHandler(widthPic, countPic, picsList, picsListEl);
  });

})();
