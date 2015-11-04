/**
 * Created by arnav on 11/4/2015.
 */
function add(){
    var sum = 0;
    var arraySum = 0;
    for(var i = 0 ; i<arguments.length; i++)
    {
        var value = arguments[i];
        if(typeof arguments[i]==="string"){
            value = parseInt(value);
            value = isNaN(value)?0:value;
        }
        else
        if(typeof arguments[i]==="function"){
            value = arguments[i]();
        }
        else
        if(typeof arguments[i]==="object"){
            if(arguments[i] instanceof Array){
                value = arguments[i];
                arraySum =0;
                for(var j = 0 ; j<value.length; j++)
                {
                    arraySum = arraySum + value[j];
                }
//console.log("Sum of Array is ",arraySum);
                value = arraySum;
            }
        }
        sum = sum + value;
    }
    return sum;
}