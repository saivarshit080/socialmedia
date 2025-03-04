
let users = [];
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

function showHome() {
  let str = `
   <div class='container-fluid'>
     <div class='row'>
      <div class='d-flex justify-content-between bg-primary text-light'>
       <div>My Social Media</div>
       <div>Username</div>
      </div>
     </div>
     <div class='row'>
      <div class='d-flex'>
       <div class='p-2'>Menu</div>
       <div class='p-2'>Content</div>
      </div>
     </div>
     <div class='row'>
      <div class='bg-primary text-light p-5'>
       <p>@Copyright 2025. All rights reserved.</p>
      </div>
     </div>
   </div>
  `;
  root.innerHTML = str
}

function displayUsers(data) {
  let str = `
  <div class='d-flex justify-content-center p-5'>
  <div class='p-5'>
  <h2>My Social Media</h2>
  <p>This is the caption of the website.</p>
  </div>
  <div class='p-5'>
  <select class='form-control m-3'>
  <option value='0'>--Select User--</option>`;
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select><p><button class='form-control m-3 btn btn-primary' onclick='showHome()'>Log In</button></p></div></div>`;
  root.innerHTML = str;
}
