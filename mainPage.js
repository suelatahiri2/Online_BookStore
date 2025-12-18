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