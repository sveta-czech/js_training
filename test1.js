function grow(x) {
    res = 1 //obychno 0, no pri umnozhenii budet 0
    for (let i of x) {   //esli 'of' to v i peredaetsya znachenie elementa massiva (1,2,3,4), esli 'in' to peredaetsya index elementa massiva
        res*=i
    }
    return res
}
console.log(grow([1,2,3,4]))  //esli 'in' to v console budet index etix cisel 1,2,3,4 > 0 1 2 3 , esli 'of' to > 1 2 3 4

