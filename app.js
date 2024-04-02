if(ServiceWorker in navigator){
    navigator.serviceWorker
    .register('service-worker.js')
    .then(function(){
        console.log("service worker registered")
    });
}
const todoform=document.getElementById('todo-form');
const todoInput=document.getElementById('todo-Input');
const todoList=document.getElementById('todo-List');
let tasks=[];
function renderTasks(){
    todoList.innerHTML="";
    tasks.forEach(function(tasks){
        const li= document.createElement('li');
        li.textContent=tasks.title;
        
        if(tasks.completed){
            li.classList.add('completed');
        }
        li.addEventListener('click',function(){
            tasks.completed=!tasks.completed;
            renderTasks()
        });
        todoList.appendChild(li);
    });
}
todoform.addEventListener('submit',function(event){
    event.preventDefault();
    const taskTitle=todoInput.ariaValueMax.trim();
    if(taskTitle!==""){
        const task={
            title:taskTitle,
            completed:false
        };
        tasks.push(tasks);
        renderTasks();
        todoInput.value="";
    }
});
