const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");
const body = document.querySelector("body");
let activeSlideIndex = 0;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;
if (body.offsetWidth <= 440) {
  sidebar.style.top = "";
  sidebar.style.left = `-${(slideCount - 1) * 100}vw`;
}
window.addEventListener("resize", () => {});

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex >= slideCount) {
      activeSlideIndex = 0;
    }
  } else {
    activeSlideIndex--;
    if (activeSlideIndex <= 0) {
      activeSlideIndex = slideCount - 1;
    }
  }

  const height = container.clientHeight;
  const width = container.clientWidth;

  if (body.offsetWidth > 440) {
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  } else if (body.offsetWidth <= 440) {
    mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`;
    sidebar.style.transform = `translateX(${activeSlideIndex * width}px)`;
  }
}

document.addEventListener("keydown", function (event) {
  if (body.offsetWidth > 440) {
    if (event.key === "ArrowUp") {
      changeSlide("up");
    } else if (event.key === "ArrowDown") {
      changeSlide("down");
    }
  } else if (body.offsetWidth <= 440) {
    if (event.key === "ArrowLeft") {
      changeSlide("up");
    } else if (event.key === "ArrowRight") {
      changeSlide("down");
    }
  }
});
