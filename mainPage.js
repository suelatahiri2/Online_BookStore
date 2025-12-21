
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
    alert("Email or password is wrong!")
}
}

function logout(){
    const loginBox = document.getElementById("LoginBox");
    const profileBox = document.getElementById("profileBox");

    if (!loginBox || !profileBox) return;

    profileBox.style.display = "none";
    loginBox.style.display = "block"
}

// Signup modal behavior
document.addEventListener('DOMContentLoaded', function(){
    const openBtn = document.getElementById('openSignup');
    const modal = document.getElementById('signupModal');
    const closeBtn = modal ? modal.querySelector('.modal-close') : null;
    const signupForm = document.getElementById('signupForm');

    function openModal(){
        if(!modal) return;
        modal.setAttribute('aria-hidden','false');
        const first = modal.querySelector('input');
        if(first) first.focus();
    }
    function closeModal(){
        if(!modal) return;
        modal.setAttribute('aria-hidden','true');
        if(openBtn) openBtn.focus();
    }

    if(openBtn) openBtn.addEventListener('click', function(e){ e.preventDefault(); openModal(); });
    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(modal) modal.addEventListener('click', function(e){ if(e.target === modal) closeModal(); });

    if(signupForm){
        signupForm.addEventListener('submit', function(e){
            e.preventDefault();
            // Simple client-side feedback — in real app, submit to server
            alert('Account created — you can now log in.');
            signupForm.reset();
            closeModal();
        });
    }
});