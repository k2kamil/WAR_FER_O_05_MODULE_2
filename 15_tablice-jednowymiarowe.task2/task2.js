



function multiply(array) {
    if (array.length == null){
        return null;
    }
    var sum = 1;
    for (let i=0; i < array.length; i++){
        sum = sum * array[i];
    }
    return sum
}

multiply([]);







