const todoinput = document.querySelector(".todo-input");
const todoinputbtn = document.querySelector(".todo-input-button");
const todolist = document.querySelector(".todo-list");
const filtertodo = document.querySelector(".filter-todo");

const alertsuccess = document.querySelector(".alert-success");
const alertworning = document.querySelector(".alert-worning");

todoinputbtn.addEventListener("click", addtodo);
todolist.addEventListener("click",deleteCheck);
filtertodo.addEventListener("click",filterTodo)

function addtodo(a) { 
    a.preventDefault();

    const empty = str => !str.trim().length;
    if (empty(todoinput.value)) {
        alertworning.style.display="block";
        setTimeout(()=>{
            alertworning.style.display="none";
        },1500)
    }
    else {
        alertsuccess.style.display="block";
        setTimeout(()=>{
            alertsuccess.style.display="none";
        },1500)
        //ekleme butonu
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    //tamamlandı butonu
    const complatedbutton = document.createElement("button");
    complatedbutton.classList.add("completed-btn");
    tododiv.appendChild(complatedbutton);
    //todo li ekleme
    const newtodoli = document.createElement("li");
    newtodoli.innerText = todoinput.value;
    newtodoli.classList.add("todo-item");
    tododiv.appendChild(newtodoli);
    //silme butonu
    const ancomplatedbutton = document.createElement("button");
    ancomplatedbutton.classList.add("ancomplated-btn");
    tododiv.appendChild(ancomplatedbutton);
    todolist.appendChild(tododiv)
    todoinput.value = "";
    }

    
}

function deleteCheck(a){
    const item =a.target;

    if(item.classList[0]==="ancomplated-btn"){
        const todo=item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

    //? check mark
    if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

function filterTodo(a){
    const todos=todolist.childNodes;
    todos.forEach(function(item) {
        switch(a.target.value){
            case "all":
                item.style.display="flex";
                break;
            case "completed":
                if(item.classList.contains("completed")){
                    item.style.display="flex";
                }else{
                    item.style.display="none";
                }
                break;
            case "ancomplated":
                if(!item.classList.contains("completed")){
                    item.style.display="flex";
                }else{
                    item.style.display="none";
                }
                break;
        }
    });
}

