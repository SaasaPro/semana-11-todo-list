let tasks = [];

const form = document.getElementById('form');
const task = document.getElementById('task');
const autor = document.getElementById('autor');
const list = document.getElementById('list');
const listContainer = document.getElementById('listContainer');

let taskValue = '';
let autorValue = '';



form.addEventListener('submit', sendTask);
task.addEventListener('input', readTask);
autor.addEventListener('input', readAutor);

if (tasks.length === 0) {
    list.innerHTML = `<h3>No hay tareas</h3>`;
}

function sendTask(e) {
    e.preventDefault();
    if (validateForm() === 0) {
        alert('Por favor rellenar todos los campos');
        
    }else{
    

    tasks.push({
        task: taskValue,
        autor: autorValue
    })

    clearFields();
    showTasks();

    task.focus();
    }
    console.log(tasks);
}


function validateForm() {
    if (taskValue.trimEnd().trimStart() === '' || autorValue.trimEnd().trimStart() === '') {
        return 0;
    }
    return 1;
}


function clearFields() {
    task.value = '';
    taskValue = '';
    autor.value = '';
    autorValue = '';

}
function readTask(e) {
    taskValue = e.target.value;
}

function readAutor(e) {
    autorValue = e.target.value;
}

function showTasks() {
    list.innerHTML = '';
    tasks.forEach((task) => {
        list.innerHTML += `<li>${task.task} - ${task.autor}</li>`;
    });
}






