(function ($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");
  var backTop = $(".btn-back-to-top");
  var isCountDone = false;
  var isAnyOneVisible = false;

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const handleScrollAnimation = () => {
    const scrollElements = document.querySelectorAll(".animateNumber");
    scrollElements.forEach((el) => {
      if (isAnyOneVisible || elementInView(el, 1.15)) {
        isAnyOneVisible = true;
        const updateCount = () => {
          const target = + el.getAttribute('data-number');
          const count = + el.innerText;
          const speed = 5000;
          const inc = target / speed;
          if (count < target) {
            el.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, target > 10 ? 50 : 100);
          } else {
            el.innerText = target;
          }
        }
        isCountDone = true;
        updateCount();
      }
    });
  }

  $(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if ($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }

    const counterAnimation = document.getElementById('work-counter-animation');
    if (counterAnimation.classList.contains('aos-animate') && !isCountDone) {
      handleScrollAnimation();
    }
  });

  backTop.click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });


  toggle.addEventListener("click", function (e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });

  close.addEventListener("click", function (e) {
    menu.classList.remove("open");
  });

  // Close menu after click on smaller screens
  $(window).on("resize", function () {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function () {
        menu.classList.remove("open");
      });
    }
  });

})(jQuery);
