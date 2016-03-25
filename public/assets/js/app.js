angular.module("todoApp", [])
  .controller("TodoListController", function($scope) {
    var todoList = this;
    todoList.todoItems = [
    "My Homework",
    "My Laundry",
    "Pick up the thing",
    "Buy the other thing"
    ]
  });