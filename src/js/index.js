const servicesExamples = document.querySelector('div.ServicesExamples');
const images = servicesExamples.querySelectorAll('img');
const controls = servicesExamples.querySelector('ul');

let visibleIndex = 0;
let prevVisibleIndex;

function nextSlide() {
  const image = images[visibleIndex];
  
  if (visibleIndex > 0) {
    images[visibleIndex - 1].classList.remove('visible');
  }

  if (prevVisibleIndex === images.length - 1) {
    images[prevVisibleIndex].classList.remove('visible');
  }

  if (image) {
    image.classList.add('visible');
  }

  prevVisibleIndex = visibleIndex;
  visibleIndex = (visibleIndex + 1) % images.length;
}

function main() {
  nextSlide();
  setInterval(nextSlide, 5000);
}

main();
