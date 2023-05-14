let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

const form = document.querySelector("form");
const sendButton = document.querySelector(".contact-button");

sendButton.addEventListener("click", function () {
  form.reset();
});

// code for image carousel

var responsiveSlider = function (sliderId, sliderWrapId, prevId, nextId) {
  var slider = document.getElementById(sliderId);
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById(sliderWrapId);
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById(prevId);
  var next = document.getElementById(nextId);

  window.addEventListener("resize", function () {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function () {
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = 1)) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function (e) {
    if (e) {
      e.preventDefault();
    }
    if (count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if ((count = items)) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function (e) {
    nextSlide(e);
  });

  prev.addEventListener("click", function (e) {
    prevSlide(e);
  });

  setInterval(function () {
    nextSlide();
  }, 5000);
};

const slidersList = [
  {
    sliderId: "GrabSlider",
    sliderWrapId: "GrabSlideWrap",
    prevId: "GrabPrev",
    nextId: "GrabNext",
  },
  {
    sliderId: "DismSlider",
    sliderWrapId: "DismSlideWrap",
    prevId: "DismPrev",
    nextId: "DismNext",
  },
  {
    sliderId: "DogSlider",
    sliderWrapId: "DogSlideWrap",
    prevId: "DogPrev",
    nextId: "DogNext",
  },
  {
    sliderId: "UtroBSlider",
    sliderWrapId: "UtroBSlideWrap",
    prevId: "UtroBPrev",
    nextId: "UtroBNext",
  },
  {
    sliderId: "JWSlider",
    sliderWrapId: "JWSlideWrap",
    prevId: "JWPrev",
    nextId: "JWNext",
  },
  {
    sliderId: "VillSlider",
    sliderWrapId: "VillSlideWrap",
    prevId: "VillPrev",
    nextId: "VillNext",
  },
];

window.onload = function () {
  slidersList.forEach((e) => {
    responsiveSlider(e.sliderId, e.sliderWrapId, e.prevId, e.nextId);
  });
};
