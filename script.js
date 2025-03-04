let userId;
let users = [];
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

function showPosts(id) {
  let str = ""
  //console.log(`https://jsonplaceholder.typicode.com/posts/userId=${id}`)
  fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data && data.map((value) => {
        str += `<div>
        <b>${value.title}</b>
        <p>${value.body}</p>
        </div>`;
      });
      content.innerHTML = str;
    })
    .catch((err) => console.log(err));
}
function showAlbum() {
  let str = ""
  fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then((res) => res.json())
    .then((data) => {
      data && data.map((value) => {
        str += `<div>
        <b>${value.title}</b>
        </div>`;
      });
      content.innerHTML = str;
    }
    ) .catch((err) => console.log(err));    
}
function showProfile(id) {
  let str = ""
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
        str += `<div>
        <b>${data.name}</b>
        <p>${data.email}</p>
        <p>${data.phone}</p>
        <p>${data.website}</p>
        <p>${data.company.name}</p>
        <p>${data.company.catchPhrase}</p>
        <p>${data.company.bs}</p>
        <p>${data.address.street}</p>
        <p>${data.address.suite}</p>
        <p>${data.address.city}</p>
        <p>${data.address.zipcode}</p>
        <p>${data.address.geo.lat}</p>
        <p>${data.address.geo.lng}</p>
        
      
        </div>`;
      content.innerHTML = str;
    })
     .catch((err) => console.log(err));
}

function showToDo() {
  let str = ""
  fetch(`https://jsonplaceholder.typicode.com/todos`) 
    .then((res) => res.json())
    .then((data) => {
      data && data.map((value) => {
        str += `<div>
        <b>${value.title}</b>
        </div>`;
      });
      content.innerHTML = str;
    }
    ) .catch((err) => console.log(err));
}

function showHome() {
  userId = selUser.value;
  let str = `
   <div class='container-fluid'>
     <div class='row'>
      <div class='d-flex justify-content-between bg-primary text-light'>
       <div>My Social Media</div>
       <div id='username'></div>
      </div>
     </div>
     <div class='row'>
      <div class='d-flex'>
       <div class='p-2'>
         <p onclick= "showPosts(${userId})"><a href="#">Home</a></p>
         <p onclick= "showAlbum(${userId})"><a href="#">Album</a></p>
          <p onclick= "showProfile(${userId})"><a href="#">Profile</a></p>
          <p onclick= "showToDo(${userId})"><a href="#">ToDo</a></p>
         <p onclick= "showLogin()"><a href="#">Logout</a></p>
       </div>
       <div class='p-2' id='content'></div>
      </div>
     </div>
     <div class='row'>
      <div class='bg-primary text-light p-5'>
       <p>@Copyright 2025. All rights reserved.</p>
      </div>
     </div>
   </div>
  `;
  root.innerHTML = str;
  showPosts(userId);
}

function displayUsers(data) {
  let str = `
  <div class='d-flex justify-content-center p-5'>
  <div class='p-5'>
  <h2>My Social Media</h2>
  <p>This is the caption of the website.</p>
  </div>
  <div class='p-5'>
  <select class='form-control m-3' id='selUser'>
  <option value='0'>--Select User--</option>`;
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select><p><button class='form-control m-3 btn btn-primary' onclick='showHome()'>Log In</button></p></div></div>`;
  root.innerHTML = str;
}
