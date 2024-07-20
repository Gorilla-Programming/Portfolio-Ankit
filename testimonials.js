const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const testimonialWrapper = document.getElementById('testimonial-wrapper');

let currentTestimonialIndex = 0;
const totalTestimonials = document.querySelectorAll('.testimonial').length;
const testimonialsPerView = 3;

leftButton.addEventListener('click', () => {
    if (currentTestimonialIndex > 0) {
        currentTestimonialIndex--;
        updateTestimonialPosition();
    }
});

rightButton.addEventListener('click', () => {
    if (currentTestimonialIndex < totalTestimonials - testimonialsPerView) {
        currentTestimonialIndex++;
        updateTestimonialPosition();
    }
});

function updateTestimonialPosition() {
    testimonialWrapper.style.transform = `translateX(-${currentTestimonialIndex * (100 / testimonialsPerView)}%)`;
}
