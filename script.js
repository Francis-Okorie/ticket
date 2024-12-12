const menuToggle = document.querySelector(".hamburger");
const menuItem = document.querySelector('.nav-main');
const closeNav = document.querySelector(".closetoggle");
const primaryNav = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-toggle");
const minus2 = document.querySelector(".minus2");
const num2 = document.querySelector(".num2");
const plus2 = document.querySelector(".plus2");
const ticketAmount = document.querySelector(".ticketamount");
const totalAmount = document.querySelector(".ticket-total-amount");
const buttons = document.querySelectorAll(".button-three");
const naviationBar = document.querySelector(".navigation");
const loader = document.querySelector(".preloader");
let lastScrollY = window.scrollY;
const audio = document.getElementById('audio');
const playpauseBtn = document.getElementById('playpause');
const priceCounter= document.querySelectorAll(".price-counter");
const regular = document.querySelector(".regular");
let count = 0;
let a = 0



let regularPlusbtn = regular.querySelector(".plus");
let regularMinusbtn = regular.querySelector(".minus");
const regAmount = regular.querySelector(".reg-amount");
let counter = regular.querySelector(".num");
let subTotal = document.querySelector(".ticket-total-amount");

regularPlusbtn.addEventListener("click", ()=>{
  
  let currContvalue = parseInt(counter.textContent);
  

  currContvalue++
  
  counter.textContent = currContvalue
  updateSubtotal();
  let stringifycount = JSON.stringify(currContvalue);
  console.log(stringifycount);
  localStorage.setItem("regularCount", stringifycount);
  console.log(currContvalue);
   
  
  
});

regularMinusbtn.addEventListener("click", ()=>{
  let currContvalue = parseInt(counter.textContent);
  
  if(currContvalue !== 0) {
    currContvalue--
  counter.textContent = currContvalue
  updateSubtotal();

  let stringifycount = JSON.stringify(currContvalue);
  console.log(stringifycount);
  localStorage.setItem("regularCount", stringifycount);

  }

});


let vipMain = document.querySelector(".vip");
let vipPlusbtn = vipMain.querySelector(".plus");
let vipMinusbtn = vipMain.querySelector(".minus");
const vipAmount = vipMain.querySelector(".vip-amount");
let vipCounter = vipMain.querySelector(".num");

vipPlusbtn.addEventListener("click", ()=>{
  let currVipcontvalue = parseInt(vipCounter.textContent);

  currVipcontvalue++;
  vipCounter.textContent = currVipcontvalue;
  updateSubtotal();

  let stringifycount = JSON.stringify(currVipcontvalue);
  console.log(stringifycount);
  localStorage.setItem("vipCount", stringifycount);
});

vipMinusbtn.addEventListener("click", ()=>{
  let currVipcontvalue = parseInt(vipCounter.textContent);

  if (currVipcontvalue !== 0){
    currVipcontvalue--;
  vipCounter.textContent = currVipcontvalue;
  updateSubtotal();

  let stringifycount = JSON.stringify(currVipcontvalue);
  console.log(stringifycount);
  localStorage.setItem("vipCount", stringifycount);
  }
});




function updateSubtotal () {

  const regAmount = regular.querySelector(".reg-amount");
  let counter = regular.querySelector(".num");
  let subTotal = document.querySelector(".ticket-total-amount");
  
  let currContvalue = parseInt(counter.textContent);
  let currRegamount = parseInt(regAmount.textContent);

  let currVipcontvalue = parseInt(vipCounter.textContent);
  let currVipamount = parseInt(vipAmount.textContent);


  const totalRegamout = currContvalue * currRegamount;
  let totalVipamount = currVipcontvalue * currVipamount;

  let total = totalRegamout + totalVipamount;

  subTotal.textContent = total.toLocaleString();
  localStorage.setItem("total", total);

  
}


let savedVipcount = parseInt(localStorage.getItem("vipCount"));
let savedRegcount = parseInt(localStorage.getItem("regularCount"));
counter.textContent = savedRegcount;
vipCounter.textContent = savedVipcount;
updateSubtotal();

console.log(savedVipcount);









function playPause(){
    if (count == 0) {
        count = 1;
        audio.play();
    }else {
        count = 0;
        audio.pause();
    }
}







window.addEventListener("scroll", function() {

  if (lastScrollY < window.scrollY) {
    naviationBar.classList.add("nav--hidden");
  } else {
    naviationBar.classList.remove("nav--hidden");
  }

  lastScrollY= window.scrollY;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false); 
    }

});




