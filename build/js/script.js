'use strict';


var membershipLink = document.querySelector('#to-membership');
var membershipLinkFooter = document.querySelector('#to-membership-footer')

var scrollPageHandler = function (evt) {
  evt.preventDefault();
  window.scroll({
    top: 1400,
    left: 0,
    behavior: 'smooth'
  });
}

membershipLink.addEventListener('click', scrollPageHandler);
membershipLinkFooter.addEventListener('click', scrollPageHandler);

(function () {
  var tabButtons = document.querySelectorAll(".membership__button button");
  var tabPanes = document.querySelectorAll(".membership__pane");

  for (var i = 0; i < tabButtons.length; i++) {

    tabButtons[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      var activeTabAttr = evt.target.getAttribute("data-tab");
      for (var j = 0; j < tabButtons.length; j++) {
        console.log(j)
        var contentAttr = tabPanes[j].getAttribute("data-tab-content");
        if (activeTabAttr === contentAttr) {
          console.log('hry')
          tabButtons[j].parentNode.classList.add("membership__button--active");
          tabPanes[j].classList.add("membership__pane--active");
        } else {
          console.log('ggg')
          tabButtons[j].parentNode.classList.remove("membership__button--active");
          tabPanes[j].classList.remove("membership__pane--active");
        }
      };
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

  var position = 0;

  var widthPic = 300;
  var countPic = 2;

  var getParam = function () {
    if (window.screen.width < 1300 && window.screen.width > 1200) {
      widthPic = 300;
      countPic = 3;
      console.log('grt')
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
  var setCardWidth = function (item) {
    console.log(item.style.width)
    item.style.width = window.screen.width - (window.screen.width * 0.29) + 'px';
    console.log('hru')
  }
  var getParam = function () {
    if (window.screen.width < 1366 && window.screen.width > 767) {
      widthPic = 566;
      countPic = 1;
    } else {
      if (window.screen.width < 768) {
        widthPic = window.screen.width - (window.screen.width * 0.3);
        countPic = 1;
        picsListEl.forEach(setCardWidth)
        console.log('haha')
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
