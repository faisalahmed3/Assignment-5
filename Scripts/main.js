document.getElementById("discover-btn").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href="./question.html"
})

// Theme Toggle Code
const themeBtn = document.getElementById("theme-btn");
const body = document.body;


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.style.backgroundColor = savedTheme;
}


themeBtn.addEventListener("click", function() {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;        
    localStorage.setItem("theme", randomColor);      
})

// Get the current date
const currentDate = new Date();


const formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'short',  
  month: 'short',   
  day: 'numeric',  
  year: 'numeric'   
})

document.getElementById('date-display').textContent = formattedDate;



