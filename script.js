const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});
const form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("Thank You For your message,You have been Succesfully Scammed.");
    form.reset();
});