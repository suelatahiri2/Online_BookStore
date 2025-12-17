let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
   
   
   function nextSlide(){
    if(currentIndex < slides.length - 1){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
    updateSlider();
}

function prevSlide(){
    if(currentIndex > 0){
       currentIndex--;
    }else{
        currentIndex = slides.length - 1;
    }
    updateSlider
}
function updateSlider(){
     slides.forEach ((slide, index) => {
        slide.classList.remove("active");
        if(index === currentIndex){
            slide.classList.add("active");
        }
    }
});

setInterval(() => {
    nextSlide();
}, 4000);

updateSlider();

