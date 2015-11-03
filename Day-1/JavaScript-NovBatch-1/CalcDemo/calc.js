window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",doOperation);
    document.getElementById("sub").addEventListener("click",doOperation);
}

function doOperation(event){
    var result = 0;
    var buttonValue = event.srcElement.getAttribute("data-operation");
    var firstNo = document.getElementById("firstNo").value;
    var secondNo = document.getElementById("secondNo").value;

    console.log("Data Operation Value is ",buttonValue);
    var expression   = firstNo + buttonValue + secondNo;
    console.log("Expression is ",expression);
    console.log("Type of ",typeof expression);
    result = eval(expression);
   // result = calculator[buttonValue](firstNo,secondNo);  // Dynamic Calling

    /*if(buttonValue=="Add"){
        result = calculator.add(firstNo,secondNo);  // Static Calling
    }
    else
    {
        result = calculator.sub(firstNo,secondNo);
    }*/
    document.getElementsByTagName("div")[1]
        .children[0].children[0].innerHTML=result;
}

/*
var calculator={

    add: function (x,y){
    return parseInt(x)  + parseInt(y);
},
sub: function(x,y){
    return x - y;
}
}*/
