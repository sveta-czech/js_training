function count(s) {
    if (s[0] > s[2]){return 3}
    if (s[0] == s[2]){return 1}
    if (s[0] < s[2]){return 0}
}

function p(games) {
    a = 0
    for (x of games){
        a += count(x)
    }
    return a
}
console.log(p(['1:2', '2:2', '3:0']))