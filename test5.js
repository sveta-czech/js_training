// function rentalCarCost(d) {
//     if (d >= 7){return d*40-50} //230
//     if (d >= 3){return d*40-20}  //100
//     return d*40
//}

function rentalCarCost(d) {
    return d * 40 - ((d >= 7) ? 50: ((d > 2) ? 20 :0));
}

console.log(rentalCarCost(2))