function makeRequest(){
    // XML HttpRequest
    var xmlHttpRequest = new window.XMLHttpRequest();
    xmlHttpRequest.onreadystatechange=getReadyStateChangeHandler(xmlHttpRequest);
    xmlHttpRequest.open("GET","tasks.json",true);  // Creating a Request
    xmlHttpRequest.send(null); // Request with No Parameter
}

function getReadyStateChangeHandler(xmlHttpRequest){
    return function(){
        if(xmlHttpRequest.readyState==4) // Response Comes to the Client
        {
            if(xmlHttpRequest.status==200)  // Response OK (Success)
            {
                //console.log("Response Data is ",xmlHttpRequest.responseText);
                localStorage.taskjson=xmlHttpRequest.responseText;
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
                // Show the Notification
                document.getElementById("audioId").play();
                Notification.requestPermission(function(){
                   var n = new Notification("Task Manager Application -2015",
                       {
                           body:"Your Data is Loaded from the Server SuccessFully...",
                           icon:"images/info.png"
                       }
                   )
                    setTimeout(function(){
                        document.getElementById("audioId").pause();
                        document.getElementById("audioId").currentTime=0;
                        n.close();

                    },7000);
                });
            }
        }
    }
}
