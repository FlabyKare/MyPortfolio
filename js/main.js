//! Плавная прогрузка Элементов

function onEntry(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         change.target.classList.add("element-show");
      }
   });
}

let observer = new IntersectionObserver(onEntry);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
   observer.observe(elm);
}

//!    Preloader

window.onload = function () {
   document.body.classList.add("loaded_hiding");
   window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
   }, 500);
};

//! Popup

const popupBackBlack = document.querySelector(".popup_back_black");
const popup = document.querySelectorAll(".popup");
const popupWrapper = document.querySelector(".popup_wrapper");
const close = document.querySelector(".close");
const popupItemValues = document.querySelectorAll(".popup_item_value");

let bodyWidth = document.body.clientWidth;
const name = document.querySelector(".form_name");
const phone = document.querySelector(".form_tel");
const email = document.querySelector(".form_site");

function popupActive() {
   popup.forEach((popup_page) => {
      popup_page.classList.toggle("active");
   });

   popupItemValues.forEach((popupItemValuesNull) => {
      popupItemValuesNull.value = "";
   });
}
popupBackBlack.addEventListener("click", () => {
   popupActive();
});
close.addEventListener("click", () => {
   popupActive();
});

const emailIcons = document.querySelectorAll(".popup_call");
for (icon of emailIcons) {
   icon.addEventListener("click", () => {
      popupActive();
   });
}

//! маска ввода телефона

window.addEventListener("DOMContentLoaded", function () {
   [].forEach.call(document.querySelectorAll(".tel"), function (input) {
      var keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
               return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i);
         }
         var reg = matrix
            .substr(0, this.value.length)
            .replace(/_+/g, function (a) {
               return "\\d{1," + a.length + "}";
            })
            .replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (
            !reg.test(this.value) ||
            this.value.length < 5 ||
            (keyCode > 47 && keyCode < 58)
         )
            this.value = new_value;
         if (event.type == "blur" && this.value.length < 17) this.value = "";
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
   });
});
