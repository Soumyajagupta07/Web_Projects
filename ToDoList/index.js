let b = document.getElementById('add_b');
let task_input = document.getElementById('task_input');
let p = document.getElementById('para');

b.addEventListener('click',() => {
    let list = document.createElement('li');
    list.innerHTML = task_input.value;
    let remove_task = document.createElement('button');
    remove_task.innerHTML = 'Remove';
    list.appendChild(remove_task);
    remove_task.style.marginLeft='20px'
    p.appendChild(list)
    task_input.value = null;
    // list.style.listStyle = 'disc inside';
})

remove_b.addEventListener('click',()=>{
    p.innerHTML = null;
})

remove_task.addEventListener('click',()=>{
    list.innerHTML = null;
})