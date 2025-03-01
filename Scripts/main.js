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


//All functionalities of complete buttons

let totalTasks = 6; 
let completedTasks = 0;  


function updateTaskCounts() {
    const assignedTasks = document.getElementById('assigned-tasks');
    const completedTasksElement = document.getElementById('count');
    
    let assignedCount = parseInt(assignedTasks.innerText);
    let completedCount = parseInt(completedTasksElement.innerText);
    
    if (assignedTasks && completedTasksElement) {    
        assignedTasks.innerText = assignedCount - 1;
        completedTasksElement.innerText = completedCount + 1;
    }
}


function handleTaskCompletion(button, taskName) {
    
    button.disabled = true;
    button.style.backgroundColor = 'grey';  
    button.style.color='white'; 
    
    alert(`Congratulations! You have completed the task: "${taskName}" successfully.`);

    
    const activityLog = document.getElementById('activity-log');
    const pTag = document.createElement('p');
    const currentTime = new Date().toLocaleTimeString();  // Get the current time

    
    pTag.textContent = `You have completed the task: "${taskName}" at ${currentTime}`;
    
    pTag.classList.add('card-bg', 'p-4','mt-4','font-bold','rounded-lg');
    
    activityLog.appendChild(pTag);

    updateTaskCounts();

    completedTasks++;

    if (completedTasks === totalTasks) {
        alert("Congratulations! You have successfully completed all the tasks.");
    }
}

document.getElementById('complete-btn-1').addEventListener('click', function() {
    handleTaskCompletion(this, 'Fix Mobile Button Issue');
})

document.getElementById('complete-btn-2').addEventListener('click', function() {
    handleTaskCompletion(this, 'Add Dark Mode');
})

document.getElementById('complete-btn-3').addEventListener('click', function() {
    handleTaskCompletion(this, 'Optimize Home page');
})

document.getElementById('complete-btn-4').addEventListener('click', function() {
    handleTaskCompletion(this, 'Update Footer Layout');
})

document.getElementById('complete-btn-5').addEventListener('click', function() {
    handleTaskCompletion(this, 'Fix Navigation Bar');
})
document.getElementById('complete-btn-6').addEventListener('click', function() {
    handleTaskCompletion(this, 'Fix Navigation Bar');
})


//clear history button

function clearActivityLog() {
    const activityLog = document.getElementById('activity-log');
    
    activityLog.innerHTML = '';
    alert("Activity log has been cleared successfully!");
}

document.getElementById('clear-history-btn').addEventListener('click', function(){
    clearActivityLog();
})


