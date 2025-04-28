// ======= LOADER JS START ======= 
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  console.log(loader);
  
  if (loader) {
    setTimeout(() => {
      loader.classList.add("rem");
    }, 2300); // 3 seconds
  }
});
// ======= LOADER JS END ======= 


window.addEventListener("scroll", function() {
var a=this.document.body.scrollHeight -this.window.innerHeight;
const scrollProgress = (window.scrollY / a) * 99;
document.getElementById("nav-width").style.width=`${scrollProgress}vw`;

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



// slider

  
// slider

// ================= HEADER CODE START ======================
var head=document.getElementById("header")


fetch("/header.html")
.then(data => data.text())

.then((e)=>{
head.innerHTML=e
  
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







  // ============================ CONTACT FORM DATA START ================================
  var contact_form=document.getElementById("contactForm");
  if(contact_form)
  contact_form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function(value, key) {
      data[key] = value;
    });
    data.formType = 'contactForm';
    fetch('https://script.google.com/macros/s/AKfycbwDYRbYhxMakaxkd_sPNQDBNdmohZIyu24DRGkHzSKpk8yFjG_mwJCApkA76HQTnLsn2A/exec', {
      method: 'POST',
      body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(data => {
      // Clear the form after successful submission
      contact_form.reset();
      alert('Form submitted successfully!');
    })
    .catch(error => alert('Error submitting form: ' + error));
  });
  // ============================ CONTACT FORM DATA END ==================================


  
  // ============================ APPLY FORM DATA START ================================
  var apply_form=document.getElementById("applyform");
  if(apply_form)
  apply_form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function(value, key) {
      data[key] = value;
    });
    data.formType = 'applyform';
    console.log(data);
    
    fetch('https://script.google.com/macros/s/AKfycbwDYRbYhxMakaxkd_sPNQDBNdmohZIyu24DRGkHzSKpk8yFjG_mwJCApkA76HQTnLsn2A/exec', {
      method: 'POST',
      body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(data => {
      // Clear the form after successful submission
      apply_form.reset();
      alert('Form submitted successfully!');
    })
    .catch(error => alert('Error submitting form: ' + error));
  });
  // ============================ APPLY FORM DATA END ==================================