const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

const slide = document.getElementById("slide");
const counter = document.getElementById("counter");

function update() {
    slide.src = images[index];
    counter.textContent = `Изображение ${index + 1} из ${images.length}`;
}

function next() {
    index = (index + 1) % images.length;
    update();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    update();
}

update();
