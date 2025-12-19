
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

<<<<<<< HEAD

=======
>>>>>>> 123fcc523485c6b685a713522ebcabb4f6a490af
=======
function login(){
    const loginBox=document.getElementById("LoginBox");
    const profileBox=document.getElementById("profileBox");

    if (!loginBox || !profileBox) return;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "sarah@gmail.com" && password === "123456"){
        loginBox.style.display = "none";
        profileBox.style.display = "block";
    }
else {
    alert("Email ose password i gabuar")
}
}

function logout(){
    const loginBox = document.getElementById("LoginBox");
    const profileBox = document.getElementById("profileBox");

    if (!loginBox || !profileBox) return;

    profileBox.style.display = "none";
    loginBox.style.display = "block";
>>>>>>> ecd8e4d245b7b54b670f9c53aaa8be615fcd1489
}