function addTodo() {
    todoList.innerHTML += '<li><input type="checkbox">' + todoField.value;
    todoField.value = '';
}