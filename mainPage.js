
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