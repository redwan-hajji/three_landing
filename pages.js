let menu_icon=document.querySelector("header .container  .fa-bars");
let nav = document.querySelector("nav");
let x=document.querySelector("header .container .fa-xmark");

let currentYear = document.querySelector(".year");
let current_year =new Date()
current_year=current_year.getFullYear();
currentYear.innerHTML=current_year;

menu_icon.addEventListener("click",function(){
  nav.classList.remove("up_up");
 nav.classList.add("down_down");
 nav.classList.add("menu_down_effect");
})
x.addEventListener("click",function(){
 nav.classList.remove("down_down");
 nav.classList.add("up_up");
 nav.classList.remove("menu_down_effect"); 
})
