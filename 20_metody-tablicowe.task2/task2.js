
let sumArray = function (arr){
    let sum = arr.reduce(function(prev, curr){

        return prev += curr;
    });
    return sum;
}

console.log(sumArray([1, 2, 3, 5]));