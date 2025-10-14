
// ======= LOADER JS START ======= 
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  
  if (loader) {
    setTimeout(() => {
      loader.classList.add("rem");
    }, 2500); // 3 seconds
  }
});
// ======= LOADER JS END ======= 


window.addEventListener("scroll", function() {
var a=this.document.body.scrollHeight -this.window.innerHeight;
const scrollProgress = (window.scrollY / a) * 99;
// document.getElementById("nav-width").style.width=`${scrollProgress}vw`;

    // console.log();


    var navbar = document.getElementById("navbar");
    var navlink = document.querySelectorAll(".nav-item>.nav-link");
    var selc=document.querySelector(".selc")
    var dr=document.querySelector(".dr")
    if (navbar) {
        if (window.scrollY > 400) {
            navbar.classList.add("fixtop");
           
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


if(head){
  fetch("/header.html")
.then(data => data.text())

.then((e)=>{
head.innerHTML=e
  
})
}
// ================= HEADER CODE END ======================

// ================= FOOTER CODE START ======================
var footer=document.getElementById("footer")
if(footer){
  fetch("/footer.html")
.then(data => data.text())
.then((e)=>{
  footer.innerHTML=e
  
})
}
// ================= FOOTER CODE END ======================


  

//   FETCH API FOR COURSE START  






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
    fetch('https://script.google.com/macros/s/AKfycbwEep3umRnWFO8tXdgLSSxk328V1FtSZfagSm4TunsLqjKOh6m9jb68IqJAoaKBjsQf9g/exec', {
      method: 'POST',
      body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(data => {
      // Clear the form after successful submission
      contact_form.reset();
            Swal.fire("Form submitted successfully!");
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
  
    
    fetch('https://script.google.com/macros/s/AKfycbwEep3umRnWFO8tXdgLSSxk328V1FtSZfagSm4TunsLqjKOh6m9jb68IqJAoaKBjsQf9g/exec', {
      method: 'POST',
      body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(data => {
      // Clear the form after successful submission
      apply_form.reset();
            Swal.fire("Form submitted successfully!");
    })
    .catch(error => alert('Error submitting form: ' + error));
  });
  // ============================ APPLY FORM DATA END ==================================



  // ============================ APPLY FORM DATA START ================================
  var quer_form = document.getElementById("queryform");

  if (quer_form) {
    quer_form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      var formData = new FormData(this);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });
      data.formType = 'queryform';
      console.log(data);
  
      fetch('https://script.google.com/macros/s/AKfycbwEep3umRnWFO8tXdgLSSxk328V1FtSZfagSm4TunsLqjKOh6m9jb68IqJAoaKBjsQf9g/exec', {
        method: 'POST',
        body: new URLSearchParams(data)
      })
      .then(response => response.text())
      .then(data => {
        // Close modal
        const modalEl = document.getElementById('exampleModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
  
        //       Swal.fire("Form submitted successfully!");
        Swal.fire("Form submitted successfully!");
        quer_form.reset();
      })
      .catch(error => alert('Error submitting form: ' + error));
    });
  }
  
  // ============================ APPLY FORM DATA END ==================================

