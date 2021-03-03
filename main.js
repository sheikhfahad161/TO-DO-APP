var addNew = document.getElementById('addNew');
var dltAll = document.getElementById('delete');
var taskList = document.getElementById('taskList');
var form = document.getElementById('form');
var addTask = document.getElementById('add');
var cancle = document.getElementById('cancle');
var taskField = document.getElementById('taskField');




addNew.addEventListener("click", function() {
    taskField.value = "";
    form.style.display = "block";
});

function addNewTask(taskDiscription) {
    var taskItem = document.createElement('li');

    var taskCheck = document.createElement('input');
    taskCheck.type = 'checkbox';
    taskCheck.className = 'check'
    var chkAttr = document.createAttribute('onchange');
    chkAttr.value = "taskCompleted(this)";
    taskCheck.setAttributeNode(chkAttr);

    var dltItem = document.createElement('button');
    dltItem.appendChild(document.createTextNode('x'));
    var attrib = document.createAttribute('onclick');
    attrib.value = "dltSingle(this)";
    dltItem.setAttributeNode(attrib);

    var taskDef = document.createTextNode(taskDiscription);

    taskItem.appendChild(taskCheck);
    taskItem.appendChild(taskDef);
    taskItem.appendChild(dltItem);
    
    taskList.appendChild(taskItem);
}

addTask.addEventListener("click", function() {
    if(taskField.value !== "") {
        addNewTask(taskField.value);
        form.style.display = "none";
    }
    else {
        alert("Please Enter you task");
    }
});

cancle.addEventListener("click", function() {
    form.style.display = "none";
});

function clearAllTask() {
    taskList.innerHTML = "";
}


//delete all the task which are listed
dltAll.addEventListener("click", function() {
    if(confirm("Delete all the tasks?")) {
        clearAllTask();
    } 
});

//Single task delete function
function dltSingle(currentLi) {
    currentLi.parentNode.parentNode.removeChild(currentLi.parentNode);
}


function taskCompleted(currentNode) {
    if(currentNode.checked) {
        currentNode.parentNode.className = "taskComplt";
    }
    else {
        currentNode.parentNode.className = "";
    }
}