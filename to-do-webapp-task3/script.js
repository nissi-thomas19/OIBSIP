function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let pendingList = document.getElementById("pendingList");

    let li = document.createElement("li");

    let currentTime = new Date().toLocaleString();

    li.innerHTML = `
        <div class="task-info">
            <strong>${taskText}</strong>
            <div class="task-time">
                Added: ${currentTime}
            </div>
        </div>

        <div class="buttons">
            <button class="complete-btn">
                ✓
            </button>

            <button class="delete-btn">
                X
            </button>
        </div>
    `;

    // Complete Button
    li.querySelector(".complete-btn").addEventListener("click", function() {

        li.classList.add("completed");

        document.getElementById("completedList").appendChild(li);

        this.remove();
    });

    // Delete Button
    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
    });

    pendingList.appendChild(li);

    taskInput.value = "";
}