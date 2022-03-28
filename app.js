const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");

addBtn.addEventListener('click', addBlock);

deleteBtn.addEventListener('click', deleteBlock);


function addBlock(){
    const ul = document.querySelector(".ul-list");
    let li = document.createElement('li');
    li.textContent = 'Box' + (ul.children.length + 1);
    ul.append(li);
}

function deleteBlock(){
    const ul = document.querySelector(".ul-list");
    if(ul.children.length > 0){
        ul.lastChild.remove();
    }
}