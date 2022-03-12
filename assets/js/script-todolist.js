const btnAdd = document.getElementById("addTask");
const listTasks = document.getElementById("tasks");

var id = 0;

btnAdd.addEventListener("click", function addTask(){
    const divTask = document.createElement('div');
    const txtAdd = document.getElementById("textBox").value;
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', id);
    checkbox.classList.add('task');

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.setAttribute('value', txtAdd);
    label.classList.add("task")
    label.innerHTML = txtAdd;

    id++;

    divTask.appendChild(checkbox);
    divTask.appendChild(label);

    listTasks.appendChild(divTask);
});
