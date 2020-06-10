function check(a, x) {
    for (i of a){
        if (i == x){
            return true}
        }
    return false
}
console.log (check([1,2,3,4,5], 2))