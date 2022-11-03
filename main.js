// columns that needs to be on top of each other 
const column1 = document.querySelector(".column-1");
const column2 = document.querySelector(".column-2");
const column1Trans = document.querySelector(".column-1-trans");
const column2Trans = document.querySelector(".column-2-trans");
const allServices1 = document.querySelector(".all-services1");
const allServices2 = document.querySelector(".all-services2");
const contactAddres = document.querySelector(".contact-address");
const contactForm = document.querySelector(".contact-form");

// all whatsapp buttons in the site
const wppButtons = document.querySelectorAll(".button-wpp");

const dropdownLi = document.querySelector(".navbar-toggler-icon");
const navbar = document.querySelector(".navbar");

// replacing col-6 class by col-12 class in both divs
window.addEventListener('resize', (event) => {
  // when screen width <= 770px we replace the class col-6 
  if (screen.width <= 770) {
    column1.classList.add("col-12");
    column2.classList.add("col-12");
    column1.classList.remove("col-6");
    column2.classList.remove("col-6");

    column1Trans.classList.add("col-12");
    column2Trans.classList.add("col-12");
    column1Trans.classList.remove("col-6"); 
    column2Trans.classList.remove("col-6");

    allServices1.classList.add("col-12");
    allServices1.classList.remove("col-6");
    allServices2.classList.add("col-12");
    allServices2.classList.remove("col-6");

    contactAddres.classList.replace("col-6","col-12");
    contactForm.classList.replace("col-6","col-12");
    
  } else {
    column1.classList.add("col-6");
    column2.classList.add("col-6");
    column1.classList.remove("col-12");
    column2.classList.remove("col-12");
    
    column1Trans.classList.add("col-6");
    column2Trans.classList.add("col-6");
    column1Trans.classList.remove("col-12"); 
    column2Trans.classList.remove("col-12");
    
    allServices1.classList.add("col-6");
    allServices1.classList.remove("col-12");
    allServices2.classList.add("col-6");
    allServices2.classList.remove("col-12");

    contactAddres.classList.replace("col-12","col-6");
    contactForm.classList.replace("col-12","col-6");
  }
  if (!document.querySelector(".navbar").hasAttribute("class","bg-opacity-75")) {
    navbar.classList.add("bg-opacity-75");
  }
})

// if you open straight from your smart phone
// if (screen.width <= 770) {  
//   column1.classList.add("col-12");
//   column2.classList.add("col-12");
//   column1.classList.remove("col-6");
//   column2.classList.remove("col-6"); 
// }

// event listener to all whatspp buttons in the website
wppButtons.forEach(btn => {
  btn.addEventListener("click", (event) => {
    window.open("https://wa.me/5521964109118","_blank")
  })
});


// dropdown toggle event listener to change its background color on a smart phone or tablet

dropdownLi.addEventListener("click", (event) => {
  // if (navbar.hasAttribute("class","bg-opacity-75")) {
    //   navbar.classList.remove("bg-opacity-75");
    // } else {
      //   navbar.classList.remove("bg-opacity-75");
      // }  
  navbar.classList.toggle("bg-opacity-75");

})

const smartPhoneDetector = (screenSize) => {
  if (screenSize <= 770) {
    column1.classList.add("col-12");
    column2.classList.add("col-12");
    column1.classList.remove("col-6");
    column2.classList.remove("col-6");

    column1Trans.classList.add("col-12");
    column2Trans.classList.add("col-12");
    column1Trans.classList.remove("col-6");
    column2Trans.classList.remove("col-6");

    allServices1.classList.add("col-12");
    allServices1.classList.remove("col-6");
    allServices2.classList.add("col-12");
    allServices2.classList.remove("col-6");

    contactAddres.classList.replace("col-6","col-12");
    contactForm.classList.replace("col-6","col-12"); 
  }
}

let screenCurrentSize = window.screen.availWidth
smartPhoneDetector(screenCurrentSize);