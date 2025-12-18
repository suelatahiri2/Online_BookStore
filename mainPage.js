
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

//loginform

function Login(){
    document.getElementById("LoginBox").style.display = "none";
    document.getElementById("profileBox").style.display = "block";
}

function logout(){
    document.getElementById("profileBox").style.display = "none";
    document.getElementById("LoginBox").style.display = "block";
}

function filterBooks(category){
    const books =document.querySelectorAll(".book-card");

    books.forEach(book =>{
        if(category === "all" || book.CDATA_SECTION_NODE.category === category){
            book.style.display= "block"
        } else{
            book.style.display="none";

        }
    })
}

function searchBooks (){
    const inpput= document.getElementById("searchInput").value.toLowerCase();
    const books = document.querySelectorAll(".book-card");
    books.forEach(book =>{
        const title = book.querySelector("h4").innerText.toLowerCase();
        book.style.display = title.includes (input) ? "block" :"none";

    });

}

function addToCart(){
    alert("Book added to cart!")
}