const button_prev = document.querySelector(".slider__mainArrow_left");
const button_next = document.querySelector(".slider__mainArrow_right");

const slides = document.getElementsByClassName("slider__img");
const sliderDots = document.getElementsByClassName("slider__dot");

let idx = 0;

function changeSlide (event) {
    let isForward = event.currentTarget.classList[1] == "slider__mainArrow_right";
    
    if ((isForward && idx != slides.length-1) || (!isForward && idx != 0)) {
        slides[idx].style.opacity = 0;
        slides[idx].classList.remove("slider__img_active");
        sliderDots[idx].classList.remove("slider__dot_active");
        
        if (isForward) idx++;
        else idx--;

        button_prev.classList.add("slider__mainArrow_active");
        button_next.classList.add("slider__mainArrow_active");

        if (idx == slides.length - 1) {
            button_next.classList.remove("slider__mainArrow_active");
        }

        if (idx == 0) {
            button_prev.classList.remove("slider__mainArrow_active");
        }

        slides[idx].classList.add("slider__img_active");
        sliderDots[idx].classList.add("slider__dot_active");
        setTimeout(() => {
            slides[idx].style.opacity = 1;
        }, 100);
    }
}

button_prev.addEventListener("click", changeSlide);
button_next.addEventListener("click", changeSlide);