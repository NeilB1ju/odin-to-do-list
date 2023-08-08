//Factory function to generate to do item objects
function itemFactory (title, description, dueDate){
    return {title , description, dueDate}
}


//Function to generate the dom element for the to do list item
function itemDom (item) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item-element');
    itemElement.innerHTML = item.title;
}