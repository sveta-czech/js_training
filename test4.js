// function betterThanAverage(classPoints, yourPoints) {
//     var classAvg = 0;
//     for(var i = 0; i < classPoints.length; i++){
//         classAvg += classPoints[i];
//     }
//     console.log(classAvg)
//     classAvg = classAvg/classPoints.length;
//     console.log(classAvg);
//     return yourPoints > classAvg;
//
// }
// console.log(betterThanAverage([2,3], 5));
//
// a = [1,2,3]
// console.log(a.reduce((a ,b) => a + b, 0)) // 0 eto znachenie po umolchaniyu, osobenno esli massiv pustoj

function betterThanAverage(classPoints, yourPoints) {
    const classPointsSum = classPoints.reduce ((a, b) => a + b, 0);
    const classAverage = classPointsSum/classPoints.length;
    const isBetter = yourPoints > classAverage;
    console.log(isBetter)
    return isBetter;
}
console.log(betterThanAverage([2,3], 5));