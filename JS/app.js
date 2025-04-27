window.addEventListener("scroll", function() {
var a=this.document.body.scrollHeight -this.window.innerHeight;
const scrollProgress = (window.scrollY / a) * 99;
this.document.getElementById("nav-width").style.width=`${scrollProgress}vw`;
const fixeeElement = document.getElementById("fixee");
if (scrollProgress >= 98) {
    fixeeElement.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
  } else {
    fixeeElement.innerHTML = `${scrollProgress.toFixed(0)}%`;
  }

    // console.log();


    var navbar = document.getElementById("navbar");
    var navlink = document.querySelectorAll(".nav-item>.nav-link");
    var selc=document.querySelector(".selc")
    var dr=document.querySelector(".dr")
    if (navbar) {
        if (window.scrollY > 600) {
            navbar.classList.add("fixtop");
            selc.classList.add("selc1e")
            dr.classList.add("ddd")
            navlink.forEach((e) => {
                e.classList.add("colb"); // Ensure you're adding the correct class
                
            });
        } else {
            navbar.classList.remove("fixtop");
            navlink.forEach((e) => {
                e.classList.remove("colb"); // Remove the same class added earlier
             
            });
        }
    }
});

let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

// const counterElement=document.querySelectorAll(".counter")


const counterElement1 = document.getElementById("counter1");
const counterElement2 = document.getElementById("counter2");
const counterElement3 = document.getElementById("counter3");
const counterElement4 = document.getElementById("counter4");



function updateCounter() {
    // counterElement.forEach((E)=>{

    //         E.innerHTML=count
    // })

   
    count++;

    if (count > 25) {
        count = 0; // Reset to 0 after reaching 25
    }
  
}

// var form=document.getElementById("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//    var arr=[];
//    for (let index = 0; index < e.target.length; index++) {
//     const element = e.target[index].value;
//     // console.log(element);
//     arr.push(element)
    
//    }
  
//    console.log(arr);
   
    
// })

// slider

  
// slider

// ================= HEADER CODE START ======================
var head=document.getElementById("#header")


fetch("/header.html")
.then(data => data.text())
.then((e)=>{
header.innerHTML=e
  
})
// ================= HEADER CODE END ======================

// ================= FOOTER CODE START ======================
var footer=document.getElementById("footer")
fetch("/footer.html")
.then(data => data.text())
.then((e)=>{
  footer.innerHTML=e
  
})
// ================= FOOTER CODE END ======================

//   FETCH API FOR COURSE START
fetch("https://opensheet.elk.sh/1zQtyIrGqoGVwtZMBM81BzyBM-N3M0KANewvmGGDljJk/Sheet2")

.then(res => res.json())
.then((data) => {
})
.catch((error) => {
  console.error("Error fetching data: ", error);
});


//   FETCH API FOR COURSE END

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // Responsive for mobile/tablet
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    }
  });




