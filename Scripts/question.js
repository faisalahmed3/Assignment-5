// Theme Toggle Code for question page
const body = document.body;

// Check saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.style.backgroundColor = savedTheme;
}

// Go back button functionality
document.getElementById("goback-btn").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./index.html";
});
