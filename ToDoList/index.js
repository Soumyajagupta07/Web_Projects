// let b = document.getElementById('add_b');
// let task_input = document.getElementById('task_input');
// let p = document.getElementById('para');

// b.addEventListener('click',() => {
//     let li = document.createElement('li');
//     li.innerHTML = task_input.value;
//     // let remove_task = document.createElement('button');
//     // remove_task.innerHTML = 'Remove';
//     // list.appendChild(remove_task);
//     // remove_task.style.marginLeft='20px'
//     p.appendChild(li)
//     task_input.value = null;
//     li.setAttribute('class' ,'list')
//     li.style.listStyle = 'disc inside';
//     let button_click = document.querySelectorAll('.list')
//     for(let i of button_click){
//         i.addEventListener('click',(e)=>{
//             if(e.target.classList.contains('list')){
//                 i.remove(e)
//                 // i.remove(li)
//             }
//         })

//     }
// })

// remove_b.addEventListener('click',()=>{
//     p.innerHTML = null;
// })

// remove_task.addEventListener('click',()=>{
//     list.innerHTML = null;
// })

let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    let input = document.getElementById('input');
    let container = document.getElementById('container');
    let list = document.createElement('li');
    list.innerHTML = input.value;
    container.appendChild(list);
    input.value = ' ';
})
let rem_btn = document.getElementById('rem_btn');
rem_btn.addEventListener('click',()=>{
    let container = document.getElementById('container');
    container.innerHTML = null;
})