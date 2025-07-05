document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded Successfully!");
});
const card = document.querySelector('.card');

function flipToSignup() {
  card.classList.add('flip');
}

function flipToLogin() {
  card.classList.remove('flip');
}
function redirectToProfile() {
  window.location.href = "http://127.0.0.1:5500/registration/firstpageprofile.html";
}
