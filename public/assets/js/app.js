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
      console.log('This worked');
    };
  });