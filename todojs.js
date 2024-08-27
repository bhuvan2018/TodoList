document.addEventListener('DOMContentLoaded',()=>{
    const todoForm=document.getElementById('todo-form');
    const todoInput=document.getElementById('todo-input');
    const todoList=document.getElementById('todo-list');
    todoForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value='';
    });
    function addTodoItem(text){
        const li=document.createElement('li');
        li.className='todo-item';
        li.innerHTML=`
            <span>${text}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        const completeBtn=li.querySelector('.complete-btn');
        const deleteBtn=li.querySelector('.delete-btn');
        completeBtn.addEventListener('click',()=>{
            li.classList.toggle('completed');
        });
        deleteBtn.addEventListener('click',()=>{
            todoList.removeChild(li);
        });
        todoList.appendChild(li);
    }
});