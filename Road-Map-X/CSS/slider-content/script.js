const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentSlide = 0;

function changeSlide(n) {
    currentSlide += n;

    if (currentSlide < 0) {
        currentSlide = slider.children.length - 1;
    } else if (currentSlide >= slider.children.length) {
        currentSlide = 0;
    }

    updateSlider();
}

function updateSlider() {
    for (let i = 0; i < slider.children.length; i++) {
        slider.children[i].style.display = "none";
    }

    slider.children[currentSlide].style.display = "block";
}

prevButton.addEventListener("click", () => {
    changeSlide(-1);
});

nextButton.addEventListener("click", () => {
    changeSlide(1);
});

updateSlider();
