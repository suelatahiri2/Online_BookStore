let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
   
   
window.nextSlide = function(){
   currentIndex(currentIndex +1 ) % slides.length;
    
    updateSlider();
}

window.prevSlide = function (){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}
function updateSlider(){
     slides.forEach ((slide, index) => {
        slide.classList.remove("active");
        if(index === currentIndex){
            slide.classList.add("active");
        }
    });
};

setInterval(() => {
    nextSlide();
}, 4000);

updateSlider();

