import {  signInWithEmailAndPassword , db , auth,updateDoc, deleteDoc,getDoc,doc ,collection, addDoc, getDocs ,Timestamp  } from "./firebaseconfig.js";

// =============== LOGIN CODE START ===================
const loginForm = document.getElementById("login_btn");


if (loginForm) {
  loginForm.addEventListener("click", async (e) => {
    e.preventDefault(); 
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`✅ Login successful! Welcome ${user.email}`);
      window.location.href = "dashboard.html";
    } catch (error) {
      alert(`❌ Error: ${error.message}`);
      console.error(error);
    }
  });
}


// =============== LOGIN CODE END ===================


// ================= sidebar code start ======================
var sidebar=document.getElementById("sidebar");
if(sidebar){

  fetch("siderbar.html")
  .then((res => res.text()))
  .then((e)=>{
    sidebar.innerHTML=`${e}`
  })
}
// ================= sidebard code end =====================



// ================= topbar code start ======================
var topbar=document.getElementById("topbar");
if(topbar){

  fetch("topbar.html")
  .then((res => res.text()))
  .then((e)=>{
    topbar.innerHTML=`${e}`
    
// ================= DROPDOWN FETCH CODE START ======================

var Total_Dropdown = document.getElementById("Total_Dropdown");
const Pagedrodown = document.getElementById("Pagedrodown");

async function fetchDropdownData() {
  try {
    // Clear old data first
    let lenght_drop = [];
    let num = 0;

    // Show spinner only if element exists
    if (Total_Dropdown) {
      Total_Dropdown.innerHTML = `
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>`;
    }

    // Fetch data from Firestore
    const querySnapshot = await getDocs(collection(db, "dropdown"));

    // Reset select field before appending
    if (Pagedrodown) {
      Pagedrodown.innerHTML = `<option value="all" selected disabled>Select Dropdown</option>`;
    }

    // Loop through Firestore results
    querySnapshot.forEach((doc) => {
      num++;
      const data = doc.data();
      lenght_drop.push(data);

      // Update total dropdown count
      if (Total_Dropdown) {
        Total_Dropdown.textContent = lenght_drop.length;
      }

      // Add dropdown options dynamically
      if (Pagedrodown) {
        Pagedrodown.innerHTML += `
          <option value="${data.dropdown_link}">${data.dropdown_link}</option>
        `;
      }
    });
  } catch (error) {
    console.error("❌ Error getting dropdown documents:", error);
  }
}

// Run only once
if (Total_Dropdown || Pagedrodown) {
  fetchDropdownData();
}

// ================= DROPDOWN FETCH CODE END ======================



// ================= PAGE LENGTH CODE START =======================
var Pages_lenght=document.getElementById("pages_lenght");

if(Pages_lenght){
  Pages_lenght.innerHTML=`
  <div class="spinner-border"
                    role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>`
  async function pagelen(){
    try {
      const querySnapshot = await getDocs(collection(db, "pages"));
      let num = 0;
      const pagesArray = []; // 🔹 for storing all docs
      
      querySnapshot.forEach((docSnap) => {
        num++;
        const data = docSnap.data();
        
        pagesArray.push({
          id: docSnap.id,
          ...data
        });
        
   Pages_lenght.innerHTML=num;

  });



} catch (error) {
  console.error("❌ Error loading pages:", error);
}
  }
  pagelen()
}
// ================= PAGE LENGTH CODE END =========================
 })
}

if(document.getElementById('dropdownForm')){
document.getElementById('dropdownForm').addEventListener('submit', async function(event) {
  event.preventDefault();


  const dropdownName = document.getElementById('dropdownName').value;
  const dropdownLink = document.getElementById('dropdownLink').value.trim();

  try {
    // Save data to Firestore
    await addDoc(collection(db, 'dropdown'), {

      dropdown_name: dropdownName,
      dropdown_link: dropdownLink,
       times: new Date().toDateString()
    });

    alert('Data Saved!');
    document.getElementById('dropdownForm').reset(); // Clear the form
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});
}
// ================= DROPDOWNN CREATE CODE END ======================

// ================= DROPDOWN FETCH CODE START ======================

var componet_innerhtml = document.getElementById("componet_innerhtml");
var num = 0;

if (componet_innerhtml) {
  async function fetchDropdownData() {
    try {
      const querySnapshot = await getDocs(collection(db, 'dropdown'));
      componet_innerhtml.innerHTML = "";
      num = 0;

      querySnapshot.forEach((docSnap) => {

        
        num++;
        const data = docSnap.data();

        componet_innerhtml.innerHTML += `
          <tr data-id="${docSnap.id}">
            <th class="col-1 border fw-lighter">${num}</th>
            <td class="col-3">${data.dropdown_link ? data.dropdown_link : ""}</td>
            <td class="col-3">${data.dropdown_link ? data.dropdown_link : ""}</td>
            <td class="col-2">${data.times ? data.times : ""}</td>
            <td class="col-1 text-center">
              <button class="editBtn bg-transparent border-0 shadow-lg p-1 rounded-3">
                <i class="fas fa-edit"></i>
              </button>
              <button class="dltBtn bg-transparent border-0 shadow-lg p-1 rounded-3">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
      });

      attachEventListeners();

    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }

  // =========== ATTACH EVENTS ===========
  function attachEventListeners() {
    const editButtons = document.querySelectorAll(".editBtn");
    const deleteButtons = document.querySelectorAll(".dltBtn");

    // ====== EDIT BUTTON ======
    editButtons.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const row = e.target.closest("tr");
        const docId = row.getAttribute("data-id");
        const docRef = doc(db, "dropdown", docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const currentLink = data.dropdown_link || "";
          const currentTimes = data.times || "";

          const newLink = prompt("Edit dropdown link:", currentLink);
          if (newLink === null) return; // cancel

          const newTimes = prompt("Edit times:", currentTimes);
          if (newTimes === null) return; // cancel

          try {
            await updateDoc(docRef, {
              dropdown_link: newLink.trim(),
              times: newTimes.trim()
            });
            alert("Record updated successfully!");
            fetchDropdownData();
          } catch (err) {
            console.error("Error updating document:", err);
          }
        }
      });
    });

    // ====== DELETE BUTTON ======
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const row = e.target.closest("tr");
        const docId = row.getAttribute("data-id");

        if (confirm("Are you sure you want to delete this record?")) {
          try {
            await deleteDoc(doc(db, "dropdown", docId));
            alert("Record deleted successfully!");
            fetchDropdownData();
          } catch (err) {
            console.error("Error deleting document:", err);
          }
        }
      });
    });
  }

  // Initial fetch
  fetchDropdownData();
}
// ================= DROPDOWN FETCH CODE END ======================

// === DOM ELEMENTS ===
const form_page = document.getElementById("pagecreateForm");
const pageTable = document.getElementById("pageTable");

// ===================== CREATE PAGE =====================
if (form_page) {
  form_page.addEventListener("submit", async (e) => {
    e.preventDefault();

    const PageName = document.getElementById("PageName").value.trim();
    const Pagedrodown = document.getElementById("Pagedrodown").value.trim();
    const PageLink = document.getElementById("PageLink").value.trim();

    if (!PageName || !PageLink) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    try {
      await addDoc(collection(db, "pages"), {
        PageName,
        Pagedrodown,
        PageLink,
        timestamp: new Date().toLocaleString(),
      });

      alert("✅ Page created successfully!");
      form_page.reset();
      loadPages();
    } catch (err) {
      console.error("❌ Error adding page:", err);
      alert("Error adding page. Check console for details.");
    }
  });
}

// ===================== READ ALL PAGES =====================
async function loadPages() {
  if (!pageTable) return;

  pageTable.innerHTML = `
    <tr>
      <td colspan="6" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </td>
    </tr>
  `;

  try {
    const querySnapshot = await getDocs(collection(db, "pages"));
    let num = 0;
    let rows = "";

    querySnapshot.forEach((docSnap) => {
      num++;
      const data = docSnap.data();

      rows += `
        <tr data-id="${docSnap.id}">
          <td class="text-center">${num}</td>
          <td>${data.PageName || ""}</td>
          <td>${data.Pagedrodown || ""}</td>
          <td><a href="${data.PageLink || "#"}" target="_blank">${data.PageLink || ""}</a></td>
          <td>${data.timestamp ? new Date(data.timestamp.seconds * 1000).toLocaleString() : ""}</td>
          <td class="text-center">
            <button class="bg-transparent border-0 shadow-lg p-1 rounded-3 edit_create_page_btn"><i class="fas fa-edit"></i></button>
            <button class="bg-transparent border-0 shadow-lg p-1 rounded-3 dlt_create_page_btn"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      `;
    });

    pageTable.innerHTML =
      rows ||
      `<tr><td colspan="6" class="text-center text-muted">No pages found.</td></tr>`;

    attachEventListeners();
  } catch (error) {
    console.error("❌ Error loading pages:", error);
  }
}

// ===================== EDIT / DELETE =====================
function attachEventListeners() {
  const editBtns = document.querySelectorAll(".edit_create_page_btn");
  const deleteBtns = document.querySelectorAll(".dlt_create_page_btn");

  // ===== EDIT BUTTON =====
  editBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.closest("tr").dataset.id;
      const row = e.target.closest("tr").children;

      const newName = prompt("✏️ Enter new Page Name:", row[1].innerText);
      const newDropdown = prompt("📂 Enter new Dropdown:", row[2].innerText);
      const newLink = prompt("🔗 Enter new Page Link:", row[3].innerText);

      if (newName && newLink) {
        try {
          await updateDoc(doc(db, "pages", id), {
            PageName: newName,
            Pagedrodown: newDropdown,
            PageLink: newLink,
            timestamp: serverTimestamp(),
          });

          alert("✅ Page updated successfully!");
          loadPages();
        } catch (error) {
          console.error("❌ Error updating page:", error);
        }
      } else {
        alert("⚠️ Fields cannot be empty!");
      }
    });
  });

  // ===== DELETE BUTTON =====
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.closest("tr").dataset.id;

      if (confirm("🗑️ Are you sure you want to delete this page?")) {
        try {
          await deleteDoc(doc(db, "pages", id));
          alert("✅ Page deleted successfully!");
          loadPages();
        } catch (error) {
          console.error("❌ Error deleting page:", error);
        }
      }
    });
  });
}

// ===================== INITIAL LOAD =====================
loadPages();

// ================= CREATE PAGE + CRUD CODE END ==========================