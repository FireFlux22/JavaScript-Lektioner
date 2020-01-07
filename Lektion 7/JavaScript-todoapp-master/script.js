
// http://localhost:8091

function fetch() {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/todos");
    oReq.send();
}

fetch();

function reqListener() {
    const tasks = JSON.parse(this.responseText);
    renderTasks(tasks.data);
}

function renderTasks(ar) {
    for (let i = 0; i < ar.length; i++) {
        const newTask = document.createElement("li");
        newTask.textContent = ar[i].title;
        document.getElementById("toDoList").appendChild(newTask);
    }
}

const formEl = document.querySelector("form");

formEl.addEventListener("submit", onSubmit);

function onToDoAdded(e) {
    const ob = JSON.parse(this.responseText);
    renderTasks([ob]);
}

function onSubmit(e) {
    e.preventDefault();

    const postReq = new XMLHttpRequest();

    postReq.open("POST", "/todos");
    postReq.setRequestHeader("Content-Type", "application/json");

    const titleEl = document.getElementById("addToDo");

    const ob = { title: titleEl.value };

    console.log(ob);

    postReq.addEventListener("load", onToDoAdded);

    postReq.send(JSON.stringify(ob));

    titleEl.value = "";
}


