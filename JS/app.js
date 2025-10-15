import {  signInWithEmailAndPassword , db , auth,updateDoc, deleteDoc,getDoc,doc ,collection, addDoc, getDocs ,Timestamp  } from "./firebaseconfig.js";

// ======= LOADER JS START ======= 
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  
  if (loader) {
    setTimeout(() => {
      loader.classList.add("rem");
    }, 0); // 3 seconds
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
var head = document.getElementById("header");

if (head) {
  fetch("/header.html")
    .then(data => data.text())
    .then(async (e) => {  // make async here
      head.innerHTML = e;

      var arr_dropdown = [];

      // =================  FETCH CODE START =============
      async function fetchDropdownData() {
        try {
          const querySnapshot = await getDocs(collection(db, 'dropdown'));
          querySnapshot.forEach((doc) => {
            arr_dropdown.push({ ...doc.data() });
          });
          console.log("Dropdown Data Loaded:", arr_dropdown);
          renderNavbar(); // ✅ call function after data fetched
        } catch (error) {
          console.error("Error getting documents: ", error);
        }
      }
async function fetchPages() {
  try {
    const querySnapshot = await getDocs(collection(db, "pages"));
    const pages = [];
    querySnapshot.forEach((doc) => {
      pages.push({ id: doc.id, ...doc.data() });
    });

    console.log("✅ Pages fetched:", pages);
    return pages;
  } catch (error) {
    console.error("❌ Error fetching pages:", error);
  }
}

// ✅ Call function
fetchPages();
      await fetchDropdownData();
      // ================= FETCH CODE END ==================

      function renderNavbar() {
        var navbar = document.getElementById("navbar");
        if (!navbar) {
          console.error("Navbar element not found!");
          return;
        }

        navbar.innerHTML = `
          <ul class="navbar-nav mx-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="index.html">Home</a>
              <span class="navhover"></span>
            </li>

            <!-- ==================== CODE FOR DROPDOWN CODE START ==================== -->
         ${arr_dropdown.map(item => {
  return `
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="${item.dropdown_link}" 
         role="button" data-bs-toggle="dropdown" aria-expanded="false">
         ${item.dropdown_name}
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="${item.dropdown_link}">${item.dropdown_name}</a></li>
      </ul>
      <span class="navhover"></span>
    </li>
  `;
}).join('')}


            <!-- ==================== CODE FOR DROPDOWN CODE END ==================== -->
            
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
              <span class="navhover"></span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact-us.html">Contact Us</a>
              <span class="navhover"></span>
            </li>
          </ul>
        `;
      }
    });
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

