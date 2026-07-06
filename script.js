let addBtn = document.getElementById("addBtn")
let taskInput = document.getElementById("taskInput")
let taskList = document.getElementById("taskList")
let counter = document.getElementById("remainingCount")
let errorMsg = document.getElementById("errorMsg");
let allDoneMsg = document.getElementById("allDoneMsg");
counter = 0;
    
addBtn.addEventListener("click" ,function(){

    if(taskInput.value ==="")
    errorMsg.textContent = "Please type a task first 🙏"
else{
    errorMsg.textContent = ""
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    counter.textContent += 1
    taskInput.value = "";

    
    let marBtn = document.createElement("button");
    marBtn.textContent = "Done";
    marBtn.id = "doneBtn";

    marBtn.addEventListener("click", function(){
        li.classList.toggle("completed");
    });
    let deBtn = document.createElement("button");
    deBtn.textContent = "Delete";
    deBtn.id = "deleteBtn";

    deBtn.addEventListener("click", function(){
        li.remove();
        counter.textContent = tasks.length;
    });

    li.appendChild(marBtn);
    li.appendChild(deBtn);
    taskList.appendChild(li);}

});
let clearBtn = document.getElementById("clearBtn")
clearBtn.addEventListener("click", function(){
    taskList.remove();
    counter.textContent = tasks.length;
    allDoneMsg.textContent = "All tasks are completed! 🎉";
});
let tasks = [];

function addTasks() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() !== "") {
        tasks.push({
            text: input.value.trim(),
            completed: false
        });

        console.log(tasks);
        input.value = "";
    }
}

function isAllTasksCompleted() {
    completedTasks = tasks.filter(t => t.completed).length;
    remainingCount.textContent = tasks.length - completedTasks;

    if (completedTasks === tasks.length && tasks.length > 0) {
        allDoneMsg.classList.add("visible");
    } else {
        allDoneMsg.classList.remove("visible");
    }
}


const circles = document.querySelectorAll('.color-circle');
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const color = circle.dataset.color;
    document.body.style.backgroundColor = color;              // apply color
    document.querySelector('.color-circle.active')?.classList.remove('active'); // remove old active
    circle.classList.add('active'); 
    });
});