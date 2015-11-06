// Register an Event on Window Load and it will call init function
var taskId ;
window.addEventListener("load",init);
function init(){
    // register the button click event and bind with addTask
    taskId = 0;
    document.getElementById("addtask").addEventListener("click",addTask);
    document.getElementById("savetask").addEventListener("click",saveTaskLocally);
    document.getElementById("loadTaskFromServer").addEventListener("click",makeRequest);
    loadJSON();
}

function addTask(){
    var taskName = document.getElementById("taskName");
    var taskDesc = document.getElementById("taskDesc");
    if(taskName && taskDesc) // it is not null
    {
        taskName = taskName.value;
        taskDesc = taskDesc.value;
        if(taskName && taskDesc) //it is not empty
        {
            var ul = document.getElementsByTagName("fieldset")[1].children[1];
            var li = document.createElement("li");
            taskId++;
            li.innerHTML = taskId + " "  +taskName + " "+taskDesc;
            li.addEventListener("click",toogleTask);
            ul.appendChild(li);
            // Call the Model
            taskOperations.addTask(taskId,taskName,taskDesc,'N');
        }
    }

}

function toogleTask(event){
    event.srcElement.classList.toggle("completedTask");
}

function saveTaskLocally(){
    var taskList = taskOperations.getAllTask();
    var json = JSON.stringify(taskList);
    if(localStorage){
        localStorage.taskjson = json;
        alert("Task Saved Locally....");
    }
}

// To Fetch the JSON from LocalStorage
// Convert JSON into an Array
// Traverse the Array and Dynamically Create the UL and LI
function loadJSON(){
    if(localStorage){
        if(localStorage.taskjson){
            var taskArray = JSON.parse(localStorage.taskjson);
            taskArray.forEach(function(taskObject,index){
                var ul = document.getElementsByTagName("fieldset")[1].children[1];
                var li = document.createElement("li");
                li.innerHTML=taskObject.id+ " "+taskObject.name+" "+taskObject.desc;
                li.addEventListener("click",toogleTask);
                ul.appendChild(li);
            });
            taskId = taskArray.length;
            taskOperations.taskList = taskArray;
        }
    }
}