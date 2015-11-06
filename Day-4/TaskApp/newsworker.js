// Will create a BackGround Thread and this new.js will be run in the background.
var worker = new Worker("news.js");
worker.onmessage=function(event){
    // onmessage only trigger when there would be a post messsage
    document.getElementById("showMessages").innerHTML=event.data;

}
