let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {

    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "./style/light-mode.css") {
        theme.href = "./style/dark-mode.css";
    } else {
        theme.href = "./style/light-mode.css";
    }
}
window.addEventListener("load", function () {
    let button = document.querySelector("#add-todo")
    let input = document.querySelector("#todo")
    let todoList = document.querySelector("#todo-list")

    let todos = []
    
    
    if (window.localStorage.getItem("todos") != null) {
        todos = JSON.parse(window.localStorage.getItem("todos"))}

    for (let i = 0; i < todos.length; i++) {
        createTodo(todos[i])
    }

    button.addEventListener("click", function () {
        createTodo(input.value)
        todos.push(input.value)
        input.value = ""
        window.localStorage.setItem("todos", JSON.stringify(todos))

    })

    function createTodo(todo) {
        let element = document.createElement("li")
        element.innerText = todo
        todoList.appendChild(element)
        
    }
    
})
