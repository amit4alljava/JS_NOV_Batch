// It is a function constructor
function Task(id , name, desc, status){
    this.id = id;
    this.name = name;
    this.desc= desc;
    this.status=status;
}

// It is a SingleTon Object and this is used for
// CRUD Operation in Task
var taskOperations={
  taskList :[],
  addTask:function(id, name , desc , status){
      // Creating a New Object of Task
      var taskObject = new Task(id , name, desc, status);
      this.taskList.push(taskObject);  // Adding a Task Object in Array
  },
  getAllTask:function(){
      return this.taskList;
  }

}
