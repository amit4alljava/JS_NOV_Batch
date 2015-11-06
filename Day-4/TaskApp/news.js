var news = ["Click To Save the Data in the Browser Local Storage",
    "This is Offline/Online Todo List","It will do an Ajax Calls","fskdjhfdshkfhsdk"];
var index = -1;

function flashNews(){
    if(index<news.length-1){
        index = index+1;
    }
    else
    {
        index = 0;
    }
    postMessage(news[index]); //this will post the result to the news worker and news worker will
    // display the result
    setTimeout(flashNews,2000);
}
flashNews();