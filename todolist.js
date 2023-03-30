var TodoItem = /** @class */ (function () {
    function TodoItem(description, dueDate) {
        this.description = description;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
    TodoItem.prototype.getDescription = function () {
        return this.description;
    };
    TodoItem.prototype.setDescription = function (description) {
        this.description = description;
    };
    TodoItem.prototype.getDueDate = function () {
        return this.dueDate;
    };
    TodoItem.prototype.setDueDate = function (dueDate) {
        this.dueDate = dueDate;
    };
    TodoItem.prototype.getIsComplete = function () {
        return this.isComplete;
    };
    TodoItem.prototype.setIsComplete = function (isComplete) {
        this.isComplete = isComplete;
    };
    return TodoItem;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (item) {
        this.items.push(item);
    };
    TodoList.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    TodoList.prototype.completeItem = function (item) {
        item.setIsComplete(true);
    };
    TodoList.prototype.getItems = function () {
        return this.items;
    };
    return TodoList;
}());
// Example usage:
var todoList = new TodoList();
var item1 = new TodoItem("Buy milk", new Date("2023-03-31"));
var item2 = new TodoItem("Do laundry", new Date("2023-04-01"));
todoList.addItem(item1);
todoList.addItem(item2);
console.log(todoList.getItems());
todoList.completeItem(item1);
console.log(todoList.getItems());
todoList.removeItem(item2);
console.log(todoList.getItems());
