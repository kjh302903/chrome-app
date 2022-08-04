const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDO(inputValue) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = inputValue;
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
    paintToDO(inputValue);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
