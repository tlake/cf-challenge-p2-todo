function addNewItem(list, itemText) {
    var todoListElement = document.getElementById("todoList");
    var listItem = document.createElement("li");

    listItem.innerText = itemText;

    todoListElement.insertBefore(listItem, todoListElement.firstChild);

    listItem.onclick = deleteItem;
};



function deleteItem() {
    this.remove(); 
};



var inptNewItemText = document.getElementById("inptNewItemText");
inptNewItemText.focus();



inptNewItemText.onkeyup = function(event) {
    if (event.which == 13) {
        var itemText = inptNewItemText.value;

        if (itemText == "") {
            return false;
        }

        addNewItem(document.getElementById("todoList"), itemText);

        inptNewItemText.value = "";
        inptNewItemText.focus();
        
    };
}
