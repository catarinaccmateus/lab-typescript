// Iteration 1
// 1. Create an array of strings
var array_of_tasks = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task) {
    array_of_tasks.push(task);
    console.log("=========== NEW TASK =========== \n\n  Task " + task + " inserted in the list \n\n  Number of items: " + array_of_tasks.length);
    return array_of_tasks.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    for (var _i = 0, array_of_tasks_1 = array_of_tasks; _i < array_of_tasks_1.length; _i++) {
        var task = array_of_tasks_1[_i];
        console.log(task);
    }
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    var index = array_of_tasks.indexOf(task);
    if (index > -1) {
        array_of_tasks.splice(index, 1);
    }
    console.log("=========== NEW TASK =========== \n\n  Task " + task + " deleted from the list \n\n  Number of items: " + array_of_tasks.length);
    return array_of_tasks.length;
}
// Execution
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
