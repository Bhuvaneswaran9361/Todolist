const input = document.querySelector("input");
const ul = document.querySelector(".elementList");
const submitbtn = document.querySelector(".submit");

delTask = function () {
    var li = this.parentNode;
    li.style.animation = "slideOut 0.18s ease forwards";
    li.addEventListener("animationend", () => {
        li.parentNode.removeChild(li);
        updateCount();
    });
}

function updateCount() {
    const total = ul.querySelectorAll(".listItem").length;
    const done = ul.querySelectorAll(".listItem.done").length;
    const countEl = document.getElementById("task-count");
    if (countEl) {
        countEl.textContent = total === 0
            ? "No tasks yet"
            : `${total - done} remaining · ${done} done`;
    }
}

function addTask() {
    const text = input.value.trim();

    if (text === "") {
        input.focus();
        input.classList.add("shake");
        input.addEventListener("animationend", () => input.classList.remove("shake"), { once: true });
        return;
    }

    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    const delbtn = document.createElement("button");

    listItem.className = "listItem";
    taskText.className = "task-text";
    taskText.textContent = text;
    delbtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    `;
    delbtn.className = "delbtn";
    delbtn.title = "Delete task";
    delbtn.onclick = delTask;

    /* Toggle done on text click */
    taskText.onclick = function () {
        listItem.classList.toggle("done");
        updateCount();
    };

    listItem.appendChild(taskText);
    listItem.appendChild(delbtn);
    ul.appendChild(listItem);

    input.value = "";
    input.focus();
    updateCount();
}

submitbtn.onclick = addTask;

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});
