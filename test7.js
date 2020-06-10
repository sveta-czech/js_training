function fakeBin(x){
    var newStr = "";
    for(var i = 0; i < x.length; i++){
        if(Number(x[i])>=5){  //preobrazovyvaem stroku v cislo! 
            newStr += "1"
        }
        else{
            newStr += "0";
        }
    }
    return newStr
}
console.log(fakeBin('45729274658891'))
