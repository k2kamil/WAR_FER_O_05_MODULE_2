

function addValue (value, arr) {
    let newArray = arr.map(function(element){
        return value*element;
    });
    return newArray;
}

console.log(addValue(10, [2, 4, 6]));