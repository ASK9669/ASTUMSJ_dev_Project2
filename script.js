let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let counter = document.getElementById("remainingCount");
let errorMsg = document.getElementById("errorMsg");
let allDoneMsg = document.getElementById("allDoneMsg");
let clearBtn = document.getElementById("clearBtn");

let tasks = [];

addBtn.addEventListener("click", function () {
    if (taskInput.value === "") {
        errorMsg.textContent = "Please type a task first 🙏";
    } 
    else 
      { 
        errorMsg.textContent = "";
        let task = taskInput.value;

        let li = document.createElement("li");
        li.textContent = task;
        taskInput.value = "";

        let marBtn = document.createElement("button");
        marBtn.textContent = "Done";
        marBtn.id = "doneBtn";

        marBtn.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        let deBtn = document.createElement("button");
        deBtn.textContent = "Delete";
        deBtn.id = "deleteBtn";

        deBtn.addEventListener("click", function () {
            li.remove();
            tasks.splice(tasks.indexOf(task), 1);
            counter.textContent = tasks.length;
        });

        li.appendChild(marBtn);
        li.appendChild(deBtn);
        taskList.appendChild(li);

        tasks.push(task);
        counter.textContent = tasks.length;
    }
});

clearBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    tasks = [];
    counter.textContent = tasks.length;
    allDoneMsg.textContent = "All tasks are completed! 🎉";
});

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

const circles = document.querySelectorAll(".color-circle");

circles.forEach(circle => {
    circle.addEventListener("click", () => {
        const color = circle.dataset.color;
        document.body.style.backgroundColor = color;
        document.querySelector(".color-circle.active")?.classList.remove("active");
        circle.classList.add("active");
    });
});