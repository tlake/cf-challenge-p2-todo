// each item should look like this:
// <li><span>This is what a task will be!</span></li>


var btnNew = document.getElementById("btnAdd");

function addNewItem(list, itemText) {
    var listItem = document.createElement("li");
    listItem.innerText = itemText;

    list.appendChild(listItem);
};

var inNewTask = document.getElementById("inNewTask");
inNewTask.focus();

btnNew.onclick = function() {
    var itemText = inNewTask.value;

    if (!itemText || itemText == "") {
        return false;
    }

    addNewItem(document.getElementById("todoList"), itemText);

    inNewTask.focus();
}
