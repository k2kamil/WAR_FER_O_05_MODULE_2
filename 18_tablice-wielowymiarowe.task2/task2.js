
function createArray () {
    let newArray =[];
    let number = 1;
    for (let i = 0; i <=2; i++){
        newArray[i] = [];
        for (let j = 0; j <=3; j++){
            newArray[i][j] = number;
            number = number + 1;
        }
    }
    return newArray;
}

console.log(createArray());


