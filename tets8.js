var countSheep = function (num){
    a = ''
    for(let i = 1; i <= num; i ++){
        a += i + ' sheep...'
    }
    return a
}
console.log(countSheep(3))