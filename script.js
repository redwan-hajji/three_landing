let img=document.getElementById("logo");
let menu_icon=document.querySelector("header .container  .fa-bars");
let nav = document.querySelector("nav");
let unfocus_menu=document.querySelector(":not(nav)");
let x=document.querySelector("header .container .fa-xmark");
let media_uder_600 = window.matchMedia("(max-width: 600px)");
let media_up_600 = window.matchMedia("(min-width: 600px)");
let media_up_800 = window.matchMedia("(min-width: 800px)");
let media_under_800 = window.matchMedia("max-width: 800px)");
let btn=document.getElementsByClassName("btn");
let right_btn=document.querySelector(".fa-angle-right");
let left_btn=document.querySelector(".fa-angle-left");
// let main_screen=document.querySelector("");
let left_screen=document.querySelector(".left_pic");
let right_screen=document.querySelector(".right_pic");
let middle_screen=document.querySelector(".middle_pic");
let point_one=document.querySelector(".point.one");
let point_two=document.querySelector(".point.two");
let point_three=document.querySelector(".point.three");
let landing=document.querySelector(".landing");
let left_landing_main=document.querySelector(".left");
let right_landing_main=document.querySelector(".right");
let card_one =document.querySelector(".card.one");
let card_two =document.querySelector(".card.two");
let card_three =document.querySelector(".card.three");
let login_card=document.querySelector(".loginCard");

let inpass=document.getElementById("icon");
let passowrd=document.querySelector(".passowrd_input");
let inpass_hidden=document.getElementById("icon_hidden");

let user_name=document.getElementById("user_name");

let currentYear = document.querySelector(".year");
let current_year =new Date()
current_year=current_year.getFullYear();
currentYear.innerHTML=current_year;
// start slide_right_function 
let slide_right_function=function(){
if(point_one.classList.contains("active")){

hiding_screen();

    point_two.classList.add("active");
    point_one.classList.remove("active");
    point_three.classList.remove("active");
    right_screen.classList.remove("slide_right");
    left_screen.classList.add("slide_left_middle");
    left_screen.classList.remove("slide_left");
    right_screen.classList.remove("slide_right_middle");
    right_screen.classList.add("slide_left_middle");
    left_screen.classList.remove("slide_right_middle");
    left_screen.classList.remove("slide_left_middle");

    right_screen.classList.remove("slide_left_middle");
    
    middle_screen.classList.remove("slide_left_middle");
    middle_screen.classList.remove("slide_right_middle");
    middle_screen.classList.remove("slide_left_out");    
    middle_screen.classList.add("slide_left");
    left_screen.classList.add("slide_left_middle");
    
    left_landing_main.classList.add("slide_left");
    left_landing_main.classList.remove("slide_right");

    left_landing_main.style.display="block";
    if(media_up_800.matches){
    right_landing_main.style.display="block";}

    login_card.style.display="none";
  }


  else if(point_two.classList.contains("active")){

hiding_screen();

    point_three.classList.add("active");
    point_one.classList.remove("active");
    point_two.classList.remove("active");
    right_screen.classList.add("slide_left");
    right_screen.classList.remove("slide_right");
    left_screen.classList.remove("slide_right");
    left_screen.classList.remove("slide_left");
    right_screen.classList.remove("slide_right_middle");
    right_screen.classList.remove("slide_left_middle");
    left_screen.classList.remove("slide_right_middle");
    left_screen.classList.remove("slide_left_middle");
    
    middle_screen.classList.remove("slide_right_middle");
    middle_screen.classList.remove("slide_leftmidmiddle");
    middle_screen.classList.remove("slide_right");
    middle_screen.classList.add("slide_left_middle");
    
    right_screen.classList.remove("slide_left_middle"); 

    middle_screen.classList.remove("slide_left");

    right_screen.classList.remove("slide_rimiddle_middle");

    left_landing_main.style.display="none";
    right_landing_main.style.display="none";
    

    card_one.classList.add("up_card");
    card_two.classList.add("up_card");
    card_three.classList.add("up_card");
    card_one.classList.remove("down_card");
    card_two.classList.remove("down_card");
    card_three.classList.remove("down_card");
    // -----------------------------------------------------------------------------------------------
  }
  else if(point_three.classList.contains("active")){

hiding_screen();

    point_one.classList.add("active");
    point_two.classList.remove("active");
    point_three.classList.remove("active");
    left_screen.classList.remove("slide_right_middle");
    left_screen.classList.remove("slide_right");
    left_screen.classList.remove("slide_left");

    right_screen.classList.remove("slide_right_middle");
    right_screen.classList.remove("slide_right");
    right_screen.classList.remove("slide_left");
    right_screen.classList.remove("slide_left_middle");
    
    middle_screen.classList.remove("slide_left_middle");
    middle_screen.classList.remove("slide_left");

    left_screen.classList.remove("slide_left_middle");
    
    right_screen.classList.add("slide_left_middle");
    right_screen.classList.remove("slide_left");

    left_screen.classList.add("slide_left");
    left_screen.classList.remove("slide_left_middle");

    left_landing_main.style.display="none";
    right_landing_main.style.display="none"; 


    card_one.classList.remove("up_card");
    card_two.classList.remove("up_card");
    card_three.classList.remove("up_card");

    card_one.classList.add("down_card");
    card_two.classList.add("down_card");
    card_three.classList.add("down_card");


   login_card.style.display="flex";
}}

// start hiding_screen function
let hiding_screen= function(){
    right_landing_main.style.display="none";
}
// end hiding_screen function

// end slide_right_function

// start slide_left_function
let slide_left_function=function(){
if(point_one.classList.contains("active")){

hiding_screen();

    point_three.classList.add("active");
    point_one.classList.remove("active");
    point_two.classList.remove("active");
    left_screen.classList.remove("slide_left");
    right_screen.classList.add("slide_right");
    left_screen.classList.remove("slide_left_middle");
    left_screen.classList.remove("slide_right_middle");
    right_screen.classList.remove("slide_left_middle");
    right_screen.classList.remove("slide_right_middle");

    left_screen.classList.add("slide_right_middle");
    
    middle_screen.classList.remove("slide_right_middle");

    middle_screen.classList.remove("slide_right");

    left_landing_main.style.display="none";
    right_landing_main.style.display="none"; 
    


    card_one.classList.add("up_card");
    card_two.classList.add("up_card");
    card_three.classList.add("up_card"); 
    
    card_one.classList.remove("down_card");
    card_two.classList.remove("down_card");
    card_three.classList.remove("down_card");

    login_card.style.display="none";
  }
  else if(point_two.classList.contains("active")){

hiding_screen();

    point_one.classList.add("active");
    point_two.classList.remove("active");
    point_three.classList.remove("active");
    left_screen.classList.add("slide_right");
    left_screen.classList.remove("slide_left");
    right_screen.classList.remove("slide_left");
    right_screen.classList.remove("slide_right");
    left_screen.classList.remove("slide_left_middle");
    left_screen.classList.remove("slide_right_middle");
    right_screen.classList.remove("slide_left_middle");
    right_screen.classList.remove("slide_right_middle");
    
    middle_screen.classList.remove("slide_left_middle");
    middle_screen.classList.remove("slide_right_midmiddle");
    middle_screen.classList.remove("slide_left");
    middle_screen.classList.add("slide_right_middle");
    
    left_screen.classList.remove("slide_right_middle"); 

    middle_screen.classList.remove("slide_right");

    left_landing_main.style.display="none";
    right_landing_main.style.display="none"; 

   login_card.style.display="flex";
  }
  else if(point_three.classList.contains("active")){

hiding_screen();

    point_two.classList.add("active");
    point_one.classList.remove("active");
    point_three.classList.remove("active");
    right_screen.classList.remove("slide_left_middle");
    right_screen.classList.remove("slide_left");
    right_screen.classList.remove("slide_right");
    right_screen.classList.add("slide_right_middle");

    left_screen.classList.remove("slide_left_middle");
    left_screen.classList.remove("slide_left");
    left_screen.classList.remove("slide_right");
    left_screen.classList.remove("slide_right_middle");
    
    middle_screen.classList.remove("slide_right_middle");
    middle_screen.classList.add("slide_right");

    left_screen.classList.remove("slide_right_middle"); 

    middle_screen.classList.remove("slide_left_middle");
    middle_screen.classList.add("slide_right");

    left_landing_main.style.display="block";

    left_landing_main.classList.add("slide_right");
    left_landing_main.classList.remove("slide_left");


    card_one.classList.remove("up_card");
    card_two.classList.remove("up_card");
    card_three.classList.remove("up_card");
   
    card_one.classList.add("down_card");
    card_two.classList.add("down_card");
    card_three.classList.add("down_card"); 
    if(media_up_800.matches){
    right_landing_main.style.display="block";
  }

  }}
// end slide_left_function

// start left button
left_btn.addEventListener("click",slide_left_function);

// end left button


// start right button
right_btn.addEventListener("click",slide_right_function);
// end right button



// let down_menu=setInterval(down,5)
// function down(){
//  if(nav.style.width="100%"){
//   clearInterval(down_menu);
//  }else
//  nav.style.width+=10+"px";
// }

// unfocus_menu.addEventListener("click",function(){
//  nav.style.display="none";

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


let three_landing_slide =setInterval(slide_right_function,7000);
landing.addEventListener("mousedown",function(){
  clearInterval(three_landing_slide);
})
landing.addEventListener("mouseup",function(){
  three_landing_slide =setInterval(slide_right_function,7000);
})

// img.style.webkitTransform = 'rotate('+deg+'deg)'; 
// img.style.mozTransform    = 'rotate('+deg+'deg)'; 
// img.style.msTransform     = 'rotate('+deg+'deg)'; 
// img.style.oTransform      = 'rotate('+deg+'deg)'; 
// img.style.transitionDuration = "5s"; 
// img.style.transform = 'rotate(360deg)';
// img.style.transformOrigin="left";

point_three.addEventListener("click",function(){
  if(point_two.classList.contains("active")){
    slide_right_function();
  }
  else if(point_one.classList.contains("active")){
    slide_left_function();
  }
})

point_two.addEventListener("click",function(){
  if(point_one.classList.contains("active")){
    slide_right_function();
  }
  else if(point_three.classList.contains("active")){
    slide_left_function();
  }
})

point_one.addEventListener("click",function(){
  if(point_two.classList.contains("active")){
    slide_left_function();
  }
  else if(point_three.classList.contains("active")){
    slide_right_function();
  }
})
window.addEventListener("resize",function(){
  if(window.innerWidth<=800){
   hiding_screen();  
  }
});

window.addEventListener("resize",function(){
  if(window.innerWidth>800){
    if(left_landing_main.style.display === "block"){
        right_landing_main.style.display = "block";
    }
  }
});
// start password management 

// console.log(passowrd);



inpass.onclick=function(){
 if(passowrd.type === "password"){
  inpass_hidden.style.display="block";
  inpass.style.display="none";
  // inpass.className="fa-solid fa-eye"
 passowrd.type="text";}
 else{
 passowrd.type="password";
   // inpass.className="fa-regular fa-eye-slash"
 inpass_hidden.style.display="none";
 inpass.style.display="block";}
};

inpass_hidden.onclick=function(){
 if(passowrd.type === "password"){
    passowrd.focus();
  inpass_hidden.style.display="block";
  inpass.style.display="none";
  passowrd.type="text";
}
 else{
 passowrd.type="password";
 inpass_hidden.style.display="none";
 inpass.style.display="block";
  passowrd.focus();}
};
inpass.onclick=function(){
 if(passowrd.type === "password"){

  inpass_hidden.style.display="block";
  inpass.style.display="none";
  passowrd.type="text";
      passowrd.focus();
}
 else{
 passowrd.type="password";
 inpass_hidden.style.display="none";
 inpass.style.display="block";
  passowrd.focus();}
};
// end passowrd management
// landing.addEventListener("mousewheel",slide_left_function);
// landing.addEventListener("DOMMouseScroll",slide_right_function);
// landing.addEventListener("click",function(){
// if(passowrd === document.activeElement){
//   clearInterval(three_landing_slide); 
// }
// if(passowrd !== document.activeElement){
//   three_landing_slide =setInterval(slide_right_function,5000);  
// }})

let checkfocus=function(){
  passowrd.addEventListener("click",function(){
  if(passowrd === document.activeElement || user_name === document.activeElement){
  clearInterval(three_landing_slide);
  }
else {three_landing_slide =setInterval(slide_right_function,7000);} })
  
}
let checkfocus_user_name=function(){
  user_name.addEventListener("click",function(){
  if(passowrd === document.activeElement || user_name === document.activeElement){
  clearInterval(three_landing_slide);
  }
else {three_landing_slide =setInterval(slide_right_function,7000);} })
  
}
// let hover_card_login=function(){
//   login_card.addEventListener("mouseenter",function(){
//   clearInterval(three_landing_slide);
//   console.log("entered");
//   })
//   login_card.addEventListener("mouseout",function(){
//     three_landing_slide =setInterval(slide_right_function,5000);
//   console.log("exeted");
//   })
// }

landing.addEventListener("click",checkfocus);
landing.addEventListener("click",checkfocus_user_name);
// landing.addEventListener("click",hover_card_login);

