const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDO(inputValue) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = inputValue;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const inputValue = toDoInput.value;
    toDoInput.value = "";
    paintToDO(inputValue);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
