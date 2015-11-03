window.addEventListener("load",init);
function init(){
document.getElementById("greet").addEventListener("click",displayMessage);
}
function displayMessage(){
    var namevalue = document.getElementById("txtName").value;
    document.getElementsByTagName("div")[0].children[0].children[0].innerHTML="<b>"+namevalue+"</b>";
}