function getAverage(...x){
    let result = x.reduce(function(sum, sum1){
        return sum += sum1;
    });
    return result / x.length;
}

let avg = getAverage(2, 4, 5, 6, 7, 79);
console.log(avg);