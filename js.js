//наверх
$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#topNubex').fadeIn();
    } else {
    $('#topNubex').fadeOut();
    }
    });
    $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
    });
//подсказка
$(function(){
    $("[data-tooltip]").mousemove(function (eventObject) {
        $data_tooltip = $(this).attr("data-tooltip");
        $("#tooltip").html($data_tooltip)
            .css({ 
              "top" : eventObject.pageY + 5,
              "left" : eventObject.pageX + 0
            })
            .show();
        }).mouseout(function () {
          $("#tooltip").hide()
            .html("")
            .css({
                "top" : 0,
                "left" : 0
            });
    });
});
//логотип
var logo1 = document.getElementById("logo1");
      if (logo1) {
        logo1.addEventListener("click", function () {
          var anchor = document.querySelector(
            "[data-scroll-to='heroSectionContainer']"
          );
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }      
      //
      var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
      var observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              const targetElement = entry.target;
              targetElement.classList.add("animate");
              observer.unobserve(targetElement);
            }
          }
        },
        {
          threshold: 0.15,
        }
      );      
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.observe(scrollAnimElements[i]);
      }
//открытие картинки в новом окне для просмотра
function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);
  }
  //реклама
  window.addEventListener('load', function() {
    setInterval(function() {
      var ads = [
        "Узнайте про нашу новую коллекцию товаров!",
        "Хотите скидку на следующую покупку? Переходите на наш сайт!",
        "Оформите заказ прямо сейчас и получите бесплатную доставку!",
        "Получите эксклюзивный подарок при покупке от 2000 рублей!",
        "Не упустите шанс получить скидку на весь товарный ассортимент!",
        "Заходите на наш сайт и узнайте, как сделать скидку до 50% на товары!"
      ];
      var randomAd = ads[Math.floor(Math.random() * ads.length)];
      alert(randomAd);
    }, 60000); // показывать рекламу каждую минуту
  });
  //train
  train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 1100) clearInterval(timer);

    }, 20);
  }
//всплывающее окно
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
//смена цвета блока отзыва
            example.onmouseover = function() {
            example.style.background= "#7ac751";
            };
            
            example.onmouseleave = function() {
            example.style.background= "#f8fafb";
            };
//карусель
let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');
let images = document.querySelectorAll('#gallery .photos img');
let i = 0; // номер текущей картинки, на экране
images[i].style.display = 'none'; // прячем текущую картину
i++ ; // увеличиваем переменную i на единицу
if(i >= images.length){
    i = 0; // переменная i равна 0
}
btn_prev.onclick = function(){
images[i].style.display = 'none';
i = i - 1;
if(i < 0){
    i = images.length - 1;
}
images[i].style.display = 'block';
}          