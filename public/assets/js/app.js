angular.module("todoApp", [])
  .controller("TodoListController", function($scope) {
    var todoList = this;
    todoList.todoItems = [
      { name: "My Homework", done: true },
      { name: "My Laundry", done: false },
      { name: "One Thing", done: false },
      { name: "Another Thing", done: false }
    ]

    todoList.addTodo = function() {
      todoList.todoItems.push(
        { name: todoList.todoText, done: false }
      )
      todoList.todoText = ""
    };

    todoList.remove = function() {
      var oldTodos = todoList.todoItems;
      todoList.todoItems = [];
      angular.forEach(oldTodos, function(todo) {
        if(!todo.done) todoList.todoItems.push(todo);
      })
      todoList.todoItems
    }
  });