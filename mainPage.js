<<<<<<< HEAD
let index = 0;
let slides = document.getElementsByClassName("slide");

    function showSlide(){
    for (let i = 0;i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
}

function changeSlide(step){
    index += step;

    if (index >= slides.length){
        index = 0;
    }
    if(index < 0){
        index = slides.length -1;
    }
    showSlide();
}
showSlide();
=======
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

>>>>>>> dd20fcdfa42be245a9cb69f1ee89b85be05858f8
