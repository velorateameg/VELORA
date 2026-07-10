
//============== MOUSE GLOW ==============


const glow = document.querySelector(".glow");


window.addEventListener("mousemove",(e)=>{


if(glow){

let x = e.clientX;
let y = e.clientY;


glow.style.left = `${x - 350}px`;

glow.style.top = `${y - 350}px`;

}


});










// تكبير الكيرسر على العناصر القابلة للضغط

const hoverElements = document.querySelectorAll(
"a, button, .card, .step, .feature-box"
);



hoverElements.forEach(element=>{


element.addEventListener("mouseenter",()=>{

cursor.style.transform =
"translate(-50%,-50%) scale(2)";

cursor.style.background =
"rgba(168,85,247,.2)";


});



element.addEventListener("mouseleave",()=>{


cursor.style.transform =
"translate(-50%,-50%) scale(1)";


cursor.style.background =
"transparent";


});


});







//============== SCROLL REVEAL ==============


const reveals = document.querySelectorAll(".reveal");



function revealOnScroll(){


reveals.forEach(element=>{


let windowHeight = window.innerHeight;


let elementTop =
element.getBoundingClientRect().top;



if(elementTop < windowHeight - 120){


element.classList.add("active");


}



});


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();







//============== NAVBAR EFFECT ==============


const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


nav.style.background =
"rgba(10,10,18,.85)";


}

else{


nav.style.background =
"rgba(15,15,25,.55)";


}


});
const portfolio = document.getElementById("portfolioModal");


function openPortfolio(){

portfolio.classList.add("active");

}



function closePortfolio(){

portfolio.classList.remove("active");

}



// قفل لما تدوس برا النافذة

portfolio.addEventListener("click",(e)=>{

if(e.target === portfolio){

closePortfolio();

}

});
function openPortfolio(){
    document.getElementById("portfolioModal").style.display="flex";
}

function closePortfolio(){
    document.getElementById("portfolioModal").style.display="none";
}
const serviceModal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const worksGrid = document.getElementById("worksGrid");


const servicesWorks = {

video:{
title:"Video Editing",
items:[
"edit1.jpg",
"edit2.jpg",
"edit3.jpg"
]
},


design:{
title:"Graphic Design",
items:[
"design1.jpg",
"design2.jpg",
"design3.jpg"
]
},


motion:{
title:"Motion Graphics",
items:[
"motion1.jpg",
"motion2.jpg",
"motion3.jpg"
]
}


};



function openService(type){


modalTitle.innerHTML = servicesWorks[type].title;


worksGrid.innerHTML="";


servicesWorks[type].items.forEach(item=>{


worksGrid.innerHTML += `

<div class="work">

<img src="images/${item}">

</div>

`;


});


serviceModal.classList.add("active");


}



function closeService(){

serviceModal.classList.remove("active");

}
window.addEventListener("load", () => {

    const page = document.querySelector(".page-content");

    if(page){
        page.classList.add("loaded");
    }

});