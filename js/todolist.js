const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY ="todos";

let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(inputValue) {
    const li = document.createElement("li");
    li.id = inputValue.id;
    const span = document.createElement("span");
    span.innerText = inputValue.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";
    const toDoObj = {
        id : Date.now(),
        text: inputValue,
    }
    toDos.push(toDoObj);
    paintToDo(toDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}