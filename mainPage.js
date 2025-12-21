
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



function Login(){
    document.getElementById("LoginBox").style.display = "none";
    document.getElementById("profileBox").style.display = "block";
}

function logout(){
    document.getElementById("profileBox").style.display = "none";
    document.getElementById("LoginBox").style.display = "block";
}

function filterBooks(category){
    const books = document.querySelectorAll('.book-card');
    const cat = (category || 'all').toLowerCase();
    books.forEach(book => {
        const bcat = (book.dataset.category || '').toLowerCase();
        if (cat === 'all' || !cat) {
            book.style.display = '';
        } else if (bcat === cat) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

function searchBooks (){
    const inputEl = document.getElementById('searchInput');
    if (!inputEl) return;
    const q = inputEl.value.trim().toLowerCase();
    const books = document.querySelectorAll('.book-card');
    books.forEach(book =>{
        const titleEl = book.querySelector('h4') || book.querySelector('h3') || book.querySelector('.title');
        const title = titleEl ? titleEl.innerText.toLowerCase() : '';
        book.style.display = title.includes(q) ? '' : 'none';
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
      
            alert('Account created — you can now log in.');
            signupForm.reset();
            closeModal();
        });
    }

    // Sidebar category click handlers: add active state and call filterBooks
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', function(){
                const category = this.textContent.trim().toLowerCase();
                // normalize label -> category value (handle 'all')
                const map = { 'all': 'all', 'fiction': 'fiction', 'none-fiction': 'non-fiction', 'non-fiction': 'non-fiction', 'children': 'children', 'academic': 'academic', 'business': 'business' };
                const cat = map[category] || category;
                // set active class
                sidebar.querySelectorAll('li').forEach(x => x.classList.remove('active'));
                this.classList.add('active');
                filterBooks(cat);
            });
        });
    }
});